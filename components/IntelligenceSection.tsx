import React from 'react';

const IntelligenceSection: React.FC = () => {
  return (
    <section id="intelligence" className="scroll-mt-32">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2 space-y-10">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Deal Flow Intelligence</h3>
          <h2 className="text-5xl md:text-6xl font-serif text-navy leading-tight">
            Precision sourcing that <br />
            <span className="italic">never sleeps.</span>
          </h2>
          <p className="text-xl text-navy/70 font-light leading-relaxed">
            While your competitors wait for CIMs to hit their inbox, Mergelith’s AI systems are parsing proprietary signals, regulatory filings, and deep-web relationship clusters to identify sell-side mandates months before they materialize.
          </p>
          
          <ul className="space-y-6">
            {[
              "Conflict-aware screening and relationship mapping",
              "Automated LOI drafting with historical outcome modeling",
              "Institutional-grade data sovereignty protocols",
              "Live market sentiment and valuation variance tracking"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="mt-2 w-2 h-2 rounded-full bg-gold"></span>
                <span className="text-base text-navy/80 font-medium tracking-wide">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="relative">
            <div className="bg-white border border-navy/10 p-10 rounded-sm shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none"></div>
              
              <div className="flex justify-between items-center mb-10 border-b border-navy/10 pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse"></div>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-navy/40 font-black">System Status: Monitoring</span>
                </div>
                <div className="text-[10px] text-navy/30 font-mono tracking-[0.3em]">SECURE_INSTANCE_892</div>
              </div>

              <div className="space-y-8">
                <div className="p-6 bg-navy/5 border border-navy/5 rounded-sm">
                  <div className="text-[10px] text-gold uppercase tracking-[0.2em] mb-2 font-black">Signal Detected</div>
                  <div className="text-sm font-mono text-navy italic">"Detecting Sell-Side Mandate: Confirmed &gt;$50M valuation. Initiating conflict check..."</div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-navy/5 border border-navy/5 rounded-sm">
                    <div className="text-[10px] text-navy/30 uppercase mb-3 tracking-widest font-black">Confidence Score</div>
                    <div className="text-3xl font-serif text-navy italic">99.2<span className="text-gold text-sm">%</span></div>
                  </div>
                  <div className="p-6 bg-navy/5 border border-navy/5 rounded-sm">
                    <div className="text-[10px] text-navy/30 uppercase mb-3 tracking-widest font-black">Deal Velocity</div>
                    <div className="text-3xl font-serif text-navy italic">Extreme</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-1.5 w-full bg-navy/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gold animate-shimmer"></div>
                  </div>
                  <div className="h-1.5 w-full bg-navy/10 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-gold/40"></div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <div className="text-[11px] text-navy/20 italic uppercase tracking-widest font-black">Institutional Protocol Active</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 border border-gold/20 rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-gold/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;