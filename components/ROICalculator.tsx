import React, { useState, useMemo } from 'react';

const ROICalculator: React.FC = () => {
  const [inquiries, setInquiries] = useState(50);
  const [hoursPerInquiry, setHoursPerInquiry] = useState(1.5);
  const [hourlyRate, setHourlyRate] = useState(250);
  const [automationEfficiency, setAutomationEfficiency] = useState(80);

  const results = useMemo(() => {
    const monthlyManualHours = inquiries * hoursPerInquiry;
    const monthlyCost = monthlyManualHours * hourlyRate;
    const monthlySavings = monthlyCost * (automationEfficiency / 100);
    const annualSavings = monthlySavings * 12;
    const annualHoursSaved = monthlyManualHours * (automationEfficiency / 100) * 12;

    return {
      annualSavings: annualSavings.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      annualHours: annualHoursSaved.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      monthlySavings: monthlySavings.toLocaleString(undefined, { maximumFractionDigits: 0 })
    };
  }, [inquiries, hoursPerInquiry, hourlyRate, automationEfficiency]);

  return (
    <section id="roi-projection" className="scroll-mt-32">
      <div className="text-center mb-16">
        <h3 className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] font-bold mb-4">Strategic Economics</h3>
        <h2 className="text-4xl font-serif text-white italic">Operational ROI Projection</h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-light">
          Quantify the capital and high-value capacity reclaimed by deploying institutional Voice AI and Chat triage for your reception. Ensure you never miss critical after-hours leads or high-stakes calls while your team is in partner meetings.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 items-stretch">
        {/* Input Panel */}
        <div className="lg:col-span-2 deal-room-border bg-[#0f172a]/50 p-8 rounded-sm space-y-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Monthly Call Volume</label>
                <span className="text-[#c5a059] font-mono text-xs">{inquiries}</span>
              </div>
              <input 
                type="range" min="10" max="500" step="10" 
                value={inquiries} onChange={(e) => setInquiries(parseInt(e.target.value))}
                className="w-full accent-[#c5a059] h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Triage Time (Hrs/Call)</label>
                <span className="text-[#c5a059] font-mono text-xs">{hoursPerInquiry}h</span>
              </div>
              <input 
                type="range" min="0.5" max="10" step="0.5" 
                value={hoursPerInquiry} onChange={(e) => setHoursPerInquiry(parseFloat(e.target.value))}
                className="w-full accent-[#c5a059] h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Blended Hourly Rate ($)</label>
                <span className="text-[#c5a059] font-mono text-xs">${hourlyRate}</span>
              </div>
              <input 
                type="range" min="100" max="1000" step="50" 
                value={hourlyRate} onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                className="w-full accent-[#c5a059] h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">AI Capture Target</label>
                <span className="text-[#c5a059] font-mono text-xs">{automationEfficiency}%</span>
              </div>
              <input 
                type="range" min="50" max="95" step="5" 
                value={automationEfficiency} onChange={(e) => setAutomationEfficiency(parseInt(e.target.value))}
                className="w-full accent-[#c5a059] h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
          
          <div className="pt-6 border-t border-slate-800">
            <p className="text-[10px] text-slate-500 italic leading-relaxed">
              *Calculations based on reclaiming bandwidth from after-hours leakage and front-desk triage of complex M&A inquiries.
            </p>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          <div className="flex-1 deal-room-border bg-gradient-to-br from-[#c5a059]/10 to-transparent p-12 rounded-sm relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <svg className="w-48 h-48 text-[#c5a059]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
            </div>
            
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059] font-bold mb-2">Annual Capital Reclaimed</h4>
            <div className="text-6xl md:text-7xl font-serif text-white italic tracking-tight">
              ${results.annualSavings}
            </div>
            <p className="mt-6 text-slate-400 font-light text-lg">
              Potential gross savings through automated voice and chat reception. This platform ensures zero-leakage by capturing leads 24/7—specifically handling after-hours inquiries and routing calls while senior staff are in deep-work or partner meetings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="deal-room-border bg-[#0f172a] p-8 rounded-sm">
              <div className="text-[#c5a059] font-mono text-3xl mb-1">{results.annualHours}</div>
              <h5 className="text-[10px] uppercase tracking-widest text-white font-bold mb-3">Staff Hours Redirected</h5>
              <p className="text-xs text-slate-500 font-light leading-relaxed">Eliminate the manual burden of call screening and basic intake tasks.</p>
            </div>
            <div className="deal-room-border bg-[#0f172a] p-8 rounded-sm">
              <div className="text-[#c5a059] font-mono text-3xl mb-1">${results.monthlySavings}</div>
              <h5 className="text-[10px] uppercase tracking-widest text-white font-bold mb-3">Monthly OpEx Reduction</h5>
              <p className="text-xs text-slate-500 font-light leading-relaxed">Immediate impact on firm scalability without missing a single deal-critical call.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;