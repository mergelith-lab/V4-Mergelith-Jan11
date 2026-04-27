import React from 'react';
import { CheckCircle2, Package } from 'lucide-react';

const WhoThisIsFor: React.FC = () => {
  const fits = [
    "You are an established authority but appear invisible in ChatGPT or Perplexity results.",
    "Your competitors are capturing the 'Answer Slot' in Google AI Overviews.",
    "You want to track your AI Visibility Index across 17+ generative engines.",
    "You need to protect your institutional brand from AI hallucinations or misattribution.",
    "You want a long-term digital moat by encoding your brand into LLM training data."
  ];

  const deliverables = [
    "AEO Integrity Audit & Visibility Scorecard",
    "Structured Entity Mapping (Schema Architecture)",
    "GEO Protocol Implementation for LLM Citations",
    "Competitor AI Benchmarking & Gap Analysis",
    "Real-Time AEO Intelligence Dashboard"
  ];

  return (
    <section id="who-this-is-for" className="scroll-mt-32">
      <div className="space-y-24">
        {/* Who this is for */}
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Target Profile</h3>
              <h2 className="text-4xl md:text-6xl font-serif text-navy italic leading-tight">
                Who This <br />
                <span className="text-gold">Is For</span>
              </h2>
            </div>
            <p className="text-xl text-navy/70 font-light leading-relaxed border-l-2 border-gold pl-8">
              Mergelith is for anyone who wants to monitor their AI visibility and systematically improve how major models perceive and recommend their brand.
            </p>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 gap-6">
            {[
              "You want to know exactly what ChatGPT or Perplexity says about your brand.",
              "You see competitors capturing the 'Answer Slot' in AI search results.",
              "You want to track your AI Visibility Index across 17+ generative engines.",
              "You need to protect your authority from AI hallucinations or misattribution.",
              "You want a long-term digital moat by encoding your brand into LLM training data."
            ].map((fit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-white border border-navy/5 shadow-sm hover:shadow-md transition-all group">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <p className="text-navy font-medium leading-relaxed">{fit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What you get */}
        <div className="bg-navy p-12 md:p-20 rounded-sm text-pearl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3 space-y-6">
              <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-sm">
                <Package className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-4xl font-serif italic">The AEO/GEO Stack</h3>
              <p className="text-pearl/60 font-light">Delivered as a technical protocol that embeds your firm into the generative web. We own the optics; you own the authority.</p>
              <div className="pt-6">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-black">Implementation Timeline</p>
                <p className="text-xl font-serif italic mt-2">Active intelligence in 14 days.</p>
              </div>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-sm hover:border-gold/30 transition-colors">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm font-light tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
