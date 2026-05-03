import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  ShieldCheck,
  Zap,
  ChevronRight,
  HelpCircle,
  FileText
} from 'lucide-react';
import { motion } from 'motion/react';

const MaaSVsAgency: React.FC = () => {
  useEffect(() => {
    document.title = "Marketing as a Service vs. Traditional Agency | Mergelith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Marketing as a Service and traditional agencies both promise marketing results — but they work very differently. Here's an honest comparison so you can choose the right model.");
    }
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-6">
        {/* Hero Header */}
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
            Marketing as a Service vs. Traditional Agency: Which Is <span className="text-gold">Right</span> for Your Business?
          </h1>
          <p className="text-xl text-navy/60 font-light leading-relaxed max-w-3xl border-l-2 border-gold/20 pl-8 italic">
            Both promise professional marketing. Both involve a monthly payment. Beyond that, they work very differently — and choosing the wrong one is an expensive mistake.
          </p>
        </motion.header>

        {/* Content Body */}
        <div className="prose prose-lg prose-navy max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-navy prose-p:text-navy/70 prose-strong:text-navy prose-li:text-navy/70">
          <p>
            If you're a small business owner researching your marketing options, you've probably encountered two models: hiring a traditional marketing agency or signing up for a Marketing-as-a-Service (MaaS) retainer. This is a direct, honest comparison to help you make the right call.
          </p>

          <h2 className="text-3xl font-serif text-navy italic mt-12 mb-6">What Each Model Actually Is</h2>
          <div className="grid md:grid-cols-2 gap-8 my-10 not-prose">
            <div className="p-8 bg-pearl border border-navy/5 rounded-sm space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-black text-navy">Traditional Agency</h4>
              <p className="text-sm font-light text-navy/70 leading-relaxed">
                A firm with a team of specialists who take on your marketing as a managed client relationship. You typically sign a 6–12 month contract, work through an account manager, and fund internal coordination overhead.
              </p>
            </div>
            <div className="p-8 bg-navy text-pearl rounded-sm space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-black text-gold">Marketing as a Service</h4>
              <p className="text-sm font-light text-pearl/70 leading-relaxed">
                A subscription-based model where you access execution on a flat monthly retainer. You submit tasks or requests and receive deliverables with fast turnaround. No account managers, no long-term contracts.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-serif text-navy italic mt-16 mb-8">The 6 Key Differences</h2>

          <section className="space-y-6">
            <h3 className="text-2xl font-serif text-navy italic">1. Pricing and What You Get for It</h3>
            <p>
              <strong>Traditional agency:</strong> Retainers typically run $3,000–$20,000/month. A meaningful portion funds the account management layer — the person who takes your calls and coordinates internally.
            </p>
            <p>
              <strong>MaaS:</strong> Retainers typically run $500–$2,000/month. You pay for production — not account management overhead. The person building your pitch deck is the person you're talking to.
            </p>
            <div className="bg-gold/5 p-6 border-l-4 border-gold italic mt-4 text-navy/80">
              The trade-off: Agencies offer more comprehensive managed services at higher price points. MaaS delivers significantly more actual output per dollar for small businesses.
            </div>
          </section>

          <section className="space-y-6 mt-12">
            <h3 className="text-2xl font-serif text-navy italic">2. Turnaround Time</h3>
            <p>
              <strong>Traditional agency:</strong> Two to four weeks is standard for most deliverables. This accounts for internal briefing, creative rounds, review cycles, and approval workflows.
            </p>
            <p>
              <strong>MaaS:</strong> 48 hours is the standard. You submit a brief, you receive a deliverable. No internal handoffs, no approval queues.
            </p>
          </section>

          <section className="space-y-6 mt-12">
            <h3 className="text-2xl font-serif text-navy italic">3. Contract and Commitment</h3>
            <p>
              <strong>Traditional agency:</strong> 6–12 month contracts are standard to justify onboarding investment and team ramp-up. Exiting early usually involves penalty clauses.
            </p>
            <p>
              <strong>MaaS:</strong> Month-to-month. The model works because the value is immediate — the relationship earns renewal rather than requiring a contract to enforce it.
            </p>
          </section>

          <section className="space-y-6 mt-12">
            <h3 className="text-2xl font-serif text-navy italic">4. Who Does the Work</h3>
            <p>
              <strong>Traditional agency:</strong> Your account manager briefs the creative team. At smaller agencies, this often means junior staff are doing most of the production work.
            </p>
            <p>
              <strong>MaaS:</strong> You work directly with the practitioner. At Mergelith, every deliverable is built by a senior commercial strategist — not briefed out to a junior team.
            </p>
          </section>

          <section className="space-y-6 mt-12">
            <h3 className="text-2xl font-serif text-navy italic">5. Scope and Flexibility</h3>
            <p>
              <strong>Traditional agency:</strong> Scope is defined at signing. Adding work outside scope triggers change orders and additional fees. Designed for stable, predictable needs.
            </p>
            <p>
              <strong>MaaS:</strong> Your needs can shift week to week — a pitch deck one week, a campaign brief the next — without renegotiating anything.
            </p>
          </section>

          <section className="space-y-6 mt-12">
            <h3 className="text-2xl font-serif text-navy italic">6. What Happens When You Stop</h3>
            <p>
              <strong>Traditional agency:</strong> Breaking the contract usually costs money. You are typically obligated to the minimum term.
            </p>
            <p>
              <strong>MaaS:</strong> Cancel at the end of any month. No penalty, no negotiation. You own everything that's been built.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-12 mt-20 not-prose border-t border-navy/5 pt-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-navy italic">Choose an Agency When:</h3>
              <ul className="space-y-4">
                {[
                  "You need full campaign management (media buying, channel management).",
                  "Your marketing program is complex, multi-channel, and stable.",
                  "You have the budget for a mid-to-senior relationship ($5,000+/mo).",
                  "You need a dedicated team managing paid media bids daily."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-navy/70 leading-relaxed font-light">
                    <div className="w-1.5 h-1.5 bg-navy/20 rounded-full mt-2 shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-navy italic">Choose MaaS When:</h3>
              <ul className="space-y-4">
                {[
                  "You need professional marketing materials fast (pitch decks, brand kits).",
                  "Your monthly retainer budget is under $3,000.",
                  "You want month-to-month flexibility without commitment.",
                  "You want direct access to senior expertise without overhead."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-navy/70 leading-relaxed font-light">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-serif text-navy italic mt-24 mb-8">The Honest Bottom Line</h2>
          <p>
            Neither model is universally better. The question is which one matches your actual situation. If you're a small business owner who needs consistent, high-quality marketing materials fast, MaaS delivers more value per dollar.
          </p>

          {/* Related Links */}
          <div className="mt-20 p-10 bg-pearl border border-navy/5 rounded-sm not-prose space-y-8">
            <h4 className="text-xs uppercase tracking-[0.4em] font-black text-gold/60">Further Reading</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link to="/blog/what-is-marketing-as-a-service" className="group block space-y-2">
                <p className="text-navy font-serif italic text-lg group-hover:text-gold transition-colors">What is Marketing as a Service? &rarr;</p>
                <p className="text-xs text-navy/50 font-light">The complete guide to the model.</p>
              </Link>
              <Link to="/gtm-strategy" className="group block space-y-2">
                <p className="text-navy font-serif italic text-lg group-hover:text-gold transition-colors">Go-to-Market Strategy &rarr;</p>
                <p className="text-xs text-navy/50 font-light">Professional GTM documents in 48 hours.</p>
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-24 space-y-12">
            <h2 className="text-3xl font-serif text-navy italic">Frequently Asked Questions</h2>
            <div className="space-y-10">
              {[
                { q: "Can I use both at the same time?", a: "Yes. Many businesses use MaaS for fast-turnaround deliverables and an agency for managed paid media." },
                { q: "Is MaaS just a cheaper version of an agency?", a: "No. It's a different operating model — task-based, fast-turnaround, direct access — not just a budget agency." },
                { q: "What if I've had a bad experience with an agency?", a: "Agencies often struggle with speed and account manager filters. MaaS is structurally designed to address those specific pain points." }
              ].map((faq, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-lg font-serif text-navy italic flex gap-3">
                    <HelpCircle className="text-gold shrink-0" size={20} />
                    {faq.q}
                  </h4>
                  <p className="text-navy/70 font-light leading-relaxed pl-8">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Footer CTA */}
          <section className="mt-24 pt-16 border-t border-navy/5 text-center space-y-8">
            <h2 className="text-4xl font-serif text-navy italic">Ready for a Better Model?</h2>
            <p className="text-navy/60 font-light max-w-xl mx-auto italic">
              See how our Growth and Standard tiers can professionalize your marketing without the agency overhead.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link to="/pricing" className="btn-primary px-12 py-5 text-sm tracking-widest italic font-serif">
                VIEW PRICING &rarr;
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

export default MaaSVsAgency;
