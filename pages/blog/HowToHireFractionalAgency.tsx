import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight,
  HelpCircle,
  AlertCircle,
  Clock,
  DollarSign,
  Users,
  ShieldCheck,
  Zap,
  Target,
  Search,
  FileText
} from 'lucide-react';
import { motion } from 'motion/react';

const HowToHireFractionalAgency: React.FC = () => {
  useEffect(() => {
    document.title = "How to Hire a Fractional Marketing Agency | Small Business Guide | Mergelith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "What to look for, what to ask, what to avoid — a practical guide to hiring a fractional marketing agency or MaaS provider that actually delivers.");
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
            <span className="text-[10px] uppercase tracking-[0.4em] font-black border-b border-gold/30 pb-1">Hiring Guide</span>
            <span className="w-1 h-1 bg-gold/30 rounded-full"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black border-b border-gold/30 pb-1">May 2, 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-navy italic leading-tight">
            How to Hire a <span className="text-gold">Fractional Marketing</span> Agency: A Small Business Owner's Guide
          </h1>
          <p className="text-xl text-navy/60 font-light leading-relaxed max-w-3xl border-l-2 border-gold/20 pl-8 italic">
            Most small business owners who've made a bad hire in this category moved fast and skipped the right questions. This guide gives you the framework to hire correctly.
          </p>
        </motion.header>

        {/* content */}
        <div className="prose prose-lg prose-navy max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-navy prose-p:text-navy/70 prose-strong:text-navy prose-li:text-navy/70 group-hover:prose-a:text-gold prose-a:transition-colors prose-a:decoration-gold/30">
          <p>
            Hiring a fractional marketing agency or Marketing-as-a-Service provider is faster than hiring full-time and cheaper than a traditional agency — which makes it tempting to move quickly. Most small business owners who've made a bad hire discovered too late that they were paying for the wrong thing.
          </p>

          <h2 className="text-3xl font-serif text-navy italic mt-16 mb-8">Step 1: Define What You Actually Need</h2>
          <p>
            Before you evaluate anyone, get specific about your own requirements. Fractional marketing covers a wide range of models.
          </p>
          <div className="grid md:grid-cols-2 gap-8 my-10 not-prose">
            <div className="p-8 bg-pearl border border-navy/5 rounded-sm space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-black text-navy">Fractional CMO</h4>
              <p className="text-sm font-light text-navy/70 leading-relaxed italic">
                You need leadership to direct an existing team, set enterprise priorities, and report to the C-suite. High cost, strategic focus.
              </p>
            </div>
            <div className="p-8 bg-navy text-pearl rounded-sm space-y-4 border-l-4 border-gold">
              <h4 className="text-xs uppercase tracking-widest font-black text-gold">MaaS Provider</h4>
              <p className="text-sm font-light text-pearl/70 leading-relaxed italic">
                You need execution — pitch decks, brand kits, strategy documents. Fast turnaround, high output, professional deliverables.
              </p>
            </div>
          </div>
          <p>
            Most small businesses under $5M in revenue need a MaaS provider, not a fractional CMO.
          </p>

          <h2 className="text-3xl font-serif text-navy italic mt-16 mb-8">Step 2: Know Your Non-Negotiables</h2>
          <ul className="space-y-4">
            <li><strong>Turnaround time:</strong> If you need a pitch deck by Friday, a provider who takes two weeks is not an option.</li>
            <li><strong>Deliverable scope:</strong> What materials do you actually need? Get a specific list.</li>
            <li><strong>Contract flexibility:</strong> Do you need month-to-month or are you ready for a 12-month lock-in?</li>
            <li><strong>Industry familiarization:</strong> Does the provider understand your specific market?</li>
          </ul>

          <h2 className="text-3xl font-serif text-navy italic mt-16 mb-8">Step 3: The 7 Questions to Ask Every Provider</h2>
          <p>These questions separate providers who deliver from those who just talk well.</p>
          
          <div className="space-y-12 my-12">
            {[
              { q: "Who actually builds my deliverables?", a: "At agencies, it's often junior staff. At MaaS providers, it should be a named practitioner with verifiable experience." },
              { q: "What's your turnaround time?", a: "48 hours is standard for most marketing documents. More than a week is a signal of a slow process." },
              { q: "Show me three specific examples.", a: "Ask for work similar to what you need. Would you be comfortable sending this to your best prospect?" },
              { q: "What do clients typically struggle with?", a: "Every honest provider has an answer. Vague responses are a red flag." },
              { q: "What's out of scope?", a: "Scope creep is how fixed retainers become expensive surprises. Get a clear answer early." },
              { q: "What's your cancellation policy?", a: "Month-to-month is the standard for a model built on delivering value." },
              { q: "What would make you the wrong choice?", a: "A great provider knows their limitations and will disqualify themselves if it's not a fit." }
            ].map((item, i) => (
              <div key={i} className="border-b border-navy/5 pb-8 last:border-0">
                <h4 className="text-xl font-serif text-navy italic flex gap-3 mb-4">
                  <span className="text-gold font-sans font-black italic not-prose">{i+1}.</span> 
                  {item.q}
                </h4>
                <p className="text-navy/70 leading-relaxed font-light">{item.a}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-serif text-navy italic mt-16 mb-8">Red Flags to Walk Away From</h2>
          <div className="grid sm:grid-cols-2 gap-6 not-prose my-12">
             {[
               { title: "No named builder", text: "If they won't name the person executing the work, there's a reason." },
               { title: "Long-term mandates", text: "Value shouldn't need a contract to enforce a relationship." },
               { title: "Uniform portfolios", text: "If every industry looks identical, they're using templates." },
               { title: "Vague commitments", text: "'A week or two' is not a turnaround commitment." }
             ].map((flag, i) => (
               <div key={i} className="p-6 bg-red-50/50 border border-red-100 rounded-sm flex gap-4">
                  <AlertCircle className="text-red-400 shrink-0 mt-1" size={20} />
                  <div className="space-y-1">
                    <p className="text-xs font-black uppercase tracking-widest text-red-900">{flag.title}</p>
                    <p className="text-xs text-red-800/60 font-light leading-relaxed">{flag.text}</p>
                  </div>
               </div>
             ))}
          </div>

          <h2 className="text-3xl font-serif text-navy italic mt-16 mb-8">The Honest ROI</h2>
          <p>
            When you find the right fit, the ROI is immediate: a pitch deck that wins the meeting, a campaign brief that actually gets executed, and a brand kit that makes you look like you belong at the table.
          </p>

          {/* Related Links */}
          <div className="mt-20 p-10 bg-pearl border border-navy/5 rounded-sm not-prose space-y-8">
            <h4 className="text-xs uppercase tracking-[0.4em] font-black text-gold/60">Related Guides</h4>
            <div className="grid sm:grid-cols-3 gap-6">
              <Link to="/blog/what-is-marketing-as-a-service" className="group block space-y-2">
                <p className="text-navy font-serif italic text-lg group-hover:text-gold transition-colors">What is MaaS? &rarr;</p>
              </Link>
              <Link to="/blog/marketing-as-a-service-vs-agency" className="group block space-y-2">
                <p className="text-navy font-serif italic text-lg group-hover:text-gold transition-colors">MaaS vs Agency &rarr;</p>
              </Link>
              <Link to="/pricing" className="group block space-y-2">
                <p className="text-navy font-serif italic text-lg group-hover:text-gold transition-colors">Retainer Plans &rarr;</p>
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-24 space-y-12">
            <h2 className="text-3xl font-serif text-navy italic">Frequently Asked Questions</h2>
            <div className="space-y-10">
              <div className="space-y-3">
                <h4 className="text-xl font-serif text-navy italic">How much should I expect to pay?</h4>
                <p className="text-navy/70 font-light leading-relaxed">For a MaaS provider delivering quality execution, $997–$1,999/month is a realistic range for SMB service levels. Fractional CMOs run much higher ($5k+).</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-serif text-navy italic">Is a trial deliverable worth it?</h4>
                <p className="text-navy/70 font-light leading-relaxed">Yes. A paid trial at a reduced rate shows you exactly what ongoing work will look like. Paid deliverables reveal the actual quality level better than a free proposal.</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-serif text-navy italic">Should I hire before or after my sales process?</h4>
                <p className="text-navy/70 font-light leading-relaxed">Both at the same time. Your sales process is stronger with professional materials, and your materials are more effective when built around a clear sales motion.</p>
              </div>
            </div>
          </section>

          {/* Footer CTA */}
          <section className="mt-24 pt-16 border-t border-navy/5 text-center space-y-8">
            <h2 className="text-4xl font-serif text-navy italic italic">One Page. One Message. One Next Step.</h2>
            <p className="text-navy/60 font-light max-w-xl mx-auto italic">
              Experience what professional marketing deliverables built in 48 hours can do for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4 mb-12">
              <Link to="/pricing" className="btn-primary px-12 py-5 text-sm tracking-widest italic font-serif">
                VIEW OUR PLANS &rarr;
              </Link>
              <a href="https://calendly.com/mergelith/30min" className="px-12 py-5 border border-navy/10 text-navy text-[11px] uppercase tracking-[0.3em] font-black hover:bg-navy hover:text-pearl transition-all text-center">
                START A TRIAL
              </a>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default HowToHireFractionalAgency;
