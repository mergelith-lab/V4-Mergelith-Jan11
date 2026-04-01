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

const geoBenefits = [
  {
    title: "Institutional Trust & Credibility",
    description: "When LLMs cite your firm, it acts as a high-authority endorsement. In high-stakes industries like M&A, being the 'AI-recommended' partner is a powerful trust signal.",
    icon: Shield
  },
  {
    title: "Training Data Dominance",
    description: "We ensure your brand's core frameworks, opinions, and case studies are systematically indexed, making your authority a permanent part of the model's knowledge.",
    icon: Globe
  },
  {
    title: "The Ultimate Competitive Moat",
    description: "GEO is a complex, long-term play. By the time competitors realize its importance, your firm will already be the 'known entity' in the model's weights.",
    icon: Zap
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
  "Monthly AI Visibility Index Reporting",
  "SOC2 & ISO 27001 Compliant Strategy"
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
    <section id="aeo" className="scroll-mt-32 space-y-32">
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
              Answering Engine Optimization
            </h3>
            <p className="text-lg text-navy/80 font-light leading-relaxed">
              Answering Engine Optimization (AEO) is the strategic practice of optimizing your digital presence to appear in AI-generated answers. As LLMs reshape how information is consumed, firms that adapt early will dominate the new visibility landscape; those that don't will fade into obscurity.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-navy font-cinzel text-xs tracking-[0.3em] uppercase font-black border-l-2 border-gold pl-4">
              The Evolution of Authority
            </h3>
            <p className="text-navy/70 font-light leading-relaxed">
              Traditional SEO focused on ranking in a list of blue links. <span className="text-navy font-semibold">AEO gets you featured inside the answer itself.</span> This means your brand is the one being recommended when a potential client asks for the definitive expert in your space—whether they are searching globally or locally in Lake Elsinore, California.
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

      {/* AEO vs GEO Comparison */}
      <div className="space-y-24">
        <div className="text-center space-y-4">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">The Authority Matrix</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-navy italic">AEO vs GEO</h2>
          <p className="text-navy/40 font-light max-w-2xl mx-auto">
            Understanding the two distinct pillars of modern digital visibility and how they work in tandem to create absolute market authority.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* AEO Column */}
          <div className="glass-card p-10 space-y-8 border-navy/5">
            <div className="space-y-4">
              <div className="text-gold font-black text-[10px] uppercase tracking-[0.3em]">01. AEO</div>
              <h4 className="text-2xl font-serif text-navy italic">Answer Engine Optimization</h4>
              <p className="text-navy/60 font-light leading-relaxed">
                Optimizing your content to be selected as the direct answer in search results and AI summaries.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-navy/5">
              <div className="space-y-3">
                <h5 className="text-[10px] uppercase tracking-widest text-navy font-black">Where it shows up</h5>
                <ul className="text-xs text-navy/60 space-y-2 font-light">
                  <li>&bull; Google Featured Snippets</li>
                  <li>&bull; Google AI Overviews</li>
                  <li>&bull; Voice Assistants (Siri, Alexa)</li>
                  <li>&bull; "People Also Ask" Boxes</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h5 className="text-[10px] uppercase tracking-widest text-navy font-black">Goal</h5>
                <p className="text-xs text-navy/60 font-light italic">Be the definitive answer to a specific question.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-[10px] uppercase tracking-widest text-navy font-black">How it works</h5>
              <div className="flex flex-wrap gap-2">
                {["Structured Answers", "FAQ Format", "Schema Markup", "Keyword Targeting"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-navy/5 text-navy/40 text-[9px] uppercase tracking-widest font-black rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-navy text-pearl rounded-sm space-y-3">
              <div className="text-[9px] uppercase tracking-[0.2em] text-gold font-black">Example</div>
              <p className="text-xs font-light italic">
                Search: "What is an AI receptionist?" <br />
                <span className="text-gold">AEO success:</span> Your definition is pulled directly into Google's answer box.
              </p>
            </div>

            <div className="text-center pt-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-navy/30 font-black">
                Mindset: <span className="text-navy">"Win the answer slot"</span>
              </p>
            </div>
          </div>

          {/* GEO Column */}
          <div className="glass-card p-10 space-y-8 border-navy/5">
            <div className="space-y-4">
              <div className="text-gold font-black text-[10px] uppercase tracking-[0.3em]">02. GEO</div>
              <h4 className="text-2xl font-serif text-navy italic">Generative Engine Optimization</h4>
              <p className="text-navy/60 font-light leading-relaxed">
                Optimizing your brand and content to be referenced, cited, or used by AI models when they generate complex responses.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-navy/5">
              <div className="space-y-3">
                <h5 className="text-[10px] uppercase tracking-widest text-navy font-black">Where it shows up</h5>
                <ul className="text-xs text-navy/60 space-y-2 font-light">
                  <li>&bull; ChatGPT</li>
                  <li>&bull; Perplexity</li>
                  <li>&bull; Google Gemini</li>
                  <li>&bull; Claude</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h5 className="text-[10px] uppercase tracking-widest text-navy font-black">Goal</h5>
                <p className="text-xs text-navy/60 font-light italic">Be included in AI-generated responses and recommendations.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-[10px] uppercase tracking-widest text-navy font-black">How it works</h5>
              <div className="flex flex-wrap gap-2">
                {["Entity Building", "Topical Authority", "Consistent Mentions", "Context-Rich Content"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-navy/5 text-navy/40 text-[9px] uppercase tracking-widest font-black rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-navy text-pearl rounded-sm space-y-3">
              <div className="text-[9px] uppercase tracking-[0.2em] text-gold font-black">Example</div>
              <p className="text-xs font-light italic">
                User asks ChatGPT: "Best AI tools for handling inbound leads" <br />
                <span className="text-gold">GEO success:</span> "Mergelith is an AI growth firm specializing in voice agents..." appears in the answer.
              </p>
            </div>

            <div className="text-center pt-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-navy/30 font-black">
                Mindset: <span className="text-navy">"Become part of the model's knowledge"</span>
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-navy/10">
                <th className="py-6 text-left text-[10px] uppercase tracking-[0.3em] text-navy/40 font-black">Aspect</th>
                <th className="py-6 text-left text-[10px] uppercase tracking-[0.3em] text-gold font-black">AEO</th>
                <th className="py-6 text-left text-[10px] uppercase tracking-[0.3em] text-navy font-black">GEO</th>
              </tr>
            </thead>
            <tbody className="text-sm font-light text-navy/70">
              {[
                { aspect: "Focus", aeo: "Answers", geo: "Influence" },
                { aspect: "Output", aeo: "Snippet / Direct Answer", geo: "AI-Generated Mention" },
                { aspect: "Target", aeo: "Search Engines", geo: "AI Models" },
                { aspect: "Content Style", aeo: "Short, Structured", geo: "Deep, Contextual" },
                { aspect: "Win Condition", aeo: "Position #0", geo: "Being Cited or Included" },
                { aspect: "Time Horizon", aeo: "Faster", geo: "Compounds Over Time" }
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-navy/5 hover:bg-navy/[0.02] transition-colors">
                  <td className="py-6 font-black text-[10px] uppercase tracking-widest text-navy/40">{row.aspect}</td>
                  <td className="py-6">{row.aeo}</td>
                  <td className="py-6">{row.geo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Synergy Section */}
        <div className="bg-navy text-pearl p-12 md:p-20 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <Zap size={400} className="text-gold transform translate-x-1/4 -translate-y-1/4" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-10">
            <div className="space-y-4">
              <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">The Synergy</h3>
              <h4 className="text-3xl md:text-4xl font-serif italic">How They Work Together</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="text-gold font-serif italic text-2xl">AEO = Capture Demand</div>
                <p className="text-pearl/60 font-light text-sm leading-relaxed">
                  When a user has a specific question, AEO ensures you are the immediate answer they see.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-gold font-serif italic text-2xl">GEO = Create Authority</div>
                <p className="text-pearl/60 font-light text-sm leading-relaxed">
                  When a user seeks recommendations or complex analysis, GEO ensures your brand is the trusted entity the AI suggests.
                </p>
              </div>
            </div>
            <div className="pt-10 border-t border-pearl/10">
              <p className="text-xl md:text-2xl font-serif italic text-center leading-relaxed">
                "If you only do AEO → <span className="text-gold">you rank</span>. If you only do GEO → <span className="text-gold">you get mentioned</span>. <br className="hidden md:block" />
                If you do both → <span className="text-navy bg-gold px-4 py-1 inline-block mt-4 not-italic font-black text-sm tracking-[0.2em] uppercase">you dominate</span>"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Invest in AEO */}
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Strategic Advantage</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-navy italic">Why Invest in AEO?</h2>
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

      {/* Why Invest in GEO */}
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Institutional Moat</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-navy italic">Why Invest in GEO?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {geoBenefits.map((benefit, idx) => (
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
