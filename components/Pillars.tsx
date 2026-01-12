import React from 'react';

const pillars = [
  {
    id: "sourcing-engine",
    title: "Deal Flow Intelligence",
    description: "AI-driven sourcing, screening, and prioritization designed to detect signals before the market reacts.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: "acceleration",
    title: "Pipeline Acceleration",
    description: "Smarter outreach, context-aware follow-ups, and relationship mapping that mirrors top-tier advisor instincts.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: "privacy-protocol",
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
        <h2 className="text-4xl font-serif text-white italic">Pillars of Dominance</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar) => (
          <div 
            key={pillar.id}
            id={pillar.id}
            className="deal-room-border deal-room-gradient p-10 hover:border-[#c5a059]/60 transition-all duration-500 group relative overflow-hidden scroll-mt-32"
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