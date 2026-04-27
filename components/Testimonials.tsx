import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "I walked into my last investor meeting with a Mergelith pitch deck and closed the round. My previous deck was built by an agency that charged $8,000 and took six weeks. Mergelith delivered a sharper deck in 48 hours for a fraction of the cost.",
    author: "David K.",
    role: "Managing Partner, Kessler & Hunt Law | Dallas TX",
    rating: 5
  },
  {
    quote: "We had a sales team but no materials worth using. Mergelith built us a full suite -- pitch deck, battle cards, one-pagers -- in under two weeks. Our close rate on first meetings went up immediately.",
    author: "Sarah M.",
    role: "VP Sales, GreenPath Solutions | Phoenix AZ",
    rating: 5
  },
  {
    quote: "The Process Intelligence Report was the most useful $3,000 I have ever spent on my business. It showed me exactly where I was losing leads and gave me a clear roadmap to fix it.",
    author: "Maria T.",
    role: "Owner, Lumina Aesthetics | Orange County CA",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Real Results. Real Businesses.</h3>
          <h2 className="text-5xl md:text-6xl font-serif text-navy italic leading-tight">
            Client <span className="text-gold">Perspectives</span>
          </h2>
          <div className="w-24 h-px bg-gold/30 mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 relative group hover:border-gold/30 transition-all duration-500"
            >
              <Quote className="absolute top-6 right-10 text-gold/10 group-hover:text-gold/20 transition-colors" size={48} />
              
              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>

              <blockquote className="relative z-10">
                <p className="text-lg text-navy/80 font-serif italic leading-relaxed mb-10">
                  "{t.quote}"
                </p>
                <footer className="space-y-2">
                  <cite className="font-cinzel text-xs tracking-[0.2em] font-black text-navy not-italic block">
                    {t.author}
                  </cite>
                  <span className="text-[10px] uppercase tracking-widest text-navy/40 font-medium block">
                    {t.role}
                  </span>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-[11px] text-navy/30 uppercase tracking-[0.6em] font-black italic">
            Trusted by 50+ Institutional Partners Worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
