import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Globe,
  Bot,
  Sparkles,
  ListChecks,
  TrendingUp,
  LineChart,
  Activity
} from 'lucide-react';
import { motion } from 'motion/react';

const SearchVisibilityReport: React.FC = () => {
  useEffect(() => {
    document.title = "SEO, AEO & GEO Audit for Small Business | Mergelith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "A full search visibility audit covering traditional SEO, AI answer engine optimization (AEO), and generative engine optimization (GEO) — with a prioritized action plan.");
    }

    // FAQ Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What's the difference between SEO, AEO, and GEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO (Search Engine Optimization) ranks you in traditional Google/Bing results. AEO (Answer Engine Optimization) gets you cited by AI tools like ChatGPT/Perplexity. GEO (Generative Engine Optimization) gets you into AI-generated search summaries like Google AI Overviews."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need all three, or just SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If buyers are researching your category, they're using AI. Optimizing only for SEO means you're invisible to a growing share of research behavior. These are no longer separate disciplines."
          }
        },
        {
          "@type": "Question",
          "name": "Will the report tell me specifically what to change?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every finding includes a specific, actionable recommendation — the exact rewrite, the exact code snippet, or the specific structure change needed."
          }
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <article className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <span className="text-gold font-black text-[10px] uppercase tracking-[0.4em] border-b border-gold/30 pb-2">
              GROWTH TIER AUDIT & STRATEGY
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-navy italic leading-tight">
              Your Business Isn't Just Being Searched on <span className="text-gold">Google</span> Anymore
            </h1>
            <p className="text-xl text-navy/60 font-light max-w-xl leading-relaxed">
              In 2026, buyers find you through traditional search, AI answer engines, and generative search summaries. Most small businesses are invisible in all three.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="https://calendly.com/mergelith/30min" target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-5 text-sm tracking-widest text-center italic font-serif">
                AUDIT YOUR VISIBILITY &rarr;
              </a>
              <Link to="/pricing" className="px-12 py-5 border border-navy/10 text-navy text-[11px] uppercase tracking-[0.3em] font-black hover:bg-navy hover:text-pearl transition-all text-center">
                VIEW GROWTH PLAN
              </Link>
            </div>
          </motion.div>
          
          <div className="relative">
             <div className="aspect-square bg-pearl border border-navy/5 p-12 rounded-sm shadow-2xl flex flex-col justify-between overflow-hidden group">
                <div className="grid grid-cols-2 gap-8 relative z-10">
                   <div className="space-y-4">
                      <Globe className="text-gold/60" size={32} />
                      <p className="text-[10px] font-black uppercase tracking-widest text-navy/40">Traditional SEO</p>
                      <div className="h-1.5 bg-navy/5 w-full"></div>
                   </div>
                   <div className="space-y-4">
                      <Bot className="text-gold/60" size={32} />
                      <p className="text-[10px] font-black uppercase tracking-widest text-navy/40">AI Answer Engines</p>
                      <div className="h-1.5 bg-navy/5 w-full"></div>
                   </div>
                   <div className="space-y-4">
                      <Sparkles className="text-gold/60" size={32} />
                      <p className="text-[10px] font-black uppercase tracking-widest text-navy/40">Generative Search</p>
                      <div className="h-1.5 bg-navy/5 w-full"></div>
                   </div>
                   <div className="space-y-4">
                      <Activity className="text-gold/60" size={32} />
                      <p className="text-[10px] font-black uppercase tracking-widest text-navy/40">Visibility Audit</p>
                      <div className="h-1.5 bg-navy/5 w-full"></div>
                   </div>
                </div>
                
                <div className="mt-12 bg-navy p-8 -mx-12 -mb-12 flex justify-between items-center group-hover:bg-navy/95 transition-colors">
                   <div className="space-y-1">
                      <p className="text-[8px] uppercase tracking-widest font-black text-gold">Status Report</p>
                      <p className="text-xl font-serif italic text-pearl leading-none">Visibility Locked</p>
                   </div>
                   <Search className="text-gold" size={24} />
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 -z-10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* content */}
        <div className="prose prose-lg prose-navy max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-navy prose-p:text-navy/70 prose-strong:text-navy">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <section className="space-y-6">
                <p className="text-2xl text-navy font-light leading-relaxed italic border-l-4 border-gold pl-8">
                  Buyers are no longer just browsing lists of links. They're asking ChatGPT. They're reading Google AI Overviews. If you're only optimizing for traditional keywords, you're missing half the research journey.
                </p>
                <p>
                  The Mergelith SEO / AEO / GEO report shows you where you stand and exactly what to fix. Delivered as a structured written report with a prioritized action plan your team can execute immediately.
                </p>
              </section>

              <section className="space-y-8 pb-12 border-b border-navy/5">
                <h2 className="text-3xl font-serif text-navy italic">The Triple-Engine Audit</h2>
                <div className="grid lg:grid-cols-3 gap-8">
                   <div className="p-8 bg-pearl border border-navy/5 rounded-sm space-y-4">
                      <div className="inline-flex items-center gap-2 text-gold">
                         <Globe size={16} />
                         <span className="text-[10px] font-black uppercase tracking-widest text-navy">SEO</span>
                      </div>
                      <h4 className="text-xl font-serif text-navy italic">Traditional Search</h4>
                      <p className="text-xs text-navy/60 leading-relaxed font-light">Keyword gap analysis, on-page structure, technical health, and competitor benchmarking.</p>
                   </div>
                   <div className="p-8 bg-pearl border border-navy/5 rounded-sm space-y-4">
                      <div className="inline-flex items-center gap-2 text-gold">
                         <Bot size={16} />
                         <span className="text-[10px] font-black uppercase tracking-widest text-navy">AEO</span>
                      </div>
                      <h4 className="text-xl font-serif text-navy italic">AI Answer Engines</h4>
                      <p className="text-xs text-navy/60 leading-relaxed font-light">Assessment of structure to be cited by ChatGPT, Perplexity, and similar LLM-based tools.</p>
                   </div>
                   <div className="p-8 bg-pearl border border-navy/5 rounded-sm space-y-4">
                      <div className="inline-flex items-center gap-2 text-gold">
                         <Sparkles size={16} />
                         <span className="text-[10px] font-black uppercase tracking-widest text-navy">GEO</span>
                      </div>
                      <h4 className="text-xl font-serif text-navy italic">Generative Search</h4>
                      <p className="text-xs text-navy/60 leading-relaxed font-light">Schema markup gaps and content hooks that drive inclusion in AI Overviews and Copilots.</p>
                   </div>
                </div>
              </section>

              <section className="space-y-8 py-12 border-b border-navy/5">
                <h2 className="text-3xl font-serif text-navy italic">Prioritized Action Plan</h2>
                <div className="space-y-8">
                   <p className="text-navy/70 font-light leading-relaxed">Every finding is assigned a priority level and effort estimate. Quick wins are separated from strategic investments.</p>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-4">
                         <CheckCircle2 className="text-gold mt-1 shrink-0" size={18} />
                         <div className="space-y-1">
                            <p className="font-bold uppercase tracking-widest text-xs text-navy">Keyword Gaps</p>
                            <p className="text-sm font-light text-navy/60">Specific terms your buyers are searching that you aren't ranking for yet.</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <CheckCircle2 className="text-gold mt-1 shrink-0" size={18} />
                         <div className="space-y-1">
                            <p className="font-bold uppercase tracking-widest text-xs text-navy">On-Page precision</p>
                            <p className="text-sm font-light text-navy/60">Title tags, H1 structure, and keyword usage across your core service pages.</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <CheckCircle2 className="text-gold mt-1 shrink-0" size={18} />
                         <div className="space-y-1">
                            <p className="font-bold uppercase tracking-widest text-xs text-navy">Schema Markup</p>
                            <p className="text-sm font-light text-navy/60">Technical identifiers that tel search engines exactly who you are and what you do.</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <CheckCircle2 className="text-gold mt-1 shrink-0" size={18} />
                         <div className="space-y-1">
                            <p className="font-bold uppercase tracking-widest text-xs text-navy">AI Intent Check</p>
                            <p className="text-sm font-light text-navy/60">Formatting recommendations that improve your citation likelihood in AI answers.</p>
                         </div>
                      </div>
                   </div>
                </div>
              </section>

              <section className="space-y-8 pt-12">
                <h2 className="text-3xl font-serif text-navy italic">Frequently Asked Questions</h2>
                <div className="space-y-10">
                   <div className="space-y-3">
                      <h4 className="text-xl font-serif text-navy italic capitalize">What's the difference between SEO, AEO, and GEO?</h4>
                      <p className="text-navy/70 font-light leading-relaxed">SEO ranks you in traditional results. AEO optimizes you for citation by AI tools answering questions. GEO focuses on appearing in AI-generated search summaries. Your buyers are using all three to research.</p>
                   </div>
                   <div className="space-y-3">
                      <h4 className="text-xl font-serif text-navy italic">Do I need all three?</h4>
                      <p className="text-navy/70 font-light leading-relaxed">Yes. Optimizing only for SEO means you're invisible to the growing share of AI search research behavior. The report covers all three because they are no longer separate disciplines.</p>
                   </div>
                   <div className="space-y-3">
                      <h4 className="text-xl font-serif text-navy italic underline decoration-gold/30">Actionable or Theory?</h4>
                      <p className="text-navy/70 font-light leading-relaxed">Actionable. Every finding includes a specific, directive recommendation — the exact rewrite or code snippet needed to improve visibility.</p>
                   </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="bg-navy p-10 text-pearl rounded-sm space-y-6 sticky top-32">
                <h4 className="text-xs uppercase tracking-[0.4em] font-black text-gold/60">Deliverable</h4>
                <div className="space-y-2">
                  <p className="text-3xl font-serif italic text-gold">Growth Tier</p>
                  <p className="text-xs text-pearl/40 font-light uppercase tracking-widest leading-none">Priority Strategy</p>
                </div>
                <div className="pt-6 border-t border-white/5 space-y-6">
                  <p className="text-sm font-light text-pearl/60 italic leading-relaxed">
                    Growth tier also includes everything in Standard plus campaign briefs, GTM strategy, and weekly social posts.
                  </p>
                  <Link to="/pricing" className="block w-full py-4 bg-gold text-navy text-[10px] uppercase tracking-widest font-black text-center hover:bg-white transition-colors">
                    EXPLORE GROWTH &rarr;
                  </Link>
                </div>
              </div>

              <div className="p-8 border border-navy/5 rounded-sm space-y-4">
                 <ShieldCheck className="text-gold" size={24} />
                 <h4 className="text-[10px] uppercase tracking-widest font-black">Search practitioner</h4>
                 <p className="text-xs text-navy/60 font-light leading-relaxed italic">Built to drive revenue, not rank. Every recommendation is filtered through commercial value.</p>
              </div>
            </aside>
          </div>
        </div>

        {/* Footer CTA */}
        <section className="mt-32 p-16 bg-pearl border border-navy/5 rounded-sm text-center">
          <h2 className="text-4xl font-serif text-navy italic mb-8 italic">Find Out Where Your Business Is Invisible — and Fix It</h2>
          <a href="https://calendly.com/mergelith/30min" className="btn-primary px-16 py-6 text-sm tracking-widest italic font-serif inline-block">
             REQUEST YOUR AUDIT &rarr;
          </a>
        </section>
      </article>
    </div>
  );
};

export default SearchVisibilityReport;
