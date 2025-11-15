import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Enviando...');

    try {
      const response = await fetch('https://formspree.io/f/xvgdkneg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Hubo un problema al enviar el formulario.');
      }
    } catch (error) {
      setStatus('Hubo un error. Por favor, intenta de nuevo o contáctanos por WhatsApp.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Solicita tu Diagnóstico Gratuito</h2>
          <p className="text-lg text-gray-400 mt-2">Hablemos de tu negocio. Sin costo ni compromiso.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-lg border border-slate-700">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-700/50 text-white p-3 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-700/50 text-white p-3 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">Cuéntanos sobre tu negocio</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-700/50 text-white p-3 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105 w-full md:w-auto disabled:bg-slate-600 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
              </button>
            </div>
            {status && (
              <p className={`text-center mt-4 ${status.includes('Hubo un error') ? 'text-red-400' : 'text-green-400'}`}>{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;