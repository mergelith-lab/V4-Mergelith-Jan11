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
  Award,
  ShieldCheck,
  Briefcase,
  Layers
} from 'lucide-react';
import { motion } from 'motion/react';

const CapabilityDecks: React.FC = () => {
  useEffect(() => {
    document.title = "Corporate Capability Decks for Small Business | 48-Hour Delivery | Mergelith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "A professional capability deck that positions your business as the credible, expert choice — before a prospect ever takes a meeting. Delivered in 48 hours.");
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
          "name": "What's the difference between a capability deck and a sales pitch deck?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A capability deck establishes who you are and why you're credible — it's the 'credentials' document. A sales pitch deck is focused on a specific opportunity: your buyer's problem, your solution, your proof, and your ask. They work together. The capability deck often comes first; the pitch deck closes the deal."
          }
        },
        {
          "@type": "Question",
          "name": "How long should a capability deck be?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Mergelith capability decks run 12–18 slides. Long enough to establish full credibility, short enough to be read. We don't pad decks."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to have case studies or client results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. If you have them, we include them. If you're earlier stage, we build credibility through founder expertise, relevant experience, process description, and proof of concept framing."
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
              CREDENTIALS & CAPABILITIES
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-navy italic leading-tight">
              The Problem Isn't Your <span className="text-gold">Capabilities</span>. It's How You're Presenting Them.
            </h1>
            <p className="text-xl text-navy/60 font-light max-w-xl leading-relaxed">
              Most small businesses have capabilities that rival or exceed their larger competitors. The gap isn't expertise — it's how that expertise is packaged.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="https://calendly.com/mergelith/30min" target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-5 text-sm tracking-widest text-center italic font-serif">
                BUILD YOUR DECK &rarr;
              </a>
              <Link to="/pricing" className="px-12 py-5 border border-navy/10 text-navy text-[11px] uppercase tracking-[0.3em] font-black hover:bg-navy hover:text-pearl transition-all text-center">
                VIEW RETAINER PLANS
              </Link>
            </div>
          </motion.div>
          <div className="relative">
             <div className="aspect-[4/3] bg-pearl p-12 flex flex-col justify-center border border-navy/5 rounded-sm shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8">
                   <Layers className="text-gold/20 group-hover:text-gold/40 transition-colors" size={120} />
                </div>
                <div className="relative z-10 space-y-6">
                   <div className="h-1 w-12 bg-gold"></div>
                   <h3 className="text-3xl font-serif italic text-navy leading-tight">Credentialing the Next Level</h3>
                   <p className="text-navy/40 text-sm font-light leading-relaxed max-w-xs">Stop winning on price. Start winning on authority. Corporate-grade capability decks delivered in 48 hours.</p>
                </div>
             </div>
             {/* Decorative background */}
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/5 -z-10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* content */}
        <div className="prose prose-lg prose-navy max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-navy prose-p:text-navy/70 prose-strong:text-navy">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <section className="space-y-6">
                <p className="text-2xl text-navy font-light leading-relaxed italic border-l-4 border-gold pl-8">
                  A large firm walks in with a polished, structured capabilities presentation. The small business owner walks in with enthusiasm and a website printout. The prospect chooses the large firm. Not because they're better. Because they looked more credible.
                </p>
                <p>
                  A Mergelith capability deck closes that gap. It presents your business as the serious, professional, expert choice — before the meeting starts, not after you've had a chance to explain yourself.
                </p>
              </section>

              <section className="space-y-8 pb-12 border-b border-navy/5">
                <h2 className="text-3xl font-serif text-navy italic">What's Included</h2>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                   {[
                     { title: "Company Positioning", desc: "How you're different from the alternatives your prospect is considering. Framed for the buyer." },
                     { title: "Core Capabilities", desc: "Structured overview of what you deliver, organized around what buyers actually care about." },
                     { title: "Team Credentials", desc: "Founder background and team expertise presented with precision and authority." },
                     { title: "Credibility Anchors", desc: "Client results, industry experience, and certifications structured to establish trust." },
                     { title: "Operational Model", desc: "Your process and timeline, reducing uncertainty and accelerating the decision." },
                     { title: "Strategic Call to Action", desc: "A specific, low-friction next step that moves the prospect toward a decision." }
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

              <section className="space-y-8 py-12">
                <h2 className="text-3xl font-serif text-navy italic">Who This Is For</h2>
                <ul className="list-none pl-0 space-y-4">
                   {[
                     "Professional services firms (law, finance, consulting) where credibility is the primary purchase factor.",
                     "B2B businesses pursuing enterprise accounts that require formal vendor qualification.",
                     "Small businesses competing against larger players where visual materials are currently costing you deals.",
                     "Teams building referral or partnership networks where a polished overview is the entry point.",
                     "Founders who hear 'can you send over something about your company?' and don't have a strong answer."
                   ].map((item, i) => (
                     <li key={i} className="flex gap-4 items-start font-light text-navy/70 leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 shrink-0"></span>
                        {item}
                     </li>
                   ))}
                </ul>
              </section>

              <section className="space-y-8 pt-12">
                <h2 className="text-3xl font-serif text-navy italic">Frequently Asked Questions</h2>
                <div className="space-y-10">
                  <div className="space-y-3">
                    <h4 className="text-xl font-serif text-navy italic">What's the difference between a capability deck and a sales pitch deck?</h4>
                    <p className="text-navy/70 font-light leading-relaxed">A capability deck establishes who you are and why you're credible — it's the "credentials" document. A sales pitch deck is focused on a specific opportunity: your buyer's problem, your solution, your proof, and your ask. They work together.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-serif text-navy italic">How long should a capability deck be?</h4>
                    <p className="text-navy/70 font-light leading-relaxed">Most Mergelith capability decks run 12–18 slides. Long enough to establish full credibility, short enough to be read. We don't pad decks.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-serif text-navy italic">Do I need to have case studies or client results?</h4>
                    <p className="text-navy/70 font-light leading-relaxed">No. If you have them, we include them. If you're earlier stage, we build credibility through founder expertise, relevant experience, and process description. Credibility requires well-structured evidence, not just a client list.</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="bg-navy p-10 text-pearl rounded-sm space-y-6 sticky top-32">
                <h4 className="text-xs uppercase tracking-[0.4em] font-black text-gold/60">The Standard</h4>
                <div className="space-y-2">
                  <p className="text-3xl font-serif italic text-gold">48h Delivery</p>
                  <p className="text-xs text-pearl/40 font-light uppercase tracking-widest">Built to win</p>
                </div>
                <div className="pt-6 border-t border-white/5 space-y-6">
                  <div className="space-y-3">
                    <p className="text-xs font-bold tracking-widest uppercase text-pearl/80 flex items-center gap-2">
                      <Briefcase size={14} className="text-gold" />
                      Senior Strategy
                    </p>
                    <p className="text-xs font-bold tracking-widest uppercase text-pearl/80 flex items-center gap-2">
                      <Award size={14} className="text-gold" />
                      Institutional Grade
                    </p>
                  </div>
                  <p className="text-sm font-light text-pearl/40 italic leading-relaxed">
                    Included in our Standard and Growth retainer plans.
                  </p>
                  <Link to="/pricing" className="block w-full py-4 bg-gold text-navy text-[10px] uppercase tracking-widest font-black text-center hover:bg-white transition-colors">
                    SEE PRICING &rarr;
                  </Link>
                </div>
              </div>

              <div className="p-8 border border-navy/5 rounded-sm space-y-4">
                 <ShieldCheck className="text-gold" size={24} />
                 <h4 className="text-xs uppercase tracking-widest font-black">Expert-Led Built</h4>
                 <p className="text-xs text-navy/40 leading-relaxed font-bold">Built by a commercial lead with 20+ years of corporate experience managing global portfolios.</p>
              </div>
            </aside>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="mt-32 p-16 bg-pearl border border-navy/5 rounded-sm text-center space-y-8">
           <h2 className="text-4xl font-serif text-navy italic">Capabilities deserve a presentation that matches them.</h2>
           <p className="text-navy/60 font-light max-w-2xl mx-auto">
             Stop asking prospects to trust you based on a website link. Show up looking like the obvious choice with an institutional-grade capability deck.
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

export default CapabilityDecks;
