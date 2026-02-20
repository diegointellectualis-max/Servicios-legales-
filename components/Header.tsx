import React from 'react';

const Header: React.FC = () => {
  const whatsappUrl = "https://wa.me/573217830681?text=Hola,%20deseo%20agendar%20una%20cita%20con%20un%20asesor%20legal.";

  return (
    <header className="w-full z-50 shadow-md sticky top-0 bg-white">
      {/* Top Bar - Información de contacto rápido */}
      <div className="bg-[#0a192f] text-white text-[11px] md:text-sm py-2 px-4 md:px-12 flex flex-wrap justify-between items-center border-b border-slate-700">
        <div className="flex items-center gap-6 flex-wrap">
          <span className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-amber-500"></i>
            Calle 6 sur # 79 150 int 1413, Rodeo Alto, Medellín
          </span>
          <span className="hidden lg:flex items-center gap-2">
            <i className="fas fa-envelope text-amber-500"></i>
            servicioalcliente@ingenioservicios.com.co
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400 transition-colors">
            <i className="fab fa-whatsapp text-green-500 text-lg"></i>
            <span className="font-semibold">321 783 0681</span>
          </a>
        </div>
      </div>

      {/* Main Navigation - Menú con anclas */}
      <nav className="bg-white py-4 px-4 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#0a192f] tracking-tighter leading-none">INGENIO</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-medium">Servicios Legales S.A.S.</span>
          </div>
        </div>
        
        <ul className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-[#0a192f]">
          <li><a href="#inicio" className="hover:text-amber-600 transition-colors">Inicio</a></li>
          <li><a href="#nosotros" className="hover:text-amber-600 transition-colors">Nosotros</a></li>
          <li><a href="#servicios" className="hover:text-amber-600 transition-colors">Servicios</a></li>
          <li><a href="#experiencia" className="hover:text-amber-600 transition-colors">Experiencia</a></li>
          <li><a href="#noticias" className="hover:text-amber-600 transition-colors">Noticias</a></li>
          <li><a href="#contacto" className="hover:text-amber-600 transition-colors">Contacto</a></li>
        </ul>

        <a 
          href={whatsappUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden sm:block bg-[#0a192f] hover:bg-[#1a2d4d] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg transform active:scale-95 text-center"
        >
          Solicitar Asesoría
        </a>

        <div className="lg:hidden text-[#0a192f]">
          <i className="fas fa-bars text-xl"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;