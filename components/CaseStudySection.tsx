import React, { useState } from 'react';
import { FileText, Lock, CheckCircle2, Download, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FormData {
  name: string;
  email: string;
  interests: string[];
  marketingOptIn: boolean;
}

const CaseStudySection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    interests: [],
    marketingOptIn: false
  });

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send this to a backend
    console.log('Form submitted:', formData);
    setIsUnlocked(true);
    setIsModalOpen(false);
    // Scroll to the results
    setTimeout(() => {
      const element = document.getElementById('case-study-content');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="case-study" className="scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Institutional Proof</h3>
          <h2 className="text-4xl md:text-6xl font-serif text-navy italic">Case Study</h2>
        </div>

        {!isUnlocked ? (
          <div className="relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <div className="bg-navy text-pearl p-12 md:p-20 rounded-sm shadow-2xl overflow-hidden relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="case-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#case-grid)" />
                </svg>
              </div>

              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/10">
                    <FileText size={14} className="text-gold" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-black">AI Voice Agent Report</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif italic leading-tight">
                    How an AI Outbound Voice Agent Reactivated Cold Leads and Increased Appointments by <span className="text-gold">42%</span>
                  </h3>
                  <p className="text-pearl/60 font-light leading-relaxed">
                    A 90-day results report from a multi-location Med Spa in Southern California. Discover the exact systems used to generate $186K in additional revenue.
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <button className="btn-primary bg-gold text-navy hover:bg-pearl hover:text-navy flex items-center gap-2">
                      <Lock size={16} />
                      Unlock Full Case Study
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gold/20 blur-2xl rounded-full opacity-50"></div>
                  <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border border-white/10">
                    <img 
                      src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=800"
                      alt="Case Study Preview"
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                      <div className="glass-card bg-white/5 border-white/10 p-4 text-center">
                        <div className="text-xl font-serif text-gold italic">42%</div>
                        <p className="text-[7px] uppercase tracking-widest text-pearl/40 font-black">Appt Increase</p>
                      </div>
                      <div className="glass-card bg-white/5 border-white/10 p-4 text-center">
                        <div className="text-xl font-serif text-gold italic">$186K</div>
                        <p className="text-[7px] uppercase tracking-widest text-pearl/40 font-black">New Revenue</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlay for Gated feel */}
              <div className="absolute inset-0 bg-navy/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-pearl text-navy px-8 py-4 rounded-sm font-black text-xs tracking-[0.3em] uppercase flex items-center gap-3 shadow-2xl">
                  <Lock size={16} className="text-gold" />
                  Access Restricted &bull; Click to Unlock
                </div>
              </div>
            </div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            id="case-study-content"
            className="space-y-16"
          >
            <div className="bg-white border border-navy/10 p-12 md:p-20 rounded-sm shadow-xl space-y-12">
              <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-navy/5 pb-12">
                <div className="md:w-2/3 space-y-4">
                  <h3 className="text-3xl font-serif text-navy italic">The Results Are In.</h3>
                  <p className="text-navy/60 font-light max-w-xl">
                    The implementation of the Mergelith AI Outbound Voice Agent transformed a dormant CRM into an active revenue stream within 90 days.
                  </p>
                </div>
                <div className="md:w-1/3 aspect-video rounded-sm overflow-hidden border border-navy/10 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=800"
                    alt="Lead Activation Results"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button className="btn-outline flex items-center gap-2">
                  <Download size={16} />
                  Download PDF Report
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                <div className="space-y-6">
                  <h4 className="text-navy font-cinzel text-xs tracking-widest uppercase font-black border-b border-gold/20 pb-4">The Problem</h4>
                  <p className="text-sm text-navy/70 font-light leading-relaxed">
                    Thousands of past leads were sitting dormant in the CRM. The sales team lacked the capacity to follow up consistently, leading to lost revenue opportunities.
                  </p>
                </div>
                <div className="space-y-6">
                  <h4 className="text-navy font-cinzel text-xs tracking-widest uppercase font-black border-b border-gold/20 pb-4">The Solution</h4>
                  <p className="text-sm text-navy/70 font-light leading-relaxed">
                    A fully automated AI Outbound Voice Agent was deployed to call leads, hold natural qualification conversations, and book appointments directly.
                  </p>
                </div>
                <div className="space-y-6">
                  <h4 className="text-navy font-cinzel text-xs tracking-widest uppercase font-black border-b border-gold/20 pb-4">The Impact</h4>
                  <p className="text-sm text-navy/70 font-light leading-relaxed">
                    $186,000 in additional revenue generated from leads previously considered lost. 42% increase in booked appointments without any new ad spend.
                  </p>
                </div>
              </div>

              <div className="bg-navy text-pearl p-10 rounded-sm grid md:grid-cols-4 gap-8">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-serif text-gold italic">5,200+</div>
                  <p className="text-[8px] uppercase tracking-widest text-pearl/40 font-black">Calls Completed</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-serif text-gold italic">1,140</div>
                  <p className="text-[8px] uppercase tracking-widest text-pearl/40 font-black">Leads Re-engaged</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-serif text-gold italic">42%</div>
                  <p className="text-[8px] uppercase tracking-widest text-pearl/40 font-black">Appt Increase</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-serif text-gold italic">$186K</div>
                  <p className="text-[8px] uppercase tracking-widest text-pearl/40 font-black">New Revenue</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Gating Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-navy/80 backdrop-blur-md"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-pearl w-full max-w-xl p-10 md:p-16 rounded-sm shadow-2xl overflow-y-auto max-h-[90vh]"
              >
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 text-navy/40 hover:text-navy transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="space-y-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gold/10 flex items-center justify-center rounded-full mx-auto mb-6">
                      <Lock className="text-gold" size={32} />
                    </div>
                    <h3 className="text-3xl font-serif text-navy italic">Access Case Study</h3>
                    <p className="text-navy/60 font-light text-sm">
                      Please provide your details to unlock the full Med Spa AI Voice Agent report.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-navy/60 font-black">Full Name</label>
                        <input 
                          required
                          type="text"
                          className="w-full bg-white border border-navy/10 p-4 text-navy focus:border-gold outline-none transition-colors"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-navy/60 font-black">Email Address</label>
                        <input 
                          required
                          type="email"
                          className="w-full bg-white border border-navy/10 p-4 text-navy focus:border-gold outline-none transition-colors"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-widest text-navy/60 font-black">Interest in Services</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {['AI', 'AEO', 'Chatbot'].map((service) => (
                          <label key={service} className="flex items-center gap-3 cursor-pointer group">
                            <div 
                              onClick={() => handleInterestChange(service)}
                              className={`w-5 h-5 border flex items-center justify-center transition-colors ${formData.interests.includes(service) ? 'bg-gold border-gold' : 'border-navy/20 bg-white group-hover:border-gold'}`}
                            >
                              {formData.interests.includes(service) && <CheckCircle2 size={14} className="text-white" />}
                            </div>
                            <span className="text-xs uppercase tracking-widest text-navy/70 font-bold">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <label className="flex items-start gap-4 cursor-pointer group">
                        <div 
                          onClick={() => setFormData({...formData, marketingOptIn: !formData.marketingOptIn})}
                          className={`mt-1 w-5 h-5 border shrink-0 flex items-center justify-center transition-colors ${formData.marketingOptIn ? 'bg-gold border-gold' : 'border-navy/20 bg-white group-hover:border-gold'}`}
                        >
                          {formData.marketingOptIn && <CheckCircle2 size={14} className="text-white" />}
                        </div>
                        <span className="text-[10px] text-navy/50 font-medium leading-relaxed uppercase tracking-wider">
                          I opt-in to receive marketing communications and strategic AI updates from Mergelith Growth Partners.
                        </span>
                      </label>
                    </div>

                    <button 
                      type="submit"
                      className="w-full btn-primary py-6 flex items-center justify-center gap-3"
                    >
                      Unlock Report
                      <ArrowRight size={16} />
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CaseStudySection;
