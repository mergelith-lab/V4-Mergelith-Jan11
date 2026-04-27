import React from 'react';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const blogPosts = [
  {
    id: 'cgt-ai-search',
    title: "Most CGT Companies Are Invisible in AI Search — Here’s Why and How to Fix It",
    excerpt: "Most CGT companies are doing everything right—scientifically. But AI search cannot find them. If AI cannot find you, you are not even in the conversation. Learn how to shift from ranking to being selected.",
    date: "March 28, 2026",
    author: "Mergelith Team",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=800",
    category: "AEO Strategy"
  },
  {
    id: 'geo-moat',
    title: "GEO: The New Competitive Moat for Institutional Advisory",
    excerpt: "Traditional rankings are no longer enough. To win in 2026, firms must ensure their brand is embedded in the training data of major AI models. Learn the GEO strategy for institutional growth.",
    date: "March 15, 2026",
    author: "Mergelith Team",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    category: "GEO Strategy"
  },
  {
    id: 'growth-systems',
    title: "Growth Isn't More Leads; It's Better Systems",
    excerpt: "The bottleneck for most high-growth firms isn't lead generation—it's lead activation. Learn why institutional systems beat marketing spend every single time.",
    date: "March 08, 2026",
    author: "Mergelith Team",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    category: "Strategy"
  }
];

const BlogSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePostClick = (post: typeof blogPosts[0]) => {
    if (post.category === 'Case Study') {
      scrollTo('case-study');
    } else if (post.url) {
      window.open(post.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="blog" className="scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Intelligence</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-navy italic">The Mergelith Journal</h2>
          </div>
          <p className="text-navy/40 font-light max-w-xs text-sm md:text-right">
            Strategic insights on institutional AI, revenue systems, and the evolution of digital authority.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {blogPosts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
              onClick={() => handlePostClick(post)}
            >
              <div className="space-y-8">
                <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 bg-navy text-gold text-[10px] uppercase tracking-[0.2em] font-black rounded-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-navy/40 font-bold">
                    <div className="flex items-center gap-2">
                      <Calendar size={12} className="text-gold" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={12} className="text-gold" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif text-navy italic group-hover:text-gold transition-colors leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-navy/60 font-light leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 flex items-center gap-3 text-navy font-black text-[11px] uppercase tracking-[0.3em] group-hover:gap-5 transition-all">
                    {post.category === 'Case Study' ? 'View Full Case Study' : 'Read Article'}
                    <ArrowRight size={14} className="text-gold" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-navy/5 text-center">
          <button className="text-navy/40 hover:text-navy transition-colors text-[11px] uppercase tracking-[0.4em] font-black">
            View All Intelligence &bull; Archive
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
