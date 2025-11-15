import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="container mx-auto px-6 py-8 text-center text-gray-400">
        <h3 className="text-lg font-bold text-white mb-2">Automaias</h3>
        <p>Llámanos al +598 92 601 114</p>
        <div className="mt-4 pt-4 border-t border-slate-800">
            <p>&copy; {new Date().getFullYear()} Automaias. Todos los derechos reservados.</p>
            <p className="mt-2 text-sm">Tecnología accesible para negocios locales.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
