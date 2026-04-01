import React from 'react';
import { Linkedin } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'The Problem', id: 'problem' },
    { label: 'The Solution', id: 'solution' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Systems', id: 'what-we-install' },
    { label: 'AEO', id: 'aeo' },
    { label: 'Industries', id: 'industries' },
    { label: 'Intelligence', id: 'blog' },
    { label: 'Founder', id: 'about' },
    { label: 'FAQ', id: 'faq' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-pearl/95 backdrop-blur-md border-b border-navy/10 py-3 shadow-sm' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-[1800px] mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-9 h-9 bg-navy flex items-center justify-center rounded-sm shadow-md">
            <span className="text-pearl font-cinzel font-bold text-lg">M</span>
          </div>
          <div className="hidden xl:block">
            <h1 className="font-cinzel text-base tracking-[0.2em] font-bold text-navy leading-none">MERGELITH</h1>
            <p className="text-[9px] tracking-[0.3em] text-gold uppercase font-black">Growth Partners</p>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <button 
                key={idx}
                onClick={() => scrollTo(link.id)}
                className="text-[9px] uppercase tracking-widest text-navy/60 hover:text-gold transition-colors font-black bg-transparent border-none cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-6 border-l border-navy/10 pl-8">
            <a 
              href="https://www.linkedin.com/in/sasha-g-aleksic-354677154/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy/40 hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://api.leadconnectorhq.com/widget/bookings/mergelith-calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-2.5 text-[9px] tracking-[0.2em] whitespace-nowrap"
            >
              BOOK A CALL
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;