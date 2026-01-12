
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#050a14]">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c5a059]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Seal Logo Approximation */}
        <div className="mb-12 inline-block">
          <div className="w-48 h-48 md:w-56 md:h-56 relative group">
            <div className="absolute inset-0 border-2 border-[#c5a059]/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-2 border border-[#c5a059]/10 rounded-full"></div>
            <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-8 border-[#0f172a]">
              {/* Symbolic Bear Seal Representation */}
              <div className="relative w-full h-full flex items-center justify-center p-6">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#0f172a] opacity-90">
                   <path d="M20 65 Q 25 35, 50 30 T 80 65 L 75 75 Q 50 85, 25 75 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                   <rect x="42" y="45" width="16" height="20" rx="2" fill="none" stroke="#c5a059" strokeWidth="2" />
                   <path d="M45 52 L 50 48 L 55 52 M 50 48 L 50 60" fill="none" stroke="#c5a059" strokeWidth="1.5" />
                   <circle cx="50" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 1" />
                   <path d="M50 20 L 50 15 M 53 21 L 57 18 M 47 21 L 43 18" stroke="currentColor" strokeWidth="0.5" />
                </svg>
                <div className="absolute bottom-4 left-0 right-0 text-center font-cinzel text-[8px] tracking-[0.2em] font-bold text-[#0f172a]">
                  MERGELITH
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c5a059]/30 bg-[#c5a059]/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059] font-bold">Institutional AI Infrastructure</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] text-white">
            Stop the Leakage. <br />
            <span className="italic text-[#c5a059] font-playfair">Secure the Mandate.</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed">
            M&A deals are won in the first five minutes. We deploy human-parity intelligence and high-velocity triage to capture high-stakes deal flow <span className="text-white font-medium italic">with institutional precision.</span>
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-10 py-5 bg-[#c5a059] text-[#050a14] font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(197,160,89,0.3)]"
            >
              Request a Private Consultation
            </button>
            <button className="w-full sm:w-auto px-10 py-5 border border-slate-700 bg-[#0f172a]/50 backdrop-blur-sm text-slate-300 font-bold uppercase tracking-[0.2em] text-xs hover:border-[#c5a059] hover:text-white transition-all duration-300 rounded-sm">
              View Deployment Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a059]/20 to-transparent"></div>
    </section>
  );
};

export default Hero;
