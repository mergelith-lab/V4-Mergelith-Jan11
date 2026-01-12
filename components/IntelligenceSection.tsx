
import React from 'react';

const IntelligenceSection: React.FC = () => {
  return (
    <section id="intelligence" className="scroll-mt-32">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 space-y-8">
          <h3 className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] font-bold">Deal Flow Intelligence</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            Precision sourcing that <br />
            <span className="italic">never sleeps.</span>
          </h2>
          <p className="text-lg text-slate-400 font-light leading-relaxed">
            While your competitors wait for CIMs to hit their inbox, Mergelith’s AI systems are parsing proprietary signals, regulatory filings, and deep-web relationship clusters to identify sell-side mandates months before they materialize.
          </p>
          
          <ul className="space-y-4">
            {[
              "Conflict-aware screening and relationship mapping",
              "Automated LOI drafting with historical outcome modeling",
              "Institutional-grade data sovereignty protocols",
              "Live market sentiment and valuation variance tracking"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
                <span className="text-sm text-slate-300 font-medium tracking-wide">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="relative">
            {/* The "Deal Room" visualization block */}
            <div className="deal-room-border bg-[#0f172a] p-8 rounded-sm shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c5a059]/5 to-transparent pointer-events-none"></div>
              
              <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#c5a059]"></div>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Intake_L6 Active</span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">ID: ML-8829-PX</div>
              </div>

              <div className="space-y-6">
                <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-sm">
                  <div className="text-[10px] text-[#c5a059] uppercase tracking-tighter mb-1">Signal Detected</div>
                  <div className="text-sm font-mono text-white italic">"Detecting Sell-Side Mandate: Confirmed >$20M valuation. Initiating conflict check..."</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-sm">
                    <div className="text-[9px] text-slate-500 uppercase mb-2">Confidence Score</div>
                    <div className="text-2xl font-serif text-white italic">98.4<span className="text-[#c5a059] text-xs">%</span></div>
                  </div>
                  <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-sm">
                    <div className="text-[9px] text-slate-500 uppercase mb-2">Deal Velocity</div>
                    <div className="text-2xl font-serif text-white italic">High</div>
                  </div>
                </div>

                {/* Abstract Data Visuals (CSS Grid Bars) */}
                <div className="space-y-2">
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-[#c5a059] animate-[shimmer_2s_infinite]"></div>
                  </div>
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-[#c5a059]/60"></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <div className="text-[10px] text-slate-600 italic">Institutional Protocol: Encrypted Layer 7</div>
              </div>
            </div>

            {/* Floating Accents */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#c5a059]/20 rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-[#c5a059]/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;
