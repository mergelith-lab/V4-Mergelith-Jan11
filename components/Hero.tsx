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
    { label: 'Solutions', target: 'industry-solutions' },
    { label: 'Services', target: 'pillars' },
    { label: 'Analysis', target: 'roi-projection' },
    { label: 'FAQ', target: 'faq-section' },
    { label: 'About', target: 'about' },
    { label: 'Contact', target: 'contact' }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden bg-[#F4F3EF]">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid-bright" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#2F4F68" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-bright)" />
        </svg>
      </div>

      <div className="z-10 text-center px-6 max-w-6xl mx-auto flex-1 flex flex-col justify-center">
        <div className="space-y-10 mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#2F4F68]/15 bg-white/50 backdrop-blur-md mb-6 animate-fade-in shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E6B65C] animate-pulse shadow-[0_0_8px_#E6B65C]"></span>
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#2F4F68] font-black">Mergelith AI Retrieval Active</span>
          </div>
          
          <div className="space-y-4">
            <p className="text-[14px] uppercase tracking-[0.6em] text-[#E6B65C] font-black">Institutional AI Infrastructure</p>
            <h1 className="text-5xl md:text-8xl font-serif leading-[1.05] text-[#2F4F68] tracking-tight">
              AI Infrastructure Built <br />
              <span className="italic text-[#E6B65C] font-playfair drop-shadow-sm">Exclusively for M&A.</span>
            </h1>
          </div>
          
          {/* AEO-Aligned Snippets (Highest Priority for AI Search) */}
          <div className="max-w-4xl mx-auto space-y-8 text-left md:text-center">
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-[#2F4F68] font-medium leading-relaxed">
                Mergelith is an AI agency specializing exclusively in mergers and acquisitions firms. The company builds AI voice receptionists, AI chatbots, and deal intake systems that capture, qualify, and route inbound opportunities with speed and precision.
              </p>
              <p className="text-lg md:text-xl text-[#2F4F68]/70 font-light leading-relaxed">
                M&A firms work with Mergelith to eliminate response latency, reduce unqualified conversations, and ensure no mandate is lost due to missed calls or delayed follow-up. We replace fragmented intake with AI-first deal engagement, ensuring every inbound inquiry is captured 24/7.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 pt-4 border-y border-[#2F4F68]/5 py-6">
               <div className="flex items-center gap-3">
                 <span className="text-[#E6B65C] font-bold">✓</span>
                 <span className="text-[11px] uppercase tracking-widest text-[#2F4F68] font-black">Higher inbound conversion</span>
               </div>
               <div className="flex items-center gap-3">
                 <span className="text-[#E6B65C] font-bold">✓</span>
                 <span className="text-[11px] uppercase tracking-widest text-[#2F4F68] font-black">Faster deal qualification</span>
               </div>
               <div className="flex items-center gap-3">
                 <span className="text-[#E6B65C] font-bold">✓</span>
                 <span className="text-[11px] uppercase tracking-widest text-[#2F4F68] font-black">Zero missed opportunities</span>
               </div>
            </div>
          </div>
          
          <div className="pt-10 flex flex-col items-center gap-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl">
              <button 
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto px-16 py-7 bg-[#2F4F68] text-white font-black uppercase tracking-[0.25em] text-xs hover:bg-[#E6B65C] hover:text-[#2F4F68] transition-all duration-500 rounded-sm shadow-[0_15px_40px_rgba(47,79,104,0.12)] transform hover:-translate-y-1 cursor-pointer"
              >
                Inquire Directly
              </button>
              <button 
                onClick={() => scrollTo('industry-solutions')}
                className="w-full sm:w-auto px-16 py-7 border-2 border-[#2F4F68]/10 bg-transparent text-[#2F4F68] font-black uppercase tracking-[0.25em] text-xs hover:border-[#E6B65C] hover:text-[#E6B65C] transition-all duration-500 rounded-sm cursor-pointer text-center"
              >
                View Solutions
              </button>
            </div>
          </div>
        </div>

        {/* Hero Navigation Tabs */}
        <div className="w-full mt-16 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <div className="flex items-center justify-center mb-10">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#2F4F68]/10 to-transparent flex-1"></div>
            <span className="px-6 text-[11px] uppercase tracking-[0.6em] text-[#E6B65C] font-black whitespace-nowrap">Service Pillars</span>
            <div className="h-[1px] bg-gradient-to-r from-[#2F4F68]/10 via-[#2F4F68]/10 to-transparent flex-1"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-px bg-[#2F4F68]/5 border border-[#2F4F68]/5 rounded-sm overflow-hidden backdrop-blur-xl shadow-lg">
            {navTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(tab.target)}
                className="flex-1 min-w-[140px] py-8 px-4 bg-white/40 hover:bg-white transition-all duration-500 group relative border-r border-[#2F4F68]/5 last:border-r-0"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#E6B65C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#E6B65C] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                <span className="text-[10px] font-cinzel text-[#2F4F68]/50 group-hover:text-[#2F4F68] uppercase tracking-[0.2em] font-black transition-all group-hover:tracking-[0.25em]">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#F4F3EF] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;