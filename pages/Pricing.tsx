import React from 'react';
import PricingGridTable from '../components/PricingGridTable.tsx';
import ComparisonSection from '../components/ComparisonSection.tsx';
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
          <p className="text-[11px] uppercase tracking-[0.5em] text-gold-dark font-black">Engagement Models</p>
          <h1 className="text-5xl md:text-8xl font-serif italic text-navy leading-tight">
            Simple. Transparent. <br />
            <span className="text-gold">No Surprises.</span>
          </h1>
          <p className="text-xl md:text-2xl text-navy/60 font-light max-w-3xl mx-auto">
            Subscription retainers for ongoing execution. Standalone AI audit when you need strategy first. Every tier: 48-hour delivery, no contracts.
          </p>
        </div>

        <PricingGridTable />
      </section>

      {/* Reusing the Comparison Section from Home */}
      <ComparisonSection />

      {/* ROI Framing */}
      <section className="bg-navy/5 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="text-center space-y-4">
            <p className="text-[11px] uppercase tracking-[0.5em] text-gold-dark font-black">Value Math</p>
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
           <a href="https://calendly.com/mergelith/30min" target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-5 text-sm tracking-widest">
             BOOK A STRATEGY CALL
           </a>
           <a href="https://calendly.com/mergelith/30min" target="_blank" rel="noopener noreferrer" className="text-navy/60 text-[10px] uppercase font-black tracking-[0.3em] border-b border-navy/20 hover:text-gold transition-colors">
              Schedule discovery call
           </a>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
