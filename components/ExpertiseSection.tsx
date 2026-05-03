import React from 'react';

const ExpertiseSection: React.FC = () => {
  const stats = [
    {
      value: "5×",
      label: "Portfolio CAGR driven at major Life Science companies in the NA in under 2 years"
    },
    {
      value: "160%",
      label: "Marketing performance increase, exceeding all corporate KPIs"
    },
    {
      value: "$21M+",
      label: "Global portfolio managed at major Life Science companies in the NA"
    },
    {
      value: "200+",
      label: "Sales reps enabled globally with structured enablement programs"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Differentiation</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-navy italic">Built by a Commercial Strategist. Not an Agency Team.</h2>
          <p className="text-navy/60 max-w-3xl mx-auto font-light lg:text-lg italic">
            Every Mergelith deliverable is built by a senior commercial strategist with 20+ years of experience scaling marketing programs at leading global life science companies — not briefed to a junior team. The same commercial rigor that drove 5× portfolio growth and enabled 200+ global sales reps goes into your pitch deck, your brand kit, and your campaign brief.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.slice(0, 3).map((stat, idx) => (
            <div key={idx} className="bg-navy p-10 rounded-sm text-center flex flex-col items-center justify-center space-y-4 h-full">
              <span className="text-5xl font-serif text-gold italic">{stat.value}</span>
              <p className="text-pearl/80 text-sm font-light leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
          <div className="bg-navy p-10 rounded-sm text-center flex flex-col items-center justify-center space-y-4 h-full md:col-span-2 lg:col-span-1">
             <span className="text-5xl font-serif text-gold italic">{stats[3].value}</span>
             <p className="text-pearl/80 text-sm font-light leading-relaxed">
                {stats[3].label}
             </p>
          </div>
        </div>

        <div className="mt-16 text-center">
            <p className="text-navy/40 text-sm italic font-light max-w-2xl mx-auto">
                That's the level of commercial rigor in every deck, one-pager, and brand kit we build for your business.
            </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
