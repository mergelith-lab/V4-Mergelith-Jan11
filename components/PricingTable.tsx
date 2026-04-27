import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const PricingTable: React.FC = () => {
  const tiers = [
    {
      name: "Standard",
      price: "$999",
      period: "/month",
      desc: "For businesses that need a steady pipeline of high-quality commercial documents.",
      features: [
        "Ongoing subscription",
        "1 active task at a time",
        "48-hour turnaround",
        "Month-to-month",
        "Slide decks & pitch decks",
        "Brand kits",
        "Battle cards",
        "One-pagers & infographics",
        "Cancel anytime"
      ],
      buttonText: "Start with Standard",
      highlight: false
    },
    {
      name: "Growth",
      price: "$1,999",
      period: "/month",
      desc: "Core documents plus the strategic layer: GTM planning & social content.",
      features: [
        "Ongoing subscription",
        "1 active task at a time",
        "48-hour turnaround",
        "Month-to-month",
        "Everything in Standard, plus:",
        "GTM strategy documents",
        "Campaign briefs",
        "SEO / AEO / GEO reports",
        "4 social posts/month"
      ],
      buttonText: "Start with Growth",
      highlight: true
    },
    {
      name: "Process Intelligence Report",
      price: "$3,000",
      period: " flat fee",
      desc: "A standalone AI audit to understand your AI leverage before committing.",
      features: [
        "One-time standalone project",
        "Full AI workflow audit",
        "1-week delivery after intake",
        "No subscription required",
        "Reviews your full workflow",
        "Identifies AI tool opportunities",
        "Written report + tool recs",
        "Implementation roadmap",
        "No contract required"
      ],
      buttonText: "Get Your Report",
      highlight: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tiers.map((tier, idx) => (
        <div 
          key={idx} 
          className={`relative p-8 border rounded-sm flex flex-col h-full bg-white transition-all duration-500 ${
            tier.highlight 
              ? 'border-gold shadow-xl scale-105 z-10' 
              : 'border-navy/10 hover:border-gold/30'
          }`}
        >
          {tier.highlight && (
            <div className="absolute top-0 right-0 bg-gold text-navy text-[10px] uppercase tracking-widest font-black px-4 py-1 -translate-y-1/2 rounded-full">
              Most Popular
            </div>
          )}
          <div className="space-y-4 mb-8">
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">{tier.name}</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-serif text-navy italic">{tier.price}</span>
              <span className="text-navy/40 text-sm font-light italic">{tier.period}</span>
            </div>
            <p className="text-navy/60 text-sm italic min-h-[40px]">{tier.desc}</p>
          </div>

          <div className="space-y-4 flex-1 mb-10">
            <h4 className="text-[10px] uppercase tracking-widest text-navy font-black">What's Included</h4>
            <ul className="space-y-3">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex gap-3 text-sm text-navy/70 leading-tight">
                  {feature.includes('plus:') ? (
                     <span className="text-[10px] uppercase font-black text-gold mt-1">NEW</span>
                  ) : (
                    <Check className="w-4 h-4 text-gold shrink-0" />
                  )}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <a 
            href="https://api.leadconnectorhq.com/widget/bookings/mergelith-calendar"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 py-4 transition-all tracking-[0.2em] uppercase text-[10px] font-black ${
              tier.highlight 
                ? 'bg-gold text-navy hover:bg-navy hover:text-pearl' 
                : 'bg-navy text-pearl hover:bg-gold hover:text-navy'
            }`}
          >
            {tier.buttonText}
            <ArrowRight size={14} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
