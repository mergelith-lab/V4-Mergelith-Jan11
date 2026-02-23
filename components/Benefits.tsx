import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, UserMinus, Zap, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    title: "Reducing Lost Calls",
    desc: "Track AI Operator load and follow up on missed calls. Optimally allocate resources and ensure no lead is ignored.",
    icon: UserMinus
  },
  {
    title: "Increasing Efficiency",
    desc: "Distribution of calls to AI Operators and automated information delivery speeds up processing of incoming inquiries.",
    icon: Zap
  },
  {
    title: "Improving Calling Efficiency",
    desc: "Intelligent algorithms skip answering machines and distribute calls to free agents, optimizing mass outreach.",
    icon: TrendingUp
  },
  {
    title: "Compliance & Security",
    desc: "Our AI follows strict compliance for cold calling business numbers, ensuring your operations remain within legal boundaries.",
    icon: ShieldCheck
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-[#0A192F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-xl border-l-4 border-l-[#64FFDA]/30"
                >
                  <benefit.icon className="w-8 h-8 text-[#64FFDA] mb-4" />
                  <h4 className="text-white font-display font-bold text-lg mb-2">{benefit.title}</h4>
                  <p className="text-[#8892B0] text-sm font-light leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#64FFDA] font-bold mb-4">The Impact</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Empowering Businesses with Cutting-Edge AI
              </h3>
              <p className="text-[#8892B0] text-lg font-light leading-relaxed">
                Our AI Voice Agents analyze customer inquiries and provide instant information, significantly reducing the load on your employees so they can focus on complex problem-solving.
              </p>
            </div>
            
            <div className="p-8 glass-card rounded-2xl bg-gradient-to-br from-[#64FFDA]/10 to-transparent border-[#64FFDA]/20">
              <div className="text-4xl font-display font-bold text-white mb-2">10,000+</div>
              <p className="text-[#64FFDA] text-xs uppercase tracking-widest font-bold mb-4">Leads Dialed Simultaneously</p>
              <p className="text-[#8892B0] text-sm font-light">
                Scale your outreach like never before. Our infrastructure handles massive volumes without sacrificing quality or connection.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
