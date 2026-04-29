import React from 'react';
import { MousePointer2, RefreshCw, Target, Search, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

const HowItWorksPage: React.FC = () => {
  const systemSteps = [
    {
      title: "Step 1: Submit a Request",
      desc: "Log in to your portal and submit a request in any format. No intake template required: A one-liner, a detailed brief, or a reference link. If we need clarification, you receive a question within 24 hours.",
      icon: MousePointer2
    },
    {
      title: "Step 2: Scoping and Confirmation",
      desc: "Mergelith reviews every request personally. You receive a confirmation of scope and expected delivery time. If the request qualifies for a tier upgrade, our team flags it before beginning -- no billing surprises.",
      icon: Search
    },
    {
      title: "Step 3: 48-Hour Delivery",
      desc: "The deliverable is built in 48 hours or less. Delivered as a Google Doc, PDF, or PowerPoint. Complex or strategic deliverables include a Loom walkthrough explaining key decisions.",
      icon: Clock
    },
    {
      title: "Step 4: Review and Revisions",
      desc: "Review the deliverable and either approve it or submit revision feedback. Revisions are included and delivered within 24 hours. Once approved, submit your next request.",
      icon: RefreshCw
    }
  ];

  const turnaroundData = [
    { deliverable: "Sales pitch deck", typical: "48 hours" },
    { deliverable: "One-pager or leave-behind", typical: "48 hours" },
    { deliverable: "Battle card", typical: "24-48 hours" },
    { deliverable: "Brand kit", typical: "48 hours" },
    { deliverable: "Infographic", typical: "48 hours" },
    { deliverable: "GTM strategy document", typical: "48 hours" },
    { deliverable: "Campaign brief", typical: "48 hours" },
    { deliverable: "Social media posts (set of 4)", typical: "48 hours" },
    { deliverable: "Process Intelligence Report", typical: "1 week after intake" },
    { deliverable: "Revisions", typical: "24 hours after feedback" }
  ];

  const requestExamples = [
    "Build a 12-slide pitch deck for our commercial roofing company. We pitch property managers. Decision is price, timeline, and liability coverage.",
    "Create a battle card for our top competitor -- a regional law firm. We need objection handling for pricing and geographic coverage questions.",
    "Build a brand kit. Navy and gold. Professional and trustworthy. We are a B2B sales consulting firm.",
    "Write and design 4 Instagram posts for our med spa promoting our new HydraFacial service. Aspirational tone. CTA to DM for pricing.",
    "Create a GTM document for our new enterprise offering. ICP, channel strategy, pricing rationale, first 90 days."
  ];

  return (
    <div className="pt-32 pb-32 space-y-32">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Request System</h3>
        <h1 className="text-5xl md:text-8xl font-serif italic text-navy leading-tight">
          Exactly How Mergelith Works. <br />
          <span className="text-gold">No Ambiguity. No Surprises.</span>
        </h1>
        <p className="text-xl md:text-2xl text-navy/60 font-light max-w-3xl mx-auto italic">
          From your first request to the finished deliverable -- here is the complete system.
        </p>
      </section>

      {/* The Request System */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {systemSteps.map((step, idx) => (
            <div key={idx} className="flex gap-8 group">
              <div className="shrink-0 w-16 h-16 bg-navy/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-500 rounded-sm">
                <step.icon size={32} strokeWidth={1} />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-serif text-navy italic">{step.title}</h4>
                <p className="text-navy/60 leading-relaxed italic text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Turnaround Expectations */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-navy/10 p-12 md:p-16 rounded-sm shadow-xl">
           <h3 className="text-3xl font-serif italic text-navy mb-12 text-center underline decoration-gold underline-offset-8">
             48 Hours -- Here Is What That Means by Deliverable.
           </h3>
           <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="border-b border-navy/10">
                   <th className="py-4 font-black tracking-widest text-navy/40 text-[10px] uppercase">Deliverable</th>
                   <th className="py-4 font-black tracking-widest text-gold text-[10px] uppercase">Typical Delivery</th>
                 </tr>
               </thead>
               <tbody>
                 {turnaroundData.map((row, idx) => (
                   <tr key={idx} className="border-b border-navy/5 last:border-0 hover:bg-navy/5 transition-colors">
                     <td className="py-4 text-navy font-serif italic">{row.deliverable}</td>
                     <td className="py-4 text-gold font-black uppercase text-[10px] tracking-widest">{row.typical}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>
      </section>

      {/* What Unlimited Means */}
      <section className="bg-navy py-32 text-pearl overflow-hidden relative">
        <div className="absolute top-0 right-0 text-[300px] font-serif text-white/5 pointer-events-none select-none">
           ∞
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Capacity</h3>
          <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">
            Unlimited Requests. One at a Time. <br />
            <span className="text-gold">Here Is the Honest Breakdown.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-pearl/70 font-light text-lg leading-relaxed italic">
            <p>
              Both subscription tiers include unlimited requests per month -- no cap on how many tasks you can submit in a billing period.
            </p>
            <p>
              One active task at a time means we work on one deliverable per client to ensure every project gets the full attention it deserves. This is a feature -- it is why quality stays consistent.
            </p>
          </div>
          <div className="pt-12 border-t border-white/10">
            <p className="text-2xl font-serif text-gold italic">
              "Most active clients complete 8-12 deliverables per month. That is 8-12 corporate-grade assets hitting your pipeline every 30 days."
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Scope Clarity */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="max-w-3xl space-y-6">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Boundary Clarity</h3>
          <h2 className="text-4xl md:text-6xl font-serif italic text-navy">What Mergelith Delivers. <br />What You Manage.</h2>
          <p className="text-navy/60 text-xl font-light">Mergelith is a content and document delivery service. Here is the clean breakdown:</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-12 border border-navy/10 space-y-8">
            <h4 className="text-[10px] uppercase tracking-widest text-gold font-black">What Mergelith Does</h4>
            <ul className="space-y-6">
              {[
                "Builds the deliverable: pitch decks, battle cards, brand kits, GTM docs, campaign briefs, etc.",
                "Delivers finished files: Google Doc, PDF, or PowerPoint",
                "Provides Loom walkthrough on complex deliverables",
                "Includes revisions within original scope"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <span className="text-navy/80 italic font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-12 border border-navy/10 space-y-8">
             <h4 className="text-[10px] uppercase tracking-widest text-navy/40 font-black">What You Manage</h4>
             <ul className="space-y-6">
               {[
                 "Execution -- you present the deck, distribute the one-pager, run the campaign",
                 "Publishing -- social content is written and designed by Mergelith; you publish with your CTA",
                 "Media buying -- Mergelith writes the ad; you run it",
                 "Web development -- Mergelith writes the copy and provides design direction; you build"
               ].map((item, idx) => (
                 <li key={idx} className="flex gap-4">
                   <Target className="w-5 h-5 text-navy/20 shrink-0 mt-1" />
                   <span className="text-navy/60 italic font-light leading-relaxed">{item}</span>
                 </li>
               ))}
             </ul>
          </div>
        </div>
        <p className="text-center text-navy/40 text-sm italic font-light max-w-4xl mx-auto pt-10 border-t border-navy/5">
          "This clarity is intentional. You get execution-ready assets. We do not dilute the model by trying to manage everything -- you are the operator of your business."
        </p>
      </section>

      {/* Request Examples */}
      <section className="bg-navy/5 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
           <div className="text-center space-y-4">
             <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Real Requests</h3>
             <h2 className="text-4xl md:text-6xl font-serif text-navy italic">What Mergelith Clients Submit.</h2>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {requestExamples.map((example, idx) => (
               <div key={idx} className="bg-white p-10 border border-navy/5 shadow-sm space-y-6 relative group">
                 <div className="text-gold/20 absolute top-4 right-6 font-serif italic text-6xl">“</div>
                 <p className="text-navy font-serif italic leading-relaxed text-sm pt-4 relative z-10">
                   {example}
                 </p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 pb-32">
        <h2 className="text-4xl font-serif text-navy italic leading-tight">
          Ready to Start? <br />
          <span className="text-gold">No setup fee. No commitment.</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
           <a href="https://calendly.com/sasha-g-aleksic/30min" target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-5 text-sm tracking-widest">
             BOOK A STRATEGY CALL
           </a>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
