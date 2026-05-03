import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const WhatIsMarketingAsAService: React.FC = () => {
  useEffect(() => {
    document.title = "What Is Marketing as a Service? | Mergelith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Marketing as a Service (MaaS) gives small businesses access to professional marketing execution on a monthly retainer — without hiring an agency or a full-time team. Here's how it works, what it costs, and whether it's right for you.");
    }

    // Add JSON-LD FAQ Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Marketing as a Service the same as a fractional CMO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not exactly. A fractional CMO provides strategic leadership — defining your marketing strategy, managing your team, reporting to the C-suite. MaaS provides execution — building the materials and content your strategy requires. They're complementary."
          }
        },
        {
          "@type": "Question",
          "name": "Can a MaaS provider replace my marketing team?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For some businesses, yes — particularly those under $5M in revenue without a dedicated marketing function. For larger organizations, MaaS typically supplements an in-house team by handling overflow tasks, specialized deliverables, or strategic documents the team doesn't have bandwidth to produce."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With most MaaS providers, same week. At Mergelith, standard deliverables are in production within 48 hours of submitting your first task. There's no onboarding runway."
          }
        },
        {
          "@type": "Question",
          "name": "What if I only need one thing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some MaaS providers offer standalone products alongside the retainer model. Mergelith's Process Intelligence Report ($3,000 flat fee) is designed exactly for this — a private, one-time AI audit of your marketing and sales workflow, delivered in one week, with no ongoing commitment required."
          }
        },
        {
          "@type": "Question",
          "name": "Is MaaS worth it for a brand-new business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — arguably more than for established businesses. The first 12 months of a business are when professional materials matter most and when founders have the least bandwidth to build them."
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
      <article className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-navy/40 hover:text-gold transition-colors mb-12 font-black"
        >
          <ArrowLeft size={14} />
          Back to Journal
        </Link>

        {/* Header */}
        <header className="space-y-8 mb-16">
          <div className="space-y-4">
            <span className="px-3 py-1 bg-navy text-gold text-[10px] uppercase tracking-[0.2em] font-black rounded-sm">
              Marketing Strategy
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-navy italic leading-tight">
              What Is Marketing as a Service?
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-[11px] uppercase tracking-widest text-navy/40 font-bold border-b border-navy/5 pb-8">
            <div className="flex items-center gap-2">
              <User size={14} className="text-gold" />
              By Mergelith Team
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-gold" />
              May 03, 2026
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-gold" />
              10 min read
            </div>
          </div>
        </header>

        {/* content */}
        <div className="prose prose-lg prose-navy max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-navy prose-p:text-navy/70 prose-p:leading-relaxed prose-strong:text-navy prose-a:text-gold hover:prose-a:text-navy prose-a:transition-colors">
          <p className="text-xl text-navy font-light leading-relaxed mb-12 italic border-l-4 border-gold pl-8">
            Marketing as a Service (MaaS) is a subscription-based model where a business outsources its marketing execution to an external provider for a fixed monthly retainer. Instead of hiring an agency on a project basis or building an in-house team, you get ongoing access to marketing expertise, strategy, and deliverables for a predictable monthly cost.
          </p>
          
          <p>That's the short version. The longer version — the one that matters if you're a small business owner deciding whether this model makes sense for you — is what this guide covers.</p>

          <h2 className="text-3xl font-serif mt-16 mb-8 italic">Why "Marketing as a Service" Exists</h2>
          <p>Let's start with the problem it solves.</p>
          <p>Most small businesses face the same marketing dilemma. They need professional-grade marketing materials — pitch decks that close deals, brand collateral that builds credibility, campaign strategy that actually generates leads. But the traditional options for getting those materials are broken.</p>

          <div className="grid md:grid-cols-3 gap-8 my-12">
            <div className="bg-pearl p-6 border border-navy/5 rounded-sm space-y-4">
              <h4 className="text-navy font-bold text-sm uppercase tracking-widest">The In-House Problem</h4>
              <p className="text-sm text-navy/60 leading-relaxed">Hiring a full-time marketer costs $70k–$100k/year. A single generalist rarely has the range of skills needed — design, copy, strategy, and analytics.</p>
            </div>
            <div className="bg-pearl p-6 border border-navy/5 rounded-sm space-y-4">
              <h4 className="text-navy font-bold text-sm uppercase tracking-widest">The Agency Problem</h4>
              <p className="text-sm text-navy/60 leading-relaxed">Traditional agencies mean high retainers ($5k–$20k/month), slow account managers, and deliverables often built by junior staff.</p>
            </div>
            <div className="bg-pearl p-6 border border-navy/5 rounded-sm space-y-4">
              <h4 className="text-navy font-bold text-sm uppercase tracking-widest">The DIY Problem</h4>
              <p className="text-sm text-navy/60 leading-relaxed">Doing it yourself works until it doesn't. DIY marketing quickly becomes the bottleneck that limits your business growth.</p>
            </div>
          </div>

          <p>Marketing as a Service emerged as the alternative. You get access to a marketing execution partner — with real expertise, consistent output, and fast turnaround — for a fraction of the cost of a traditional agency or in-house hire.</p>

          <h2 className="text-3xl font-serif mt-16 mb-8 italic">How Does MaaS Work?</h2>
          <p>The model varies by provider, but the core mechanics are consistent:</p>
          <ul className="list-none space-y-4 pl-0">
            <li className="flex gap-4">
              <CheckCircle2 className="text-gold shrink-0 mt-1" size={20} />
              <span><strong>You pay a monthly retainer.</strong> Unlike project-based agencies, there's no separate quote for each deliverable. You pay one flat fee, and your marketing gets done.</span>
            </li>
            <li className="flex gap-4">
              <CheckCircle2 className="text-gold shrink-0 mt-1" size={20} />
              <span><strong>You submit tasks or requests.</strong> Within the scope of your tier, you request what you need — a sales pitch deck, a brand kit, a campaign brief, a battle card. Your provider builds it.</span>
            </li>
            <li className="flex gap-4">
              <CheckCircle2 className="text-gold shrink-0 mt-1" size={20} />
              <span><strong>You get fast turnaround.</strong> Most MaaS providers operate on 48-hour turnaround windows for standard deliverables. You're not waiting three weeks for a one-pager.</span>
            </li>
            <li className="flex gap-4">
              <CheckCircle2 className="text-gold shrink-0 mt-1" size={20} />
              <span><strong>You own everything.</strong> Every deliverable belongs to you. There's no lock-in to proprietary platforms or formats.</span>
            </li>
            <li className="flex gap-4">
              <CheckCircle2 className="text-gold shrink-0 mt-1" size={20} />
              <span><strong>You cancel when you don't need it.</strong> Good MaaS providers are month-to-month. No contracts, no exit fees.</span>
            </li>
          </ul>

          <p className="mt-8 italic font-light">The result: consistent, professional marketing output without the overhead of managing a team or the delay of an agency workflow.</p>

          <h2 className="text-3xl font-serif mt-16 mb-8 italic">Who Is Marketing as a Service For?</h2>
          <p>MaaS is the right model for a specific kind of business. It's not a fit for everyone.</p>
          
          <h3 className="text-xl font-bold uppercase tracking-widest mt-12 mb-4">MaaS works best when:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>You're a small business owner with a clear sense of what you need but no time or team to build it</li>
            <li>You have recurring, predictable marketing needs — not a one-time project</li>
            <li>You want professional-quality output without agency pricing or agency timelines</li>
            <li>You're scaling fast and need materials to keep up — without stopping to hire</li>
            <li>You need speed: a deliverable in 48 hours, not a proposal in two weeks</li>
          </ul>

          <h3 className="text-xl font-bold uppercase tracking-widest mt-12 mb-4">MaaS is probably not the right fit if:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>You need a full marketing department that manages campaigns, owns your ad accounts, and runs daily execution</li>
            <li>You have a one-time project and no ongoing need</li>
            <li>You want a team that publishes and manages content on your behalf</li>
          </ul>

          <h2 className="text-3xl font-serif mt-16 mb-8 italic">What's Included in a MaaS Retainer?</h2>
          <p>This varies significantly by provider and tier. But here's what professional MaaS delivery typically covers:</p>
          
          <div className="grid md:grid-cols-2 gap-12 my-12">
            <div className="space-y-6">
              <h4 className="border-b border-navy/10 pb-2 font-bold uppercase tracking-widest text-navy/40 text-xs">Sales Materials</h4>
              <ul className="list-none pl-0 space-y-2 text-sm">
                <li>&bull; Sales pitch decks</li>
                <li>&bull; Corporate capability presentations</li>
                <li>&bull; One-pagers and leave-behinds</li>
                <li>&bull; Battle cards (objection handling)</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="border-b border-navy/10 pb-2 font-bold uppercase tracking-widest text-navy/40 text-xs">Brand & Strategy</h4>
              <ul className="list-none pl-0 space-y-2 text-sm">
                <li>&bull; Brand kits (colors, fonts, logo usage)</li>
                <li>&bull; Infographics & Social graphics</li>
                <li>&bull; Go-to-market (GTM) strategy</li>
                <li>&bull; Campaign briefs & Marketing audits</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-serif mt-16 mb-8 italic">MaaS vs. Traditional Marketing Agency</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse border border-navy/5 text-sm">
              <thead>
                <tr className="bg-navy text-pearl font-serif italic">
                  <th className="p-4 text-left border border-navy/10">Feature</th>
                  <th className="p-4 text-left border border-navy/10">Marketing as a Service</th>
                  <th className="p-4 text-left border border-navy/10">Traditional Agency</th>
                </tr>
              </thead>
              <tbody className="text-navy/70">
                <tr>
                  <td className="p-4 border border-navy/10 font-bold">Pricing</td>
                  <td className="p-4 border border-navy/10">Fixed monthly retainer ($997–$2k typical)</td>
                  <td className="p-4 border border-navy/10">$3k–$20k+/month</td>
                </tr>
                <tr className="bg-navy/[0.02]">
                  <td className="p-4 border border-navy/10 font-bold">Turnaround</td>
                  <td className="p-4 border border-navy/10">48–72 hours per deliverable</td>
                  <td className="p-4 border border-navy/10">2–4 weeks per project</td>
                </tr>
                <tr>
                  <td className="p-4 border border-navy/10 font-bold">Contract</td>
                  <td className="p-4 border border-navy/10">Month-to-month</td>
                  <td className="p-4 border border-navy/10">6–12 month common</td>
                </tr>
                <tr className="bg-navy/[0.02]">
                  <td className="p-4 border border-navy/10 font-bold">Who does the work</td>
                  <td className="p-4 border border-navy/10">Senior practitioner(s)</td>
                  <td className="p-4 border border-navy/10">Often junior staff</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-serif mt-16 mb-8 italic">MaaS vs. Hiring an In-House Marketer</h2>
          <p>For most businesses under $5M in revenue, the in-house hire doesn't pencil out until marketing volume justifies a dedicated resource. Until that threshold, MaaS delivers more output per dollar.</p>
          <div className="bg-navy/5 p-8 rounded-sm my-8">
            <h4 className="text-navy font-bold uppercase tracking-widest mb-4">In-House Cost Analysis</h4>
            <p className="text-sm">A $75k hire costs ~$8,100/month after benefits/overhead, plus 60-90 days of onboarding time. A MaaS retainer gives you day-one production for a fraction of that cost.</p>
          </div>

          <h2 className="text-3xl font-serif mt-16 mb-8 italic">What Does Marketing as a Service Cost?</h2>
          <div className="space-y-6 my-8">
            <p><strong>Entry-level MaaS ($500–$1,500/month):</strong> Limited scope, best for 1-2 consistent deliverables per month.</p>
            <p><strong>Mid-tier MaaS ($1,500–$3,000/month):</strong> Broader scope, faster turnaround, includes strategic outputs. This is where most growing businesses find the best fit.</p>
            <p><strong>Full-service MaaS ($3,000–$10,000/month):</strong> Comprehensive strategy plus execution, often including paid media and content programs.</p>
          </div>

          <h2 className="text-3xl font-serif mt-16 mb-8 italic">Frequently Asked Questions</h2>
          <div className="space-y-12 my-12">
            <div className="space-y-4">
              <h4 className="text-xl font-serif italic text-navy">Is Marketing as a Service the same as a fractional CMO?</h4>
              <p className="text-navy/70 leading-relaxed">Not exactly. A fractional CMO provides strategic leadership — defining your marketing strategy, managing your team, reporting to the C-suite. MaaS provides execution — building the materials and content your strategy requires. They're complementary.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-serif italic text-navy">Can a MaaS provider replace my marketing team?</h4>
              <p className="text-navy/70 leading-relaxed">For some businesses, yes — particularly those under $5M in revenue without a dedicated marketing function. For larger organizations, MaaS typically supplements an in-house team by handling overflow tasks or specialized deliverables.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-serif italic text-navy">What if I only need one thing?</h4>
              <p className="text-navy/70 leading-relaxed">Some MaaS providers offer standalone products. Mergelith's <Link to="/process-intelligence-report" className="text-gold font-bold hover:underline">Process Intelligence Report</Link> ($3,000 flat fee) is designed exactly for this — a private, one-time AI audit of your marketing and sales workflow.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif mt-16 mb-8 italic">The Bottom Line</h2>
          <p>Marketing as a Service works when you need consistent, professional marketing output without the overhead of a full-time hire or the friction of a traditional agency.</p>
          
          <div className="mt-16 p-10 bg-navy text-pearl rounded-sm relative overflow-hidden group">
            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Next Steps</h3>
                <h2 className="text-3xl md:text-4xl font-serif italic leading-tight">Ready to institutionalize your marketing output?</h2>
              </div>
              <p className="text-pearl/60 font-light max-w-xl">
                At Mergelith, we deliver corporate-grade marketing materials in 48 hours on a flat monthly retainer. No long-term contracts. No agency overhead.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  to="/pricing" 
                  className="px-12 py-5 bg-gold text-navy text-[11px] uppercase tracking-[0.3em] font-black hover:bg-white transition-colors text-center"
                >
                  See our plans &rarr;
                </Link>
                <Link 
                  to="/process-intelligence-report"
                  className="px-12 py-5 border border-pearl/20 text-pearl text-[11px] uppercase tracking-[0.3em] font-black hover:bg-pearl hover:text-navy transition-all text-center"
                >
                  Start with a Report &rarr;
                </Link>
                <a 
                  href="https://calendly.com/mergelith/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-5 border border-pearl/20 text-pearl text-[11px] uppercase tracking-[0.3em] font-black hover:bg-pearl hover:text-navy transition-all text-center lg:hidden"
                >
                  Book Call
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <footer className="mt-20 pt-10 border-t border-navy/5 text-center">
          <p className="text-navy/40 text-xs italic">
            Built on 20+ years of commercial marketing experience — including 5× portfolio growth and a $21M+ portfolio at large Life Science Companies.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default WhatIsMarketingAsAService;
