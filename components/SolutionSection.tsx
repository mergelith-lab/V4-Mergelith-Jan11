import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const features = [
    {
      title: "48-Hour Turnaround",
      desc: "Submit your task on Monday morning. Have a corporate-grade deliverable in your inbox by Wednesday. No chasing, no status updates, no delays."
    },
    {
      title: "Flat Monthly Retainer",
      desc: "One price. No surprise invoices. No billable hours. No 'that's out of scope.' You know exactly what you're paying every month."
    },
    {
      title: "Built by a Commercial Strategist",
      desc: "Every deliverable is built by a senior marketing executive who has driven 5× portfolio growth and managed $21M+ in revenue — not a junior designer following a brief."
    },
    {
      title: "No Long Contracts",
      desc: "Month-to-month, cancel anytime. We earn your business every 30 days. That's how confident we are in the quality of our work."
    },
    {
      title: "One Active Task at a Time",
      desc: "We don't juggle 40 clients simultaneously. One task, full focus, 48 hours. The bottleneck is never Mergelith."
    },
    {
      title: "You Execute, We Build",
      desc: "We build the materials. You close the deals. No hand-holding, no campaign management fees — just the corporate-grade documents that win business."
    }
  ];

  return (
    <section id="solution" className="scroll-mt-32">
      <div className="space-y-16">
        <div className="max-w-3xl space-y-6 text-center mx-auto mb-20">
          <p className="text-[11px] uppercase tracking-[0.5em] text-gold-dark font-black">The Advantage</p>
          <h2 className="text-4xl md:text-6xl font-serif text-navy italic leading-tight">
            Why Small Businesses Switch to <span className="text-gold">Mergelith</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="space-y-6 p-8 border border-navy/5 bg-white shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-0.5 bg-gold"></div>
              <h3 className="text-2xl font-serif text-navy italic leading-tight">
                {feature.title}
              </h3>
              <p className="text-navy/60 text-sm font-light leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-12 text-center text-navy/60 text-sm italic font-light">
           "Mergelith delivers — you deploy."
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
