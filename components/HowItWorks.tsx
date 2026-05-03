import React from 'react';
import { MousePointer2, RefreshCw, Target } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Submit Your Request",
      desc: "Log in and submit your request in any format -- a one-line description or a full brief. No templates required. Tell us what you need and what business outcome it serves.",
      icon: MousePointer2
    },
    {
      number: "02",
      title: "We Build It in 48 Hours",
      desc: "Mergelith reviews your request and confirms scope. The deliverable is built in 48 hours -- a corporate-grade document designed to get you more customers. One active task at a time.",
      icon: RefreshCw
    },
    {
      number: "03",
      title: "Receive & Execute",
      desc: "Your deliverable arrives as a Google Doc, PDF, or PowerPoint. Review, request any revisions, and execute. Mergelith delivers -- you deploy.",
      icon: Target
    }
  ];

  return (
    <section id="how-it-works" className="scroll-mt-32">
      <div className="space-y-20">
        <div className="text-center space-y-4">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Velocity</h3>
          <h2 className="text-4xl md:text-6xl font-serif text-navy italic">How Marketing as a Service Works</h2>
          <p className="text-navy/60 font-light max-w-2xl mx-auto italic">
            You submit a task — a pitch deck, a brand kit, a campaign brief. We build it in 48 hours. You own it, use it, and submit the next one. Month-to-month retainer, no agency overhead, no waiting weeks for a deliverable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -top-10 -left-4 text-8xl font-serif text-navy/5 select-none group-hover:text-gold/10 transition-colors">
                {step.number}
              </div>
              <div className="relative z-10 space-y-6 pt-8">
                <div className="w-16 h-16 bg-white border border-navy/5 shadow-sm flex items-center justify-center rounded-sm group-hover:border-gold/30 transition-all">
                  <step.icon className="w-8 h-8 text-gold" />
                </div>
                <h4 className="text-2xl font-serif text-navy italic">{step.title}</h4>
                <p className="text-navy/60 text-sm font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
