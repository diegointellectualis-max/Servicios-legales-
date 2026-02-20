
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background con Filtro Azul Oscuro */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1600)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="absolute inset-0 bg-[#0a192f]/85 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 py-20">
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            <i className="fas fa-shield-alt"></i>
            Respaldo Legal en Antioquia y Valle de Aburrá
          </div>
          
          <h1 className="text-4xl md:text-7xl font-serif text-white leading-[1.1]">
            Encuentre una <span className="text-amber-500 italic">salida legal</span> a sus deudas con soluciones reales.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
            Especialistas en insolvencia de persona natural, derecho urbanístico y trámites notariales. Protegemos su patrimonio con honestidad y rigor técnico.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <a 
              href="#servicios" 
              className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-xl text-center"
            >
              Nuestros Servicios
            </a>
            <a 
              href="#contacto" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all border border-white/20 text-center"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </div>
      
      {/* Decoración Scroll Down */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white/30 text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;
