import React from 'react';
import PricingGridTable from '../components/PricingGridTable.tsx';
import PricingTable from '../components/PricingTable.tsx';
import { Target, Scale, Briefcase, Home as HomeIcon, HardHat } from 'lucide-react';

const Pricing: React.FC = () => {
  const roiPoints = [
    {
      title: "For a Law Firm",
      value: "$5,000-$50,000+",
      desc: "Average case value. One pitch deck that closes a client you would have lost = months of subscription ROI, in a single meeting.",
      icon: Scale
    },
    {
      title: "For a B2B Sales Org",
      value: "$20,000-$200,000+",
      desc: "Average contract value. One set of battle cards that handles the objection killing your deals = the entire Mergelith investment in the first closed deal.",
      icon: Briefcase
    },
    {
      title: "For a Med Spa",
      value: "$2,400-$5,000",
      desc: "Average client LTV. A campaign brief that generates 5 new bookings = 2-5x the monthly subscription in a single campaign.",
      icon: Target
    },
    {
      title: "For a Contractor",
      value: "$8,000-$50,000",
      desc: "Average job value. One professional proposal that wins a bid you previously lost = 8-50x the monthly cost. On one job.",
      icon: HardHat
    }
  ];

  return (
    <div className="pt-32 pb-32 space-y-32">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="space-y-4">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Engagement Modals</h3>
          <h1 className="text-5xl md:text-8xl font-serif italic text-navy leading-tight">
            Three Tiers. Fixed Pricing. <br />
            <span className="text-gold">No Surprises.</span>
          </h1>
          <p className="text-xl md:text-2xl text-navy/60 font-light max-w-3xl mx-auto">
            Subscription retainers for ongoing execution. Standalone AI audit when you need strategy first. Every tier: 48-hour delivery, no contracts.
          </p>
        </div>

        <PricingGridTable />
      </section>

      {/* Side-by-Side Cost Comparison (PDF Page 15) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy p-12 md:p-16 rounded-sm text-pearl overflow-x-auto">
          <h2 className="text-3xl font-serif italic text-gold mb-12">Standard $999/Month vs. The Alternatives</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 font-normal text-pearl/40">Category</th>
                <th className="py-4 font-black tracking-widest text-gold text-[10px] uppercase">Mergelith Standard</th>
                <th className="py-4 font-normal text-pearl/40">In-House Hire</th>
                <th className="py-4 font-normal text-pearl/40">Agency</th>
                <th className="py-4 font-normal text-pearl/40">Freelancer</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-white/10">
                <td className="py-6 font-bold uppercase tracking-widest text-[10px]">Monthly Cost</td>
                <td className="py-6 text-gold font-black">$999</td>
                <td className="py-6 text-pearl/60">$5K-$10K+</td>
                <td className="py-6 text-pearl/60">$3K-$15K+</td>
                <td className="py-6 text-pearl/60">$1K-$4K</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-6 font-bold uppercase tracking-widest text-[10px]">Turnaround</td>
                <td className="py-6 text-gold font-black">48 Hours</td>
                <td className="py-6 text-pearl/60">Days to Weeks</td>
                <td className="py-6 text-pearl/60">Weeks</td>
                <td className="py-6 text-pearl/60">Varies</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-6 font-bold uppercase tracking-widest text-[10px]">Contract</td>
                <td className="py-6 text-gold font-black">None</td>
                <td className="py-6 text-pearl/60">Employment</td>
                <td className="py-6 text-pearl/60">6-12 Months</td>
                <td className="py-6 text-pearl/60">Per Project</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-6 font-bold uppercase tracking-widest text-[10px]">Coverage</td>
                <td className="py-6 text-gold font-black">Full-Stack</td>
                <td className="py-6 text-pearl/60">1 Person</td>
                <td className="py-6 text-pearl/60">1 Specialty</td>
                <td className="py-6 text-pearl/60">1 Skill</td>
              </tr>
              <tr>
                <td className="py-6 font-bold uppercase tracking-widest text-[10px]">Price Predictability</td>
                <td className="py-6 text-gold font-black">Fixed</td>
                <td className="py-6 text-pearl/60">Salary + Benefits</td>
                <td className="py-6 text-pearl/60">Retainer + Extras</td>
                <td className="py-6 text-pearl/60">Invoice Surprise</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ROI Framing (PDF Page 16) */}
      <section className="bg-navy/5 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="text-center space-y-4">
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Value Math</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-navy italic">One Deal Pays for the Year.</h2>
            <p className="max-w-2xl mx-auto text-navy/60 font-light italic">
              The question is not whether you can afford Mergelith. It is whether you can afford what missing the next deal costs you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {roiPoints.map((point, idx) => (
              <div key={idx} className="bg-white p-10 border border-navy/5 shadow-sm space-y-6">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold rounded-full">
                     <point.icon size={26} strokeWidth={1} />
                   </div>
                   <h4 className="text-2xl font-serif text-navy italic">{point.title}</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-widest text-gold font-black">Average Context Value</p>
                  <p className="text-4xl font-serif text-navy italic">{point.value}</p>
                </div>
                <p className="text-navy/60 text-sm leading-relaxed italic border-t border-navy/5 pt-6">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 pb-32">
        <h2 className="text-4xl font-serif text-navy italic leading-tight">
          Pick Your Tier. <br />
          <span className="text-gold">Start in 24 Hours.</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
           <a href="https://calendly.com/sasha-g-aleksic/30min" target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-5 text-sm tracking-widest">
             START WITH STANDARD
           </a>
           <a href="https://calendly.com/sasha-g-aleksic/30min" target="_blank" rel="noopener noreferrer" className="text-navy/60 text-[10px] uppercase font-black tracking-[0.3em] border-b border-navy/20 hover:text-gold transition-colors">
              Schedule discovery call
           </a>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
