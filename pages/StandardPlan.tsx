import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Clock, 
  Zap, 
  Presentation, 
  Palette, 
  ShieldCheck, 
  ArrowRight,
  FileText,
  BarChart4,
  Layers,
  HelpCircle
} from 'lucide-react';
import { motion } from 'motion/react';

const StandardPlan: React.FC = () => {
  useEffect(() => {
    document.title = "Standard Marketing Retainer for Small Business | $997/Month | Mergelith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Corporate-grade marketing materials on demand — pitch decks, brand kits, battle cards, one-pagers, and infographics. 48-hour turnaround.");
    }
  }, []);

  const deliverables = [
    {
      title: "Sales Pitch Decks",
      desc: "Built around your buyer's problem, not your company's history. Structured to move prospects from 'interested' to 'yes'.",
      link: "/sales-pitch-decks",
      icon: Presentation
    },
    {
      title: "Corporate Capability Decks",
      desc: "The credentials presentation that makes your business look like the obvious choice before anyone asks a question.",
      link: "/capability-decks",
      icon: Layers
    },
    {
      title: "Brand Kits",
      desc: "Colors, fonts, and brand voice documented so every piece of material looks professional and consistent.",
      link: "/brand-kit",
      icon: Palette
    },
    {
      title: "Battle Cards",
      desc: "Competitive objection handling, documented and designed for your sales team to use in live conversations.",
      link: "/battle-cards",
      icon: Zap
    },
    {
      title: "One-Pagers & Infographics",
      desc: "The leave-behind that earns the follow-up. Data visualization that tells your story faster than a paragraph.",
      link: "/one-pagers-infographics",
      icon: FileText
    }
  ];

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
              MARKETING AS A SERVICE
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-navy italic leading-tight">
              Everything Your Business Needs to <span className="text-gold">Look</span> Like It Means Business
            </h1>
            <p className="text-xl text-navy/60 font-light max-w-xl leading-relaxed">
              Standard Plan: Corporate-grade marketing materials on demand. One active task at a time. 48-hour turnaround. Built by senior strategists, not junior designers.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="https://calendly.com/mergelith/30min" target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-5 text-sm tracking-widest text-center italic font-serif">
                START YOUR SUBSCRIPTION &rarr;
              </a>
              <Link to="/pricing" className="px-12 py-5 border border-navy/10 text-navy text-[11px] uppercase tracking-[0.3em] font-black hover:bg-navy hover:text-pearl transition-all text-center">
                COMPARE PLANS
              </Link>
            </div>
          </motion.div>
          
          <div className="relative">
             <div className="bg-navy p-12 text-pearl rounded-sm shadow-2xl space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                   <ShieldCheck size={200} className="text-gold" />
                </div>
                
                <div className="space-y-2 relative z-10">
                   <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-black">Monthly Retainer</p>
                   <h3 className="text-6xl font-serif italic">$997</h3>
                </div>

                <div className="space-y-6 relative z-10 pt-8 border-t border-white/10">
                   <div className="flex items-center gap-4">
                      <Clock className="text-gold" size={20} />
                      <p className="text-sm font-light italic">48-Hour Delivery</p>
                   </div>
                   <div className="flex items-center gap-4">
                      <CheckCircle2 className="text-gold" size={20} />
                      <p className="text-sm font-light italic">One Active Task at a Time</p>
                   </div>
                   <div className="flex items-center gap-4">
                      <Zap className="text-gold" size={20} />
                      <p className="text-sm font-light italic">Editable Source Files Included</p>
                   </div>
                </div>

                <div className="pt-8 relative z-10">
                   <p className="text-[10px] uppercase font-black tracking-widest text-gold/60">Senior Commercial Strategy Driven</p>
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/5 -z-10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Deliverables Section */}
        <section className="py-24 border-t border-navy/5">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl space-y-4">
                <h2 className="text-4xl font-serif text-navy italic">What's Included</h2>
                <p className="text-navy/60 font-light leading-relaxed">
                   Submit a task, receive a corporate-grade deliverable in 48 hours, then submit the next. No bottlenecks, no project queues, no waiting weeks.
                </p>
              </div>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deliverables.map((item, i) => (
                <div key={i} className="p-10 border border-navy/5 rounded-sm hover:border-gold/30 transition-all group flex flex-col justify-between">
                   <div className="space-y-6">
                      <div className="p-3 bg-gold/10 text-gold w-fit rounded-sm group-hover:bg-gold group-hover:text-navy transition-colors">
                         <item.icon size={24} />
                      </div>
                      <h4 className="text-xl font-serif text-navy italic">{item.title}</h4>
                      <p className="text-sm text-navy/60 font-light leading-relaxed">{item.desc}</p>
                   </div>
                   <Link to={item.link} className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-navy group-hover:text-gold transition-colors">
                      LEARN MORE <ArrowRight size={12} />
                   </Link>
                </div>
              ))}
              <div className="p-10 bg-pearl border border-navy/5 rounded-sm flex flex-col justify-center items-center text-center space-y-6 italic">
                 <p className="text-navy/40 font-light">Need something else? Reach out before subscribing. If it's in scope, we'll confirm.</p>
                 <Link to="/services" className="text-[10px] uppercase tracking-widest font-black text-gold">VIEW ALL SERVICES</Link>
              </div>
           </div>
        </section>

        {/* Content Section */}
        <div className="prose prose-lg prose-navy max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-navy prose-p:text-navy/70 prose-strong:text-navy mt-16">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <section className="space-y-8 pb-12 border-b border-navy/5">
                <h2 className="text-3xl font-serif text-navy italic">Who the Standard Plan Is For</h2>
                <div className="space-y-6">
                   {[
                     { title: "Small Business Owners", desc: "For those who need professional sales and brand materials fast, at a price that makes sense." },
                     { title: "Growth-Ready Founders", desc: "Build the pitch deck library, battle cards, and brand kit before scaling your sales team." },
                     { title: "Professional Services", desc: "Law firms, financial advisors, healthcare practices, and real estate teams where credibility materials influence deals." },
                     { title: "B2B Sales Teams", desc: "Organizations where reps need consistent, professional materials to compete against larger competitors." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6 items-start p-8 bg-pearl border border-navy/5 rounded-sm">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 shrink-0"></div>
                        <div className="space-y-1">
                           <p className="font-bold text-navy uppercase text-xs tracking-widest">{item.title}</p>
                           <p className="text-navy/60 font-light leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </section>

              <section className="space-y-8 pt-12">
                <h2 className="text-3xl font-serif text-navy italic">Frequently Asked Questions</h2>
                <div className="space-y-10">
                   <div className="space-y-3">
                      <h4 className="text-xl font-serif text-navy italic">What counts as one task?</h4>
                      <p className="text-navy/70 font-light leading-relaxed">One deliverable — one pitch deck, one brand kit, one battle card, or one one-pager. Revisions to a completed deliverable count as a separate task in your queue.</p>
                   </div>
                   <div className="space-y-3">
                      <h4 className="text-xl font-serif text-navy italic">How detailed does my brief need to be?</h4>
                      <p className="text-navy/70 font-light leading-relaxed">Detailed enough to build from. The more specific you are about your target buyer and competitive context, the sharper the output. We provide an intake guide for every new subscriber.</p>
                   </div>
                   <div className="space-y-3">
                      <h4 className="text-xl font-serif text-navy italic">Month-to-month or contract?</h4>
                      <p className="text-navy/70 font-light leading-relaxed">Month-to-month. Cancel at the end of any month. No penalty, no negotiation, no exit fee. You stay because the work is worth it.</p>
                   </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="bg-pearl p-10 border border-navy/5 rounded-sm space-y-6 sticky top-32">
                <h4 className="text-xs uppercase tracking-[0.4em] font-black text-gold">Commitment</h4>
                <div className="space-y-2">
                  <p className="text-2xl font-serif italic text-navy">Month-to-Month</p>
                  <p className="text-xs text-navy/40 font-light uppercase tracking-widest leading-none">Cancel Anytime</p>
                </div>
                <div className="pt-6 border-t border-navy/5 space-y-6">
                  <p className="text-sm font-light text-navy/60 italic leading-relaxed">
                    Senior commercial strategic expertise applied to every pixel. Built for speed. Optimized for conversion.
                  </p>
                  <a href="https://calendly.com/mergelith/30min" className="block w-full py-4 bg-navy text-pearl text-[10px] uppercase tracking-widest font-black text-center hover:bg-gold hover:text-navy transition-colors">
                    GET STARTED &rarr;
                  </a>
                </div>
              </div>

              <div className="p-8 border border-navy/5 rounded-sm space-y-4">
                 <ShieldCheck className="text-gold" size={24} />
                 <h4 className="text-[10px] uppercase tracking-widest font-black">20+ Years Experience</h4>
                 <p className="text-xs text-navy/60 font-light leading-relaxed italic">Built by a strategist with a $21M+ global portfolio history. Not a junior team.</p>
              </div>
            </aside>
          </div>
        </div>

        {/* Footer CTA */}
        <section className="mt-32 p-16 bg-navy text-pearl rounded-sm text-center space-y-8">
           <h2 className="text-4xl font-serif italic text-gold leading-tight">Look Like You Mean Business.<br />Starting in 48 Hours.</h2>
           <p className="text-pearl/60 font-light max-w-2xl mx-auto italic">
             Most small businesses lose deals because their materials don't reflect their expertise. The Standard plan solves that.
           </p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <a href="https://calendly.com/mergelith/30min" className="btn-primary px-16 py-6 text-sm tracking-widest italic font-serif">
                 BOOK DISCOVERY CALL &rarr;
              </a>
           </div>
        </section>
      </article>
    </div>
  );
};

export default StandardPlan;
