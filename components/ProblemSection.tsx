import React from 'react';
import { AlertCircle, EyeOff, Search, Database, Globe, X } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: "Opaque Retainers",
      desc: "Retainers of $3,000–$10,000/month with no clear deliverables tied to that number.",
      icon: EyeOff
    },
    {
      title: "The Speed Trap",
      desc: "Waiting 2–4 weeks for a single revised deck or one-pager while your market moves without you.",
      icon: AlertCircle
    },
    {
      title: "Strategy over Substance",
      desc: "Paying for 'strategy sessions' instead of actual materials that move the needle in meetings.",
      icon: Search
    },
    {
      title: "The Personnel Bait-and-Switch",
      desc: "Working with a junior account manager while the senior person they pitched is nowhere to be found.",
      icon: Database
    },
    {
      title: "Generic Outputs",
      desc: "Getting generic templates that don't reflect your actual business, product, or institutional customer.",
      icon: Globe
    },
    {
      title: "The Contract Lock",
      desc: "Locked into 6–12 month contracts with no exit clause, even if your results are non-existent.",
      icon: Database
    }
  ];

  return (
    <section id="problem" className="scroll-mt-32">
      <div className="space-y-16">
        <div className="max-w-3xl space-y-6">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">The Status Quo</h3>
          <h2 className="text-4xl md:text-6xl font-serif text-navy italic leading-tight">
            What Small Business Owners <span className="text-gold">Tell Us About Their Agency</span>
          </h2>
          <p className="text-navy/60 text-lg">
            Before switching to Mergelith, most of our clients were dealing with at least one (often all) of these legacy agency frustrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, idx) => (
            <div key={idx} className="bg-white p-8 border border-navy/5 shadow-sm hover:shadow-md transition-all group">
              <div className="mb-6 p-2 w-fit bg-red-50 rounded-full">
                <X className="w-5 h-5 text-red-500" strokeWidth={3} />
              </div>
              <h4 className="text-navy font-serif text-xl italic mb-4">
                {problem.title}
              </h4>
              <p className="text-navy/60 text-sm font-light leading-relaxed">
                {problem.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-navy text-pearl p-12 rounded-sm text-center space-y-4">
          <p className="text-2xl md:text-3xl font-serif italic max-w-4xl mx-auto">
            "These aren't edge cases. They're the standard agency model — built around agency economics, not your results."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
