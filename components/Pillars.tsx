
import React from 'react';

const pillars = [
  {
    title: "Deal Flow Intelligence",
    description: "AI-driven sourcing, screening, and prioritization designed to detect signals before the market reacts.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Pipeline Acceleration",
    description: "Smarter outreach, context-aware follow-ups, and relationship mapping that mirrors top-tier advisor instincts.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Operational Leverage",
    description: "Automation across CRM, diligence prep, and real-time reporting so your team scales without adding headcount.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Protected Growth",
    description: "Compliance-aware, confidential, and advisor-first architecture that prioritizes trust over everything else.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  }
];

const Pillars: React.FC = () => {
  return (
    <section id="pillars" className="scroll-mt-32">
      <div className="text-center mb-20">
        <h3 className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] font-bold mb-4">Core Architecture</h3>
        <h2 className="text-4xl font-serif text-white italic">Four Pillars of Dominance</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pillars.map((pillar, idx) => (
          <div 
            key={idx} 
            className="deal-room-border deal-room-gradient p-10 hover:border-[#c5a059]/60 transition-all duration-500 group relative overflow-hidden"
          >
            {/* Hover Accent */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#c5a059] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            <div className="mb-8 text-[#c5a059] transition-transform duration-500 group-hover:scale-110">
              {pillar.icon}
            </div>
            
            <h4 className="text-xl font-cinzel text-white mb-4 tracking-wider group-hover:text-[#c5a059] transition-colors">{pillar.title}</h4>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pillars;
