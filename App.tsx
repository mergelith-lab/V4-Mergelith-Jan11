import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ContactSection from './components/ContactSection.tsx';
import Footer from './components/Footer.tsx';
import BackgroundGraphics from './components/BackgroundGraphics.tsx';
import ChatBot from './components/ChatBot.tsx';

import IndustriesWeOptimize from './components/IndustriesWeOptimize.tsx';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-navy/10 selection:text-navy bg-pearl">
      <BackgroundGraphics />
      <Navbar isScrolled={isScrolled} />
      
      <main>
        {/* The Hero now handles primary navigation via its tabs */}
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-56">
          <IndustriesWeOptimize />
          <ContactSection />
        </div>
      </main>

      <ChatBot />
      <Footer />
    </div>
  );
};

export default App;