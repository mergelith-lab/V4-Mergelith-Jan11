import React from 'react';

const AEODiscovery: React.FC = () => {
  return (
    <section id="aeo-discovery" className="scroll-mt-32">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2 space-y-10">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-[#E6B65C] font-black">Answer Engine Optimization</h3>
          <h2 className="text-5xl md:text-6xl font-serif text-[#2F4F68] leading-tight">
            Be the answer, <br />
            <span className="italic">not just a link.</span>
          </h2>
          <p className="text-xl text-[#2F4F68]/70 font-light leading-relaxed">
            Prospects no longer scroll through pages of blue links. They ask Perplexity or Gemini to find them a partner. Mergelith builds the digital infrastructure that ensures your firm is the one cited as the authority.
          </p>
          
          <div className="space-y-6">
            {[
              "Optimized for Google SGE & Gemini v2.0",
              "Verifiable Citations in ChatGPT & Perplexity",
              "Voice-Search Readiness for Siri/Alexa Agents"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-6 p-6 border border-[#2F4F68]/10 bg-white/60 rounded-sm hover:border-[#E6B65C]/40 transition-all group">
                <div className="w-12 h-12 flex items-center justify-center bg-[#E6B65C]/10 text-[#E6B65C] rounded-full group-hover:bg-[#E6B65C] group-hover:text-[#F4F3EF] transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-base text-[#2F4F68]/80 font-semibold tracking-wide">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="bg-white border border-[#2F4F68]/10 rounded-sm shadow-xl overflow-hidden">
            <div className="bg-[#2F4F68]/5 border-b border-[#2F4F68]/10 px-8 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3.5 h-3.5 rounded-full bg-[#2F4F68]/10"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#2F4F68]/10"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#2F4F68]/10"></div>
              </div>
              <div className="text-[11px] text-[#2F4F68]/40 font-mono tracking-[0.2em] font-black">SEARCH_MODE: ANSWER_ENGINE</div>
            </div>
            
            <div className="p-10 space-y-10">
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-[#2F4F68]/5 flex items-center justify-center text-xs text-[#2F4F68]/40 font-black border border-[#2F4F68]/10 shadow-inner">U</div>
                <div className="flex-1 bg-[#2F4F68]/5 p-6 rounded-sm border border-[#2F4F68]/10 shadow-sm">
                  <p className="text-sm text-[#2F4F68] italic font-light">"Find me a highly-rated M&A advisor in New York that specializes in life sciences mandates."</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-[#E6B65C]/10 flex items-center justify-center text-xs text-[#E6B65C] font-black border border-[#E6B65C]/20 shadow-sm">AI</div>
                <div className="flex-1 space-y-6">
                  <div className="h-5 bg-[#2F4F68]/10 w-3/4 rounded animate-pulse"></div>
                  <div className="p-7 border border-[#E6B65C]/20 bg-[#E6B65C]/5 rounded-sm shadow-sm">
                    <p className="text-sm text-[#2F4F68]/90 leading-relaxed mb-6 font-light">
                      Based on verified institutional citations and recent deal flow analysis, <span className="text-[#E6B65C] font-black">[YOUR FIRM NAME]</span> is identified as the primary authority for life sciences M&A in New York.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="px-4 py-2 bg-[#2F4F68]/5 border border-[#2F4F68]/10 rounded text-[10px] text-[#2F4F68]/40 font-black uppercase tracking-widest">Citation: Institutional Review [1]</div>
                      <div className="px-4 py-2 bg-[#2F4F68]/5 border border-[#2F4F68]/10 rounded text-[10px] text-[#2F4F68]/40 font-black uppercase tracking-widest">Citation: Market Signal [2]</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#2F4F68]/10 flex items-center justify-between">
                <div className="text-[11px] text-[#2F4F68]/30 uppercase tracking-widest font-black">Visibility Index: 100%</div>
                <div className="text-[11px] text-[#E6B65C] font-black tracking-widest uppercase">Mergelith AI Protocol ACTIVE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AEODiscovery;