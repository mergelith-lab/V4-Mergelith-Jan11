import React from 'react';

const PricingGridTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[800px] border border-navy/20 shadow-2xl">
        {/* Header Row */}
        <div className="grid grid-cols-3 bg-navy text-pearl">
          <div className="p-8 border-r border-pearl/10">
            <h3 className="text-2xl font-black tracking-widest uppercase mb-2">Standard</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-serif text-gold italic">$999</span>
              <span className="text-sm font-light italic">/month</span>
            </div>
          </div>
          <div className="p-8 border-r border-pearl/10">
            <h3 className="text-2xl font-black tracking-widest uppercase mb-2">Growth</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-serif text-gold italic">$1,999</span>
              <span className="text-sm font-light italic">/month</span>
            </div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-black tracking-widest uppercase mb-2 leading-tight">Process<br />Intelligence Report</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-serif text-gold italic">$3,000</span>
              <span className="text-sm font-light italic">flat fee</span>
            </div>
          </div>
        </div>

        {/* Comparison Rows */}
        <div className="grid grid-cols-3 border-b border-navy/10 bg-navy/5">
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">Ongoing subscription</div>
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">Ongoing subscription</div>
          <div className="px-6 py-4 text-navy/80 text-sm font-medium">One-time standalone project</div>
        </div>

        <div className="grid grid-cols-3 border-b border-navy/10 bg-white">
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">1 active task at a time</div>
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">1 active task at a time</div>
          <div className="px-6 py-4 text-navy/80 text-sm font-medium">AI workflow audit</div>
        </div>

        <div className="grid grid-cols-3 border-b border-navy/10 bg-navy/5">
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">48-hour turnaround</div>
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">48-hour turnaround</div>
          <div className="px-6 py-4 text-navy/80 text-sm font-medium">1-week delivery after intake</div>
        </div>

        <div className="grid grid-cols-3 border-b border-navy/10 bg-white">
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">Month-to-month</div>
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">Month-to-month</div>
          <div className="px-6 py-4 text-navy/80 text-sm font-medium">No subscription required</div>
        </div>

        <div className="grid grid-cols-3 border-b border-navy/10 bg-navy/5">
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">Slide decks & pitch decks</div>
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">Everything in Standard, plus:</div>
          <div className="px-6 py-4 text-navy/80 text-sm font-medium underline decoration-navy/20">Reviews your full workflow</div>
        </div>

        <div className="grid grid-cols-3 border-b border-navy/10 bg-white">
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">Brand kits</div>
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">GTM strategy documents</div>
          <div className="px-6 py-4 text-navy/80 text-sm font-medium underline decoration-navy/20">Identifies AI tool opportunities</div>
        </div>

        <div className="grid grid-cols-3 border-b border-navy/10 bg-navy/5">
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">Battle cards</div>
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">Campaign briefs</div>
          <div className="px-6 py-4 text-navy/80 text-sm font-medium">Written report + tool recommendations</div>
        </div>

        <div className="grid grid-cols-3 border-b border-navy/10 bg-white">
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium pb-8 pt-8">One-pagers & infographics</div>
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium pb-8 pt-8">SEO / AEO / GEO reports</div>
          <div className="px-6 py-4 text-navy/80 text-sm font-medium pb-8 pt-8">Implementation roadmap included</div>
        </div>

        <div className="grid grid-cols-3 bg-navy/5">
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">Cancel anytime</div>
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">4 social posts/month</div>
          <div className="px-6 py-4 text-navy/80 text-sm font-medium">No contract required</div>
        </div>
      </div>
    </div>
  );
};

export default PricingGridTable;
