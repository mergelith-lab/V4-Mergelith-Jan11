import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  CheckCircle2, 
  Target, 
  Zap, 
  ArrowRight,
  TrendingUp,
  MessageSquare,
  Calendar,
  BarChart3,
  Search,
  Flag,
  Layers,
  Users,
  Network,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

const CampaignBriefs: React.FC = () => {
  useEffect(() => {
    document.title = "Campaign Briefs for Small Business | 48-Hour Delivery | Mergelith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "A campaign brief that gives every campaign a defined goal, audience, message, channel plan, and success metric — before a dollar is spent.");
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
          "name": "Does the campaign brief include the actual content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The brief is the strategic document: objective, audience, message, channel plan, content list, and metrics. The actual content assets (emails, posts) are separate tasks in your queue."
          }
        },
        {
          "@type": "Question",
          "name": "How specific does my input need to be?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tell us what you're promoting, your target, and your timing. We build the strategy from there. You don't need the answer — just the context."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between a campaign brief and a GTM strategy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GTM strategy is your overall commercial foundation. A campaign brief is a single, time-bound effort (like a launch or promotion) within that strategy."
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
              GROWTH TIER STRATEGY
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-navy italic leading-tight">
              Most Campaigns <span className="text-gold">Fail</span> Before They Ever Start
            </h1>
            <p className="text-xl text-navy/60 font-light max-w-xl leading-relaxed">
              Launch with a clear audience, defined message, and measurement plan. Activity without direction produces impressions, not revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="https://calendly.com/mergelith/30min" target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-5 text-sm tracking-widest text-center italic font-serif">
                START YOUR BRIEF &rarr;
              </a>
              <Link to="/pricing" className="px-12 py-5 border border-navy/10 text-navy text-[11px] uppercase tracking-[0.3em] font-black hover:bg-navy hover:text-pearl transition-all text-center">
                VIEW GROWTH PLAN
              </Link>
            </div>
          </motion.div>
          
          <div className="relative">
             <div className="aspect-[4/5] bg-pearl p-12 border border-navy/5 rounded-sm shadow-2xl flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Flag size={200} className="text-navy" />
                </div>
                
                <div className="relative z-10 space-y-6">
                   <div className="h-1 w-12 bg-gold"></div>
                   <h3 className="text-3xl font-serif italic text-navy leading-tight font-semibold">Strategic Campaign Roadmap</h3>
                   <div className="space-y-4 pt-6">
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-gold"></div>
                         <p className="text-[10px] uppercase font-black tracking-widest text-navy/40">Objective Locked</p>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-gold"></div>
                         <p className="text-[10px] uppercase font-black tracking-widest text-navy/40">Audience Segmentation</p>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-gold"></div>
                         <p className="text-[10px] uppercase font-black tracking-widest text-navy/40">Channel Orchestration</p>
                      </div>
                   </div>
                </div>
                
                <div className="relative z-10 flex justify-between items-end border-t border-navy/5 pt-8">
                   <p className="text-2xl font-serif italic text-navy">Execution Ready</p>
                   <p className="text-[9px] font-black uppercase text-gold tracking-widest">48h Delivery</p>
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/5 -z-10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-navy max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-navy prose-p:text-navy/70 prose-strong:text-navy">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <section className="space-y-6">
                <p className="text-2xl text-navy font-light leading-relaxed italic border-l-4 border-gold pl-8">
                  A campaign launched without a defined message, goal, and measurement plan isn't a campaign — it's activity. And activity without direction produces impressions, not revenue.
                </p>
                <p>
                  A Mergelith campaign brief is the document that turns a marketing idea into a structured, executable plan. Growth tier deliverable. Delivered in 48 hours. Built before the work starts — so the work produces results.
                </p>
              </section>

              <section className="space-y-8 pb-12 border-b border-navy/5">
                <h2 className="text-3xl font-serif text-navy italic">What's Included</h2>
                <div className="grid md:grid-cols-2 gap-12 text-sm">
                   {[
                     { icon: Target, title: "Campaign Objective", desc: "A specific, measurable goal (e.g., '10 new patient appointments booked') instead of vague awareness." },
                     { icon: Users, title: "Target Audience", desc: "The specific segment the campaign addresses, defined by pain points and readiness to act." },
                     { icon: MessageSquare, title: "Core Message", desc: "The central narrative and specific offer crafted to resonate with the target audience's awareness." },
                     { icon: Network, title: "Channel Plan", desc: "Which channels carry the campaign and how they work together, prioritized by expected ROI." },
                     { icon: Layers, title: "Content Roadmap", desc: "The list of assets required (emails, social, etc.) and the sequence in which they deploy." },
                     { icon: BarChart3, title: "Success Metrics", desc: "Specific KPIs and benchmarks that define success versus failure for your business." }
                   ].map((item, i) => (
                     <div key={i} className="space-y-3">
                        <div className="flex items-center gap-3">
                           <div className="p-2 bg-gold/10 text-gold border border-gold/20 rounded-sm">
                              <item.icon size={16} />
                           </div>
                           <p className="font-bold uppercase tracking-widest text-[10px] text-navy">{item.title}</p>
                        </div>
                        <p className="text-navy/60 font-light leading-relaxed">{item.desc}</p>
                     </div>
                   ))}
                </div>
              </section>

              <section className="space-y-8 py-12 border-b border-navy/5">
                <h2 className="text-3xl font-serif text-navy italic">Who This Is For</h2>
                <div className="space-y-6">
                   <div className="flex gap-4 items-start p-6 bg-pearl border border-navy/5 rounded-sm">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 shrink-0"></div>
                      <p className="text-navy/70 font-light leading-relaxed"><strong className="text-navy">Seasonal Campaigns</strong> — Promotional pushes for time-sensitive opportunities like new patient drives or holiday offers.</p>
                   </div>
                   <div className="flex gap-4 items-start p-6 bg-pearl border border-navy/5 rounded-sm">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 shrink-0"></div>
                      <p className="text-navy/70 font-light leading-relaxed"><strong className="text-navy">Service Launches</strong> — Structured introductions of a new offer to your existing audience and extension to new prospects.</p>
                   </div>
                   <div className="flex gap-4 items-start p-6 bg-pearl border border-navy/5 rounded-sm">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 shrink-0"></div>
                      <p className="text-navy/70 font-light leading-relaxed"><strong className="text-navy">Reactivation efforts</strong> — Campaigns designed to re-engage dormant customers, lapsed patients, or inactive leads.</p>
                   </div>
                </div>
              </section>

              <section className="space-y-8 pt-12">
                <h2 className="text-3xl font-serif text-navy italic">Frequently Asked Questions</h2>
                <div className="space-y-10">
                   <div className="space-y-3">
                      <h4 className="text-xl font-serif text-navy italic">Does the brief include the actual content?</h4>
                      <p className="text-navy/70 font-light leading-relaxed">The brief is the strategic document. Actual content assets (emails, landing pages) are separate tasks. If you're on the Growth tier, social posts are included weekly; other assets follow the task queue.</p>
                   </div>
                   <div className="space-y-3">
                      <h4 className="text-xl font-serif text-navy italic">How much input do I need to provide?</h4>
                      <p className="text-navy/70 font-light leading-relaxed">Tell us what you're promoting, your target, and any constraints. You don't need the answers, just the context. We build the strategy from there.</p>
                   </div>
                   <div className="space-y-3">
                      <h4 className="text-xl font-serif text-navy italic">Brief vs. GTM Strategy?</h4>
                      <p className="text-navy/70 font-light leading-relaxed">GTM strategy is your overall commercial foundation (ICP, positioning, 90-day plan). A campaign brief is a single time-bound promotion within that broader strategy.</p>
                   </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="bg-navy p-10 text-pearl rounded-sm space-y-6 sticky top-32">
                <h4 className="text-xs uppercase tracking-[0.4em] font-black text-gold/60">Subscription</h4>
                <div className="space-y-2">
                  <p className="text-3xl font-serif italic text-gold">Growth Tier</p>
                  <p className="text-xs text-pearl/40 font-light uppercase tracking-widest leading-none">Deliverable</p>
                </div>
                <div className="pt-6 border-t border-white/5 space-y-6">
                  <p className="text-sm font-light text-pearl/60 italic leading-relaxed">
                    Included in our Growth ($1,999/mo) plan. Strategy before spending. Structure before execution.
                  </p>
                  <Link to="/pricing" className="block w-full py-4 bg-gold text-navy text-[10px] uppercase tracking-widest font-black text-center hover:bg-white transition-colors">
                    VIEW PLANS &rarr;
                  </Link>
                </div>
              </div>

              <div className="p-8 border border-navy/5 rounded-sm space-y-4">
                 <ShieldCheck className="text-gold" size={24} />
                 <h4 className="text-[10px] uppercase tracking-widest font-black">Commercial Discipline</h4>
                 <p className="text-xs text-navy/60 font-light leading-relaxed italic">Built with the same rigor applied to multi-million dollar global life science campaigns.</p>
              </div>
            </aside>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="mt-32 p-16 bg-navy text-pearl rounded-sm text-center space-y-8">
           <h2 className="text-4xl font-serif italic text-gold">Strategy before spending. Structure before execution.</h2>
           <p className="text-pearl/60 font-light max-w-2xl mx-auto italic">
             Most campaigns fail because they lack a defined objective. A Mergelith campaign brief turns a marketing idea into a structured, executable plan.
           </p>
           <div className="pt-4">
              <a href="https://calendly.com/mergelith/30min" className="btn-primary px-16 py-6 text-sm tracking-widest italic font-serif">
                 BOOK DISCOVERY CALL &rarr;
              </a>
           </div>
        </section>
      </article>
    </div>
  );
};

export default CampaignBriefs;
