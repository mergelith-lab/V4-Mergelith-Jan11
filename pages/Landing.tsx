import React from 'react';
import { CheckCircle2, ArrowRight, Zap, Clock, ShieldCheck } from 'lucide-react';

const LandingPage: React.FC = () => {
  const problems = [
    "Your pitch deck looks like it was built in an afternoon",
    "Your one-pager is a wall of text no one reads past the first paragraph",
    "Your team has no battle card, so every call re-invents the same objection handling",
    "You hired an agency at $6K/month and waited 8 weeks for a slide deck that missed the brief",
    "You found a freelancer -- and then found out why they were cheap"
  ];

  return (
    <div className="pt-32 pb-32 space-y-32 bg-pearl relative overflow-hidden">
      {/* Decorative Hook Element */}
      <div className="absolute top-0 left-0 w-1 h-32 bg-gold"></div>

      {/* Hook Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-6">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Conversion Focused</h3>
          <h1 className="text-5xl md:text-8xl font-serif italic text-navy leading-[1.1]">
            You Are Losing Deals to <br />
            <span className="text-gold">Competitors With Better Materials.</span>
          </h1>
          <p className="text-xl md:text-2xl text-navy/60 font-light max-w-4xl italic leading-relaxed">
            Get corporate-grade pitch decks, battle cards, and brand kits built by a commercial strategist — delivered in 48 hours, at a fixed monthly price, with no contracts.
          </p>
        </div>
        
        <div className="pt-6">
           <a href="https://api.leadconnectorhq.com/widget/bookings/mergelith-calendar" target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-5 text-sm tracking-widest inline-flex items-center gap-3">
             START YOUR FIRST REQUEST
             <ArrowRight size={18} />
           </a>
        </div>
        
        <p className="text-[10px] uppercase tracking-[0.3em] text-navy/40 font-bold">
           Standard $999/mo | Growth $1,999/mo | Process Intelligence Report $3,000 flat
        </p>
      </section>

      {/* Problem Agitation */}
      <section className="bg-navy py-32 text-pearl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
           <div className="space-y-6">
             <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">The Honest Problem</h3>
             <h2 className="text-4xl md:text-5xl font-serif italic italic leading-tight">
               Your offer is good. Your results are real. <br />
               <span className="text-gold">But your materials do not reflect that.</span>
             </h2>
             <p className="text-pearl/60 font-light italic">And prospects can tell.</p>
           </div>

           <ul className="space-y-8">
             {problems.map((p, idx) => (
               <li key={idx} className="flex gap-6 group">
                 <div className="w-6 h-6 border border-gold/40 flex items-center justify-center shrink-0 mt-1 group-hover:bg-gold group-hover:text-navy transition-all">
                   <span className="text-[10px] font-black">X</span>
                 </div>
                 <p className="text-xl font-serif italic text-pearl/80 group-hover:text-gold transition-colors">{p}</p>
               </li>
             ))}
           </ul>

           <div className="pt-12 border-t border-white/10">
              <p className="text-2xl md:text-3xl font-serif italic text-gold">
                "Every meeting you walk into without the right materials is a meeting you are already losing."
              </p>
           </div>
        </div>
      </section>

      {/* Offer Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <div className="max-w-3xl space-y-6">
           <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">The Model</h3>
           <h2 className="text-4xl md:text-6xl font-serif italic text-navy">Here Is What Mergelith <br /><span className="text-gold">Actually Does.</span></h2>
           <p className="text-navy/70 text-xl font-light leading-relaxed italic">
             Mergelith is a Marketing-as-a-Service subscription -- built by a 20+ year corporate commercial strategist, executed in 48 hours, and priced for small businesses.
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 border-y border-navy/5 py-24">
           <div className="space-y-6">
              <div className="w-12 h-12 bg-navy flex items-center justify-center text-pearl rounded-full">
                 <Zap size={20} />
              </div>
              <h4 className="text-2xl font-serif text-navy italic">Request</h4>
              <p className="text-navy/60 text-sm font-light italic leading-relaxed">
                You submit a request via portal: 'Build me a 12-slide pitch deck for investor meetings'. Mergelith reviews and confirms scope.
              </p>
           </div>
           <div className="space-y-6">
              <div className="w-12 h-12 bg-navy flex items-center justify-center text-pearl rounded-full">
                 <Clock size={20} />
              </div>
              <h4 className="text-2xl font-serif text-navy italic">Wait 48h</h4>
              <p className="text-navy/60 text-sm font-light italic leading-relaxed">
                The deliverable is built in 48 hours or less. Delivered professionally as a Google Doc, PDF, or PowerPoint.
              </p>
           </div>
           <div className="space-y-6">
              <div className="w-12 h-12 bg-navy flex items-center justify-center text-pearl rounded-full">
                 <ShieldCheck size={20} />
              </div>
              <h4 className="text-2xl font-serif text-navy italic">Deploy</h4>
              <p className="text-navy/60 text-sm font-light italic leading-relaxed">
                You receive the finished file and execute. We build the next one immediately after approval. No friction.
              </p>
           </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
         <div className="space-y-4">
           <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Pricing Clarity</h3>
           <h2 className="text-4xl md:text-5xl font-serif italic text-navy">Fixed Price. No Invoices. No Surprises.</h2>
         </div>
         
         <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-navy/10 p-10 space-y-6 rounded-sm text-left shadow-xl">
               <h4 className="font-black tracking-widest text-[10px] uppercase text-gold">Standard</h4>
               <div className="text-5xl font-serif italic text-navy">$999<span className="text-sm font-normal not-italic text-navy/40">/mo</span></div>
               <ul className="space-y-3 pt-4 border-t border-navy/5">
                  <li className="text-[10px] uppercase font-black text-navy/60 flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-gold" /> 1 active task at a time
                  </li>
                  <li className="text-[10px] uppercase font-black text-navy/60 flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-gold" /> 48-hour turnaround
                  </li>
                  <li className="text-[10px] uppercase font-black text-navy/60 flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-gold" /> Core Assets (Pitch decks, kits)
                  </li>
               </ul>
            </div>
            <div className="bg-white border-2 border-gold p-10 space-y-6 rounded-sm text-left shadow-2xl relative">
               <div className="absolute top-0 right-0 bg-gold text-navy text-[9px] uppercase font-black px-3 py-1 -translate-y-1/2 rounded-full">Growth</div>
               <h4 className="font-black tracking-widest text-[10px] uppercase text-gold">Growth</h4>
               <div className="text-5xl font-serif italic text-navy">$1,999<span className="text-sm font-normal not-italic text-navy/40">/mo</span></div>
               <ul className="space-y-3 pt-4 border-t border-navy/5">
                  <li className="text-[10px] uppercase font-black text-navy/60 flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-gold" /> Strategy + Execution
                  </li>
                  <li className="text-[10px] uppercase font-black text-navy/60 flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-gold" /> GTM + Campaign Briefs
                  </li>
                  <li className="text-[10px] uppercase font-black text-navy/60 flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-gold" /> 4 Social posts per month
                  </li>
               </ul>
            </div>
         </div>
      </section>

      {/* Urgency and CTA */}
      <section className="bg-navy py-32 text-pearl text-center space-y-12">
        <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">
          We Work on One Task at a Time. <br />
          <span className="text-gold">Capacity Is Limited.</span>
        </h2>
        <p className="max-w-2xl mx-auto text-pearl/60 font-light italic">
          To protect the 48-hour delivery guarantee, Mergelith caps the number of active clients each month. When capacity is full, new clients go on the waitlist.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8">
           <a href="https://api.leadconnectorhq.com/widget/bookings/mergelith-calendar" target="_blank" rel="noopener noreferrer" className="btn-primary bg-gold text-navy hover:bg-white px-12 py-5 text-sm tracking-widest">
             START YOUR FIRST REQUEST
           </a>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-pearl/40 font-black">
           No setup fee. No commitment required to start. Cancel anytime.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
