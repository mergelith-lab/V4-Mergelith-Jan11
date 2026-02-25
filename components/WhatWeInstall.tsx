import React from 'react';
import { Target, PhoneCall, Database, CalendarCheck } from 'lucide-react';

const WhatWeInstall: React.FC = () => {
  const stats = [
    { label: "Lead-to-Close Lift", value: "+40%", sub: "With AI speed-to-lead" },
    { label: "Monthly Revenue Recovered", value: "$50K+", sub: "From missed inbound alone" },
    { label: "Revived Pipeline", value: "$200K+", sub: "From dormant CRM contacts" },
    { label: "Total Revenue Growth", value: "100%+", sub: "When all 4 systems are stacked" }
  ];

  const systems = [
    {
      id: "1",
      title: "Warm Lead Conversion Engine",
      desc: "For leads who already raised their hand (form fills, ad clicks, downloads). AI responds the moment a lead engages — qualifying, routing, and booking before competitors even pick up the phone.",
      roi: "+20% to +40% lead-to-close lift",
      payoff: "30–60 days",
      bestFor: "Agencies, home services, med spas, law firms, B2B services, SaaS.",
      icon: Target
    },
    {
      id: "2",
      title: "Missed Inbound Recovery + Speed-to-Lead",
      desc: "24/7 Instant Callback on Missed Calls & Form Submissions. AI intercepts missed inbound the moment it happens — calling back, qualifying, and booking before the lead goes cold.",
      roi: "Recover 15%–35% of lost inbound leads. Often $5K–$50K+ monthly revenue recovered.",
      payoff: "Week one",
      bestFor: "Any business with inbound volume.",
      icon: PhoneCall
    },
    {
      id: "3",
      title: "Database Reactivation System",
      desc: "AI re-engages old leads, past customers, and dormant CRM contacts with zero new ad spend. Conversion rates beat cold traffic every time because these contacts already know you.",
      roi: "3%–12% reactivated into revenue. Often $20K–$200K+ revived pipeline from 'dead' data.",
      payoff: "30–45 days",
      bestFor: "Businesses with 1,000+ old contacts.",
      icon: Database
    },
    {
      id: "4",
      title: "Appointment Confirmation + Upsell System",
      desc: "AI confirms every booking, slashes no-shows, and intelligently presents upsells during the confirmation flow — turning scheduled appointments into higher-value transactions.",
      roi: "20%–50% reduction in no-shows. 15%–40% revenue lift with zero extra leads.",
      payoff: "First month",
      bestFor: "Clinics, aesthetics, fitness, consultative services, B2B appointment setters.",
      icon: CalendarCheck
    }
  ];

  return (
    <section id="what-we-install" className="scroll-mt-32">
      <div className="space-y-24">
        {/* Revenue Acceleration Summary */}
        <div className="bg-navy p-12 md:p-16 rounded-sm text-pearl relative overflow-hidden">
          <div className="relative z-10 space-y-12">
            <div className="max-w-3xl space-y-6">
              <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Mergelith AI Revenue Acceleration</h3>
              <h2 className="text-4xl md:text-5xl font-serif italic leading-tight">
                4 Systems That Convert, Recover & Multiply Your Pipeline
              </h2>
              <p className="text-pearl/60 font-light text-lg leading-relaxed">
                Most companies are leaving <span className="text-gold font-medium">40–100% of their potential revenue</span> on the table. These four AI-powered systems close every gap in your revenue engine, delivering measurable ROI within days — not quarters.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="text-4xl md:text-5xl font-serif text-gold italic">{stat.value}</p>
                  <p className="text-sm font-bold uppercase tracking-widest">{stat.label}</p>
                  <p className="text-xs text-pearl/40 italic">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </div>

        <div className="space-y-16">
          <div className="max-w-3xl space-y-6">
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Implementation</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-navy italic leading-tight">
              System <span className="text-gold">Architecture</span>
            </h2>
            <p className="text-navy/60 font-light text-lg">Choose one system or combine them for a compounding 25%–100%+ revenue growth impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {systems.map((system) => (
              <div key={system.id} className="bg-white p-10 border border-navy/5 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-navy/5 flex items-center justify-center rounded-sm group-hover:bg-gold/10 transition-colors">
                      <system.icon className="w-6 h-6 text-gold" />
                    </div>
                    <span className="text-navy/20 font-serif italic text-4xl">{system.id}</span>
                  </div>
                  <h4 className="text-2xl font-serif text-navy italic">{system.title}</h4>
                  <p className="text-navy/60 text-sm font-light leading-relaxed">
                    {system.desc}
                  </p>
                  <div className="pt-6 border-t border-navy/5 space-y-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gold font-black mb-1">ROI Range</p>
                      <p className="text-navy font-medium text-sm leading-relaxed">{system.roi}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-navy/30 font-black mb-1">Payoff Timeline</p>
                      <p className="text-navy/60 text-sm italic">{system.payoff}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-navy/5">
                  <p className="text-[10px] uppercase tracking-widest text-navy/30 font-black mb-2">Best For</p>
                  <p className="text-navy/50 text-xs italic">{system.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeInstall;
