import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import BackgroundGraphics from './components/BackgroundGraphics.tsx';

// Pages
import Home from './pages/Home.tsx';
import HowItWorksPage from './pages/HowItWorks.tsx';
import Pricing from './pages/Pricing.tsx';
import Services from './pages/Services.tsx';
import LandingPage from './pages/Landing.tsx';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen relative selection:bg-navy/10 selection:text-navy bg-pearl">
        <BackgroundGraphics />
        <Navbar isScrolled={isScrolled} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/get-started" element={<LandingPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;