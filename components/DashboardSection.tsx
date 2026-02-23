import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Layout, Settings, BarChart3 } from 'lucide-react';

const DashboardSection: React.FC = () => {
  return (
    <section id="dashboard" className="py-24 bg-[#0A192F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#64FFDA] font-bold mb-4">Command Center</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Manage Your AI Voice Agents with Ease
              </h3>
              <p className="text-[#8892B0] text-lg font-light leading-relaxed">
                Our feature-rich dashboard puts you in full control. From building custom agents to editing scripts and integrating with your favorite tools, everything you need is at your fingertips.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Build & Customize",
                  desc: "Quickly create and tailor AI voice agents to suit your specific needs. Make adjustments in real-time.",
                  icon: Layout
                },
                {
                  title: "Script Editing Made Simple",
                  desc: "Effortlessly craft, edit, and refine scripts directly within the dashboard for seamless conversations.",
                  icon: Settings
                },
                {
                  title: "Real-Time Insights",
                  desc: "Stay informed with live updates and detailed call summaries, all in one centralized place.",
                  icon: BarChart3
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">
                    <div className="w-10 h-10 bg-[#64FFDA]/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#64FFDA]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-display font-bold text-lg">{item.title}</h4>
                    <p className="text-[#8892B0] text-sm font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 glass-card rounded-2xl p-4 border-[#64FFDA]/20 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/dashboard/1200/800" 
                alt="Dashboard Preview" 
                className="rounded-xl w-full h-auto opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A192F]/40 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#64FFDA]/10 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#64FFDA]/10 rounded-full blur-[80px] -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
