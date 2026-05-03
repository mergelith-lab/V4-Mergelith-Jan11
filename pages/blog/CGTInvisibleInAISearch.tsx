import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  EyeOff, 
  Target, 
  RotateCw,
  Cpu,
  BarChart3,
  Network,
  Zap,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

const CGTInvisibleInAISearch: React.FC = () => {
  useEffect(() => {
    document.title = "Most CGT Companies Are Invisible in AI Search | Mergelith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Most CGT companies are doing everything right—scientifically. But AI search cannot find them. Learn why and how to fix your AI search visibility.");
    }
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 mb-16"
        >
          <div className="flex items-center gap-4 text-gold mb-6">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black border-b border-gold/30 pb-1">AEO Strategy</span>
            <span className="w-1 h-1 bg-gold/30 rounded-full"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black border-b border-gold/30 pb-1">March 28, 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-navy italic leading-tight">
            Most <span className="text-gold">CGT Companies</span> Are Invisible in AI Search — Here’s Why and How to Fix It
          </h1>
          <p className="text-xl text-navy/60 font-light leading-relaxed max-w-3xl border-l-2 border-gold/20 pl-8 italic">
            Most CGT companies are doing everything right—scientifically. But AI search cannot find them. If AI cannot find you, you are not even in the conversation.
          </p>
        </motion.header>

        {/* Content */}
        <div className="prose prose-lg prose-navy max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-navy prose-p:text-navy/70 prose-strong:text-navy prose-li:text-navy/70 prose-a:text-gold prose-a:transition-colors prose-a:decoration-gold/30">
          <p>
            Cell and Gene Therapy (CGT) represents the absolute frontier of medicine. The science is revolutionary. The investment is massive. The talent is unparalleled. Yet, in the new era of search — where physicians, investors, and potential partners are using ChatGPT, Perplexity, and Google's AI Overviews to find information — most CGT companies simply don't exist.
          </p>

          <h2 className="text-3xl font-serif text-navy italic mt-16 mb-8">The "Technical Invisibility" Problem</h2>
          <p>
            Traditional SEO was built for keywords and backlinks. Modern AI search (AEO - Answer Engine Optimization) is built on <strong>entities, relationships, and context</strong>.
          </p>
          <p>
            Because CGT companies often use highly specialized, proprietary terminology or rely solely on academic publications (which are often behind paywalls or in formats AI models struggle to process dynamically), they fail to establish "entity authority" in the eyes of an LLM.
          </p>

          <div className="bg-pearl p-10 border border-navy/5 rounded-sm my-12 not-prose space-y-6">
            <h3 className="text-xs uppercase tracking-[0.4em] font-black text-gold/60">The Three Walls of Invisibility</h3>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="space-y-3">
                <Search className="text-navy" size={24} />
                <p className="font-bold text-sm tracking-widest uppercase">The Paywall</p>
                <p className="text-xs text-navy/60 font-light italic">Your best data is trapped in journals that LLMs don't index for real-time answers.</p>
              </div>
              <div className="space-y-3">
                <EyeOff className="text-navy" size={24} />
                <p className="font-bold text-sm tracking-widest uppercase">The PDF Wall</p>
                <p className="text-xs text-navy/60 font-light italic">Static whitepapers are difficult for generative search to parse for nuanced query mapping.</p>
              </div>
              <div className="space-y-3">
                <Network className="text-navy" size={24} />
                <p className="font-bold text-sm tracking-widest uppercase">The Schema Gap</p>
                <p className="text-xs text-navy/60 font-light italic">Missing technical metadata means AI can't verify you are the authority you claim to be.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif text-navy italic mt-16 mb-8">How to Fix Your Visibility</h2>
          <p>Fixing invisibility in 2026 isn't about more keywords. It's about data structure and visibility audit.</p>

          <ul className="space-y-6 list-none pl-0">
            <li className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0 font-serif italic">1</span>
              <div>
                <strong>Deploy Structured Markup:</strong> Use BioSchema and advanced JSON-LD to tell search engines exactly what your assets are, who your PIs are, and what indications you target.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0 font-serif italic">2</span>
              <div>
                <strong>The "Technical Translation" Layer:</strong> Create crawlable, semantic summaries of your peer-reviewed data. If an AI can't read a simplified version of your science, it won't recommend you.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0 font-serif italic">3</span>
              <div>
                <strong>Audit Your AI Footprint:</strong> Use tools like Mergelith's visibility report to see what ChatGPT actually "thinks" of your brand today.
              </div>
            </li>
          </ul>

          <div className="mt-20 p-10 bg-navy text-pearl rounded-sm not-prose space-y-8">
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-[0.4em] font-black text-gold/60">Diagnostic Tool</h4>
              <h3 className="text-3xl font-serif italic text-white leading-tight">See Your Company Through the Eyes of AI.</h3>
            </div>
            <p className="text-pearl/60 font-light italic leading-relaxed">
              Our Search Visibility Audit (SEO/AEO/GEO) is designed specifically for technical life science organizations. We map your authority across traditional and generative search engines.
            </p>
            <Link to="/seo-aeo-geo-report" className="inline-block bg-gold text-navy px-10 py-4 text-[10px] tracking-widest uppercase font-black hover:bg-white transition-colors">
              LEARN ABOUT THE REPORT &rarr;
            </Link>
          </div>

          <h2 className="text-3xl font-serif text-navy italic mt-24 mb-8">Why It Matters Now</h2>
          <p>
            Institutional investors are already using AI to screen the CGT landscape. If your therapy shows up in a Perplexity answer and your competitor's doesn't, you haven't just lost a search result — you've lost the opportunity for due diligence.
          </p>

          {/* Footer CTA */}
          <section className="mt-32 pt-16 border-t border-navy/5 text-center space-y-8">
            <h2 className="text-4xl font-serif text-navy italic">Don't Stay Invisible.</h2>
            <p className="text-navy/60 font-light max-w-xl mx-auto italic">
              Experience the clarity of a search visibility report designed for the age of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link to="/seo-aeo-geo-report" className="btn-primary px-12 py-5 text-sm tracking-widest italic font-serif">
                VIEW VISIBILITY AUDIT &rarr;
              </Link>
              <a href="https://calendly.com/mergelith/30min" className="px-12 py-5 border border-navy/10 text-navy text-[11px] uppercase tracking-[0.3em] font-black hover:bg-navy hover:text-pearl transition-all text-center">
                BOOK DISCOVERY
              </a>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default CGTInvisibleInAISearch;
