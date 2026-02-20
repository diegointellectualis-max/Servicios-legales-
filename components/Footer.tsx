
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050c18] text-slate-400 py-16 px-6 md:px-12 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="text-2xl font-bold text-white">
              <span className="text-amber-500">INGENIO</span> Servicios Legales
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Especialistas en la protección de su patrimonio y la gestión de sus proyectos inmobiliarios en todo Antioquia.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Nuestros Servicios</h4>
            <ul className="text-sm space-y-2">
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Insolvencia de Personas</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Derecho Urbanístico</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Trámites Notariales</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Políticas de Privacidad</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Canal Oficial</h4>
            <a href="https://wa.me/573217830681" className="flex items-center gap-3 text-white font-bold hover:text-green-500 transition-colors">
               <i className="fab fa-whatsapp text-2xl"></i>
               321 783 0681
            </a>
            <p className="text-[10px] text-slate-600 uppercase mt-4">Atención de Lunes a Viernes</p>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-semibold">
          <p>© Ingenio Servicios Legales 2026. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Solución digital diseñada por</span>
            <span className="text-amber-500 underline decoration-amber-500/30">SensatoWeb</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
