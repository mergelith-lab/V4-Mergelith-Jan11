import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Users,
  MessageSquare,
  Network,
  Calendar,
  BarChart3,
  TrendingUp,
  Briefcase
} from 'lucide-react';
import { motion } from 'motion/react';

const GTMStrategy: React.FC = () => {
  useEffect(() => {
    document.title = "Go-to-Market Strategy for Small Business | Mergelith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "A documented GTM strategy that defines your ICP, messaging, channels, and 90-day execution plan — so your team stops guessing and starts selling. Growth tier deliverable.");
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
          "name": "Is the GTM document a strategy or an execution plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both. The document defines your strategy (ICP, positioning, messaging, channels) and your 90-day execution plan (what happens, in what sequence, measured against what)."
          }
        },
        {
          "@type": "Question",
          "name": "How much input do I need to provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A completed brief covering your offer, your current customers, your target market, and your resource constraints. The more specific your answers, the more specific the strategy."
          }
        },
        {
          "@type": "Question",
          "name": "Can the GTM document be used to onboard a new team member?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — this is one of the most common uses. It becomes the commercial onboarding document for anyone joining your revenue team, eliminating 'learning by osmosis'."
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
            <div className="inline-flex items-center gap-3">
               <span className="text-gold font-black text-[10px] uppercase tracking-[0.4em] border-b border-gold/30 pb-2">
                 GROWTH TIER DELIVERABLE
               </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-navy italic leading-tight">
              Your GTM Strategy <span className="text-gold">Shouldn't Live Only</span> in Your Head
            </h1>
            <p className="text-xl text-navy/60 font-light max-w-xl leading-relaxed">
              Take what's in your head and turn it into a written, structured commercial plan. Who you're selling to. How you reach them. What you say. Measured against what milestones.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="https://calendly.com/mergelith/30min" target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-5 text-sm tracking-widest text-center italic font-serif">
                BUILD YOUR STRATEGY &rarr;
              </a>
              <Link to="/pricing" className="px-12 py-5 border border-navy/10 text-navy text-[11px] uppercase tracking-[0.3em] font-black hover:bg-navy hover:text-pearl transition-all text-center">
                VIEW GROWTH PLAN
              </Link>
            </div>
          </motion.div>
          
          <div className="relative">
             <div className="aspect-square bg-navy p-12 border border-white/5 rounded-sm shadow-2xl flex flex-col justify-between group">
                <div className="flex justify-between items-start">
                   <div className="p-4 bg-gold/10 border border-gold/20">
                      <Target className="text-gold" size={32} />
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] text-pearl/40 uppercase tracking-[0.3em] font-black">Strategic Roadmap</p>
                      <p className="text-lg font-serif italic text-gold">v2.4 Executable</p>
                   </div>
                </div>
                
                <div className="space-y-6 pt-12">
                   <div className="grid grid-cols-2 gap-4">
                      <div className="h-2 bg-pearl/10 w-full"></div>
                      <div className="h-2 bg-pearl/10 w-2/3"></div>
                      <div className="h-2 bg-pearl/10 w-3/4"></div>
                      <div className="h-2 bg-pearl/10 w-1/2"></div>
                   </div>
                   <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                      <div className="flex gap-2">
                         {[1,2,3,4].map(i => <div key={i} className="w-2 h-2 rounded-full bg-gold/40"></div>)}
                      </div>
                      <p className="text-[10px] font-black text-pearl/60 uppercase tracking-widest italic">Day 01-90</p>
                   </div>
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/5 -z-10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg prose-navy max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-navy prose-p:text-navy/70 prose-strong:text-navy">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <section className="space-y-6">
                <p className="text-2xl text-navy font-light leading-relaxed italic border-l-4 border-gold pl-8">
                  Most small business GTM strategies exist as a loose collection of assumptions. If your go-to-market plan isn't written down, it doesn't fully exist.
                </p>
                <p>
                  A Mergelith GTM strategy document takes what's in your head and turns it into a written, structured commercial plan. Growth tier deliverable. Delivered in 48 hours. Built to be executed, not filed.
                </p>
              </section>

              <section className="space-y-8 pb-12 border-b border-navy/5">
                <h2 className="text-3xl font-serif text-navy italic">What's Included</h2>
                <div className="grid md:grid-cols-2 gap-12">
                   {[
                     { icon: Users, title: "Ideal Customer Profile (ICP)", desc: "A precise definition of your best-fit buyer: firmographic, behavioral, and situational profile." },
                     { icon: TrendingUp, title: "Competitive Positioning", desc: "Where you win, where you lose, and the specific angle that makes you the right choice." },
                     { icon: MessageSquare, title: "Messaging Framework", desc: "Core messages that resonate at each stage: cold prospect, warm lead, consideration, and close." },
                     { icon: Network, title: "Channel Strategy", desc: "Prioritized channels based on expected return and your actual capacity to execute." },
                     { icon: Calendar, title: "90-Day Execution Plan", desc: "Week-by-week sequence of what gets done, by whom, and in what order for the first quarter." },
                     { icon: BarChart3, title: "KPIs & Success Metrics", desc: "Lead volume, conversion benchmarks, and revenue targets set realistically for your stage." }
                   ].map((item, i) => (
                     <div key={i} className="space-y-3">
                        <div className="flex items-center gap-3">
                           <div className="p-2 bg-gold/10 text-gold border border-gold/20 rounded-sm">
                              <item.icon size={18} />
                           </div>
                           <h4 className="text-lg font-serif text-navy italic">{item.title}</h4>
                        </div>
                        <p className="text-sm text-navy/60 leading-relaxed font-light">{item.desc}</p>
                     </div>
                   ))}
                </div>
              </section>

              <section className="space-y-8 py-12 border-b border-navy/5">
                <h2 className="text-3xl font-serif text-navy italic">Who This Is For</h2>
                <ul className="list-none pl-0 space-y-8">
                   {[
                     { title: "Founders Launching", text: "Clear offer but no structured plan for getting it in front of the right buyers." },
                     { title: "New Vertical Entry", text: "Businesses entering new markets that need to restart their approach from a defined ICP." },
                     { title: "Growth-Stage Scaling", text: "Where informal assumptions won't get you to the next stage of institutional scale." },
                     { title: "Investment Ready", text: "Teams preparing for investment conversations that require a documented commercial strategy." }
                   ].map((item, i) => (
                     <li key={i} className="flex gap-4">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mt-3 shrink-0"></div>
                        <div className="space-y-1">
                           <p className="font-bold text-navy uppercase tracking-widest text-xs">{item.title}</p>
                           <p className="text-navy/70 font-light leading-relaxed">{item.text}</p>
                        </div>
                     </li>
                   ))}
                </ul>
              </section>

              <section className="space-y-8 pt-12">
                <h2 className="text-3xl font-serif text-navy italic">Frequently Asked Questions</h2>
                <div className="space-y-10">
                  <div className="space-y-3 font-light">
                    <h4 className="text-xl font-serif text-navy italic">Strategy or Execution?</h4>
                    <p className="text-navy/70">Both. The document defines your strategy (messaging/channels) and your 90-day execution plan (sequence/milestones). Strategy without execution is just a presentation.</p>
                  </div>
                  <div className="space-y-3 font-light">
                    <h4 className="text-xl font-serif text-navy italic">How much input do I provide?</h4>
                    <p className="text-navy/70">A completed brief covering your offer and target market. If you're not sure how to answer some questions, that's where the strategic work starts.</p>
                  </div>
                  <div className="space-y-3 font-light">
                    <h4 className="text-xl font-serif text-navy italic">Can this be used for onboarding?</h4>
                    <p className="text-navy/70">Yes. it becomes the commercial onboarding document for anyone joining your revenue team, eliminating the months of "learning through osmosis".</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="bg-navy p-10 text-pearl rounded-sm space-y-6 sticky top-32">
                <h4 className="text-xs uppercase tracking-[0.4em] font-black text-gold/60">Tier Exclusive</h4>
                <div className="space-y-2">
                  <p className="text-3xl font-serif italic text-gold">Growth</p>
                  <p className="text-xs text-pearl/40 font-light uppercase tracking-widest leading-none">$1,999/mo</p>
                </div>
                <div className="pt-6 border-t border-white/5 space-y-6">
                  <p className="text-sm font-light text-pearl/60 italic leading-relaxed">
                    Growth tier includes everything in Standard plus GTM strategy, campaign plans, and weekly social posts.
                  </p>
                  <Link to="/pricing" className="block w-full py-4 bg-gold text-navy text-[10px] uppercase tracking-widest font-black text-center hover:bg-white transition-colors">
                    UPGRADE TO GROWTH &rarr;
                  </Link>
                </div>
              </div>

              <div className="p-8 border border-navy/5 rounded-sm space-y-4">
                 <Briefcase className="text-gold" size={24} />
                 <h4 className="text-xs uppercase tracking-widest font-black">Commercial Rigor</h4>
                 <p className="text-xs text-navy/60 font-light leading-relaxed">Built by a strategist who managed $21M+ in revenue at global life science companies.</p>
              </div>
            </aside>
          </div>
        </div>

        {/* Footer CTA */}
        <section className="mt-32 p-16 bg-pearl border border-navy/5 rounded-sm text-center space-y-8">
           <h2 className="text-4xl font-serif text-navy italic">Build the Commercial Plan Your Business Can Actually Execute</h2>
           <p className="text-navy/60 font-light max-w-2xl mx-auto">
             Stop guessing and start selling with a documented plan built for speed and institutional-grade scaling.
           </p>
           <div className="pt-4">
              <a href="https://calendly.com/mergelith/30min" className="btn-primary px-16 py-6 text-sm tracking-widest italic font-serif">
                 GET YOUR GTM PLAN &rarr;
              </a>
           </div>
        </section>
      </article>
    </div>
  );
};

export default GTMStrategy;
