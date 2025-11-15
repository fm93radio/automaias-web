import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative py-24 md:py-32 bg-slate-900 text-center text-white overflow-hidden">
       <div className="absolute inset-0 bg-grid-slate-800/[0.2] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-6 relative">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
          Lleva tu Negocio de Tacuarembó al Siguiente Nivel
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Asesoría especializada en automatización, gestión de almacenes e inteligencia empresarial para PYMES locales.
        </p>
        <a
          href="#contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105"
        >
          Solicita tu Diagnóstico Gratuito
        </a>
      </div>
    </section>
  );
};

export default Hero;
