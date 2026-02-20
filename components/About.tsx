
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" alt="Consultoría Legal" className="w-full h-auto" />
            </div>
            {/* Background elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#0a192f]/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-[#0a192f]">Experiencia técnica con rostro humano.</h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                <strong>Ingenio Servicios y Suministros S.A.S.</strong> se consolida como una firma líder en el acompañamiento jurídico especializado, enfocada en brindar soluciones reales a quienes enfrentan crisis financieras o retos urbanísticos.
              </p>
              <p>
                Nuestra filosofía se basa en la transparencia, el rigor profesional y la ética innegociable. No solo entregamos conceptos legales; diseñamos caminos para que las personas naturales y pequeños comerciantes recuperen su tranquilidad y protejan lo que con tanto esfuerzo han construido.
              </p>
              <p>
                Combinamos años de práctica en el sector público y privado con una atención personalizada que nos permite entender el trasfondo familiar y social de cada proceso legal que lideramos.
              </p>
            </div>

            <div className="flex items-center gap-4 py-4">
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                <i className="fas fa-handshake text-2xl text-amber-600"></i>
                <div>
                  <h4 className="font-bold text-[#0a192f]">Compromiso Social</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-tighter">Valores fundamentales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
