import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-white rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100">
          
          {/* Info Side */}
          <div className="lg:w-1/3 bg-[#0a192f] p-12 text-white flex flex-col">
            <h3 className="text-3xl font-serif mb-6 text-amber-500 font-bold">Contáctenos</h3>
            <p className="text-slate-400 mb-12 text-sm leading-relaxed italic border-l-2 border-amber-500 pl-4">
              "Cuéntanos tu caso y uno de nuestros expertos asesores se pondrá en contacto contigo a la mayor brevedad para brindarte orientación personalizada."
            </p>
            
            <div className="space-y-8 flex-grow">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-amber-500 shadow-inner">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">Oficina Principal</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">Calle 6 sur # 79 150 int 1413, Rodeo Alto, Medellín.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-amber-500 shadow-inner">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">Atención Directa</h4>
                  <a href="https://wa.me/573217830681" className="text-xs text-slate-400 leading-relaxed mt-1 hover:text-green-400 transition-colors">+57 321 783 0681</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-amber-500 shadow-inner">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">Correo Electrónico</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">servicioalcliente@ingenioservicios.com.co</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">
              Ingenio Servicios y Suministros S.A.S.
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Nombre o Razón Social</label>
                <input type="text" className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-amber-500 outline-none p-3 text-sm transition-all rounded-t-lg" placeholder="Juan Pérez" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Correo Electrónico</label>
                <input type="email" className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-amber-500 outline-none p-3 text-sm transition-all rounded-t-lg" placeholder="juan@ejemplo.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Teléfono Móvil</label>
                <input type="tel" className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-amber-500 outline-none p-3 text-sm transition-all rounded-t-lg" placeholder="+57 300 000 0000" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Asunto / Dirección</label>
                <input type="text" className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-amber-500 outline-none p-3 text-sm transition-all rounded-t-lg" placeholder="Medellín - Barrio" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Descripción del Caso</label>
                <textarea className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-amber-500 outline-none p-3 text-sm h-32 transition-all resize-none rounded-t-lg" placeholder="Escriba aquí los detalles de su consulta legal..."></textarea>
              </div>

              <div className="md:col-span-2 flex flex-col sm:flex-row justify-between items-center gap-6 mt-4">
                <div className="flex items-center gap-3 text-slate-400 text-[10px]">
                  <i className="fas fa-shield-alt text-green-600"></i>
                  <span>Protegido por reCAPTCHA empresarial. Sus datos están seguros.</span>
                </div>
                <button className="w-full sm:w-auto bg-[#0a192f] hover:bg-amber-600 text-white font-bold px-12 py-4 rounded-xl transition-all shadow-xl uppercase tracking-widest text-xs transform hover:-translate-y-1 active:translate-y-0">
                  Enviar Consulta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;