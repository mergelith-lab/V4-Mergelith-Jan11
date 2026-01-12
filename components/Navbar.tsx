
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#050a14]/90 backdrop-blur-md border-b border-[#c5a059]/20 py-4' 
        : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#c5a059] flex items-center justify-center rounded-sm">
            <span className="text-[#050a14] font-cinzel font-bold text-xl">M</span>
          </div>
          <div>
            <h1 className="font-cinzel text-lg tracking-[0.2em] font-bold text-white leading-none">MERGELITH</h1>
            <p className="text-[10px] tracking-[0.3em] text-[#c5a059] uppercase font-medium">Growth Partners</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-12">
          <a href="#pillars" className="text-xs uppercase tracking-widest text-[#e2e8f0] hover:text-[#c5a059] transition-colors">Solutions</a>
          <a href="#intelligence" className="text-xs uppercase tracking-widest text-[#e2e8f0] hover:text-[#c5a059] transition-colors">Intelligence</a>
          <button 
            onClick={scrollToContact}
            className="px-6 py-3 bg-[#0f172a] border border-[#c5a059]/40 text-[#c5a059] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#c5a059] hover:text-[#050a14] transition-all duration-300 rounded-sm"
          >
            Inquire Directly
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
