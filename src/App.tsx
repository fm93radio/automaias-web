import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PortfolioSection from './components/PortfolioSection';
import WhyUsSection from './components/WhyUsSection';
import SkillsSection from './components/SkillsSection';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-gray-200 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <SkillsSection />
        <WhyUsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
