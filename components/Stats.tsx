import React from 'react';

const Stats: React.FC = () => {
  return (
    <section id="experiencia" className="bg-[#0a192f] py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
          <div className="md:col-span-1">
             <h3 className="text-amber-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">Nuestra Experiencia</h3>
             <p className="text-white text-2xl font-serif">Resultados tangibles que generan confianza.</p>
          </div>
          
          <div className="text-center md:border-l border-white/10 px-4">
            <div className="text-5xl font-serif text-white font-bold mb-2">150+</div>
            <p className="text-slate-400 text-xs uppercase tracking-widest">Clientes asesorados</p>
            <p className="text-slate-500 text-[10px] mt-1">En procesos de insolvencia y urbanismo</p>
          </div>
          
          <div className="text-center md:border-l border-white/10 px-4">
            <div className="text-5xl font-serif text-white font-bold mb-2">10</div>
            <p className="text-slate-400 text-xs uppercase tracking-widest">Años de labor</p>
            <p className="text-slate-500 text-[10px] mt-1">Al servicio de los antioqueños</p>
          </div>

          <div className="flex justify-center">
            <a 
              href="https://wa.me/573217830681?text=Hola,%20deseo%20agendar%20una%20cita%20con%20un%20asesor%20legal."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all whitespace-nowrap shadow-lg hover:shadow-amber-500/20"
            >
              Agenda tu cita ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;