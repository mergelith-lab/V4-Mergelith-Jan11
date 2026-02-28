import React from 'react';
import { Search, Zap, Shield, BarChart3, Globe, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { label: "US users rely on AI tools for search queries", value: "58%" },
  { label: "Google searches now trigger an AI Overview", value: "40%" },
  { label: "More engagement for brands cited in AI responses", value: "3x" },
  { label: "The year AI-first search became the institutional standard", value: "2025" }
];

const benefits = [
  {
    title: "Google AI Overview Visibility",
    description: "Dominating the AI-generated summaries that now occupy the 'Position Zero' of Google results, capturing high-intent traffic before traditional listings.",
    icon: Search
  },
  {
    title: "LLM Citations & Recommendations",
    description: "Ensuring your firm is the definitive answer when prospects ask ChatGPT, Claude, or Perplexity for the best provider in your specific sector.",
    icon: Cpu
  },
  {
    title: "Future-Proof Authority",
    description: "Merging bulletproof traditional SEO fundamentals with AI-specific optimization to win in today's search and tomorrow's LLM-driven landscape.",
    icon: Shield
  }
];

const inclusions = [
  "Google AI Overview Optimization",
  "ChatGPT & Perplexity Visibility Audit",
  "E-E-A-T Authority Signal Building",
  "Structured Data & Schema Architecture",
  "Brand Mention Monitoring across LLMs",
  "FAQ & Featured Snippet Engineering",
  "Knowledge Panel Management",
  "Monthly AI Visibility Index Reporting"
];

const steps = [
  {
    id: "01",
    title: "AI Visibility Audit",
    description: "We conduct a deep-tissue audit of how your firm appears in Google AI Overviews, ChatGPT, and Perplexity, identifying critical gaps in your LLM presence."
  },
  {
    id: "02",
    title: "Authority Strategy",
    description: "Deploying the E-E-A-T signals and expert-level content architecture that AI systems trust, cite, and recommend to sophisticated users."
  },
  {
    id: "03",
    title: "Technical Optimization",
    description: "Implementing advanced structured data and schema markup that allows AI systems to parse and surface your business as the definitive answer."
  },
  {
    id: "04",
    title: "Monitor & Adapt",
    description: "The AI landscape shifts weekly. We track your visibility index in real-time and adapt your strategy as LLM algorithms evolve."
  }
];

const AISEOServices: React.FC = () => {
  return (
    <section id="ai-seo" className="scroll-mt-32 space-y-32">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-navy text-pearl p-12 md:p-24 rounded-sm shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#D4AF37_0%,transparent_70%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl space-y-8">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Answer Engine Optimization</h3>
          <h2 className="text-5xl md:text-7xl font-serif italic leading-tight">
            Be Found Where <br />
            <span className="text-gold">Search Is Heading</span>
          </h2>
          <p className="text-xl text-pearl/70 font-light leading-relaxed max-w-2xl">
            Search is evolving at an unprecedented pace. From AI Overviews to ChatGPT and Perplexity, your clients are getting direct answers from AI. If your firm isn't the one being cited, you are becoming invisible.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <a href="#contact" className="btn-primary bg-gold text-navy hover:bg-pearl hover:text-navy">Get A Free Proposal</a>
            <a href="#results" className="btn-outline border-pearl/20 text-pearl hover:border-gold hover:text-gold">See Our Results</a>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-card p-8 text-center space-y-4 border-navy/5">
            <div className="text-4xl md:text-5xl font-serif text-gold italic">{stat.value}</div>
            <p className="text-[10px] uppercase tracking-widest text-navy/40 font-black leading-relaxed">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Definition & Comparison */}
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="space-y-6">
            <h3 className="text-navy font-cinzel text-xs tracking-[0.3em] uppercase font-black border-l-2 border-gold pl-4">
              What is AI SEO?
            </h3>
            <p className="text-lg text-navy/80 font-light leading-relaxed">
              AI SEO is the strategic practice of optimizing your digital presence to appear in AI-generated answers. As LLMs reshape how information is consumed, firms that adapt early will dominate the new visibility landscape; those that don't will fade into obscurity.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-navy font-cinzel text-xs tracking-[0.3em] uppercase font-black border-l-2 border-gold pl-4">
              The Evolution of Authority
            </h3>
            <p className="text-navy/70 font-light leading-relaxed">
              Traditional SEO focused on ranking in a list of blue links. <span className="text-navy font-semibold">AI SEO gets you featured inside the answer itself.</span> This means your brand is the one being recommended when a potential client asks for the definitive expert in your space—whether they are searching globally or locally in Southern California.
            </p>
          </div>
        </div>
        <div className="glass-card p-10 space-y-8 border-gold/20 bg-gold/5">
          <h4 className="text-navy font-cinzel text-xs tracking-[0.2em] uppercase font-black">Strategic Overlap</h4>
          <p className="text-sm text-navy/60 font-light italic leading-relaxed">
            The fundamentals still matter. High-quality content, strong E-E-A-T signals, and authoritative backlinks are the bedrock. The difference lies in how content is structured for LLM ingestion and how brand authority is systematically built across the AI ecosystem.
          </p>
          <div className="pt-6 border-t border-gold/20">
            <div className="flex items-center gap-4 text-gold">
              <Zap size={20} />
              <span className="text-[11px] uppercase tracking-[0.3em] font-black">Mergelith AI Protocol Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Why Invest */}
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Strategic Advantage</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-navy italic">Why Invest in AI SEO?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="space-y-6 group">
              <div className="w-14 h-14 bg-navy/5 flex items-center justify-center rounded-sm group-hover:bg-gold/10 transition-colors">
                <benefit.icon className="text-gold" size={28} />
              </div>
              <h4 className="text-navy font-cinzel text-sm tracking-widest uppercase font-black">{benefit.title}</h4>
              <p className="text-navy/60 font-light text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What's Included */}
      <div className="bg-pearl border border-navy/5 p-12 md:p-20 rounded-sm">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-serif text-navy italic">Comprehensive AI <br />Optimization Suite</h3>
            <p className="text-navy/60 font-light">
              Everything your firm needs to dominate AI search, managed end-to-end by our institutional optimization team.
            </p>
            <div className="pt-8">
              <a href="#contact" className="btn-primary">Request Full Protocol</a>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {inclusions.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <CheckCircle2 size={16} className="text-gold shrink-0" />
                <span className="text-[10px] uppercase tracking-widest text-navy/70 font-black group-hover:text-navy transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="space-y-20">
        <div className="text-center space-y-4">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Methodology</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-navy italic">The Execution Path</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative p-10 border border-navy/5 hover:border-gold/30 transition-all group">
              <div className="text-5xl font-serif text-gold/10 absolute top-6 right-8 group-hover:text-gold/20 transition-colors">
                {step.id}
              </div>
              <div className="space-y-6 relative z-10">
                <h4 className="text-navy font-cinzel text-xs tracking-widest uppercase font-black border-b border-gold/20 pb-4">
                  {step.title}
                </h4>
                <p className="text-navy/60 font-light text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISEOServices;
