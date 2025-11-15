import React from 'react';
import { CheckIcon } from './icons';

const WhyUsSection: React.FC = () => {
  const points = [
    { title: "Enfoque Estratégico", description: "Analizamos tu negocio para ofrecerte soluciones a medida que generan un impacto real." },
    { title: "Especialistas en PYMES", description: "No aplicamos soluciones corporativas genéricas. Creamos tecnología accesible y escalable para tu negocio." },
    { title: "Resultados Medibles", description: "Nos enfocamos en el retorno de la inversión, con clientes que ven resultados tangibles en meses." },
    { title: "Soporte y Capacitación", description: "Te acompañamos en cada paso. Te capacitamos y damos soporte continuo para asegurar tu éxito a largo plazo." }
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">¿Por Qué Elegirnos?</h2>
          <p className="text-lg text-gray-400 mt-2">Tu socio tecnológico para el crecimiento.</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-green-500/20 text-green-400 rounded-full p-2">
                <CheckIcon />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{point.title}</h3>
                <p className="text-gray-400 mt-1">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;