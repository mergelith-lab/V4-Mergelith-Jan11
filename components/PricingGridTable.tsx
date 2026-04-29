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
              <span className="text-5xl font-serif text-gold italic">$997</span>
              <span className="text-sm font-light italic">/month</span>
            </div>
          </div>
          <div className="p-8 border-r border-pearl/10 relative">
            <div className="absolute top-0 right-0 bg-gold text-navy text-[8px] font-black uppercase tracking-widest px-3 py-1">Most Popular</div>
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
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">Month-to-month. Cancel anytime.</div>
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">Everything in Standard, plus:</div>
          <div className="px-6 py-4 text-navy/80 text-sm font-medium">One-time. 1-week delivery.</div>
        </div>

        <div className="grid grid-cols-3 border-b border-navy/10 bg-white">
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">&bull; One active task at a time</div>
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">&bull; GTM strategy documents</div>
          <div className="px-6 py-4 text-navy/80 text-sm font-medium">&bull; Full AI audit of marketing/sales</div>
        </div>

        <div className="grid grid-cols-3 border-b border-navy/10 bg-navy/5">
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">&bull; 48-hour turnaround</div>
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">&bull; Campaign briefs</div>
          <div className="px-6 py-4 text-navy/80 text-sm font-medium">&bull; Specific tool recommendations</div>
        </div>

        <div className="grid grid-cols-3 border-b border-navy/10 bg-white">
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">&bull; Sales pitch decks</div>
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">&bull; SEO / AEO / GEO audit & report</div>
          <div className="px-6 py-4 text-navy/80 text-sm font-medium">&bull; Implementation roadmap</div>
        </div>

        <div className="grid grid-cols-3 border-b border-navy/10 bg-navy/5">
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">&bull; Corporate capability decks</div>
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">&bull; Weekly social media posts</div>
          <div className="px-6 py-4 text-navy/80 text-sm font-medium">&bull; Private report — yours to keep</div>
        </div>

        <div className="grid grid-cols-3 border-b border-navy/10 bg-white">
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">&bull; Brand kits</div>
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium text-navy/40 italic">Mergelith writes/designs, you publish</div>
          <div className="px-6 py-4 text-navy/80 text-sm font-medium"></div>
        </div>

        <div className="grid grid-cols-3 border-b border-navy/10 bg-navy/5">
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium">&bull; Battle cards</div>
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium"></div>
          <div className="px-6 py-4 text-navy/80 text-sm font-medium"></div>
        </div>

        <div className="grid grid-cols-3 bg-white">
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium pb-8">&bull; One-pagers & Infographics</div>
          <div className="px-6 py-4 border-r border-navy/10 text-navy/80 text-sm font-medium"></div>
          <div className="px-6 py-4 text-navy/80 text-sm font-medium"></div>
        </div>
      </div>
    </div>
  );
};

export default PricingGridTable;
