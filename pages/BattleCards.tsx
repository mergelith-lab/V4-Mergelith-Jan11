import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sword, 
  CheckCircle2, 
  ShieldAlert, 
  Zap, 
  ArrowRight,
  Crosshair,
  FileText,
  Search,
  MessageSquare,
  TrendingUp,
  Target,
  Users,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

const BattleCards: React.FC = () => {
  useEffect(() => {
    document.title = "Battle Cards for Sales Teams | 48-Hour Delivery | Mergelith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Sales battle cards that prepare your team for every competitive objection — delivered in 48 hours. Stop losing deals because your reps didn't have a ready answer.");
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
          "name": "How many competitors can I cover in one task?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "One competitor per task. This keeps the card focused and actionable — a card that tries to address five competitors at once is too diluted to be useful in a live sales conversation."
          }
        },
        {
          "@type": "Question",
          "name": "What if I don't have detailed information about the competitor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Submit what you know. Mergelith will research the competitor using public information — website, pricing pages, reviews, positioning — and fill the gaps."
          }
        },
        {
          "@type": "Question",
          "name": "Should I have a battle card for every competitor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start with the one you lose to most often. One tight, accurate card for your top competitor is worth more than five generic ones."
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
              SALES ENABLEMENT DELIVERABLE
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-navy italic leading-tight">
              Your Reps Are <span className="text-gold">Losing Deals</span> They Should Be Winning
            </h1>
            <p className="text-xl text-navy/60 font-light max-w-xl leading-relaxed">
              The moment a prospect says "we're also looking at [competitor]," most reps stumble. That's not a sales skill problem. It's a preparation problem.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="https://calendly.com/mergelith/30min" target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-5 text-sm tracking-widest text-center italic font-serif">
                ARM YOUR REPS &rarr;
              </a>
              <Link to="/pricing" className="px-12 py-5 border border-navy/10 text-navy text-[11px] uppercase tracking-[0.3em] font-black hover:bg-navy hover:text-pearl transition-all text-center">
                VIEW RETAINER PLANS
              </Link>
            </div>
          </motion.div>
          <div className="relative">
             <div className="w-full aspect-[3/4] max-w-sm mx-auto bg-navy p-10 border border-white/10 rounded-sm shadow-2xl space-y-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex justify-between items-start">
                   <Sword className="text-gold" size={28} />
                   <div className="px-2 py-0.5 border border-gold/30 text-gold text-[7px] font-black tracking-widest uppercase">
                      Internal Use Only
                   </div>
                </div>
                <div className="space-y-4">
                   <h3 className="text-2xl font-serif italic text-pearl leading-tight">vs. Market Leader</h3>
                   <div className="space-y-6 pt-6 border-t border-white/5">
                      <div className="space-y-2">
                         <p className="text-[9px] uppercase font-black text-gold/60 tracking-widest">Killer Question</p>
                         <p className="text-xs text-pearl/80 italic font-light leading-relaxed">"How does their pricing scale once you exceed 10 active users?"</p>
                      </div>
                      <div className="space-y-2">
                         <p className="text-[9px] uppercase font-black text-gold/60 tracking-widest">Where We Win</p>
                         <p className="text-xs text-pearl/80 font-light leading-relaxed">Lower implementation cost, 24/7 technical support, native AI workflows.</p>
                      </div>
                   </div>
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/5 -z-10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg prose-navy max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-navy prose-p:text-navy/70 prose-strong:text-navy">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <section className="space-y-6">
                <p className="text-2xl text-navy font-light leading-relaxed italic border-l-4 border-gold pl-8">
                  A battle card gives every rep on your team a fast, structured answer for every competitive objection — what the competitor does well, where they fall short, and why your solution wins.
                </p>
                <p>
                  Mergelith builds battle cards that your team actually uses — one page, sharp, built around the specific objections your buyers raise. 48-hour delivery. One card per competitor.
                </p>
              </section>

              <section className="space-y-8 pb-12 border-b border-navy/5">
                <h2 className="text-3xl font-serif text-navy italic">What's Included</h2>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                   {[
                     { title: "Competitive Positioning", desc: "A clear assessment of the competitor: what they do well, who they're right for, and where they lose." },
                     { title: "Head-to-Head Comparison", desc: "Structured comparison across dimensions your buyers care about: price, scope, expertise, and risk." },
                     { title: "Objection-Response Scripts", desc: "The 3-5 most common comparison objections with exact language for your reps to deploy." },
                     { title: "Win/Loss Scenarios", desc: "Honest accounts of when you're the stronger choice versus when the competitor might be better." },
                     { title: "Proof Points", desc: "Specific stats, credentials, and examples a rep can drop into the conversation to back up the claim." }
                   ].map((item, i) => (
                     <div key={i} className="space-y-2">
                        <div className="flex items-center gap-2 text-gold">
                           <CheckCircle2 size={16} />
                           <span className="text-xs uppercase tracking-widest font-black text-navy">{item.title}</span>
                        </div>
                        <p className="text-sm text-navy/60 leading-relaxed font-light">{item.desc}</p>
                     </div>
                   ))}
                </div>
              </section>

              <section className="space-y-8 py-12 border-b border-navy/5">
                <h2 className="text-3xl font-serif text-navy italic">Who This Is For</h2>
                <div className="space-y-6">
                   <div className="flex gap-6 items-start">
                      <Target className="text-gold mt-1" size={24} />
                      <p className="text-navy/70 font-light leading-relaxed">Small business owners whose sales conversations regularly include competitive comparisons and don't have a documented response framework.</p>
                   </div>
                   <div className="flex gap-6 items-start">
                      <Users className="text-gold mt-1" size={24} />
                      <p className="text-navy/70 font-light leading-relaxed">B2B sales teams where reps are handling objections inconsistently — with no standard approach to the win-loss margin.</p>
                   </div>
                   <div className="flex gap-6 items-start">
                      <TrendingUp className="text-gold mt-1" size={24} />
                      <p className="text-navy/70 font-light leading-relaxed">Businesses entering a competitive market that need to establish a clear positioning story against established players.</p>
                   </div>
                </div>
              </section>

              <section className="space-y-8 pt-12">
                <h2 className="text-3xl font-serif text-navy italic">Frequently Asked Questions</h2>
                <div className="space-y-10">
                  <div className="space-y-3 font-light">
                    <h4 className="text-xl font-serif text-navy italic">How many competitors can I cover in one task?</h4>
                    <p className="text-navy/70">One competitor per task. This keeps the card focused and actionable — a card that tries to address five competitors at once is too diluted to be useful.</p>
                  </div>
                  <div className="space-y-3 font-light">
                    <h4 className="text-xl font-serif text-navy italic">What if I don't have detailed info about the competitor?</h4>
                    <p className="text-navy/70">Submit what you know. Mergelith will research the competitor using public information — website, pricing pages, reviews, positioning — and fill the gaps.</p>
                  </div>
                  <div className="space-y-3 font-light">
                    <h4 className="text-xl font-serif text-navy italic">Should I have a battle card for every competitor?</h4>
                    <p className="text-navy/70">Start with the one you lose to most often. One tight, accurate card for your top competitor is worth more than five generic ones.</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="bg-navy p-10 text-pearl rounded-sm space-y-6 sticky top-32">
                <h4 className="text-xs uppercase tracking-[0.4em] font-black text-gold/60">Turnaround</h4>
                <div className="space-y-2">
                  <p className="text-3xl font-serif italic text-gold">48 Hours</p>
                  <p className="text-xs text-pearl/40 font-light uppercase tracking-widest">Per Card</p>
                </div>
                <div className="pt-6 border-t border-white/5 space-y-6">
                  <p className="text-sm font-light text-pearl/60 italic leading-relaxed">
                    Included in our Standard ($997/mo) and Growth ($1,999/mo) plans.
                  </p>
                  <Link to="/pricing" className="block w-full py-4 bg-gold text-navy text-[10px] uppercase tracking-widest font-black text-center hover:bg-white transition-colors">
                    EXPLORE PLANS &rarr;
                  </Link>
                </div>
              </div>

              <div className="p-8 border border-navy/5 rounded-sm space-y-4">
                 <ShieldCheck className="text-gold" size={24} />
                 <h4 className="text-xs uppercase tracking-widest font-black">Sales Enablement Lead</h4>
                 <p className="text-xs text-navy/60 font-light leading-relaxed">Built by a strategist who has enabled 200+ global reps at leading life science companies.</p>
              </div>
            </aside>
          </div>
        </div>

        {/* Footer CTA */}
        <section className="mt-32 p-16 bg-pearl border border-navy/5 rounded-sm text-center">
          <h2 className="text-4xl font-serif text-navy italic mb-8 italic">Stop Losing Deals to Competitors You Should Be Beating</h2>
          <a href="https://calendly.com/mergelith/30min" className="btn-primary px-16 py-6 text-sm tracking-widest italic font-serif inline-block">
             REQUEST BATTLE CARDS &rarr;
          </a>
        </section>
      </article>
    </div>
  );
};

export default BattleCards;
