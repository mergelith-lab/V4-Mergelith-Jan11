import React from 'react';
import { motion } from 'motion/react';

const integrations = [
  { name: "Go High Level", category: "CRM / Automation" },
  { name: "Salesforce", category: "CRM" },
  { name: "HubSpot", category: "CRM" },
  { name: "Zoho CRM", category: "CRM" },
  { name: "Google Calendar", category: "Calendar" },
  { name: "Microsoft Outlook", category: "Calendar" },
  { name: "Twilio", category: "Dialing" },
  { name: "Zapier", category: "Automation" }
];

const Integrations: React.FC = () => {
  return (
    <section id="integrations" className="py-24 bg-[#0A192F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#64FFDA] font-bold mb-4">Ecosystem</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Seamless Integrations</h3>
          <p className="text-[#8892B0] mt-6 max-w-2xl mx-auto font-light">
            Connect with your favorite tools to keep your workflow smooth and uninterrupted. We support all major CRMs, calendars, and dialing services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {integrations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card p-6 rounded-xl text-center hover:bg-[#64FFDA]/5 transition-colors"
            >
              <h4 className="text-white font-display font-bold mb-1">{item.name}</h4>
              <p className="text-[#64FFDA] text-[10px] uppercase tracking-widest font-medium">{item.category}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block glass-card px-8 py-4 rounded-full border-[#64FFDA]/20">
            <p className="text-[#8892B0] text-sm">
              Don't see your tool? <span className="text-[#64FFDA] font-bold">We offer custom API integrations.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
