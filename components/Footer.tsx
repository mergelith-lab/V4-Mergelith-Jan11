import React from 'react';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050a14] border-t border-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#c5a059] flex items-center justify-center rounded-sm">
                <span className="text-[#050a14] font-cinzel font-bold text-lg">M</span>
              </div>
              <h1 className="font-cinzel text-base tracking-[0.2em] font-bold text-white uppercase">MERGELITH</h1>
            </div>
            <p className="text-xs text-slate-500 max-w-xs font-light leading-relaxed">
              Proprietary AI systems for institutional M&A advisors. Scalability without sacrifice.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-bold">Systems</h4>
              <ul className="space-y-2 text-xs text-slate-400 font-light list-none p-0 m-0">
                <li><button onClick={() => scrollTo('pillars')} className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-xs font-light">Sourcing Engine</button></li>
                <li><button onClick={() => scrollTo('intelligence')} className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-xs font-light">Intelligence Layer</button></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-bold">Company</h4>
              <ul className="space-y-2 text-xs text-slate-400 font-light list-none p-0 m-0">
                <li><button onClick={() => scrollTo('privacy-protocol')} className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-xs font-light">Privacy Protocol</button></li>
                <li><button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-xs font-light">Advisory</button></li>
                <li><button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-xs font-light">Legal</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Mergelith Growth Partners. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <button onClick={() => scrollTo('privacy-protocol')} className="text-[10px] text-slate-600 uppercase tracking-widest hover:text-slate-400 transition-colors bg-transparent border-none p-0 cursor-pointer">Security Protocol</button>
            <button onClick={() => scrollTo('contact')} className="text-[10px] text-slate-600 uppercase tracking-widest hover:text-slate-400 transition-colors bg-transparent border-none p-0 cursor-pointer">Terms of Engagement</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;