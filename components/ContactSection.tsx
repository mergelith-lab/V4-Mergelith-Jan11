import React from 'react';

const ContactSection: React.FC = () => {
  const openChat = () => {
    window.dispatchEvent(new CustomEvent('mergelith-open-chat'));
  };

  return (
    <section id="contact" className="scroll-mt-32">
      <div className="bg-[#2F4F68] border border-[#2F4F68]/20 p-16 md:p-28 relative overflow-hidden rounded-sm shadow-2xl">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-cta-bright" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F4F3EF" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-cta-bright)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-16">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-serif text-[#F4F3EF] italic leading-[1.1]">
              Elite advisors don't scale people. <br />
              <span className="text-[#E6B65C]">They scale systems.</span>
            </h2>
            
            <p className="text-[#F4F3EF]/70 text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              We partner with a limited number of firms per quarter to ensure absolute precision. Engage via our secure channels for an initial audit.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-14">
            <div className="group transition-transform hover:scale-105 duration-500">
              <p className="text-[11px] uppercase tracking-[0.6em] text-[#E6B65C] font-black mb-6">Immediate Access</p>
              <a 
                href="tel:714-477-7490" 
                className="text-5xl md:text-7xl font-serif text-[#F4F3EF] hover:text-[#E6B65C] transition-all italic tracking-tighter"
              >
                714-477-7490
              </a>
              <div className="h-1 w-full bg-[#E6B65C]/30 mt-6 group-hover:bg-[#E6B65C] transition-all duration-500"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 w-full max-w-2xl">
              <a 
                href="tel:714-477-7490"
                className="flex-1 py-7 bg-[#E6B65C] text-[#2F4F68] font-black uppercase tracking-[0.3em] text-xs hover:bg-[#F4F3EF] transition-all duration-500 rounded-sm text-center shadow-xl shadow-[#E6B65C]/20"
              >
                Call Priority Line
              </a>
              <button 
                onClick={openChat}
                className="flex-1 py-7 border-2 border-[#E6B65C]/40 bg-transparent text-[#F4F3EF] font-black uppercase tracking-[0.3em] text-xs hover:border-[#F4F3EF] hover:bg-[#F4F3EF]/5 transition-all duration-500 rounded-sm cursor-pointer"
              >
                Start Secure Chat
              </button>
            </div>
          </div>
          
          <p className="text-[11px] text-[#F4F3EF]/30 uppercase tracking-[0.5em] font-black animate-pulse">
            Institutional Confidentiality Protocols Active
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;