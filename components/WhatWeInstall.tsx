import React from 'react';
import { Target, Search, Database, Fingerprint, Globe, BarChart3, LineChart, ShieldCheck } from 'lucide-react';

const WhatWeInstall: React.FC = () => {
  const stats = [
    { label: "AI Share of Voice", value: "85%+", sub: "Targeted visibility in AI search" },
    { label: "Citation Velocity", value: "300%", sub: "Increase in brand mentions across LLMs" },
    { label: "Ranking Acceleration", value: "30 Days", sub: "Average time to extractable answer lift" },
    { label: "AEO/GEO Stacking", value: "12x", sub: "Compounding authority across models" }
  ];

  const systems = [
    {
      id: "1",
      title: "Semantic Content Architecture",
      desc: "We restructure your institutional knowledge into technical 'Answer Slots' that AI models can easily ingest. This ensures your expertise is the definitive source for industry-specific queries.",
      roi: "Direct answer injection in Google AI Overviews and ChatGPT Search.",
      payoff: "30–60 days",
      bestFor: "Institutional Advisory, Private Equity, Specialized Professional Services.",
      icon: Search
    },
    {
      id: "2",
      title: "LLM Institutionalization (GEO)",
      desc: "Encoding your brand authority into the training datasets of major LLMs. We secure verifiable citations and ensure AI models associate your partners with high-stakes expertise.",
      roi: "Establishing a long-term digital moat in foundation model responses.",
      payoff: "90 days (per training cycle)",
      bestFor: "Institutional brands with complex authority requirements.",
      icon: Database
    },
    {
      id: "3",
      title: "AEO Intelligence Dashboard",
      desc: "The optics needed to 'Track, Measure, and Optimize'. Real-time monitoring of your AI Visibility Index across 17+ generative engines including Perplexity and Claude.",
      roi: "Data-driven clarity on your AI market share vs. competitors.",
      payoff: "Immediate deployment",
      bestFor: "Firms currently spending on traditional SEO without AEO optics.",
      icon: LineChart
    },
    {
      id: "4",
      title: "Verification & Citation Shield",
      desc: "Defending your reputation from AI hallucinations. We implement structured protocols that force high-confidence citations and correct misattributed institutional data.",
      roi: "100% accurate brand representation in generative responses.",
      payoff: "Continuous protection",
      bestFor: "High-stakes firms where accuracy is a compliance requirement.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="what-we-install" className="scroll-mt-32">
      <div className="space-y-24">
        {/* Visibility Acceleration Summary */}
        <div className="bg-navy p-12 md:p-16 rounded-sm text-pearl relative overflow-hidden">
          <div className="relative z-10 space-y-12">
            <div className="max-w-3xl space-y-6">
              <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Mergelith AI Visibility Protocol</h3>
              <h2 className="text-4xl md:text-5xl font-serif italic leading-tight">
                4 Systems That Rank, Influence & Secure Your AI Market Share
              </h2>
              <p className="text-pearl/60 font-light text-lg leading-relaxed">
                As traditional search fades, your firm's authority is now measured by AI summaries. These four systems ensure you aren't just 'online' — you are <span className="text-gold font-medium">the primary expert recommended by AI.</span>
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="text-4xl md:text-5xl font-serif text-gold italic">{stat.value}</p>
                  <p className="text-sm font-bold uppercase tracking-widest">{stat.label}</p>
                  <p className="text-xs text-pearl/40 italic">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </div>

        <div className="space-y-16">
          <div className="max-w-3xl space-y-6">
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Institutional Implementation</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-navy italic leading-tight">
              AEO/GEO <span className="text-gold">Architecture</span>
            </h2>
            <p className="text-navy/60 font-light text-lg italic">Engineering authority for the engines that generate the future of search.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {systems.map((system) => (
              <div key={system.id} className="bg-white p-10 border border-navy/5 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-navy/5 flex items-center justify-center rounded-sm group-hover:bg-gold/10 transition-colors">
                      <system.icon className="w-6 h-6 text-gold" />
                    </div>
                    <span className="text-navy/20 font-serif italic text-4xl">{system.id}</span>
                  </div>
                  <h4 className="text-2xl font-serif text-navy italic group-hover:text-gold transition-colors">{system.title}</h4>
                  <p className="text-navy/60 text-sm font-light leading-relaxed">
                    {system.desc}
                  </p>
                  <div className="pt-6 border-t border-navy/5 space-y-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gold font-black mb-1">Primary Impact</p>
                      <p className="text-navy font-medium text-sm leading-relaxed">{system.roi}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-navy/30 font-black mb-1">Payoff Timeline</p>
                      <p className="text-navy/60 text-sm italic">{system.payoff}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-navy/5">
                  <p className="text-[10px] uppercase tracking-widest text-navy/30 font-black mb-2">Ideal Benchmark</p>
                  <p className="text-navy/50 text-xs italic">{system.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeInstall;
