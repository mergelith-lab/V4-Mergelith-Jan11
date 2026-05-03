import React from 'react';
import { 
  FileText, 
  Presentation, 
  Layers, 
  ShieldCheck, 
  Info, 
  Compass, 
  Briefcase, 
  Search, 
  Share2 
} from 'lucide-react';
import { motion } from 'motion/react';

const deliverables = [
  { title: "Sales Pitch Decks", icon: Presentation },
  { title: "Corporate Capability Decks", icon: Briefcase },
  { title: "Brand Kits", icon: Layers },
  { title: "Battle Cards", icon: ShieldCheck },
  { title: "One-Pagers & Infographics", icon: Info },
  { title: "GTM Strategy Documents", icon: Compass },
  { title: "Campaign Briefs", icon: FileText },
  { title: "SEO / AEO / GEO Reports", icon: Search },
  { title: "Weekly Social Media Posts", icon: Share2 }
];

const DeliverablesSection: React.FC = () => {
  return (
    <section className="py-24 scroll-mt-32" id="deliverables">
      <div className="space-y-20">
        <div className="text-center space-y-4">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Expertise</h3>
          <h2 className="text-4xl md:text-6xl font-serif text-navy italic leading-snug">
            Corporate-Grade Marketing Materials. <br className="hidden md:block" /> 
            <span className="text-gold">48-Hour Turnaround.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group p-8 border border-navy/5 bg-white hover:border-gold/30 hover:shadow-xl transition-all duration-500 rounded-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <item.icon size={80} className="text-navy" />
              </div>
              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-12 h-12 bg-navy/5 flex items-center justify-center rounded-sm group-hover:bg-gold transition-colors">
                  <item.icon className="w-6 h-6 text-gold group-hover:text-navy transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-navy italic group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <div className="w-8 h-0.5 bg-navy/10 group-hover:w-full group-hover:bg-gold/30 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
