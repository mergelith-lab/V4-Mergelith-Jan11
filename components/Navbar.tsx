import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

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
    { label: 'Quantum AI Tools', id: 'pillars' },
    { label: 'Industries We Optimize', id: 'industries' },
    { label: 'Request a Demo', id: 'contact' },
    { label: 'Meet The Team', id: 'about' },
    { label: 'FAQ', id: 'faq-section' },
    { label: 'Privacy Policy', id: 'privacy-protocol' },
    { label: 'Terms and Conditions', id: 'footer' }
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
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black text-navy/40 hover:text-gold cursor-pointer transition-colors">FR</span>
              <span className="text-navy/10">|</span>
              <span className="text-[10px] font-black text-navy cursor-default">EN</span>
            </div>
            
            <div className="flex items-center gap-4 text-navy/40">
              <Facebook size={14} className="hover:text-gold cursor-pointer transition-colors" />
              <Instagram size={14} className="hover:text-gold cursor-pointer transition-colors" />
              <Linkedin size={14} className="hover:text-gold cursor-pointer transition-colors" />
              <Twitter size={14} className="hover:text-gold cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;