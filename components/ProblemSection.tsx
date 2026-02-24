import React from 'react';
import { AlertCircle, Clock, Users, Database } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: "Calls go unanswered",
      desc: "The lead calls your competitor immediately after you miss their call.",
      icon: AlertCircle
    },
    {
      title: "Forms sit in a queue",
      desc: "Interest drops in minutes, but your response takes hours or days.",
      icon: Clock
    },
    {
      title: "Follow-up depends on humans",
      desc: "Inconsistent and delayed outreach leads to missed opportunities.",
      icon: Users
    },
    {
      title: "Old CRM data collects dust",
      desc: "Thousands in missed revenue sitting in your database untouched.",
      icon: Database
    }
  ];

  return (
    <section id="problem" className="scroll-mt-32">
      <div className="space-y-16">
        <div className="max-w-3xl space-y-6">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">The Problem</h3>
          <h2 className="text-4xl md:text-6xl font-serif text-navy italic leading-tight">
            You are paying for leads, but your system is <span className="text-gold">leaking revenue</span>
          </h2>
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
            "Speed-to-lead is the simplest, highest-ROI fix in modern sales."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
