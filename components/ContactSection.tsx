import React from 'react';

const ContactSection: React.FC = () => {
  const openChat = () => {
    window.dispatchEvent(new CustomEvent('mergelith-open-chat'));
  };

  return (
    <section id="contact" className="scroll-mt-32">
      <div className="bg-white border border-[#2F4F68]/10 p-16 md:p-28 relative overflow-hidden rounded-sm shadow-xl">
        {/* Subtle Background Polish */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-cta-bright-v2" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2F4F68" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-cta-bright-v2)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E6B65C]/30 bg-[#E6B65C]/5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E6B65C] animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#E6B65C] font-black">Direct Engagement</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif text-[#2F4F68] italic leading-[1.1]">
              Elite advisors don't scale people. <br />
              <span className="text-[#E6B65C] drop-shadow-sm">They scale systems.</span>
            </h2>
            
            <p className="text-[#2F4F68]/70 text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              We partner with a limited number of firms per quarter to ensure absolute precision. Engage via our secure channels for an initial audit.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-14">
            <div className="group transition-transform hover:scale-105 duration-500">
              <p className="text-[11px] uppercase tracking-[0.6em] text-[#E6B65C] font-black mb-6">Immediate Advisory Line</p>
              <a 
                href="tel:714-477-7490" 
                className="text-5xl md:text-7xl font-serif text-[#2F4F68] hover:text-[#E6B65C] transition-all italic tracking-tighter"
              >
                714-477-7490
              </a>
              <div className="h-1 w-full bg-[#E6B65C]/20 mt-6 group-hover:bg-[#E6B65C] transition-all duration-500"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 w-full max-w-2xl">
              <a 
                href="tel:714-477-7490"
                className="flex-1 py-7 bg-[#2F4F68] text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-[#E6B65C] hover:text-[#2F4F68] transition-all duration-500 rounded-sm text-center shadow-lg"
              >
                Call Priority Line
              </a>
              <button 
                onClick={openChat}
                className="flex-1 py-7 border-2 border-[#2F4F68]/10 bg-white text-[#2F4F68] font-black uppercase tracking-[0.3em] text-xs hover:border-[#E6B65C] hover:bg-[#E6B65C]/5 transition-all duration-500 rounded-sm cursor-pointer"
              >
                Start Secure Chat
              </button>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#2F4F68]/5">
            <p className="text-[11px] text-[#2F4F68]/30 uppercase tracking-[0.5em] font-black animate-pulse">
              Institutional Confidentiality Protocols Active
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;