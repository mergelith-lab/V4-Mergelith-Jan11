import React from 'react';
import Hero from './components/Hero.tsx';
import Pillars from './components/Pillars.tsx';
import IntelligenceSection from './components/IntelligenceSection.tsx';
import AEODiscovery from './components/AEODiscovery.tsx';
import WhyMergelith from './components/WhyMergelith.tsx';
import ROICalculator from './components/ROICalculator.tsx';
import PrivacyProtocol from './components/PrivacyProtocol.tsx';
import AboutSection from './components/AboutSection.tsx';
import ContactSection from './components/ContactSection.tsx';
import Footer from './components/Footer.tsx';
import BackgroundGraphics from './components/BackgroundGraphics.tsx';
import ChatBot from './components/ChatBot.tsx';
import EngineOptimizations from './components/EngineOptimizations.tsx';
import FAQSection from './components/FAQSection.tsx';
import IndustrySolutions from './components/IndustrySolutions.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-[#2F4F68]/10 selection:text-[#2F4F68] bg-[#F4F3EF]">
      <BackgroundGraphics />
      
      <main>
        {/* The Hero now handles primary navigation via its tabs */}
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-56">
          <WhyMergelith />
          <IndustrySolutions />
          <Pillars />
          <AEODiscovery />
          <EngineOptimizations />
          <IntelligenceSection />
          <ROICalculator />
          <FAQSection />
          <PrivacyProtocol />
          <AboutSection />
          <ContactSection />
        </div>
      </main>

      <ChatBot />
      <Footer />
    </div>
  );
};

export default App;