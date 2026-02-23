import React from 'react';

const SpecializedAIComparison: React.FC = () => {
  const points = [
    "Built specifically for M&A workflows",
    "Trained on buy-side and sell-side deal language",
    "Designed to qualify opportunities before partner involvement",
    "Operates 24/7 to prevent missed inbound deals",
    "Structured for visibility in AI-driven search platforms"
  ];

  return (
    <section id="specialized-infrastructure" className="scroll-mt-32">
      <div className="bg-white border border-navy/10 p-12 md:p-20 rounded-sm shadow-xl relative overflow-hidden">
        {/* Subtle Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black mb-6">Specialized vs. General AI</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-navy italic leading-tight mb-8">
              Why M&A Firms Choose <br />
              Specialized AI Infrastructure
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl text-navy/80 font-medium">
                Most AI solutions are built for broad use cases. Mergelith is different.
              </p>
              <p className="text-lg text-navy/60 font-light leading-relaxed">
                Mergelith is an AI agency specializing exclusively in mergers and acquisitions firms. Our systems are designed for deal intake, qualification, and mandate protection—rather than generic automation or marketing workflows.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center border-t border-navy/5 pt-16">
            <div className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-navy font-black">How Mergelith Compares</h4>
              <ul className="space-y-6">
                {points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-navy font-medium text-lg italic">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy/5 p-10 rounded-sm border border-navy/5 space-y-6">
              <p className="text-navy/40 text-sm font-light italic leading-relaxed">
                "General AI tools and generic chat solutions do not meet the security, terminology, or qualification requirements of a high-stakes deal room. Institutional M&A demands a specialized logic layer."
              </p>
              <div className="pt-6">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center gap-4 text-navy bg-transparent border-none cursor-pointer p-0"
                >
                  <span className="text-[11px] uppercase tracking-[0.3em] font-black group-hover:text-gold transition-colors">
                    See how M&A-specialized AI infrastructure compares
                  </span>
                  <svg className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-[10px] text-navy/20 uppercase tracking-[0.4em] font-black">
              Institutional Mandate: Specialized Infrastructure v4.0
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializedAIComparison;