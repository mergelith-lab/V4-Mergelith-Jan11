import React from 'react';

const advantages = [
  {
    title: "M&A-Native Logic",
    description: "Unlike generic tech solutions, our AI is programmed with the specific rigor of institutional life sciences and high-stakes M&A workflows.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.288a2 2 0 01-1.663.008l-.628-.288a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l-.384 1.154a2 2 0 00.149 1.783l1.393 2.089a2 2 0 001.664.89h8.136a2 2 0 001.664-.89l1.393-2.089a2 2 0 00.149-1.783l-.384-1.154z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
      </svg>
    )
  },
  {
    title: "Absolute Data Alpha",
    description: "We protect your most valuable asset. Our 'Zero-Knowledge' protocol ensures your deal flow is never used to train public models.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Zero-Leakage Capture",
    description: "Automated high-velocity triage that follows the 'Five Minute Rule' 24/7, securing mandates while competitors are offline.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Future-Proof Visibility",
    description: "We don't just optimize for search; we optimize for answers. Mergelith ensures your firm is the top citation in the age of AI search.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  }
];

const WhyMergelith: React.FC = () => {
  return (
    <section id="why-mergelith" className="scroll-mt-32">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-2/5">
          <div className="sticky top-32 space-y-8">
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-[#E6B65C] font-black">The Mergelith Edge</h3>
            <h2 className="text-5xl md:text-6xl font-serif text-[#2F4F68] leading-tight italic">
              Strategic Superiority
            </h2>
            <p className="text-[#2F4F68]/70 font-light leading-relaxed text-xl">
              In a market where information is asymmetric and time is capital, generic automation isn't enough. We provide the institutional infrastructure that turns AI into your primary competitive advantage.
            </p>
            <div className="pt-6">
              <div className="h-[3px] w-32 bg-[#E6B65C]/50"></div>
            </div>
          </div>
        </div>

        <div className="lg:w-3/5 grid md:grid-cols-2 gap-px bg-[#2F4F68]/10 border border-[#2F4F68]/10">
          {advantages.map((adv, idx) => (
            <div key={idx} className="bg-white p-12 space-y-8 group hover:bg-[#2F4F68]/5 transition-all duration-500">
              <div className="text-[#E6B65C] p-4 border-2 border-[#E6B65C]/30 w-fit rounded-sm group-hover:bg-[#E6B65C]/10 transition-all">
                {adv.icon}
              </div>
              <h4 className="text-[#2F4F68] font-cinzel text-base tracking-[0.25em] uppercase font-black">{adv.title}</h4>
              <p className="text-sm text-[#2F4F68]/60 font-light leading-relaxed group-hover:text-[#2F4F68] transition-colors">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMergelith;