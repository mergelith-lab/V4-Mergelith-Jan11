import React from 'react';

const pillars = [
  {
    id: "prop-sourcing",
    title: "AI Voice Receptionist",
    description: "Our AI voice receptionists provide 24/7 lead intake for M&A firms. They answer calls with human-parity logic, qualify mandate intent, and secure deal opportunities instantly.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    id: "deal-intelligence",
    title: "Intelligence Layer",
    description: "Mergelith's intelligence layer uses neural networks for institutional-grade CIM parsing and data classification. We automate the extraction of key deal signals with 99%+ accuracy.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: "aeo-service",
    title: "AEO Strategy",
    description: "Answer Engine Optimization ensures your firm appears as a verified citation in ChatGPT and Google AI Overviews. We optimize your digital presence for LLM-based search discovery.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  }
];

const Pillars: React.FC = () => {
  return (
    <section id="pillars" className="scroll-mt-32">
      <div className="text-center mb-20">
        <h3 className="text-[11px] uppercase tracking-[0.5em] text-[#E6B65C] font-black mb-4">Core Infrastructure</h3>
        <h2 className="text-5xl font-serif text-[#2F4F68] italic">Primary Service Lines</h2>
        <p className="mt-6 text-[#2F4F68]/60 max-w-3xl mx-auto font-light leading-relaxed text-xl">
          We build the proprietary AI infrastructure required for high-velocity mid-market deal capture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar) => (
          <div 
            key={pillar.id}
            className="border border-[#2F4F68]/10 bg-white p-10 hover:border-[#E6B65C]/60 transition-all duration-500 group relative overflow-hidden rounded-sm shadow-sm"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#E6B65C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            <div className="mb-8 text-[#E6B65C] transition-transform duration-500 group-hover:scale-110">
              {pillar.icon}
            </div>
            
            <h4 className="text-xl font-cinzel text-[#2F4F68] mb-4 tracking-wider group-hover:text-[#E6B65C] transition-colors uppercase font-black">{pillar.title}</h4>
            <p className="text-sm text-[#2F4F68]/50 leading-relaxed font-light group-hover:text-[#2F4F68]/80">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pillars;