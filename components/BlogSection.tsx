import React from 'react';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

const blogPosts = [
  {
    id: 'what-is-marketing-as-a-service',
    title: "What Is Marketing as a Service?",
    excerpt: "Marketing as a Service (MaaS) gives small businesses access to professional marketing execution on a monthly retainer — without hiring an agency or a full-time team.",
    date: "May 03, 2026",
    author: "Mergelith Team",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800",
    category: "Marketing Strategy",
    link: "/blog/what-is-marketing-as-a-service"
  },
  {
    id: 'maas-vs-agency',
    title: "MaaS vs. Traditional Agency: Which Is Right for You?",
    excerpt: "Marketing as a Service and traditional agencies both promise results — but they work very differently. Here's how to choose the right model for your business.",
    date: "May 02, 2026",
    author: "Mergelith Team",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    category: "Business Strategy",
    link: "/blog/marketing-as-a-service-vs-agency"
  },
  {
    id: 'how-to-hire-fractional',
    title: "How to Hire a Fractional Marketing Agency: A Complete Guide",
    excerpt: "What to look for, what to ask, and what to avoid — a practical framework for hiring a partner that actually delivers for your business.",
    date: "May 02, 2026",
    author: "Mergelith Team",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1454165833767-027508492b4a?auto=format&fit=crop&q=80&w=800",
    category: "Hiring Guide",
    link: "/blog/how-to-hire-fractional-marketing-agency"
  },
  {
    id: 'cmo-vs-agency',
    title: "Fractional CMO vs. Marketing Agency: Which Do You Need?",
    excerpt: "Fractional CMOs and marketing agencies are often compared — but they do fundamentally different things. Here's how to know which model fits your stage.",
    date: "May 02, 2026",
    author: "Mergelith Team",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    category: "Business Strategy",
    link: "/blog/fractional-cmo-vs-marketing-agency"
  },
  {
    id: 'ai-audit-include',
    title: "What Does a Marketing AI Audit Include?",
    excerpt: "An AI audit reviews your sales workflow to find where automation can eliminate manual work and improve conversion. Here's exactly what to expect.",
    date: "May 02, 2026",
    author: "Mergelith Team",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    category: "AI & Automation",
    link: "/blog/what-does-a-marketing-ai-audit-include"
  },
  {
    id: 'cgt-ai-search',
    title: "Most CGT Companies Are Invisible in AI Search — Here’s Why and How to Fix It",
    excerpt: "Most CGT companies are doing everything right—scientifically. But AI search cannot find them. If AI cannot find you, you are not even in the conversation.",
    date: "March 28, 2026",
    author: "Mergelith Team",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=800",
    category: "AEO/GEO Strategy",
    link: "/blog/cgt-companies-invisible-in-ai-search"
  },
  {
    id: 'geo-moat',
    title: "GEO: The New Competitive Moat for Institutional Advisory",
    excerpt: "Traditional rankings are no longer enough. To win in 2026, firms must ensure their brand is embedded in the training data of major AI models.",
    date: "March 15, 2026",
    author: "Mergelith Team",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    category: "AEO/GEO Strategy",
    link: "/blog/geo-new-competitive-moat"
  }
];

const BlogSection: React.FC = () => {
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePostClick = (post: typeof blogPosts[0]) => {
    if (post.link) {
      navigate(post.link);
      window.scrollTo(0, 0);
    } else if (post.category === 'Case Study') {
      scrollTo('case-study');
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
          <Link 
            to="/blog"
            className="text-navy/40 hover:text-navy transition-colors text-[11px] uppercase tracking-[0.4em] font-black"
          >
            View All Intelligence &bull; Archive
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
