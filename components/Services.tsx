import React from 'react';

const ServiceBlock: React.FC<{ 
  icon: string; 
  title: string; 
  description: React.ReactNode;
  footer: string;
}> = ({ icon, title, description, footer }) => (
  <div className="flex flex-col bg-white p-10 rounded-3xl shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all border border-slate-100 group">
    <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0a192f] transition-colors duration-500">
      <i className={`fas ${icon} text-3xl text-amber-600 group-hover:text-amber-400 transition-colors`}></i>
    </div>
    <h3 className="text-2xl font-serif text-[#0a192f] mb-6 leading-snug">{title}</h3>
    <div className="text-slate-600 text-sm leading-relaxed space-y-4 flex-grow">
      {description}
    </div>
    <div className="mt-8 pt-6 border-t border-slate-50 italic text-slate-400 text-xs">
      {footer}
    </div>
    <div className="mt-6">
      <a href="https://wa.me/573217830681?text=Hola,%20deseo%20información%20sobre%20sus%20servicios%20legales." target="_blank" rel="noopener noreferrer" className="text-[#0a192f] font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
        Comunícate con nosotros <i className="fas fa-chevron-right text-xs text-amber-500"></i>
      </a>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#0a192f]">Nuestros Servicios Especializados</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto italic">Soluciones jurídicas a la medida de sus necesidades financieras y patrimoniales.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Servicio 1: Insolvencia */}
          <ServiceBlock 
            icon="fa-balance-scale" 
            title="Insolvencia de Persona Natural y Pequeños Comerciantes"
            footer="Le acompañamos en su proceso de recuperación financiera con estrategias reales."
            description={
              <>
                <p>Brindamos asesoría integral a personas naturales no comerciantes y pequeños empresarios cuyos activos no superen los 1.000 SMMLV.</p>
                <p>El régimen de insolvencia es un escudo legal que le permite reestructurar sus obligaciones o realizar una liquidación patrimonial digna y organizada, siempre bajo el amparo de la ley.</p>
                <p><strong>Impacto positivo inmediato:</strong> Al iniciar el proceso, se suspenden procesos ejecutivos, se frenan los embargos y cesa el acoso de las casas de cobranza, permitiéndole proteger su vivienda familiar y bienes vitales.</p>
                <p>Nuestro equipo realiza un diagnóstico de su situación, prepara el expediente técnico y le representa con transparencia y humanidad en cada negociación para que recupere su estabilidad emocional.</p>
              </>
            }
          />

          {/* Servicio 2: Urbanismo */}
          <ServiceBlock 
            icon="fa-drafting-compass" 
            title="Derecho Urbanístico y Gestión de Licencias"
            footer="Evite que sus proyectos de construcción se transformen en complicaciones legales."
            description={
              <>
                <p>Orientamos a propietarios, desarrolladores y constructores en la obtención de licencias de construcción, ampliación, demolición y reconocimiento de edificaciones existentes.</p>
                <p>Nos encargamos de la estructuración jurídica y técnica de sus expedientes para su radicación exitosa ante curadurías o autoridades municipales, garantizando el cumplimiento estricto del POT vigente.</p>
                <p><strong>Defensa Especializada:</strong> Representamos a ciudadanos en procesos sancionatorios por infracciones urbanísticas, evitando multas onerosas, sellamientos definitivos o demoliciones forzosas.</p>
                <p>Protegemos la inversión de su inmueble mediante una defensa técnica sólida que garantiza el debido proceso ante inspecciones de policía y entes de control.</p>
              </>
            }
          />

          {/* Servicio 3: Notaría */}
          <ServiceBlock 
            icon="fa-stamp" 
            title="Asesoría y Acompañamiento en Trámites Notariales"
            footer="Seguridad jurídica y agilidad en cada firma ante escritura pública."
            description={
              <>
                <p>Facilitamos el desarrollo de actos jurídicos solemnes como divorcios de mutuo acuerdo, sucesiones, compraventas, donaciones y constitución de hipotecas o fideicomisos civiles.</p>
                <p>Nuestro rol es asegurar que cada documento redactado sea jurídicamente blindado, refleje fielmente la voluntad de las partes y cumpla con todos los requisitos para su inscripción registral.</p>
                <p>Le brindamos compañía presencial durante el otorgamiento de la escritura, explicando detalladamente los alcances legales de cada cláusula para evitar vicios de consentimiento.</p>
                <p>Buscamos que sus trámites personales y familiares se realicen de manera fluida, sin demoras burocráticas y con el respaldo de expertos que cuidan su patrimonio.</p>
              </>
            }
          />

        </div>
      </div>
    </section>
  );
};

export default Services;