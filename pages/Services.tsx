import React from 'react';
import { Presentation, MessageSquare, Palette, Sword, FileText, BarChart, Map, Megaphone, TrendingUp, Share2, ShieldAlert } from 'lucide-react';

const Services: React.FC = () => {
  const coreDeliverables = [
    {
      title: "Corporate Slide Decks",
      desc: "Multi-slide presentations for investor meetings, board decks, capability presentations, and executive briefings.",
      details: ["Structured narrative", "Data visualizations", "Consistent branding", "delivered as PPT or Slides"],
      icon: Presentation
    },
    {
      title: "Sales Pitch Decks",
      desc: "Commercial pitch presentations built to close -- not just to impress.",
      details: ["Problem-solution-proof-offer-CTA", "Objection pre-handling", "Prospect-specific framing", "Executive summary included"],
      icon: MessageSquare
    },
    {
      title: "Brand Kits",
      desc: "Everything needed to look professional, consistent, and credible across every touchpoint.",
      details: ["Color palette & hex codes", "Typography system", "Logo usage rules", "Brand application examples"],
      icon: Palette
    },
    {
      title: "Battle Cards",
      desc: "Competitive intelligence tools your sales team will actually use in the field.",
      details: ["Competitor SWOT", "Positioning against claims", "Top 5 objection handles", "Scannable in 60 seconds"],
      icon: Sword
    },
    {
      title: "One-Pagers",
      desc: "Single-page sales tools that communicate the full picture in the time a prospect will give you.",
      details: ["Product/service overview", "Key proof points", "Digital & print ready", "Capability briefs"],
      icon: FileText
    },
    {
      title: "Infographics",
      desc: "Visual communication that makes complex information immediately clear.",
      details: ["Market maps", "Process flow diagrams", "Feature matrices", "Branded data viz"],
      icon: BarChart
    }
  ];

  const strategicDeliverables = [
    {
      title: "GTM Strategy Documents",
      desc: "Go-to-market frameworks that map your path to more customers -- not just more activity.",
      details: ["Market entry timing", "ICP definition", "Channel architecture", "30/60/90-day plan"],
      icon: Map
    },
    {
      title: "Campaign Briefs",
      desc: "Integrated campaign planning documents that connect your offer to a measurable growth outcome.",
      details: ["Success metrics", "Audience segments", "Channel maps", "Budget rationale"],
      icon: Megaphone
    },
    {
      title: "SEO / AEO / GEO Reports",
      desc: "Organic search and AI search visibility strategy for businesses that want to be found before the competition.",
      details: ["Topic opportunity analysis", "Competitive gap ID", "LLM optimization strategy", "Ranking rationale"],
      icon: TrendingUp
    },
    {
      title: "Social Media Posts (4/mo)",
      desc: "Written and designed -- delivered to you for publishing with your own CTA.",
      details: ["Instagram/FB/X", "Post copy + design brief", "Finished graphics", "Platform appropriate formats"],
      icon: Share2
    }
  ];

  return (
    <div className="pt-32 pb-32 space-y-32">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <p className="text-[11px] uppercase tracking-[0.5em] text-gold-dark font-black">Our Capabilities</p>
        <h1 className="text-5xl md:text-8xl font-serif italic text-navy leading-tight">
          Every Deliverable. <br />
          <span className="text-gold">One Subscription. Always in 48 Hours.</span>
        </h1>
        <p className="text-xl md:text-2xl text-navy/60 font-light max-w-3xl mx-auto italic">
          Submit any of the following as a request. Standard and Growth tiers determine what is in scope.
        </p>
      </section>

      {/* Core Deliverables */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex items-center gap-4">
          <div className="h-px bg-gold/30 flex-1"></div>
          <h2 className="text-[12px] uppercase tracking-[0.4em] text-navy font-black whitespace-nowrap">Core Execution Deliverables</h2>
          <div className="h-px bg-gold/30 flex-1"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreDeliverables.map((s, idx) => (
            <div key={idx} className="bg-white p-10 border border-navy/5 shadow-sm space-y-6 hover:shadow-xl transition-all duration-500 rounded-sm group">
              <div className="w-12 h-12 bg-navy/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all rounded-sm">
                <s.icon size={24} strokeWidth={1} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-navy italic">{s.title}</h3>
                <p className="text-navy/60 text-sm italic leading-relaxed">{s.desc}</p>
                <ul className="space-y-2 pt-4">
                  {s.details.map((d, i) => (
                    <li key={i} className="text-[10px] uppercase tracking-widest text-navy/60 font-bold flex items-center gap-2">
                       <span className="w-1 h-1 bg-gold rounded-full"></span>
                       {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Deliverables */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex items-center gap-4">
          <div className="h-px bg-gold/30 flex-1"></div>
          <h2 className="text-[12px] uppercase tracking-[0.4em] text-gold-dark font-black whitespace-nowrap">Growth Tier: Strategic Deliverables</h2>
          <div className="h-px bg-gold/30 flex-1"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {strategicDeliverables.map((s, idx) => (
            <div key={idx} className="bg-navy p-10 border border-white/5 shadow-sm flex flex-col md:flex-row gap-8 items-start hover:border-gold/30 transition-all duration-500 rounded-sm group">
              <div className="w-16 h-16 bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all rounded-sm shrink-0">
                <s.icon size={32} strokeWidth={1} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-pearl italic capitalize">{s.title}</h3>
                <p className="text-pearl/60 text-sm italic leading-relaxed font-light">{s.desc}</p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 pt-4">
                  {s.details.map((d, i) => (
                    <div key={i} className="text-[10px] uppercase tracking-widest text-pearl/60 font-bold flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-gold/40 rounded-full"></span>
                       {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Standalone Project */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gold p-12 md:p-16 rounded-sm text-navy space-y-8 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] font-black">Standalone Strategy Audit</p>
            <h2 className="text-4xl md:text-5xl font-serif italic leading-tight">Process Intelligence Report — $3,000</h2>
            <p className="text-navy/70 text-lg font-light leading-relaxed max-w-2xl mx-auto">
               Your AI strategy audit. One deliverable. One week. Identifying where AI tools can reduce friction and accelerate revenue.
            </p>
            <div className="pt-6">
                <a href="https://calendly.com/sasha-g-aleksic/30min" target="_blank" rel="noopener noreferrer" className="btn-primary bg-navy text-pearl hover:bg-pearl hover:text-navy px-12 py-5 text-sm tracking-widest">
                    GET YOUR REPORT
                </a>
            </div>
        </div>
      </section>

      {/* What Mergelith Does Not Do */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center pb-32">
        <div className="space-y-4">
           <div className="flex justify-center mb-6">
               <ShieldAlert className="w-12 h-12 text-navy/20" />
           </div>
           <p className="text-[11px] uppercase tracking-[0.5em] text-navy font-black">Scope Boundaries</p>
           <h2 className="text-4xl font-serif italic text-navy">What Mergelith Does Not Do.</h2>
           <p className="text-navy/60 font-light italic">We are a content and document delivery service. What sits outside our scope:</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
           {[
             "Paid media buying",
             "Web development",
             "Video production",
             "Photography",
             "Account management",
             "Campaign management"
           ].map((item, idx) => (
             <div key={idx} className="p-6 border border-navy/5 bg-navy/5 rounded-sm">
                <p className="text-[10px] uppercase tracking-widest font-black text-navy/60">{item}</p>
             </div>
           ))}
        </div>
        
        <p className="text-navy/40 text-sm italic font-light pt-8">
           "If you are unsure whether a request is in scope, submit it and ask. Mergelith will confirm within 24 hours."
        </p>
      </section>
    </div>
  );
};

export default Services;
