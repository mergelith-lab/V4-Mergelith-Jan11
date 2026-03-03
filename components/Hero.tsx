import React from 'react';
import { Zap, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid-bright" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#001F3F" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-bright)" />
        </svg>
      </div>

      <div className="z-10 text-center px-6 max-w-7xl mx-auto flex-1 flex flex-col justify-center">
        <div className="space-y-10 mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-navy/10 bg-white/50 backdrop-blur-md mb-6 animate-fade-in shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse shadow-[0_0_8px_#D4AF37]"></span>
            <span className="text-[11px] uppercase tracking-[0.4em] text-navy font-black">Speed-to-Lead Systems Active</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-8xl font-serif leading-[1.1] text-navy tracking-tight max-w-5xl mx-auto">
              Have AI <br />
              <span className="italic text-gold font-serif drop-shadow-sm text-6xl md:text-9xl">answer your calls</span>
            </h1>
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-navy/70 font-light leading-relaxed">
                Stop losing deals to slow follow-up and missed calls. We install AI-powered systems that handle your inbound instantly.
              </p>
            </div>
          </div>
          
          <div className="pt-6 flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://api.leadconnectorhq.com/widget/bookings/mergelith-calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-12 py-5 text-xs tracking-[0.3em] w-full md:w-auto text-center"
            >
              BOOK A 15-MINUTE DEMO
            </a>
            <button 
              onClick={() => scrollTo('contact')}
              className="btn-secondary px-12 py-5 text-xs tracking-[0.3em] w-full md:w-auto text-center border border-navy/20 hover:border-gold transition-colors"
            >
              GET A FREE LEAD LEAK AUDIT
            </button>
          </div>

          <p className="text-[10px] uppercase tracking-[0.3em] text-navy/40 font-bold">
            Works with your existing forms, ads, website, and CRM. Live in days, not months.
          </p>
        </div>

        {/* Social Proof Strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 border-y border-navy/5 bg-white/30 backdrop-blur-sm rounded-sm">
          <div className="flex flex-col items-center gap-2">
            <Clock className="w-5 h-5 text-gold" />
            <p className="text-navy font-serif italic text-lg">“Instant callback in &lt; 60s”</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Zap className="w-5 h-5 text-gold" />
            <p className="text-navy font-serif italic text-lg">“Recovers missed calls 24/7”</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-gold" />
            <p className="text-navy font-serif italic text-lg">“SOC2 & ISO 27001 Compliant”</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-2">
              <div className="px-2 py-0.5 border border-navy/20 rounded text-[9px] font-black text-navy/40 uppercase tracking-tighter">SOC2</div>
              <div className="px-2 py-0.5 border border-navy/20 rounded text-[9px] font-black text-navy/40 uppercase tracking-tighter">ISO 27001</div>
            </div>
            <p className="text-navy font-serif italic text-lg">“Enterprise-Grade Security”</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-pearl to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;