import React from 'react';
import { BoxIcon, DesktopComputerIcon, CogIcon, BrainCircuitIcon } from './icons';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 flex flex-col items-start border border-slate-700 hover:border-orange-500/50 hover:bg-slate-700/50 transition-all duration-300 transform hover:-translate-y-1">
      <div className="bg-slate-900 p-3 rounded-md mb-4 text-orange-500">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <BoxIcon />,
      title: 'Gestión Inteligente de Almacenes',
      description: 'Controla tu inventario, automatiza el stock mínimo y localiza productos al instante. Reduce errores y ahorra horas de trabajo manual.'
    },
    {
      icon: <DesktopComputerIcon />,
      title: 'Transformación Digital para Negocios',
      description: 'Optimizamos tu presencia en Google, creamos tu página web y te ayudamos a atraer más clientes que buscan tus servicios.'
    },
    {
      icon: <CogIcon />,
      title: 'Automatización de Procesos',
      description: 'Deja de perder tiempo en tareas repetitivas. Automatizamos el envío de emails, la generación de reportes y los flujos de trabajo diarios.'
    },
    {
      icon: <BrainCircuitIcon />,
      title: 'Asesoría en IA y Predicción',
      description: 'Utiliza la inteligencia artificial para saber cuándo comprar stock y qué productos se venderán más. Toma decisiones basadas en datos reales.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Servicios Especializados</h2>
          <p className="text-lg text-gray-400 mt-2">Soluciones prácticas para los problemas de tu negocio.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;