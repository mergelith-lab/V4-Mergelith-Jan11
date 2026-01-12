import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Pillars from './components/Pillars.tsx';
import IntelligenceSection from './components/IntelligenceSection.tsx';
import PrivacyProtocol from './components/PrivacyProtocol.tsx';
import ContactSection from './components/ContactSection.tsx';
import Footer from './components/Footer.tsx';
import BackgroundGraphics from './components/BackgroundGraphics.tsx';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-[#c5a059]/30 selection:text-white">
      <BackgroundGraphics />
      <Navbar isScrolled={scrolled} />
      
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-48">
          <Pillars />
          <IntelligenceSection />
          <PrivacyProtocol />
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;