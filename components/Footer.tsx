import React from 'react';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-pearl border-t border-navy/10 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-navy flex items-center justify-center rounded-sm shadow-md">
                <span className="text-pearl font-cinzel font-black text-xl">M</span>
              </div>
              <h1 className="font-cinzel text-xl tracking-[0.3em] font-black text-navy uppercase">MERGELITH</h1>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-navy/60 max-w-xs font-light leading-relaxed">
                Revenue systems. Not tools. If you are generating leads, Mergelith makes sure you convert them faster than your competitors.
              </p>
              <div className="pt-2">
                <p className="text-[11px] text-gold font-black tracking-[0.2em] uppercase">
                  ADVISORY: <a href="tel:714-477-7490" className="hover:text-navy transition-colors">714-477-7490</a>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-6">
              <h4 className="text-[11px] uppercase tracking-[0.4em] text-gold font-black">Systems</h4>
              <ul className="space-y-3 text-sm text-navy/40 font-light list-none p-0 m-0">
                <li><button onClick={() => scrollTo('problem')} className="hover:text-navy transition-colors bg-transparent border-none p-0 cursor-pointer text-sm font-medium uppercase tracking-widest text-left">The Problem</button></li>
                <li><button onClick={() => scrollTo('solution')} className="hover:text-navy transition-colors bg-transparent border-none p-0 cursor-pointer text-sm font-medium uppercase tracking-widest text-left">The Solution</button></li>
                <li><button onClick={() => scrollTo('what-we-install')} className="hover:text-navy transition-colors bg-transparent border-none p-0 cursor-pointer text-sm font-medium uppercase tracking-widest text-left">Systems</button></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[11px] uppercase tracking-[0.4em] text-gold font-black">Company</h4>
              <ul className="space-y-3 text-sm text-navy/40 font-light list-none p-0 m-0">
                <li><button onClick={() => scrollTo('about')} className="hover:text-navy transition-colors bg-transparent border-none p-0 cursor-pointer text-sm font-medium uppercase tracking-widest text-left">Founder</button></li>
                <li><button onClick={() => scrollTo('faq')} className="hover:text-navy transition-colors bg-transparent border-none p-0 cursor-pointer text-sm font-medium uppercase tracking-widest text-left">FAQ</button></li>
                <li><button onClick={() => scrollTo('contact')} className="hover:text-navy transition-colors bg-transparent border-none p-0 cursor-pointer text-sm font-medium uppercase tracking-widest text-left">Contact</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-28 pt-10 border-t border-navy/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-navy/20 uppercase tracking-[0.5em] font-black">
            &copy; {new Date().getFullYear()} Mergelith Growth Partners. All Rights Reserved.
          </p>
          <div className="flex gap-12">
            <button onClick={() => scrollTo('privacy-protocol')} className="text-[11px] text-navy/20 uppercase tracking-[0.3em] hover:text-gold transition-colors bg-transparent border-none p-0 cursor-pointer font-black">Security Protocol</button>
            <button onClick={() => scrollTo('contact')} className="text-[11px] text-navy/20 uppercase tracking-[0.3em] hover:text-gold transition-colors bg-transparent border-none p-0 cursor-pointer font-black">Terms of Engagement</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;