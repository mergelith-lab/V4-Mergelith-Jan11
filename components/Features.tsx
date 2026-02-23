import React from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  PhoneForwarded, 
  PhoneCall, 
  Headphones, 
  MessageSquare, 
  Mail, 
  FileText, 
  CreditCard 
} from 'lucide-react';

const features = [
  {
    title: "Appointment Setting",
    description: "Schedule meetings directly into your calendar, ensuring no lead slips through.",
    icon: Calendar
  },
  {
    title: "Live Transfers",
    description: "Real-time call transfers to your team, minimizing wait times for your clients.",
    icon: PhoneForwarded
  },
  {
    title: "Cold Calling",
    description: "Reach out to publicly listed business numbers efficiently and at scale.",
    icon: PhoneCall
  },
  {
    title: "Customer Service",
    description: "Handle inquiries and follow-ups with ease, freeing up your team for complex tasks.",
    icon: Headphones
  },
  {
    title: "Send Texts",
    description: "Sends customized text messages before, during and after a call.",
    icon: MessageSquare
  },
  {
    title: "Send Emails",
    description: "Sends personalized emails based on call outcomes automatically.",
    icon: Mail
  },
  {
    title: "Send Contracts",
    description: "Sends contracts for e-signature immediately after the call.",
    icon: FileText
  },
  {
    title: "Send Payment Links",
    description: "Sends payment links during and after a call for instant conversion.",
    icon: CreditCard
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#0A192F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#64FFDA] font-bold mb-4">Core Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">What Can The AI Do?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-xl hover:border-[#64FFDA]/40 transition-all group"
            >
              <div className="w-12 h-12 bg-[#64FFDA]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-[#64FFDA]" />
              </div>
              <h4 className="text-xl font-display font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-[#8892B0] text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
