import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  Users,
  Target,
  FileText,
  Briefcase,
  TrendingUp,
  LayoutGrid
} from 'lucide-react';
import { motion } from 'motion/react';

const FractionalCMOVsAgency: React.FC = () => {
  useEffect(() => {
    document.title = "Fractional CMO vs. Marketing Agency | Which Is Right for You? | Mergelith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Fractional CMOs and marketing agencies are often compared — but they do fundamentally different things. Here's how to know which model your business needs right now.");
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
            <span className="text-[10px] uppercase tracking-[0.4em] font-black border-b border-gold/30 pb-1">Industry Comparison</span>
            <span className="w-1 h-1 bg-gold/30 rounded-full"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black border-b border-gold/30 pb-1">May 2, 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-navy italic leading-tight">
            Fractional CMO vs. Marketing Agency: Which Does Your Business <span className="text-gold">Actually</span> Need?
          </h1>
          <p className="text-xl text-navy/60 font-light leading-relaxed max-w-3xl border-l-2 border-gold/20 pl-8 italic">
            Both options involve bringing in external marketing expertise for a monthly fee. But they operate at fundamentally different levels of your business.
          </p>
        </motion.header>

        {/* Content */}
        <div className="prose prose-lg prose-navy max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-navy prose-p:text-navy/70 prose-strong:text-navy prose-li:text-navy/70 prose-a:text-gold prose-a:transition-colors prose-a:decoration-gold/30">
          <p>
            "Should we hire a fractional CMO or go with a marketing agency?" is one of the most common questions small business owners ask when they're ready to invest seriously in marketing — and it's frequently answered incorrectly, at significant cost.
          </p>

          <h2 className="text-3xl font-serif text-navy italic mt-16 mb-8">The Fundamental Difference</h2>
          <div className="space-y-6 my-10 not-prose">
            <div className="p-8 bg-pearl border border-navy/5 rounded-sm">
              <h4 className="text-xs uppercase tracking-widest font-black text-navy mb-4">Fractional CMO: The Leader</h4>
              <p className="text-sm font-light text-navy/70 leading-relaxed italic">
                Senior leadership that defines ICP, sets positioning, structures your team, and directs how your marketing budget is deployed. They operate at the executive level.
              </p>
            </div>
            <div className="p-8 bg-pearl border border-navy/5 rounded-sm">
              <h4 className="text-xs uppercase tracking-widest font-black text-navy mb-4">Marketing Agency: The Executor</h4>
              <p className="text-sm font-light text-navy/70 leading-relaxed italic">
                A firm that produces output — campaigns, content, ads, design, SEO. They operate at the execution level within a defined strategy.
              </p>
            </div>
            <div className="p-8 bg-navy text-pearl rounded-sm border-l-4 border-gold">
              <h4 className="text-xs uppercase tracking-widest font-black text-gold mb-4">Marketing as a Service: The Hybrid</h4>
              <p className="text-sm font-light text-pearl/70 leading-relaxed italic">
                Mergelith's model. We sit between the two: senior-level commercial rigor applied directly to execution and materials. Fast turnaround, no overhead.
              </p>
            </div>
          </div>

          <section className="space-y-6 mt-16 pb-12 border-b border-navy/5">
            <h2 className="text-3xl font-serif text-navy italic">What a Fractional CMO Does</h2>
            <p>
              A fractional CMO typically works 10–20 hours per month with your business. They audit strategy, refine positioning, and direct agencies or internal staff.
            </p>
            <p className="italic text-sm text-navy/50">Fractional CMO cost: $5,000–$15,000/month</p>
            <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
               {[
                 "Restructure marketing org",
                 "Define KPIs and metrics",
                 "Set overall commerical strategy",
                 "Report to founders/C-suite"
               ].map((item, i) => (
                 <li key={i} className="flex gap-3 items-center text-sm font-light text-navy/70">
                    <CheckCircle2 className="text-gold" size={16} />
                    {item}
                 </li>
               ))}
            </ul>
          </section>

          <section className="space-y-6 mt-16 pb-12 border-b border-navy/5">
            <h2 className="text-3xl font-serif text-navy italic">What a Marketing Agency Does</h2>
            <p>
              Agencies provide managed execution across specific channels: Paid media, SEO, Social, Email, or PR.
            </p>
            <p className="italic text-sm text-navy/50">Agency cost: $3,000–$20,000+/month</p>
            <div className="grid sm:grid-cols-2 gap-4">
               {[
                 "Manage ad spend daily",
                 "Produce high-volume content",
                 "Execute SEO campaigns",
                 "Handle PR and relations"
               ].map((item, i) => (
                 <div key={i} className="flex gap-3 items-center text-sm font-light text-navy/70 border border-navy/5 p-4 rounded-sm">
                    <Zap className="text-gold" size={16} />
                    {item}
                 </div>
               ))}
            </div>
          </section>

          <h2 className="text-3xl font-serif text-navy italic mt-24 mb-8">The Decision Framework</h2>
          <div className="space-y-8 my-10 not-prose">
             {[
               { q: "Do you have a marketing strategy?", a: "If no, you need a CMO or a MaaS provider that builds GTM documents." },
               { q: "Do you have professional materials?", a: "If labels or decks are DIY, MaaS is your highest ROI priority." },
               { q: "Do you have execution capacity?", a: "If your team is buried, you need an agency or MaaS execution support." }
             ].map((item, i) => (
               <div key={i} className="p-8 bg-pearl border border-navy/5 rounded-sm space-y-3">
                  <h4 className="text-lg font-serif text-navy italic font-semibold">{item.q}</h4>
                  <p className="text-sm font-light text-navy/70 leading-relaxed italic">{item.a}</p>
               </div>
             ))}
          </div>

          <h2 className="text-3xl font-serif text-navy italic mt-24 mb-8">The Most Common Mistake</h2>
          <p>
            Small business owners often hire an agency or CMO before foundational materials are in place. A strategy is only as good as the pitch deck that executes it. An ad campaign is only as good as the landing page it lands on.
          </p>
          <div className="bg-navy text-pearl p-10 rounded-sm my-12 space-y-6">
             <h4 className="text-xs uppercase tracking-[0.4em] font-black text-gold/60">The Correct Sequencing</h4>
             <ol className="space-y-6 list-none pl-0">
                <li className="flex gap-4">
                   <span className="text-gold font-serif italic text-2xl shrink-0">01.</span>
                   <div>
                      <p className="font-bold text-sm tracking-widest uppercase">The Foundation</p>
                      <p className="text-xs text-pearl/60 font-light mt-1">Build materials, brand identity, and GTM strategy (MaaS tier).</p>
                   </div>
                </li>
                <li className="flex gap-4 opacity-70">
                   <span className="text-gold font-serif italic text-2xl shrink-0">02.</span>
                   <div>
                      <p className="font-bold text-sm tracking-widest uppercase">The Testing</p>
                      <p className="text-xs text-pearl/60 font-light mt-1">Test with lean execution (internal or low-cost) until the model is proven.</p>
                   </div>
                </li>
                <li className="flex gap-4 opacity-50">
                   <span className="text-gold font-serif italic text-2xl shrink-0">03.</span>
                   <div>
                      <p className="font-bold text-sm tracking-widest uppercase">The Scaling</p>
                      <p className="text-xs text-pearl/60 font-light mt-1">Scale what's working with agency support or fractional CMO leadership.</p>
                   </div>
                </li>
             </ol>
          </div>

          <h2 className="text-3xl font-serif text-navy italic mt-24 mb-8">A Quick Comparison</h2>
          <div className="overflow-x-auto my-12 not-prose">
            <table className="w-full text-left border-collapse border border-navy/5">
              <thead>
                <tr className="bg-navy text-pearl">
                  <th className="p-4 text-[10px] uppercase tracking-widest font-black">Feature</th>
                  <th className="p-4 text-[10px] uppercase tracking-widest font-black">Fractional CMO</th>
                  <th className="p-4 text-[10px] uppercase tracking-widest font-black">Agency</th>
                  <th className="p-4 text-[10px] uppercase tracking-widest font-black">MaaS</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light text-navy text-xs">
                <tr className="border-b border-navy/5">
                  <td className="p-4 font-bold">Primary Function</td>
                  <td className="p-4">Leadership</td>
                  <td className="p-4">Campaigns</td>
                  <td className="p-4">Deliverables</td>
                </tr>
                <tr className="border-b border-navy/5 bg-pearl/30">
                  <td className="p-4 font-bold">Monthly Cost</td>
                  <td className="p-4">$5k - $15k</td>
                  <td className="p-4">$3k - $20k+</td>
                  <td className="p-4">$1k - $2k</td>
                </tr>
                <tr className="border-b border-navy/5">
                  <td className="p-4 font-bold">Turnaround</td>
                  <td className="p-4">Strategic Speed</td>
                  <td className="p-4">2 - 4 Weeks</td>
                  <td className="p-4">48 Hours</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Related Links */}
          <div className="mt-20 p-10 bg-pearl border border-navy/5 rounded-sm not-prose space-y-8">
            <h4 className="text-xs uppercase tracking-[0.4em] font-black text-gold/60">Related Resources</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link to="/blog/what-is-marketing-as-a-service" className="group block space-y-2">
                <p className="text-navy font-serif italic text-lg group-hover:text-gold transition-colors">What is MaaS? &rarr;</p>
              </Link>
              <Link to="/gtm-strategy" className="group block space-y-2">
                <p className="text-navy font-serif italic text-lg group-hover:text-gold transition-colors">GTM Strategy Documents &rarr;</p>
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-24 space-y-12">
            <h2 className="text-3xl font-serif text-navy italic">Frequently Asked Questions</h2>
            <div className="space-y-10">
              <div className="space-y-3">
                <h4 className="text-xl font-serif text-navy italic">Can I use all three?</h4>
                <p className="text-navy/70 font-light leading-relaxed">Yes. A fractional CMO sets strategy, MaaS builds the materials, and an agency runs the campaigns. Each operates in its specific lane.</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-serif text-navy italic italic">Which should I start with?</h4>
                <p className="text-navy/70 font-light leading-relaxed">For businesses under $3M revenue, start with MaaS. Build the materials that make your sales process work first.</p>
              </div>
            </div>
          </section>

          {/* Footer CTA */}
          <section className="mt-24 pt-16 border-t border-navy/5 text-center space-y-8">
            <h2 className="text-4xl font-serif text-navy italic italic leading-tight">Build the Foundation Before You Scale the Spend.</h2>
            <p className="text-navy/60 font-light max-w-xl mx-auto italic">
              Experience the clarity of senior commerical strategy applied to professional deliverables. Delivered in 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link to="/pricing" className="btn-primary px-12 py-5 text-sm tracking-widest italic font-serif">
                VIEW OUR PLANS &rarr;
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

export default FractionalCMOVsAgency;
