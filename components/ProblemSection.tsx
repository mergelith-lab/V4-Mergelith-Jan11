import React from 'react';
import { AlertCircle, EyeOff, Search, Database, Globe } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: "Agencies Are Expensive",
      desc: "Typical agencies charge $5K-$15K/month and take six weeks before delivering the first asset. You pay for their overhead, not your growth.",
      icon: EyeOff
    },
    {
      title: "Freelancers Are Unreliable",
      desc: "Freelancers quote low but often disappear mid-project or deliver materials that don't match your brand's institutional quality.",
      icon: AlertCircle
    },
    {
      title: "In-House Hires Are Slow",
      desc: "A full-time hire costs $7K+/month with a 90-day ramp before they are truly productive. Plus benefits, taxes, and management debt.",
      icon: Search
    },
    {
      title: "DIY Costs You Revenue",
      desc: "Spending your own hours on marketing materials is a poor use of your commercial time and leads to inconsistent branding that erodes trust.",
      icon: Database
    }
  ];

  return (
    <section id="problem" className="scroll-mt-32">
      <div className="space-y-16">
        <div className="max-w-3xl space-y-6">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">The Revenue Gap</h3>
          <h2 className="text-4xl md:text-6xl font-serif text-navy italic leading-tight">
            You Are Losing Deals You <span className="text-gold">Should Be Winning</span>
          </h2>
          <p className="text-navy/60 text-lg">
            The materials your competitors walk into rooms with are not magic. They are the product of a systematic approach you are currently missing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, idx) => (
            <div key={idx} className="bg-white p-8 border border-navy/5 shadow-sm hover:shadow-md transition-all group">
              <div className="mb-6 p-3 bg-navy/5 w-fit rounded-sm group-hover:bg-gold/10 transition-colors">
                <problem.icon className="w-6 h-6 text-gold" />
              </div>
              <h4 className="text-navy font-cinzel text-sm tracking-[0.2em] font-black mb-4 uppercase">
                {problem.title}
              </h4>
              <p className="text-navy/60 text-sm font-light leading-relaxed">
                {problem.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-navy text-pearl p-12 rounded-sm text-center space-y-4">
          <p className="text-2xl md:text-3xl font-serif italic">
            "Every week without the right materials is a week you are leaving revenue on the table."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
