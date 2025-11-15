import React from 'react';
import { RadioIcon, CheckIcon, LogoIcon } from './icons';

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-900 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Nuestros Proyectos Recientes</h2>
          <p className="text-lg text-gray-400 mt-2">Ejemplos de nuestro trabajo.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          
          {/* Project 1: FM Radio */}
          <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 transition-all duration-300 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 flex flex-col">
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center mb-4">
                 <div className="bg-slate-900 p-3 rounded-md mr-4 text-orange-500">
                    <RadioIcon />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">App Web para FM 93 Radio</h3>
                    <p className="text-orange-400">Desarrollo Web y Streaming</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Desarrollamos una aplicación web moderna y ligera para una radio local, permitiendo a los oyentes sintonizar la emisora en vivo desde cualquier dispositivo.
              </p>
              <h4 className="font-semibold text-white mb-3">Características Principales:</h4>
              <ul className="space-y-2 mb-8 text-gray-400">
                <li className="flex items-start"><CheckIcon /><span className="ml-3">Streaming de audio en tiempo real y alta fidelidad.</span></li>
                <li className="flex items-start"><CheckIcon /><span className="ml-3">Diseño completamente responsive.</span></li>
                <li className="flex items-start"><CheckIcon /><span className="ml-3">Interfaz de usuario minimalista y de acceso instantáneo.</span></li>
              </ul>
              <div className="mt-auto pt-4 flex items-center justify-between flex-wrap gap-4">
                <a
                  href="https://fm93-radio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105"
                >
                  Visitar Sitio Web
                </a>
                 <a href="#" className="flex items-center text-sm text-gray-400 hover:text-orange-500 transition-colors duration-300 group">
                    <LogoIcon className="w-4 h-4 mr-2 text-gray-500 group-hover:text-orange-500 transition-colors" />
                    <span>Un proyecto de <strong>Automaias</strong></span>
                  </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;