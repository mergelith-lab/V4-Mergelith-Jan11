import React from 'react';
import { Target, PhoneCall, Database, CalendarCheck } from 'lucide-react';

const WhatWeInstall: React.FC = () => {
  const systems = [
    {
      id: "1",
      title: "Warm Lead Conversion Engine",
      desc: "For leads who already raised their hand (form fills, ad clicks, downloads).",
      result: "Higher close rates and faster pipeline.",
      bestFor: "Agencies, home services, med spas, law firms, B2B services, SaaS.",
      icon: Target
    },
    {
      id: "2",
      title: "Missed Inbound Recovery + Speed-to-Lead",
      desc: "If you miss a call or a form is submitted, the system triggers an instant callback.",
      result: "Recover lost opportunities automatically.",
      bestFor: "Any business with inbound volume.",
      icon: PhoneCall
    },
    {
      id: "3",
      title: "Database Reactivation System",
      desc: "AI calls past inquiries, dead leads, and previous customers to revive pipeline.",
      result: "Monetize your existing CRM before spending more on ads.",
      bestFor: "Businesses with 1,000+ old contacts.",
      icon: Database
    },
    {
      id: "4",
      title: "Appointment Confirmation + Upsell System",
      desc: "AI confirms appointments, reduces no-shows, and upsells higher-value services.",
      result: "More revenue per booked lead.",
      bestFor: "Clinics, aesthetics, fitness, consultative services, B2B appointment setters.",
      icon: CalendarCheck
    }
  ];

  return (
    <section id="what-we-install" className="scroll-mt-32">
      <div className="space-y-16">
        <div className="max-w-3xl space-y-6">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Implementation</h3>
          <h2 className="text-4xl md:text-6xl font-serif text-navy italic leading-tight">
            What We <span className="text-gold">Install</span>
          </h2>
          <p className="text-navy/60 font-light text-lg">Choose one system or combine them for maximum revenue impact.</p>
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
                <div className="pt-4 border-t border-navy/5">
                  <p className="text-[10px] uppercase tracking-widest text-gold font-black mb-2">Result</p>
                  <p className="text-navy font-medium text-sm">{system.result}</p>
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
    </section>
  );
};

export default WhatWeInstall;
