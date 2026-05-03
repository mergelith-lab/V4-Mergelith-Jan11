import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Presentation, 
  CheckCircle2, 
  Target, 
  Users, 
  Zap, 
  ArrowRight,
  TrendingUp,
  MessageSquare,
  Clock,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { motion } from 'motion/react';

const SalesPitchDecks: React.FC = () => {
  useEffect(() => {
    document.title = "Sales Pitch Decks for Small Business | 48-Hour Delivery | Mergelith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional sales pitch decks built for small businesses — delivered in 48 hours. No agency timelines, no junior staff. Corporate-grade decks that close deals.");
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
          "name": "Do I need to provide the content or does Mergelith write it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both options work. If you submit a brief with your key messages, target buyer, and differentiators, we build from there. If you're starting from scratch, the intake form guides you through what we need — and we write the full narrative from your answers."
          }
        },
        {
          "@type": "Question",
          "name": "How many slides is a typical deck?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Mergelith sales pitch decks run 10–14 slides. Long enough to build a complete case, short enough to hold the room. We don't pad decks to look comprehensive."
          }
        },
        {
          "@type": "Question",
          "name": "Can you update an existing deck instead of building from scratch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If you have a deck that needs restructuring, new messaging, or a design refresh, submit it as your task with specific direction. Same 48-hour turnaround."
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
              Your Pitch Deck Is <span className="text-gold">Losing Deals</span> You Should Be Winning
            </h1>
            <p className="text-xl text-navy/60 font-light max-w-xl leading-relaxed">
              Most small business pitch decks have the same problem: they open with the company story, bury the buyer's problem, and close with a features list nobody asked for. 
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="https://calendly.com/mergelith/30min" target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-5 text-sm tracking-widest text-center italic font-serif">
                START YOUR DECK &rarr;
              </a>
              <Link to="/pricing" className="px-12 py-5 border border-navy/10 text-navy text-[11px] uppercase tracking-[0.3em] font-black hover:bg-navy hover:text-pearl transition-all text-center">
                VIEW RETAINER PLANS
              </Link>
            </div>
          </motion.div>
          <div className="relative">
             <div className="aspect-[4/3] bg-navy p-12 flex flex-col justify-between border border-white/10 rounded-sm shadow-2xl">
                <div className="flex justify-between items-start">
                   <Presentation className="text-gold" size={32} />
                   <div className="px-3 py-1 bg-gold/10 border border-gold/20 text-gold text-[8px] font-black tracking-widest uppercase">
                     48h Turnaround
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="h-1 w-12 bg-gold"></div>
                   <h3 className="text-3xl font-serif italic text-pearl leading-tight">Beyond the Standard Template</h3>
                   <p className="text-pearl/40 text-xs font-light leading-relaxed">Corporate-grade narratives designed for the high-stakes win-loss margin.</p>
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
                  A sales pitch deck should do one thing: move a qualified prospect from interested to yes. Mergelith builds decks that do exactly that — structured around your buyer's decision, not your company's history.
                </p>
                <p>
                  Prospects tune out by slide three when decks are built as generic capability lists. We shift the narrative focus back to the buyer's pain points and your specific commercial solution.
                </p>
              </section>

              <section className="space-y-8 pb-12 border-b border-navy/5">
                <h2 className="text-3xl font-serif text-navy italic">What's Included</h2>
                <p>Every Mergelith sales pitch deck includes a senior commercial strategist's touch:</p>
                <ul className="list-none pl-0 space-y-6">
                  {[
                    { title: "Buyer-first narrative structure", desc: "We open with your prospect's problem — the specific pain that makes them need what you sell." },
                    { title: "Competitive positioning", desc: "Your deck positions you against the alternatives your buyer is considering — handled with data and proof." },
                    { title: "Professional design", desc: "Navy and clean layouts built to your brand. Not a template, but a structured presentation for authority." },
                    { title: "Speaker notes", desc: " Talking points included so your team presents consistently across every meeting." },
                    { title: "Editable source file", desc: "PowerPoint (.pptx) by default. You own it. Update it yourself or submit a revision anytime." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <CheckCircle2 className="text-gold shrink-0 mt-1" size={20} />
                      <div>
                        <strong className="block text-navy mb-1">{item.title}</strong>
                        <span className="text-sm text-navy/60 leading-relaxed font-light">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-8 py-12">
                <h2 className="text-3xl font-serif text-navy italic">Who This Is For</h2>
                <div className="grid md:grid-cols-2 gap-8 text-sm">
                   <div className="p-8 bg-pearl border border-navy/5 rounded-sm">
                      <Users className="text-gold mb-4" size={24} />
                      <p className="font-light leading-relaxed text-navy/60">Small business owners preparing for high-stakes sales conversations with corporate buyers or enterprise prospects.</p>
                   </div>
                   <div className="p-8 bg-pearl border border-navy/5 rounded-sm">
                      <ShieldCheck className="text-gold mb-4" size={24} />
                      <p className="font-light leading-relaxed text-navy/60">B2B sales teams using inconsistent, outdated materials and losing deals to better-packaged competitors.</p>
                   </div>
                   <div className="p-8 bg-pearl border border-navy/5 rounded-sm">
                      <TrendingUp className="text-gold mb-4" size={24} />
                      <p className="font-light leading-relaxed text-navy/60">Founders preparing for investor conversations, partnership pitches, or new market entry.</p>
                   </div>
                   <div className="p-8 bg-pearl border border-navy/5 rounded-sm">
                      <MessageSquare className="text-gold mb-4" size={24} />
                      <p className="font-light leading-relaxed text-navy/60">Service businesses pitching high-value contracts where the deck is the first impression.</p>
                   </div>
                </div>
              </section>

              <section className="space-y-8 pt-12">
                <h2 className="text-3xl font-serif text-navy italic">Frequently Asked Questions</h2>
                <div className="space-y-10">
                  <div className="space-y-3 font-light">
                    <h4 className="text-xl font-serif text-navy italic">Do I need to provide the content or does Mergelith write it?</h4>
                    <p className="text-navy/70">Both options work. If you submit a brief with your key messages, we build from there. If you're starting from scratch, the intake form guides you through what we need — and we write the narrative from your answers.</p>
                  </div>
                  <div className="space-y-3 font-light">
                    <h4 className="text-xl font-serif text-navy italic">How many slides is a typical deck?</h4>
                    <p className="text-navy/70">Most Mergelith sales pitch decks run 10–14 slides. Long enough to build a complete case, short enough to hold the room.</p>
                  </div>
                  <div className="space-y-3 font-light">
                    <h4 className="text-xl font-serif text-navy italic">Can you update an existing deck instead of building from scratch?</h4>
                    <p className="text-navy/70">Yes. If you have a deck that needs restructuring, new messaging, or a design refresh, submit it as your task. Same 48-hour turnaround.</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar info */}
            <aside className="space-y-8">
              <div className="bg-navy p-10 text-pearl rounded-sm space-y-6">
                <h4 className="text-xs uppercase tracking-[0.4em] font-black text-gold/60">Turnaround & Price</h4>
                <div className="space-y-2">
                  <p className="text-3xl font-serif italic">48 Hours</p>
                  <p className="text-xs text-pearl/40 font-light">from completed brief</p>
                </div>
                <div className="pt-6 border-t border-white/5 space-y-4">
                  <p className="text-sm font-light text-pearl/60 italic leading-relaxed">
                    Included in Standard ($997/mo) and Growth ($1,999/mo) plans. One active task at a time.
                  </p>
                  <Link to="/pricing" className="block w-full py-4 bg-gold text-navy text-[10px] uppercase tracking-widest font-black text-center hover:bg-white transition-colors">
                    EXPLORE PLANS &rarr;
                  </Link>
                </div>
              </div>

              <div className="p-8 border border-navy/5 rounded-sm space-y-6">
                <h4 className="text-xs uppercase tracking-widest font-black text-navy/40">The Expertise</h4>
                <p className="text-xs text-navy/60 font-light leading-relaxed">
                  Built by a 20+ year commercial executive who has deployed pitch frameworks for 200+ global sales reps. No junior designers. No slow agency timelines.
                </p>
              </div>
            </aside>
          </div>
        </div>

        {/* Footer CTA */}
        <section className="mt-32 pt-20 border-t border-navy/5 text-center">
          <h2 className="text-4xl font-serif text-navy italic mb-8 italic">Show up like the institution you're becoming.</h2>
          <a href="https://calendly.com/mergelith/30min" className="btn-primary px-16 py-6 text-sm tracking-widest italic font-serif inline-block">
             BUILD MY PITCH DECK &rarr;
          </a>
        </section>
      </article>
    </div>
  );
};

export default SalesPitchDecks;
