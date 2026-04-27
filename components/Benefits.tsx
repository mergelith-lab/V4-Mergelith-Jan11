import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Award, Zap, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    title: "AI Search Dominance",
    desc: "Achieve the highest Visibility Index in your niche. Ensure your firm is the top recommended result in AI Overviews.",
    icon: Award
  },
  {
    title: "LLM Institutionalization",
    desc: "Embed your brand authority directly into the training datasets of major LLMs, securing your long-term digital moat.",
    icon: Zap
  },
  {
    title: "Citation Growth",
    desc: "Systematically increase the number of high-authority citations your firm receives from generative engines.",
    icon: TrendingUp
  },
  {
    title: "Compliance & Integrity",
    desc: "Our AEO framework follows all ethical guidelines for search transparency and entity validation. SOC2 compliant infrastructure.",
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
                Future-Proofing Your Institutional Authority
              </h3>
              <p className="text-[#8892B0] text-lg font-light leading-relaxed">
                As search shifts from lists of links to generative answers, Mergelith ensures your firm remains at the center of the conversation. We optimize for the models that drive modern decision-making.
              </p>
            </div>
            
            <div className="p-8 glass-card rounded-2xl bg-gradient-to-br from-[#64FFDA]/10 to-transparent border-[#64FFDA]/20">
              <div className="text-4xl font-display font-bold text-white mb-2">100+</div>
              <p className="text-[#64FFDA] text-xs uppercase tracking-widest font-bold mb-4">AEO Data Points Analyzed Weekly</p>
              <p className="text-[#8892B0] text-sm font-light">
                We track every shift in AI search behavior to keep your firm ahead of the curve. Scaling your authority requires deep, data-driven intelligence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
