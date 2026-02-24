import React from 'react';
import { CheckCircle2, Package } from 'lucide-react';

const WhoThisIsFor: React.FC = () => {
  const fits = [
    "Generate inbound leads from ads or website forms",
    "Miss calls or respond slowly",
    "Have a sales team that cannot keep up",
    "Want more booked appointments without hiring SDRs",
    "Have a large old CRM you are not monetizing"
  ];

  const deliverables = [
    "AI call flows and qualification logic",
    "Booking + routing rules",
    "Calendar + CRM integration",
    "Follow-up sequences (SMS/email)",
    "Reporting dashboard (speed-to-lead, booking rate, show rate)"
  ];

  return (
    <section id="who-this-is-for" className="scroll-mt-32">
      <div className="space-y-24">
        {/* Who this is for */}
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Target Profile</h3>
              <h2 className="text-4xl md:text-6xl font-serif text-navy italic leading-tight">
                Who This <br />
                <span className="text-gold">Is For</span>
              </h2>
            </div>
            <p className="text-xl text-navy/70 font-light leading-relaxed border-l-2 border-gold pl-8">
              You are a fit if you are generating leads but struggling with the conversion gap.
            </p>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 gap-6">
            {fits.map((fit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-white border border-navy/5 shadow-sm hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                <p className="text-navy font-medium">{fit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What you get */}
        <div className="bg-navy p-12 md:p-20 rounded-sm text-pearl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3 space-y-6">
              <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-sm">
                <Package className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-4xl font-serif italic">What You Get</h3>
              <p className="text-pearl/60 font-light">Delivered as a done-for-you revenue system. We handle the engineering, you handle the closings.</p>
              <div className="pt-6">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-black">Launch Timeline</p>
                <p className="text-xl font-serif italic mt-2">Typically days, not months.</p>
              </div>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-sm">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
