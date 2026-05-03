import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Clock, 
  Zap, 
  TrendingUp,
  Target,
  FileText,
  Search,
  Share2,
  Rocket,
  ShieldCheck,
  ArrowRight,
  Presentation,
  Palette,
  Layers,
  BarChart4
} from 'lucide-react';
import { motion } from 'motion/react';

const GrowthPlan: React.FC = () => {
  useEffect(() => {
    document.title = "Growth Marketing Retainer for Small Business | $1,999/Month | Mergelith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Everything in Standard plus GTM strategy, campaign briefs, weekly social media posts, and SEO/AEO/GEO audit. The full-stack marketing execution retainer.");
    }
  }, []);

  const addedFeatures = [
    {
      title: "GTM Strategy Documents",
      desc: "Your go-to-market roadmap: ICP, positioning, messaging framework, and 90-day execution plan.",
      link: "/gtm-strategy",
      icon: Target
    },
    {
      title: "Campaign Briefs",
      desc: "Every campaign planned with clear objectives, audience, message, and success metrics before launch.",
      link: "/campaign-briefs",
      icon: FileText
    },
    {
      title: "SEO / AEO / GEO Audit",
      desc: "Visibility audit across traditional search and AI answer engines with a prioritized action plan.",
      link: "/seo-aeo-geo-report",
      icon: Search
    },
    {
      title: "Weekly Social Media Posts",
      desc: "One post/week across LinkedIn, Instagram, etc. We write and design; you review and publish.",
      link: "/services",
      icon: Share2
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
              FULL-STACK MARKETING EXECUTION
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-navy italic leading-tight">
              Build a Marketing <span className="text-gold">Operation</span> That Scales With You
            </h1>
            <p className="text-xl text-navy/60 font-light max-w-xl leading-relaxed">
              The Growth plan builds the strategic architecture and content engine that drives consistent pipeline — the GTM strategy, the campaign briefs, the weekly social content, and the search visibility audit.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="https://calendly.com/mergelith/30min" target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-5 text-sm tracking-widest text-center italic font-serif">
                START YOUR GROWTH PLAN &rarr;
              </a>
              <Link to="/pricing" className="px-12 py-5 border border-navy/10 text-navy text-[11px] uppercase tracking-[0.3em] font-black hover:bg-navy hover:text-pearl transition-all text-center">
                COMPARE PLANS
              </Link>
            </div>
          </motion.div>
          
          <div className="relative">
             <div className="bg-navy p-12 text-pearl rounded-sm shadow-2xl space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Rocket size={200} className="text-gold" />
                </div>
                
                <div className="space-y-2 relative z-10">
                   <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-black">Growth Retainer</p>
                   <h3 className="text-6xl font-serif italic">$1,999</h3>
                </div>

                <div className="space-y-6 relative z-10 pt-8 border-t border-white/10">
                   <div className="flex items-center gap-4">
                      <TrendingUp className="text-gold" size={20} />
                      <p className="text-sm font-light italic text-gold">Includes Everything in Standard</p>
                   </div>
                   <div className="flex items-center gap-4">
                      <Target className="text-gold" size={20} />
                      <p className="text-sm font-light italic">GTM Strategy & Campaign Briefs</p>
                   </div>
                   <div className="flex items-center gap-4">
                      <Search className="text-gold" size={20} />
                      <p className="text-sm font-light italic">SEO / AEO / GEO Triple Audit</p>
                   </div>
                   <div className="flex items-center gap-4">
                      <Share2 className="text-gold" size={20} />
                      <p className="text-sm font-light italic">Weekly Social Content Engine</p>
                   </div>
                </div>

                <div className="pt-8 relative z-10">
                   <p className="text-[10px] uppercase font-black tracking-widest text-gold/60">Professional Commercial Architecture</p>
                </div>
             </div>
          </div>
        </div>

        {/* Added Value Grid */}
        <section className="py-24 border-t border-navy/5">
           <div className="max-w-2xl mb-16 space-y-4">
             <h2 className="text-4xl font-serif text-navy italic">Beyond Materials: A System</h2>
             <p className="text-navy/60 font-light leading-relaxed">
                The Standard plan builds your foundation. The Growth plan builds the repeatable system that drives your commercial machine.
             </p>
           </div>

           <div className="grid md:grid-cols-2 gap-8">
              {addedFeatures.map((item, i) => (
                <div key={i} className="p-10 bg-pearl border border-navy/5 rounded-sm hover:border-gold/30 transition-all group flex flex-col justify-between">
                   <div className="space-y-6">
                      <div className="p-3 bg-navy text-gold w-fit rounded-sm group-hover:bg-gold group-hover:text-navy transition-colors">
                         <item.icon size={24} />
                      </div>
                      <h4 className="text-2xl font-serif text-navy italic">{item.title}</h4>
                      <p className="text-sm text-navy/60 font-light leading-relaxed">{item.desc}</p>
                   </div>
                   <Link to={item.link} className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-navy group-hover:text-gold transition-colors">
                      LEARN MORE <ArrowRight size={12} />
                   </Link>
                </div>
              ))}
           </div>
        </section>

        {/* Content Body */}
        <div className="prose prose-lg prose-navy max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-navy prose-p:text-navy/70 mt-16">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <section className="space-y-8 pb-12 border-b border-navy/5">
                <h2 className="text-3xl font-serif text-navy italic">Who the Growth Plan Is For</h2>
                <div className="grid sm:grid-cols-2 gap-6 not-prose">
                   {[
                     { title: "Systematic Scalers", desc: "For those ready to move from reactive growth to a repeatable commercial machine." },
                     { title: "Escaping Founder Sales", desc: "Document your strategy so hires and partners can execute without your direct involvement." },
                     { title: "New Market Entries", desc: "When a clear GTM and campaign plan are essential before spending heavily on execution." },
                     { title: "Social Presence", desc: "Maintain professional content consistency across LinkedIn and Instagram without the weekly time sink." }
                   ].map((item, i) => (
                     <div key={i} className="p-6 border border-navy/5 rounded-sm space-y-4">
                        <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center font-serif italic text-lg">{i+1}</div>
                        <div className="space-y-1">
                           <p className="font-bold text-xs uppercase tracking-widest text-navy">{item.title}</p>
                           <p className="text-xs text-navy/50 font-light leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </section>

              <section className="space-y-8 pt-12 pb-12 border-b border-navy/5">
                <h2 className="text-3xl font-serif text-navy italic">Growth vs. Standard Comparison</h2>
                <div className="overflow-x-auto not-prose">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-navy text-pearl">
                        <th className="p-4 text-[10px] uppercase tracking-widest font-black">Capacity</th>
                        <th className="p-4 text-[10px] uppercase tracking-widest font-black">Standard</th>
                        <th className="p-4 text-[10px] uppercase tracking-widest font-black">Growth</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs font-light text-navy">
                      <tr className="border-b border-navy/5">
                        <td className="p-4 font-bold">Monthly Rate</td>
                        <td className="p-4">$997</td>
                        <td className="p-4">$1,999</td>
                      </tr>
                      <tr className="border-b border-navy/5 bg-pearl/30">
                        <td className="p-4 font-bold">Standard Deliverables</td>
                        <td className="p-4 text-gold">✅</td>
                        <td className="p-4 text-gold">✅</td>
                      </tr>
                      <tr className="border-b border-navy/5">
                        <td className="p-4 font-bold">GTM Strategy Docs</td>
                        <td className="p-4 opacity-30">—</td>
                        <td className="p-4 text-gold">✅</td>
                      </tr>
                      <tr className="border-b border-navy/5 bg-pearl/30">
                        <td className="p-4 font-bold">Campaign Briefs</td>
                        <td className="p-4 opacity-30">—</td>
                        <td className="p-4 text-gold">✅</td>
                      </tr>
                      <tr className="border-b border-navy/5">
                        <td className="p-4 font-bold">Search Visibility Audit</td>
                        <td className="p-4 opacity-30">—</td>
                        <td className="p-4 text-gold">✅</td>
                      </tr>
                      <tr className="border-b border-navy/5 bg-pearl/30">
                        <td className="p-4 font-bold">Weekly Social Content</td>
                        <td className="p-4 opacity-30">—</td>
                        <td className="p-4 text-gold">✅</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-8 pt-12">
                <h2 className="text-3xl font-serif text-navy italic">Frequently Asked Questions</h2>
                <div className="space-y-10">
                   <div className="space-y-3">
                      <h4 className="text-xl font-serif text-navy italic">How does the social media post work?</h4>
                      <p className="text-navy/70 font-light leading-relaxed">Each week, we design and write one social post (Instagram, LinkedIn, Google Business, Facebook). We send it to you for review, and you publish it. It's the engine for consistent brand presence.</p>
                   </div>
                   <div className="space-y-3">
                      <h4 className="text-xl font-serif text-navy italic">What about the Standard task queue?</h4>
                      <p className="text-navy/70 font-light leading-relaxed">The weekly social post happens automatically outside the queue. Your task slots remain available for deep work like pitch decks or strategy documents.</p>
                   </div>
                   <div className="space-y-3">
                      <h4 className="text-xl font-serif text-navy italic">Can I downgrade later?</h4>
                      <p className="text-navy/70 font-light leading-relaxed">Yes. All plans are month-to-month. You stay because the model works. You can upgrade or downgrade at the start of any billing cycle.</p>
                   </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="bg-navy p-10 text-pearl rounded-sm space-y-6 sticky top-32 shadow-xl">
                <h4 className="text-xs uppercase tracking-[0.4em] font-black text-gold/60">Investment</h4>
                <div className="space-y-2">
                  <p className="text-4xl font-serif italic text-gold">$1,999</p>
                  <p className="text-xs text-pearl/40 font-light uppercase tracking-widest leading-none">Monthly Retainer</p>
                </div>
                <div className="pt-6 border-t border-white/5 space-y-6">
                  <p className="text-sm font-light text-pearl/60 italic leading-relaxed">
                    Build a marketing system that delivers more value per dollar than any traditional agency relationship.
                  </p>
                  <a href="https://calendly.com/mergelith/30min" className="block w-full py-4 bg-gold text-navy text-[10px] uppercase tracking-widest font-black text-center hover:bg-white transition-colors">
                    SCALE YOUR MARKETING &rarr;
                  </a>
                </div>
              </div>

              <div className="p-8 border border-navy/5 rounded-sm space-y-4">
                 <Rocket className="text-gold" size={24} />
                 <h4 className="text-[10px] uppercase tracking-widest font-black">Velocity Tier</h4>
                 <p className="text-xs text-navy/60 font-light leading-relaxed italic">The most popular choice for businesses ready to professionalize their commercial engine.</p>
              </div>
            </aside>
          </div>
        </div>

        {/* Roadmap Example */}
        <section className="mt-32 p-16 bg-pearl border border-navy/5 rounded-sm">
           <h2 className="text-3xl font-serif text-navy italic mb-12 text-center italic">What Your First 90 Days Looks Like</h2>
           <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                 <p className="text-gold font-serif italic text-3xl">Month 1</p>
                 <h4 className="text-sm font-black uppercase tracking-widest">The Foundation</h4>
                 <p className="text-xs text-navy/60 font-light leading-relaxed">GTM strategy document, pitch deck refresh, and brand kit finalization. Architecture is set.</p>
              </div>
              <div className="space-y-4">
                 <p className="text-gold font-serif italic text-3xl">Month 2</p>
                 <h4 className="text-sm font-black uppercase tracking-widest">The Campaigns</h4>
                 <p className="text-xs text-navy/60 font-light leading-relaxed">Campaign brief for Q2, battle cards for competitors, and weekly social content engine live.</p>
              </div>
              <div className="space-y-4">
                 <p className="text-gold font-serif italic text-3xl">Month 3</p>
                 <h4 className="text-sm font-black uppercase tracking-widest">The Optimization</h4>
                 <p className="text-xs text-navy/60 font-light leading-relaxed">Search visibility audit delivered, one-pagers for core services, and planning for seasonal pushes.</p>
              </div>
           </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-32 text-center space-y-12 max-w-2xl mx-auto">
           <h2 className="text-5xl font-serif text-navy italic italic leading-tight">Ready to Execute Marketing Like a Commercial Operation?</h2>
           <a href="https://calendly.com/mergelith/30min" className="btn-primary px-16 py-6 text-sm tracking-widest italic font-serif">
             REQUEST GROWTH TIERS &rarr;
           </a>
        </div>
      </article>
    </div>
  );
};

export default GrowthPlan;
