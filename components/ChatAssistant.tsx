
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.text }] })), { role: 'user', parts: [{ text: userMsg }] }],
        config: {
          systemInstruction: "Eres Amelia, asistente de 'Ingenio Servicios Legales'. Eres una mujer abogada de 28 años. Responde en español neutro, profesional y cercano sobre insolvencia, urbanismo y notarías. Invita a contactar al 321 783 0681."
        }
      });
      setMessages(prev => [...prev, { role: 'model', text: response.text || "Lo siento, tuve un problema procesando tu mensaje." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Error de conexión." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[110]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#0a192f] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-slate-800 transition-all border-4 border-white"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-alt'} text-xl`}></i>
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col h-[500px] animate-fade-in-up">
          <div className="bg-[#0a192f] p-5 text-white flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center overflow-hidden border-2 border-white/20">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" className="object-cover w-full h-full" alt="Amelia" />
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-widest uppercase">Amelia</h4>
              <p className="text-[10px] text-slate-400 font-medium">Asistente Legal Digital</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-grow p-5 overflow-y-auto space-y-4 bg-slate-50">
            {messages.length === 0 && (
              <div className="text-center py-10 px-4 space-y-4">
                <div className="w-16 h-16 bg-white rounded-full shadow-inner mx-auto flex items-center justify-center text-amber-500 text-2xl">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed italic">"Hola, soy Amelia. ¿En qué puedo orientarle hoy sobre sus procesos legales o trámites inmobiliarios?"</p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${msg.role === 'user' ? 'bg-[#0a192f] text-white rounded-br-none' : 'bg-white text-slate-700 shadow-sm border border-slate-200 rounded-bl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 text-[10px] text-slate-400 font-bold italic animate-pulse">
                  Amelia está redactando...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Escribe tu consulta..."
              className="flex-grow bg-slate-50 rounded-xl px-4 py-3 outline-none text-xs focus:ring-1 focus:ring-amber-500 transition-all border border-slate-100"
            />
            <button 
              onClick={sendMessage}
              className="bg-amber-600 text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-amber-700 transition-all shadow-md"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
          <div className="bg-white px-4 pb-3 text-[8px] text-center text-slate-400 font-bold uppercase tracking-widest">
            Impulsado por Gemini 3 Flash
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;
