import React from 'react';

const NewsCard: React.FC<{ date: string; title: string; excerpt: string }> = ({ date, title, excerpt }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
    <div className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-3">{date}</div>
    <h4 className="text-[#0a192f] font-serif text-lg font-bold mb-3 group-hover:text-amber-600 transition-colors">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed mb-4">{excerpt}</p>
    <button className="text-[#0a192f] text-xs font-bold uppercase tracking-wider flex items-center gap-2">
      Leer artículo <i className="fas fa-arrow-right text-[10px]"></i>
    </button>
  </div>
);

const News: React.FC = () => {
  return (
    <section id="noticias" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-serif text-[#0a192f]">Actualidad Jurídica</h2>
            <p className="text-slate-500 mt-4">Manténgase informado sobre las últimas novedades en insolvencia, normatividad urbanística y trámites legales en Colombia.</p>
          </div>
          <button className="bg-[#0a192f] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">
            Ver todas las noticias
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <NewsCard 
            date="15 Mayo, 2026"
            title="Novedades en el Régimen de Insolvencia"
            excerpt="Análisis de las recientes actualizaciones legales para personas naturales no comerciantes en crisis financiera."
          />
          <NewsCard 
            date="02 Mayo, 2026"
            title="Guía de Licencias Urbanísticas en Medellín"
            excerpt="Todo lo que necesita saber para estructurar su expediente técnico-jurídico ante la curaduría urbana."
          />
          <NewsCard 
            date="20 Abril, 2026"
            title="Trámites Notariales Digitales"
            excerpt="Cómo la digitalización está agilizando las escrituras públicas y actos solemnes en las notarías del país."
          />
        </div>
      </div>
    </section>
  );
};

export default News;