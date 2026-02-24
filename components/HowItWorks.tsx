import React from 'react';
import { MousePointer2, RefreshCw, Target } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Capture",
      desc: "Works with website forms, Facebook/Google lead forms, landing pages, missed calls, and email inquiries.",
      icon: MousePointer2,
      tags: ["Forms", "Ads", "Missed Calls"]
    },
    {
      number: "02",
      title: "Convert",
      desc: "AI calls instantly to confirm intent, ask qualifying questions, route to the right person, and book time on the calendar.",
      icon: RefreshCw,
      tags: ["Instant Call", "Qualify", "Book"]
    },
    {
      number: "03",
      title: "Close",
      desc: "Your team receives booked meetings, lead summaries with qualification scores, recordings, and CRM updates.",
      icon: Target,
      tags: ["Meetings", "CRM Sync", "Revenue"]
    }
  ];

  return (
    <section id="how-it-works" className="scroll-mt-32">
      <div className="space-y-20">
        <div className="text-center space-y-4">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Process</h3>
          <h2 className="text-4xl md:text-6xl font-serif text-navy italic">How It Works</h2>
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
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] uppercase tracking-widest px-2 py-1 bg-navy/5 text-navy/40 font-black rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
