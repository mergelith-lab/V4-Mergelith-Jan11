import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Shield, 
  Map, 
  TrendingUp,
  Cpu,
  BarChart3,
  Network,
  Zap,
  ArrowRight,
  Hexagon
} from 'lucide-react';
import { motion } from 'motion/react';

const GEOMoatInstitutionalAdvisory: React.FC = () => {
  useEffect(() => {
    document.title = "GEO: The New Competitive Moat for Institutional Advisory | Mergelith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Traditional rankings are no longer enough. To win in 2026, firms must ensure their brand is embedded in the training data of major AI models via GEO.");
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
            <span className="text-[10px] uppercase tracking-[0.4em] font-black border-b border-gold/30 pb-1">GEO Strategy</span>
            <span className="w-1 h-1 bg-gold/30 rounded-full"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black border-b border-gold/30 pb-1">March 15, 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-navy italic leading-tight">
            GEO: The New <span className="text-gold">Competitive Moat</span> for Institutional Advisory
          </h1>
          <p className="text-xl text-navy/60 font-light leading-relaxed max-w-3xl border-l-2 border-gold/20 pl-8 italic">
            Traditional rankings are no longer enough. In 2026, authority isn't just about who links to you — it's about whose training data you're in.
          </p>
        </motion.header>

        {/* Content */}
        <div className="prose prose-lg prose-navy max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-navy prose-p:text-navy/70 prose-strong:text-navy prose-li:text-navy/70 prose-a:text-gold prose-a:transition-colors prose-a:decoration-gold/30">
          <p>
            For institutional investment advisors, law firms, and strategic consultants, "authority" has always been the primary competitive moat. Historically, this was built through tenure, credentials, and whitepaper distribution.
          </p>
          <p>
            But the interface between the client and the expertise is changing. Institutional decision-makers are increasingly querying AI models — not just for facts, but for <strong>synthesis and recommendation</strong>.
          </p>

          <h2 className="text-3xl font-serif text-navy italic mt-16 mb-8">What is GEO?</h2>
          <p>
            Generative Engine Optimization (GEO) is the practice of ensuring your brand's expertise and authority are accurately recognized, cited, and recommended by Large Language Models (LLMs).
          </p>
          <p>
            Unlike SEO, which focuses on pushing a URL to the top of a list, GEO focuses on ensuring your firm is the <strong>source of truth</strong> that the model uses to construct its answer.
          </p>

          <div className="my-16 grid sm:grid-cols-2 gap-12 not-prose">
             <div className="p-10 border border-navy/5 bg-pearl rounded-sm space-y-4">
                <Globe className="text-gold" size={24} />
                <h4 className="text-lg font-serif italic text-navy">The Citation Moat</h4>
                <p className="text-sm text-navy/60 font-light leading-relaxed">
                   Being the primary source cited by ChatGPT or Perplexity for a complex advisory question creates an instant, high-trust entry point.
                </p>
             </div>
             <div className="p-10 border border-navy/5 bg-pearl rounded-sm space-y-4">
                <Shield className="text-gold" size={24} />
                <h4 className="text-lg font-serif italic text-navy">The Training Bias</h4>
                <p className="text-sm text-navy/60 font-light leading-relaxed">
                   Established authority firms are already in the base training data. You must ensure your firm stays there as models are fine-tuned.
                </p>
             </div>
          </div>

          <h2 className="text-3xl font-serif text-navy italic mt-16 mb-8">From Distribution to Infiltration</h2>
          <p>
            Institutional marketing was previously about <strong>distribution</strong>: how many emails were opened, how many downloads occurred.
          </p>
          <p>
            In the GEO era, it's about <strong>infiltration</strong>. Your insights need to be formatted not just for human consumption, but for high-fidelity machine ingestion. This means:
          </p>
          <ul>
            <li>Structuring data as structured entities (JSON-LD, high-density metadata).</li>
            <li>Establishing clear relationship mappings between your partners and their specialist areas.</li>
            <li>Ensuring technical documentation is available to the crawlers that feed the search engines of tomorrow.</li>
          </ul>

          <div className="bg-navy p-12 text-pearl rounded-sm my-20 space-y-8 not-prose">
             <div className="flex items-center gap-4 text-gold">
                <Hexagon size={24} />
                <h3 className="text-2xl font-serif italic text-white leading-tight">Build Your Moat.</h3>
             </div>
             <p className="text-pearl/60 font-light italic leading-relaxed text-lg">
                The window to establish your brand's authority in the next generation of AI-driven search is narrow. Firms that act now will own the "default recommendation" for the next decade.
             </p>
             <Link to="/seo-aeo-geo-report" className="inline-block bg-gold text-navy px-12 py-5 text-[11px] tracking-widest uppercase font-black hover:bg-white transition-colors">
                EXPLORE GEO AUDITS &rarr;
             </Link>
          </div>

          <h2 className="text-3xl font-serif text-navy italic mt-16 mb-8">The Risks of Inaction</h2>
          <p>
            Institutional firms that ignore GEO risk "digital erosion." Even if your reputation is solid in the physical world, being invisible inside the AI ecosystem means you are excluded from the initial screening and synthesis phases of major mandates.
          </p>

          {/* Footer CTA */}
          <section className="mt-32 pt-16 border-t border-navy/5 text-center space-y-8">
            <h2 className="text-4xl font-serif text-navy italic italic">Secure Your Authority.</h2>
            <p className="text-navy/60 font-light max-w-xl mx-auto italic">
              See how your firm ranks in the algorithmic age with a tailored Search Visibility Audit.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link to="/seo-aeo-geo-report" className="btn-primary px-12 py-5 text-sm tracking-widest italic font-serif">
                VIEW GEO REPORT &rarr;
              </Link>
              <a href="https://calendly.com/mergelith/30min" className="px-12 py-5 border border-navy/10 text-navy text-[11px] uppercase tracking-widest font-black hover:bg-navy hover:text-pearl transition-all text-center">
                BOOK DISCOVERY
              </a>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default GEOMoatInstitutionalAdvisory;
