import React from 'react';

const MissionVision: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0a192f] tracking-widest font-bold">JUSTICIA - EFICIENCIA - CALIDAD</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Misión */}
          <div className="space-y-6 bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center text-white">
                <i className="fas fa-bullseye text-xl"></i>
              </div>
              <h3 className="text-2xl font-serif text-[#0a192f] font-bold">Misión</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              "Brindar asesoría jurídica y representación legal con altos estándares de calidad, ética y compromiso social, enfocándonos en ofrecer soluciones claras, eficientes y accesibles a personas y entidades que requieren acompañamiento en trámites de insolvencia, asuntos urbanísticos y procesos notariales. En Ingenio Servicios y Suministros S.A.S., trabajamos para proteger los derechos, el patrimonio y la tranquilidad de nuestros clientes, combinando conocimiento técnico y cercanía humana."
            </p>
          </div>

          {/* Visión */}
          <div className="space-y-6 bg-[#0a192f] p-10 rounded-3xl shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-[#0a192f]">
                <i className="fas fa-eye text-xl"></i>
              </div>
              <h3 className="text-2xl font-serif text-white font-bold">Visión</h3>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base italic">
              "En Ingenio Servicios y Suministros S.A.S. aspiramos a consolidarnos, en los próximos cinco años, como una firma jurídica de referencia en el departamento de Antioquia, con presencia estable en diferentes municipios y una oferta de servicios accesible, confiable y orientada a las necesidades reales de las personas. Queremos ser reconocidos por nuestra cercanía, eficiencia y capacidad para brindar soluciones jurídicas efectivas a personas naturales y pequeños empresarios en momentos decisivos de su vida financiera, patrimonial o familiar."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;