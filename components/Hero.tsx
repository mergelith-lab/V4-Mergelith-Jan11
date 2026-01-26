import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navTabs = [
    { label: 'The Edge', target: 'why-mergelith' },
    { label: 'Hero Products', target: 'pillars' },
    { label: 'Engine Optimizations', target: 'engine-optimizations' },
    { label: 'Cost Savings', target: 'roi-projection' },
    { label: 'Security', target: 'privacy-protocol' },
    { label: 'About Us', target: 'about' },
    { label: 'Contact Us', target: 'contact' }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden bg-[#F4F3EF]">
      {/* Background Polish */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#2F4F68" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="z-10 text-center px-6 max-w-6xl mx-auto flex-1 flex flex-col justify-center">
        <div className="space-y-10 mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#2F4F68]/20 bg-[#2F4F68]/5 backdrop-blur-md mb-6 animate-fade-in">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E6B65C] animate-pulse"></span>
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#2F4F68] font-black">Institutional AI v4.0 Active</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-serif leading-[1.05] text-[#2F4F68] tracking-tight">
            Stop the Leakage. <br />
            <span className="italic text-[#E6B65C] font-playfair drop-shadow-sm">Secure the Mandate.</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl md:text-3xl text-[#2F4F68]/70 font-light leading-relaxed">
            M&A deals are won in the first five minutes. We deploy human-parity intelligence to capture high-stakes deal flow <span className="text-[#2F4F68] font-semibold italic underline decoration-[#E6B65C]">with institutional precision.</span>
          </p>
          
          <div className="pt-10 flex flex-col items-center gap-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl">
              <button 
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto px-16 py-7 bg-[#2F4F68] text-[#F4F3EF] font-black uppercase tracking-[0.25em] text-xs hover:bg-[#E6B65C] hover:text-[#2F4F68] transition-all duration-500 rounded-sm shadow-[0_15px_40px_rgba(47,79,104,0.15)] transform hover:-translate-y-1 cursor-pointer"
              >
                Inquire Directly
              </button>
              <a 
                href="tel:714-477-7490"
                className="w-full sm:w-auto px-16 py-7 border-2 border-[#2F4F68]/20 bg-transparent text-[#2F4F68] font-black uppercase tracking-[0.25em] text-xs hover:border-[#E6B65C] hover:text-[#2F4F68] transition-all duration-500 rounded-sm cursor-pointer text-center"
              >
                Call Advisory Line
              </a>
            </div>
          </div>
        </div>

        {/* Hero Navigation Tabs */}
        <div className="w-full mt-16 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <div className="flex items-center justify-center mb-10">
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#2F4F68]/10 to-transparent flex-1"></div>
            <span className="px-6 text-[11px] uppercase tracking-[0.6em] text-[#E6B65C] font-black whitespace-nowrap">Institutional Service Lines</span>
            <div className="h-[2px] bg-gradient-to-r from-[#2F4F68]/10 via-[#2F4F68]/10 to-transparent flex-1"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-1 bg-white/50 border border-[#2F4F68]/5 rounded-sm overflow-hidden backdrop-blur-xl shadow-lg">
            {navTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(tab.target)}
                className="flex-1 min-w-[160px] py-8 px-6 bg-transparent hover:bg-[#2F4F68]/5 transition-all duration-500 group relative border-r border-[#2F4F68]/5 last:border-r-0"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F4F68]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#E6B65C] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                <span className="text-[11px] font-cinzel text-[#2F4F68]/40 group-hover:text-[#2F4F68] uppercase tracking-[0.25em] font-black transition-all group-hover:tracking-[0.3em]">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2F4F68]/10 to-transparent"></div>
    </section>
  );
};

export default Hero;