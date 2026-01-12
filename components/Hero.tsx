import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#050a14]">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c5a059]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c5a059]/30 bg-[#c5a059]/5 backdrop-blur-sm mb-4">
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
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto px-10 py-5 bg-[#c5a059] text-[#050a14] font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(197,160,89,0.3)] cursor-pointer"
            >
              Request a Private Consultation
            </button>
            <button 
              onClick={() => scrollTo('intelligence')}
              className="w-full sm:w-auto px-10 py-5 border border-slate-700 bg-[#0f172a]/50 backdrop-blur-sm text-slate-300 font-bold uppercase tracking-[0.2em] text-xs hover:border-[#c5a059] hover:text-white transition-all duration-300 rounded-sm cursor-pointer"
            >
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