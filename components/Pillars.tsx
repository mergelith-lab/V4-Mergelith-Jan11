import React from 'react';

const pillars = [
  {
    id: "voice-receptionist",
    title: "AI Voice Receptionist",
    description: "Mergelith builds AI voice receptionists designed specifically for M&A advisory workflows. The system answers calls 24/7, captures seller and buyer intent, verifies relevance, and books qualified meetings directly into partner calendars.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    id: "qualification-bots",
    title: "Buyer & Seller Qualification",
    description: "Mergelith deploys AI chatbots that pre-qualify inbound M&A leads before human involvement. The chatbot gathers key deal information, screens for relevance, and routes only qualified opportunities to partners or associates.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: "deal-intake",
    title: "AI Deal Intake Systems",
    description: "Mergelith designs AI-driven deal intake systems for M&A firms. These systems standardize data capture, eliminate incomplete submissions, and ensure consistent qualification across all inbound channels, resulting in faster triage.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: "aeo-strategy",
    title: "AEO for M&A Websites",
    description: "Mergelith optimizes M&A firm websites for AI search systems such as Google AI Overviews and ChatGPT Search. We structure content so AI engines correctly identify the firm's services and authority.",
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
        <h2 className="text-5xl font-serif text-[#2F4F68] italic">M&A Service Specializations</h2>
        <p className="mt-6 text-[#2F4F68]/60 max-w-3xl mx-auto font-light leading-relaxed text-xl">
          We deploy specialized AI infrastructure to address the most critical bottlenecks in the deal capture lifecycle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar) => (
          <div 
            key={pillar.id}
            className="border border-[#2F4F68]/10 bg-white p-10 hover:border-[#E6B65C]/60 transition-all duration-500 group relative overflow-hidden rounded-sm shadow-sm flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#E6B65C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            <div className="mb-8 text-[#E6B65C] transition-transform duration-500 group-hover:scale-110">
              {pillar.icon}
            </div>
            
            <h4 className="text-lg font-cinzel text-[#2F4F68] mb-4 tracking-wider group-hover:text-[#E6B65C] transition-colors uppercase font-black">{pillar.title}</h4>
            <p className="text-sm text-[#2F4F68]/60 leading-relaxed font-light group-hover:text-[#2F4F68]/80 flex-1">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pillars;