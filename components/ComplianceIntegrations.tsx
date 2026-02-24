import React from 'react';
import { ShieldCheck, Share2, CheckCircle2 } from 'lucide-react';

const ComplianceIntegrations: React.FC = () => {
  const compliancePoints = [
    "Warm leads only (form fills / explicit requests)",
    "Opt-in language included on your forms",
    "Consent captured and stored",
    "Call logic aligned to your use case"
  ];

  const integrations = [
    "Calendly / Google Calendar",
    "HubSpot / Salesforce / GoHighLevel / Pipedrive",
    "Web forms + lead sources",
    "SMS and email follow-up tools"
  ];

  return (
    <section id="compliance-integrations" className="scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Compliance */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Safety First</h3>
            <h2 className="text-4xl font-serif text-navy italic">Compliance</h2>
            <p className="text-navy/60 font-light">We build compliance into every deployment to protect your brand and reputation.</p>
          </div>
          
          <ul className="space-y-4">
            {compliancePoints.map((point, idx) => (
              <li key={idx} className="flex items-center gap-4 group">
                <div className="w-8 h-8 bg-navy/5 flex items-center justify-center rounded-full group-hover:bg-gold/10 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                </div>
                <span className="text-navy/80 text-sm font-medium">{point}</span>
              </li>
            ))}
          </ul>
          
          <p className="text-[10px] text-navy/40 italic leading-relaxed">
            For reactivation campaigns, existing business relationships can reduce risk versus cold outreach. (Compliance varies by jurisdiction and use case.)
          </p>
        </div>

        {/* Integrations */}
        <div className="bg-white p-12 border border-navy/5 shadow-sm space-y-10">
          <div className="space-y-4">
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Ecosystem</h3>
            <h2 className="text-4xl font-serif text-navy italic">Integrations</h2>
            <p className="text-navy/60 font-light">If you have a CRM, we plug into it. Seamless data flow across your stack.</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {integrations.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-navy/5 rounded-sm border border-transparent hover:border-gold/20 transition-all">
                <Share2 className="w-4 h-4 text-gold" />
                <span className="text-navy font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-navy/10 flex items-center justify-center overflow-hidden">
                  <img src={`https://picsum.photos/seed/tool-${i}/40/40`} alt="Tool" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <p className="text-[10px] uppercase tracking-widest text-navy/40 font-black">Plugs into 100+ tools</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceIntegrations;
