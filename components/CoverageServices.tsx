
import React, { useRef } from 'react';

const CoverageCard: React.FC<{ 
  icon: string; 
  title: string; 
  description: string; 
  anchor: string; 
}> = ({ icon, title, description, anchor }) => (
  <div className="min-w-[300px] md:min-w-[380px] bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group h-full">
    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0a192f] transition-colors duration-500">
      <i className={`fas ${icon} text-2xl text-amber-600 group-hover:text-amber-400 transition-colors`}></i>
    </div>
    <h4 className="text-lg font-serif text-[#0a192f] font-bold mb-4 leading-snug h-12 flex items-center">
      {title}
    </h4>
    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
      {description}
    </p>
    <a 
      href={`#${anchor}`} 
      className="inline-flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all"
    >
      Ver más <i className="fas fa-arrow-right"></i>
    </a>
  </div>
);

const CoverageServices: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    const { clientX, currentTarget } = e;
    const { left, width } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const walk = (x / width - 0.5) * 40; // Ajuste suave de desplazamiento
    scrollRef.current.scrollLeft += walk;
  };

  return (
    <section className="py-16 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-[#0a192f] mb-3">
            Brindamos cobertura de nuestros servicios en el Valle de Aburrá y el oriente antioqueño
          </h2>
          <p className="text-amber-600 font-bold uppercase tracking-widest text-xs">
            Nos caracteriza el buen servicio y el acompañamiento en cada proceso
          </p>
        </div>

        {/* Contenedor Interactivo con Scroll Horizontal */}
        <div 
          className="relative group cursor-grab active:cursor-grabbing"
          onMouseMove={handleMouseMove}
        >
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="snap-center">
              <CoverageCard 
                icon="fa-balance-scale"
                title="Insolvencia de persona natural no comerciante y pequeños comerciantes"
                description="A través del régimen de insolvencia, estas personas pueden reorganizar sus deudas o liquidar su patrimonio de manera ordenada."
                anchor="insolvencia"
              />
            </div>
            <div className="snap-center">
              <CoverageCard 
                icon="fa-city"
                title="Asesoría en licencias y representación en procesos urbanísticos"
                description="Incluye la estructuración del expediente técnico-jurídico y la radicación ante curadurías urbanas para evitar sanciones."
                anchor="urbanistico"
              />
            </div>
            <div className="snap-center">
              <CoverageCard 
                icon="fa-file-signature"
                title="Asesoría y acompañamiento en trámites notariales"
                description="Nos aseguramos de que las declaraciones reflejen la voluntad real de las partes en cada escritura pública."
                anchor="notaria"
              />
            </div>
          </div>

          {/* Indicadores de Scroll lateral (opcionales visualmente) */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
            <button onClick={() => scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#0a192f] hover:bg-[#0a192f] hover:text-white transition-all">
              <i className="fas fa-chevron-left"></i>
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
            <button onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#0a192f] hover:bg-[#0a192f] hover:text-white transition-all">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default CoverageServices;
