import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO.tsx';
import { Calendar, Clock, ArrowRight, ChevronRight, Search } from 'lucide-react';

const blogPosts = [
  {
    id: 'how-ai-help-small-business',
    title: "How AI Can Help Small Businesses Compete — and Win",
    excerpt: "AI tools for small business are no longer optional — they're the difference between competing and falling behind. Here's exactly how small businesses are using AI to grow faster with less overhead.",
    date: "May 02, 2026",
    author: "Mergelith Team",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    category: "AI & Automation",
    link: "/blog/how-ai-can-help-small-business"
  },
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

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All Intelligence');
  const [email1, setEmail1] = React.useState('');
  const [email2, setEmail2] = React.useState('');
  const [status1, setStatus1] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [status2, setStatus2] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (email: string, setStatus: (s: any) => void) => {
    if (!email || !email.includes('@')) {
      alert("Please enter a valid business email.");
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus('error');
    }
  };

  useEffect(() => {
    document.title = "The Mergelith Journal | Strategic Marketing Intelligence";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert insights on Marketing as a Service, GTM strategy, AI automation, and the future of institutional marketing.");
    }
    window.scrollTo(0, 0);
  }, []);

  // Dynamically get unique categories from blogPosts that actually have topics
  const availableCategories = ['All Intelligence', ...new Set(blogPosts.map(post => post.category))].sort((a, b) => {
    if (a === 'All Intelligence') return -1;
    if (b === 'All Intelligence') return 1;
    return a.localeCompare(b);
  });

  const filteredPosts = selectedCategory === 'All Intelligence' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title="The Mergelith Journal" 
        description="Strategic insights on institutional AI, revenue systems, and the evolution of digital authority in the age of algorithmic search." 
      />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 space-y-8"
        >
          <div className="flex items-center gap-4 text-gold mb-6">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black border-b border-gold/30 pb-1">Intelligence</span>
            <span className="w-1 h-1 bg-gold/30 rounded-full"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black border-b border-gold/30 pb-1">Official Journal</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-5xl md:text-8xl font-serif text-navy italic leading-tight">
                The Mergelith <span className="text-gold">Journal</span>
              </h1>
              <p className="text-xl text-navy/60 font-light italic border-l-2 border-gold/20 pl-8">
                Strategic insights on institutional AI, revenue systems, and the evolution of digital authority in the age of algorithmic search.
              </p>
            </div>
            <div className="bg-pearl p-8 border border-navy/5 rounded-sm w-full md:w-80 space-y-4">
              <p className="text-[10px] uppercase tracking-widest font-black text-navy/40 italic">Subscribe to Intelligence</p>
              {status1 === 'success' ? (
                <div className="text-[10px] uppercase tracking-widest font-black text-gold">
                  Welcome to the Journal.
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubscribe(email1, setStatus1);
                  }}
                  className="flex"
                >
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    value={email1}
                    onChange={(e) => setEmail1(e.target.value)}
                    required
                    className="bg-white border border-navy/10 px-4 py-3 text-xs w-full focus:outline-none focus:border-gold/50"
                  />
                  <button 
                    type="submit"
                    disabled={status1 === 'loading'}
                    className="bg-navy text-pearl px-4 py-3 text-xs uppercase tracking-widest font-black hover:bg-gold hover:text-navy transition-colors disabled:opacity-50"
                  >
                    {status1 === 'loading' ? '...' : '→'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        {/* Categories / Filter (Dynamic and Topics-first) */}
        <div className="flex flex-wrap gap-4 mb-16 border-b border-navy/5 pb-8 overflow-x-auto no-scrollbar">
          {availableCategories.map((cat, i) => (
            <button 
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 text-[10px] uppercase tracking-widest font-black transition-all whitespace-nowrap ${selectedCategory === cat ? 'bg-navy text-pearl' : 'text-navy/40 hover:text-navy border border-transparent hover:border-navy/10'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div 
            key={featuredPost.id + selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid lg:grid-cols-2 gap-12 mb-24 items-center bg-pearl/50 rounded-sm p-8 border border-navy/5"
          >
            <Link to={featuredPost.link} className="aspect-[16/9] overflow-hidden rounded-sm group">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </Link>
            <div className="space-y-8">
              <span className="px-4 py-1.5 bg-navy text-gold text-[10px] uppercase tracking-[0.3em] font-black rounded-sm w-fit">
                {featuredPost.category}
              </span>
              <div className="space-y-4">
                <Link to={featuredPost.link} className="block group">
                  <h2 className="text-4xl md:text-5xl font-serif text-navy italic group-hover:text-gold transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                </Link>
                <p className="text-lg text-navy/60 font-light leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-8 text-[11px] uppercase tracking-widest text-navy/40 font-bold border-t border-navy/5 pt-8">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-gold" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-gold" />
                  {featuredPost.readTime}
                </div>
                <Link to={featuredPost.link} className="ml-auto text-navy font-black hover:text-gold transition-colors flex items-center gap-2">
                  READ ARTICLE <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {gridPosts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <Link to={post.link} className="space-y-8 block">
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

                  <p className="text-sm text-navy/60 font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 flex items-center gap-3 text-navy font-black text-[11px] uppercase tracking-[0.3em] group-hover:gap-5 transition-all">
                    Read Article
                    <ArrowRight size={14} className="text-gold" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Footer */}
        <section className="mt-32 p-20 bg-navy text-pearl rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
             <Search size={300} className="text-gold" />
          </div>
          <div className="max-w-2xl space-y-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif italic text-gold leading-tight">The Future of Marketing is Algorithmic.</h2>
            <p className="text-xl text-pearl/60 font-light italic">
              Subscribe to the Mergelith Journal for twice-monthly strategic reports on AI search visibility, revenue systems, and institutional authority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {status2 === 'success' ? (
                <div className="text-xl text-gold font-serif italic">
                  Thank you. You've been added to the Journal.
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubscribe(email2, setStatus2);
                  }}
                  className="flex flex-col sm:flex-row gap-4 w-full"
                >
                  <input 
                    type="email" 
                    placeholder="Business Email" 
                    value={email2}
                    onChange={(e) => setEmail2(e.target.value)}
                    required
                    className="bg-white/5 border border-white/10 px-8 py-5 text-sm w-full md:w-96 focus:outline-none focus:border-gold/50 text-pearl"
                  />
                  <button 
                    type="submit"
                    disabled={status2 === 'loading'}
                    className="bg-gold text-navy px-12 py-5 text-xs uppercase tracking-widest font-black hover:bg-white transition-colors disabled:opacity-50"
                  >
                    {status2 === 'loading' ? 'SUBSCRIBING...' : 'JOIN THE JOURNAL'}
                  </button>
                </form>
              )}
            </div>
            <p className="text-[10px] uppercase tracking-widest text-pearl/40 font-black">Join 2,400+ Institutional Marketing Leaders</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
