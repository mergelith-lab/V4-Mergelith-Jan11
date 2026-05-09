import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ShieldCheck, Clock, ArrowRight, LineChart } from 'lucide-react';

const Hero: React.FC = () => {
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
        <div className="mb-20 animate-fade-in relative group px-4">
          <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-transparent to-navy/20 blur-xl opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative max-w-5xl mx-auto bg-navy/5 ring-1 ring-navy/10 rounded-sm overflow-hidden shadow-2xl">
            <img 
              src="/banner.png" 
              alt="Mergelith Strategic Banner" 
              className="w-full aspect-[21/9] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="space-y-10 mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-navy/10 bg-white/50 backdrop-blur-md mb-6 animate-fade-in shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse shadow-[0_0_8px_#D4AF37]"></span>
            <span className="text-[11px] uppercase tracking-[0.4em] text-navy font-black">MARKETING AS A SERVICE FOR SMALL BUSINESS &bull; LAKE ELSINORE, CA</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-8xl font-serif leading-[1.1] text-navy tracking-tight max-w-5xl mx-auto">
              Tired of Your Marketing Agency? <br />
              <span className="italic text-gold font-serif drop-shadow-sm text-6xl md:text-9xl">You're Not Alone.</span>
            </h1>
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-navy/70 font-light leading-relaxed">
                Most small businesses are stuck choosing between agencies that overcharge, freelancers who disappear, and doing it themselves with no time. There's a better option.
              </p>
            </div>
          </div>
          
          <div className="pt-6 flex flex-col md:flex-row items-center justify-center gap-6">
            <Link 
              to="/how-it-works"
              className="btn-primary px-12 py-5 text-xs tracking-[0.3em] w-full md:w-auto text-center cursor-pointer"
            >
              See How Mergelith Works →
            </Link>
          </div>
        </div>

        {/* Social Proof Strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 border-y border-navy/5 bg-white/30 backdrop-blur-sm rounded-sm">
          <div className="flex flex-col items-center gap-2">
            <Zap className="w-5 h-5 text-gold" />
            <p className="text-navy font-serif italic text-lg">“48-Hour Turnaround”</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LineChart className="w-5 h-5 text-gold" />
            <p className="text-navy font-serif italic text-lg">“Fixed Monthly Price”</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-gold" />
            <p className="text-navy font-serif italic text-lg">“No Long-Term Contracts”</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-2">
              <div className="px-2 py-0.5 border border-navy/20 rounded text-[9px] font-black text-navy/40 uppercase tracking-tighter">B2B</div>
              <div className="px-2 py-0.5 border border-navy/20 rounded text-[9px] font-black text-navy/40 uppercase tracking-tighter">Growth</div>
            </div>
            <p className="text-navy font-serif italic text-lg">“Scale With Precision”</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-pearl to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;