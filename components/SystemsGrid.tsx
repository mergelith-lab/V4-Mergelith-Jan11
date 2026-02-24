import React from 'react';
import { PhoneCall, RefreshCw, Database, CalendarCheck } from 'lucide-react';

const SystemsGrid: React.FC = () => {
  const systems = [
    {
      title: "Warm Lead Conversion Engine",
      desc: "For leads who already raised their hand (form fills, ad clicks, downloads). Result: Higher close rates and faster pipeline.",
      bestFor: "Agencies, home services, med spas, law firms, B2B services, SaaS.",
      icon: PhoneCall
    },
    {
      title: "Missed Inbound Recovery System",
      desc: "If you miss a call or a form is submitted, the system triggers an instant call-back. Result: Recover lost opportunities automatically.",
      bestFor: "Any business with inbound volume.",
      icon: RefreshCw
    },
    {
      title: "Database Reactivation System",
      desc: "AI calls past inquiries, dead leads, and previous customers to rebook and revive pipeline. Result: Monetize your existing CRM.",
      bestFor: "Businesses with 1,000+ old contacts in a CRM.",
      icon: Database
    },
    {
      title: "Appointment Confirmation System",
      desc: "AI confirms appointments, reduces no-shows, and upsells higher-value services. Result: More revenue per booked lead.",
      bestFor: "Clinics, aesthetics, fitness, consultative services.",
      icon: CalendarCheck
    }
  ];

  return (
    <section id="systems" className="scroll-mt-32">
      <div className="space-y-16">
        <div className="max-w-3xl space-y-6">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">What We Install</h3>
          <h2 className="text-4xl md:text-6xl font-serif text-navy italic leading-tight">
            Done-for-you <span className="text-gold">Conversion Systems</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {systems.map((system, idx) => (
            <div key={idx} className="bg-white p-10 border border-navy/5 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -mr-16 -mt-16 rounded-full group-hover:bg-gold/10 transition-colors"></div>
              <div className="relative z-10 space-y-6">
                <div className="p-4 bg-navy/5 w-fit rounded-sm group-hover:bg-gold/10 transition-colors">
                  <system.icon className="w-8 h-8 text-gold" />
                </div>
                <h4 className="text-2xl font-serif text-navy italic">{system.title}</h4>
                <p className="text-navy/60 text-sm font-light leading-relaxed">
                  {system.desc}
                </p>
                <div className="pt-4 border-t border-navy/5">
                  <p className="text-[10px] uppercase tracking-widest text-navy/40 font-black mb-2">Best For:</p>
                  <p className="text-navy/80 text-xs font-medium">{system.bestFor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemsGrid;
