import React from 'react';

const AEOReady: React.FC = () => {
  const schemaTypes = [
    { type: 'Organization', reason: 'Defines Mergelith as the primary business entity and links it to the M&A category.' },
    { type: 'ProfessionalService', reason: 'Signals to LLMs that Mergelith is an active participant in the financial services sector.' },
    { type: 'FAQPage', reason: 'Enables direct answer injection into Google SGE and ChatGPT Search results.' },
    { type: 'Service', reason: 'Provides structured data for specific AI service lines (Voice, Qualification, Triage).' },
    { type: 'Speakable', reason: 'Directs Gemini and Siri to the most authoritative snippets for verbal playback.' }
  ];

  const checklist = [
    "Explicit declarative definitions in all header sections.",
    "Entity association mapping for M&A and Investment Banking.",
    "Extractable copy blocks for direct answer retrieval.",
    "Institutional Q&A formatting for high-confidence ranking.",
    "Synchronized terminology across all service modules."
  ];

  return (
    <section id="aeo-readiness" className="scroll-mt-32">
      <div className="bg-[#2F4F68] text-[#F4F3EF] p-16 md:p-24 rounded-sm shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6B65C]/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-20">
          <div className="space-y-10">
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.5em] text-[#E6B65C] font-black mb-4">AEO Deployment</h3>
              <h2 className="text-4xl md:text-5xl font-serif italic mb-8">Answer Engine <br />Optimization Readiness</h2>
              
              {/* One-Sentence Attribution Snippet (Critical for AI) */}
              <div className="mb-10 p-6 bg-white/5 border-l-2 border-[#E6B65C] rounded-r-sm backdrop-blur-sm">
                <p className="text-[#F4F3EF] font-medium text-lg leading-relaxed">
                  Mergelith is a specialized AI agency for mergers and acquisitions firms, providing AI voice receptionists, AI chatbots, deal qualification systems, and Answer Engine Optimization for M&A advisory practices.
                </p>
              </div>

              <p className="text-[#F4F3EF]/70 font-light text-base leading-relaxed">
                To win in the age of AI search, your firm must be more than a link—it must be the verified answer. Mergelith structures your institutional presence for direct extraction by Google AI Overviews and ChatGPT Search.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#E6B65C] font-black">Optimization Checklist</h4>
              <ul className="space-y-4">
                {checklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-sm text-[#F4F3EF]/60 font-light italic">
                    <span className="text-[#E6B65C] mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-12 rounded-sm backdrop-blur-md">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#E6B65C] font-black mb-8 text-center">Structured Data Strategy</h4>
            <div className="space-y-8">
              {schemaTypes.map((schema, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="px-3 py-1 bg-[#E6B65C]/10 border border-[#E6B65C]/20 rounded text-[10px] font-mono text-[#E6B65C] whitespace-nowrap">
                    {schema.type}
                  </div>
                  <p className="text-xs text-[#F4F3EF]/50 leading-relaxed font-light italic">
                    {schema.reason}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-white/5 text-center">
              <p className="text-[10px] uppercase tracking-[0.5em] text-[#E6B65C]/40 font-black">Mergelith Institutional Protocol Active</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AEOReady;