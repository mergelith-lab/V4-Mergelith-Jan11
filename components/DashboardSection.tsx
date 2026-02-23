import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Layout, Settings, BarChart3 } from 'lucide-react';

const DashboardSection: React.FC = () => {
  return (
    <section id="dashboard" className="py-24 bg-[#0A192F] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#64FFDA] font-bold mb-4">Command Center</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Manage Your AI Voice Agents with Ease
            </h3>
            <p className="text-[#8892B0] text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Our feature-rich dashboard puts you in full control. From building custom agents to editing scripts and integrating with your favorite tools, everything you need is at your fingertips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Build & Customize",
                desc: "Quickly create and tailor AI voice agents to suit your specific needs.",
                icon: Layout
              },
              {
                title: "Script Editing",
                desc: "Effortlessly craft, edit, and refine scripts directly within the dashboard.",
                icon: Settings
              },
              {
                title: "Real-Time Insights",
                desc: "Stay informed with live updates and detailed call summaries.",
                icon: BarChart3
              }
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-8 border-[#64FFDA]/10 hover:border-[#64FFDA]/30 transition-all">
                <div className="w-12 h-12 bg-[#64FFDA]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6 text-[#64FFDA]" />
                </div>
                <h4 className="text-white font-display font-bold text-lg mb-3">{item.title}</h4>
                <p className="text-[#8892B0] text-sm font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
