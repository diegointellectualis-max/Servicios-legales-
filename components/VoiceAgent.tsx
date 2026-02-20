
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { GoogleGenAI, Modality, LiveServerMessage } from '@google/genai';

// Implement decode/encode locally as required by guidelines
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

const VoiceAgent: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [showConsent, setShowConsent] = useState(false);
  
  const audioContextInRef = useRef<AudioContext | null>(null);
  const audioContextOutRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const activeSourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const sessionPromiseRef = useRef<any>(null);

  const stopCall = useCallback(() => {
    setIsActive(false);
    setIsConnecting(false);
    
    activeSourcesRef.current.forEach(source => source.stop());
    activeSourcesRef.current.clear();
    
    if (audioContextInRef.current) audioContextInRef.current.close();
    if (audioContextOutRef.current) audioContextOutRef.current.close();
    
    audioContextInRef.current = null;
    audioContextOutRef.current = null;
  }, []);

  const initiateCallSequence = () => {
    setShowConsent(true);
  };

  const startCall = async () => {
    setShowConsent(false);
    if (!process.env.API_KEY) {
      alert("Error: No se encontró la API KEY.");
      return;
    }

    try {
      setIsConnecting(true);
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      audioContextInRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      audioContextOutRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      gainNodeRef.current = audioContextOutRef.current.createGain();
      gainNodeRef.current.connect(audioContextOutRef.current.destination);

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
          },
          systemInstruction: `Eres Amelia, una abogada de 28 años de "Ingenio Servicios Legales". 
          Tu tono es profesional, amigable, cercano y con acento neutro en español. 
          Preséntate siempre al inicio: "Hola, soy Amelia, asistente virtual de Ingenio Servicios Legales. ¿En qué puedo ayudarte hoy?".
          Ayudas con dudas sobre insolvencia, urbanismo y notarías. 
          Pide permiso antes de recopilar datos sensibles. 
          Si preguntan algo complejo, invítales a contactar al WhatsApp 321 783 0681.`
        },
        callbacks: {
          onopen: () => {
            setIsActive(true);
            setIsConnecting(false);
            const source = audioContextInRef.current!.createMediaStreamSource(stream);
            const scriptProcessor = audioContextInRef.current!.createScriptProcessor(4096, 1, 1);
            scriptProcessor.onaudioprocess = (e) => {
              if (isMuted) return;
              const inputData = e.inputBuffer.getChannelData(0);
              const l = inputData.length;
              const int16 = new Int16Array(l);
              for (let i = 0; i < l; i++) int16[i] = inputData[i] * 32768;
              const pcmBlob = { data: encode(new Uint8Array(int16.buffer)), mimeType: 'audio/pcm;rate=16000' };
              sessionPromise.then(session => session.sendRealtimeInput({ media: pcmBlob }));
            };
            source.connect(scriptProcessor);
            scriptProcessor.connect(audioContextInRef.current!.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio && audioContextOutRef.current) {
              const audioBuffer = await decodeAudioData(decode(base64Audio), audioContextOutRef.current, 24000, 1);
              const source = audioContextOutRef.current.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(gainNodeRef.current!);
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, audioContextOutRef.current.currentTime);
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
              activeSourcesRef.current.add(source);
              source.onended = () => activeSourcesRef.current.delete(source);
            }
          },
          onerror: () => stopCall(),
          onclose: () => stopCall()
        }
      });
      sessionPromiseRef.current = sessionPromise;
    } catch (error) {
      console.error(error);
      setIsConnecting(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-24 z-[110]">
      {/* Botón Flotante Dorado */}
      {!isActive && !isConnecting && !showConsent && (
        <button 
          onClick={initiateCallSequence}
          className="w-16 h-16 bg-[#d4af37] text-white rounded-full shadow-[0_10px_30px_-5px_rgba(212,175,55,0.6)] flex items-center justify-center hover:scale-110 transition-all border-4 border-white animate-bounce group"
          title="Llamar a Amelia"
        >
          <i className="fas fa-phone text-2xl"></i>
        </button>
      )}

      {/* Modal de Consentimiento */}
      {showConsent && (
        <div className="absolute bottom-0 right-0 w-[300px] bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 animate-fade-in">
          <h4 className="font-bold text-[#0a192f] mb-2">Llamar a Amelia</h4>
          <p className="text-[10px] text-slate-500 leading-relaxed mb-4">
            Al iniciar, aceptas el tratamiento de tus datos personales conforme a nuestra política de privacidad. Esta llamada es impulsada por Gemini Live.
          </p>
          <div className="flex gap-2">
            <button onClick={startCall} className="flex-grow bg-green-600 text-white py-2 rounded-lg font-bold text-xs">Aceptar e Iniciar</button>
            <button onClick={() => setShowConsent(false)} className="px-4 py-2 text-slate-400 text-xs">Cerrar</button>
          </div>
        </div>
      )}

      {/* Interfaz de Llamada Activa */}
      {isConnecting && (
        <div className="bg-white p-4 rounded-full shadow-2xl border border-amber-500 flex items-center gap-3 pr-6">
          <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-slate-700 font-bold text-xs uppercase tracking-widest">Conectando...</span>
        </div>
      )}

      {isActive && (
        <div className="bg-[#0a192f] p-6 rounded-[32px] shadow-2xl border-2 border-[#d4af37] animate-fade-in flex flex-col items-center gap-4 min-w-[260px]">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full border-4 border-[#d4af37]/30 p-1 mb-2">
               <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" className="w-full h-full rounded-full object-cover" alt="Amelia Agent" />
            </div>
            <h4 className="font-bold text-white tracking-widest text-sm uppercase">Amelia</h4>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] text-slate-400">En llamada activa</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isMuted ? 'bg-red-500/20 text-red-500 border border-red-500/50' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              <i className={`fas ${isMuted ? 'fa-microphone-slash' : 'fa-microphone'}`}></i>
            </button>
            <button 
              onClick={stopCall}
              className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-all shadow-lg"
            >
              <i className="fas fa-phone-slash"></i>
            </button>
          </div>
          <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Gemini Live Powered</p>
        </div>
      )}
    </div>
  );
};

export default VoiceAgent;
