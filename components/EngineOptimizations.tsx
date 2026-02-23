import React from 'react';

const EngineOptimizations: React.FC = () => {
  return (
    <section id="engine-optimizations" className="scroll-mt-32">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="bg-white border border-navy/10 p-12 rounded-sm relative overflow-hidden shadow-xl">
             <div className="flex items-center justify-between mb-10 border-b border-navy/10 pb-6">
                <span className="text-[11px] uppercase tracking-[0.4em] text-navy font-black">Automation_Engine v4.0</span>
                <span className="text-[11px] font-mono text-navy/40">STATUS: OPTIMIZED</span>
             </div>
             
             <div className="space-y-8">
                {[
                  { label: "CRM Syncing", val: "100%", status: "Live" },
                  { label: "Diligence Mapping", val: "Synced", status: "Active" },
                  { label: "LOI Generation", val: "Ready", status: "Standby" },
                  { label: "Inquiry Triage", val: "Optimized", status: "Active" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-navy/5 border border-navy/5 rounded-sm">
                    <span className="text-sm text-navy/80 font-medium tracking-wide">{item.label}</span>
                    <div className="flex items-center gap-6">
                      <span className="text-xs font-mono text-gold font-black">{item.val}</span>
                      <span className="text-[9px] uppercase px-3 py-1 border border-navy/10 text-navy/40 font-bold">{item.status}</span>
                    </div>
                  </div>
                ))}
                
                <div className="pt-6">
                  <div className="text-[10px] text-navy/40 uppercase mb-4 tracking-[0.3em] font-black">Neural Load Balance</div>
                  <div className="flex gap-1.5 h-16 items-end">
                    {[...Array(18)].map((_, i) => (
                      <div key={i} className="flex-1 bg-navy/10 rounded-t-sm animate-pulse" 
                           style={{ height: `${20 + Math.random() * 80}%`, animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                  </div>
                </div>
             </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-10">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Optimization Engine</h3>
          <h2 className="text-5xl md:text-6xl font-serif text-navy leading-tight">
            Institutional leverage <br />
            <span className="italic">without headcount.</span>
          </h2>
          <p className="text-xl text-navy/70 font-light leading-relaxed">
            Mergelith automates the friction-heavy middle of the deal cycle. Our optimization suite handles CRM hygiene, initial outreach personalization, and diligence document classification, allowing your senior partners to focus on closing, not admin.
          </p>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-navy font-cinzel text-base mb-3 tracking-widest font-black">High Velocity</h4>
              <p className="text-sm text-navy/50 font-light">4x faster lead triage than human-only teams.</p>
            </div>
            <div>
              <h4 className="text-navy font-cinzel text-base mb-3 tracking-widest font-black">Error Free</h4>
              <p className="text-sm text-navy/50 font-light">Eliminate data entry fatigue and record leakage.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineOptimizations;