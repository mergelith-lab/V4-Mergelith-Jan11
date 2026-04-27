import React from 'react';

const pillars = [
  {
    id: "aeo-strategy",
    title: "AEO Optimization",
    description: "Systematically structuring your digital presence for direct extraction by Google AI Overviews and ChatGPT Search. We ensure you are the definitive answer.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    id: "geo-influence",
    title: "GEO Influence",
    description: "Engineering your brand authority within LLM training data. We ensure your firm is cited and recommended as the primary entity in your specific advisory niche.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: "deal-intake",
    title: "AI Deal Intake",
    description: "Technical infrastructure for standardized, pre-qualified deal flow. We use institutional-grade AI to filter and surface the right mandates for your team.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: "intelligence-deck",
    title: "Intelligence Deck",
    description: "Comprehensive AEO/GEO visibility tracking and competitor benchmarking. We provide the hard data needed to defend and expand your digital market share.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

const Pillars: React.FC = () => {
  return (
    <section id="pillars" className="scroll-mt-32">
      <div className="text-center mb-20">
        <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black mb-4">Core Infrastructure</h3>
        <h2 className="text-5xl font-serif text-navy italic">Institutional Service Specializations</h2>
        <p className="mt-6 text-navy/60 max-w-3xl mx-auto font-light leading-relaxed text-xl">
          Institutional AI infrastructure designed specifically for the unique demands of high-stakes advisory workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar) => (
          <div 
            key={pillar.id}
            className="border border-navy/10 bg-white p-10 hover:border-gold/60 transition-all duration-500 group relative overflow-hidden rounded-sm shadow-sm flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            <div className="mb-8 text-gold transition-transform duration-500 group-hover:scale-110">
              {pillar.icon}
            </div>
            
            <h4 className="text-lg font-cinzel text-navy mb-4 tracking-wider group-hover:text-gold transition-colors uppercase font-black">{pillar.title}</h4>
            <p className="text-sm text-navy/60 leading-relaxed font-light group-hover:text-navy/80 flex-1">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pillars;