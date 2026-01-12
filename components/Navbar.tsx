import React from 'react';

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#050a14]/90 backdrop-blur-md border-b border-[#c5a059]/20 py-4' 
        : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-[#c5a059] flex items-center justify-center rounded-sm">
            <span className="text-[#050a14] font-cinzel font-bold text-xl">M</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-cinzel text-lg tracking-[0.2em] font-bold text-white leading-none">MERGELITH</h1>
            <p className="text-[10px] tracking-[0.3em] text-[#c5a059] uppercase font-medium">Growth Partners</p>
          </div>
        </div>

        <div className="flex items-center gap-6 lg:gap-12">
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <button 
              onClick={() => scrollTo('pillars')}
              className="text-[10px] uppercase tracking-widest text-[#e2e8f0] hover:text-[#c5a059] transition-colors font-bold bg-transparent border-none cursor-pointer"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollTo('privacy-protocol')}
              className="text-[10px] uppercase tracking-widest text-[#e2e8f0] hover:text-[#c5a059] transition-colors font-bold bg-transparent border-none cursor-pointer"
            >
              Security
            </button>
            <button 
              onClick={() => scrollTo('about')}
              className="text-[10px] uppercase tracking-widest text-[#e2e8f0] hover:text-[#c5a059] transition-colors font-bold bg-transparent border-none cursor-pointer"
            >
              About
            </button>
          </div>
          
          <button 
            onClick={() => scrollTo('contact')}
            className="px-5 py-3 bg-[#0f172a] border border-[#c5a059]/40 text-[#c5a059] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#c5a059] hover:text-[#050a14] transition-all duration-300 rounded-sm"
          >
            Inquire Directly
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;