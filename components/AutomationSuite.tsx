import React from 'react';

const AutomationSuite: React.FC = () => {
  return (
    <section id="automation-suite" className="scroll-mt-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="bg-[#0f172a] deal-room-border p-8 rounded-sm relative overflow-hidden">
             <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-bold">Automation_Engine v4.0</span>
                <span className="text-[10px] font-mono text-slate-500">STATUS: OPTIMIZED</span>
             </div>
             
             <div className="space-y-6">
                {[
                  { label: "CRM Syncing", val: "100%", status: "Live" },
                  { label: "Diligence Mapping", val: "Synced", status: "Active" },
                  { label: "LOI Generation", val: "Ready", status: "Standby" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-sm">
                    <span className="text-xs text-slate-400 font-medium">{item.label}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-mono text-[#c5a059]">{item.val}</span>
                      <span className="text-[8px] uppercase px-2 py-0.5 border border-slate-700 text-slate-500">{item.status}</span>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4">
                  <div className="text-[9px] text-slate-500 uppercase mb-3">Triage Logic (Live Pulse)</div>
                  <div className="flex gap-1 h-12 items-end">
                    {[...Array(15)].map((_, i) => (
                      <div key={i} className="flex-1 bg-[#c5a059]/20 rounded-t-sm animate-pulse" 
                           style={{ height: `${20 + Math.random() * 80}%`, animationDelay: `${i * 0.15}s` }}></div>
                    ))}
                  </div>
                </div>
             </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <h3 className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] font-bold">Automation Suite</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            Operational leverage <br />
            <span className="italic">without headcount.</span>
          </h2>
          <p className="text-lg text-slate-400 font-light leading-relaxed">
            Mergelith automates the friction-heavy middle of the deal cycle. Our suite handles CRM hygiene, initial outreach personalization, and diligence document classification, allowing your senior partners to focus on closing, not admin.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-cinzel text-sm mb-2">High Velocity</h4>
              <p className="text-xs text-slate-500 font-light">4x faster lead triage than human-only teams.</p>
            </div>
            <div>
              <h4 className="text-white font-cinzel text-sm mb-2">Error Free</h4>
              <p className="text-xs text-slate-500 font-light">Eliminate data entry fatigue and record leakage.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSuite;