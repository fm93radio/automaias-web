import React from 'react';
import { WhatsAppIcon } from './icons';

const WhatsAppButton: React.FC = () => {
  // Replace with your actual WhatsApp number
  const phoneNumber = "59892601114";
  const message = "Hola, me gustaría solicitar mi diagnóstico gratuito.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
};

export default WhatsAppButton;
