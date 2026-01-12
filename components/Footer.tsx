
import React from 'react';

const Footer: React.FC = () => {
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-bold">Systems</h4>
              <ul className="space-y-2 text-xs text-slate-400 font-light">
                <li className="hover:text-white cursor-pointer">Sourcing Engine</li>
                <li className="hover:text-white cursor-pointer">Intelligence Layer</li>
                <li className="hover:text-white cursor-pointer">Automation Suite</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-bold">Company</h4>
              <ul className="space-y-2 text-xs text-slate-400 font-light">
                <li className="hover:text-white cursor-pointer">Privacy Protocol</li>
                <li className="hover:text-white cursor-pointer">Advisory</li>
                <li className="hover:text-white cursor-pointer">Legal</li>
              </ul>
            </div>
            <div className="space-y-4 hidden md:block">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-bold">Contact</h4>
              <p className="text-xs text-slate-400 font-light italic">By Invitation Only</p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Mergelith Growth Partners. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] text-slate-600 uppercase tracking-widest hover:text-slate-400 cursor-pointer">Security Protocol</span>
            <span className="text-[10px] text-slate-600 uppercase tracking-widest hover:text-slate-400 cursor-pointer">Terms of Engagement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
