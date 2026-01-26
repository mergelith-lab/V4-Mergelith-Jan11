import React, { useState, useMemo } from 'react';

const ROICalculator: React.FC = () => {
  const [leadsPerMonth, setLeadsPerMonth] = useState(40);
  const [avgSuccessFee, setAvgSuccessFee] = useState(250000);
  const [currentConvRate, setCurrentConvRate] = useState(5);
  const [captureLift, setCaptureLift] = useState(25);

  const results = useMemo(() => {
    const additionalMandatesYear = (leadsPerMonth * (captureLift / 100)) * (currentConvRate / 100) * 12;
    const annualRevenueAlpha = additionalMandatesYear * avgSuccessFee;
    const monthlyRevenueAlpha = annualRevenueAlpha / 12;

    return {
      annualAlpha: annualRevenueAlpha.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      monthlyAlpha: monthlyRevenueAlpha.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      additionalMandates: additionalMandatesYear.toFixed(1)
    };
  }, [leadsPerMonth, avgSuccessFee, currentConvRate, captureLift]);

  return (
    <section id="roi-projection" className="scroll-mt-32">
      <div className="text-center mb-20">
        <h3 className="text-[11px] uppercase tracking-[0.5em] text-[#E6B65C] font-black mb-6">Revenue Alpha Projection</h3>
        <h2 className="text-5xl font-serif text-[#2F4F68] italic">Cost of Missed Mandates</h2>
        <p className="text-[#2F4F68]/60 mt-6 max-w-3xl mx-auto text-xl font-light">
          Quantify the revenue reclaimed by deploying 24/7 intelligent triage. Your firm secures mandates while competitors are still clearing their morning inbox.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10 items-stretch">
        <div className="lg:col-span-2 bg-white border border-[#2F4F68]/10 p-10 rounded-sm space-y-10 shadow-lg">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-[11px] uppercase tracking-widest text-[#2F4F68]/50 font-black">Monthly Lead Volume</label>
                <span className="text-[#E6B65C] font-mono text-sm font-black">{leadsPerMonth}</span>
              </div>
              <input 
                type="range" min="10" max="200" step="5" 
                value={leadsPerMonth} onChange={(e) => setLeadsPerMonth(parseInt(e.target.value))}
                className="w-full accent-[#E6B65C] h-1.5 bg-[#2F4F68]/5 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-[11px] uppercase tracking-widest text-[#2F4F68]/50 font-black">Avg. Success Fee ($)</label>
                <span className="text-[#E6B65C] font-mono text-sm font-black">${(avgSuccessFee / 1000).toLocaleString()}k</span>
              </div>
              <input 
                type="range" min="50000" max="1000000" step="25000" 
                value={avgSuccessFee} onChange={(e) => setAvgSuccessFee(parseInt(e.target.value))}
                className="w-full accent-[#E6B65C] h-1.5 bg-[#2F4F68]/5 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-[11px] uppercase tracking-widest text-[#2F4F68]/50 font-black">Mandate Conv. Rate</label>
                <span className="text-[#E6B65C] font-mono text-sm font-black">{currentConvRate}%</span>
              </div>
              <input 
                type="range" min="1" max="20" step="1" 
                value={currentConvRate} onChange={(e) => setCurrentConvRate(parseInt(e.target.value))}
                className="w-full accent-[#E6B65C] h-1.5 bg-[#2F4F68]/5 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#2F4F68]/10">
            <p className="text-[10px] text-[#2F4F68]/40 italic leading-relaxed uppercase tracking-widest font-black">
              Verified Revenue Capture: Recovering leads lost to delayed response and after-hours leakage.
            </p>
          </div>
        </div>

        <div className="lg:col-span-3 flex flex-col gap-10">
          <div className="flex-1 bg-white border border-[#E6B65C]/30 p-16 rounded-sm relative overflow-hidden flex flex-col justify-center shadow-lg">
            <h4 className="text-[11px] uppercase tracking-[0.4em] text-[#E6B65C] font-black mb-4">Projected Annual Revenue Alpha</h4>
            <div className="text-7xl md:text-8xl font-serif text-[#2F4F68] italic tracking-tight drop-shadow-sm">
              ${results.annualAlpha}
            </div>
            <p className="mt-8 text-[#2F4F68]/80 font-light text-xl leading-relaxed">
              Incremental net revenue reclaimed by ensuring no high-stakes inquiry is left unanswered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white border border-[#2F4F68]/10 p-10 rounded-sm shadow-md">
              <div className="text-[#E6B65C] font-mono text-4xl mb-2 font-black tracking-tighter">{results.additionalMandates}</div>
              <h5 className="text-[11px] uppercase tracking-widest text-[#2F4F68] font-black mb-4">Additional Mandates / Yr</h5>
            </div>
            <div className="bg-white border border-[#2F4F68]/10 p-10 rounded-sm shadow-md">
              <div className="text-[#E6B65C] font-mono text-4xl mb-2 font-black tracking-tighter">${results.monthlyAlpha}</div>
              <h5 className="text-[11px] uppercase tracking-widest text-[#2F4F68] font-black mb-4">Monthly Revenue Lift</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;