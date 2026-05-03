import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Sun,
  Layout,
  Type,
  Maximize,
  Volume2
} from 'lucide-react';
import { motion } from 'motion/react';

const BrandKit: React.FC = () => {
  useEffect(() => {
    document.title = "Brand Kit for Small Business | 48-Hour Delivery | Mergelith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "A professional brand kit gives your business a consistent, credible visual identity — delivered in 48 hours. Colors, fonts, logo guidance, and usage rules your team can actually use.");
    }

    // FAQ Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do I need to have a logo already?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you have a logo, we build the kit around it. If you don't have a finalized logo, let us know in your brief — we can work with a wordmark or existing assets and note that logo finalization is a recommended next step."
          }
        },
        {
          "@type": "Question",
          "name": "Will the brand kit work with Canva, PowerPoint, and Google Slides?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The brand kit is delivered as a PDF reference document with all values your team needs to apply the identity in any tool."
          }
        },
        {
          "@type": "Question",
          "name": "What if I want a full rebrand, not just documentation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reach out before submitting. If you're starting completely from scratch — new name, new direction, new visual identity — we'll scope the engagement appropriately."
          }
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <article className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <span className="text-gold font-black text-[10px] uppercase tracking-[0.4em] border-b border-gold/30 pb-2">
              VISUAL IDENTITY DELIVERABLE
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-navy italic leading-tight">
              Your Business Looks <span className="text-gold">Different</span> Every Time Someone Sees It
            </h1>
            <p className="text-xl text-navy/60 font-light max-w-xl leading-relaxed">
              Inconsistent branding tells buyers that the business isn't operating at a professional level. It costs you deals you should be winning.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="https://calendly.com/mergelith/30min" target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-5 text-sm tracking-widest text-center italic font-serif">
                START YOUR BRAND KIT &rarr;
              </a>
              <Link to="/pricing" className="px-12 py-5 border border-navy/10 text-navy text-[11px] uppercase tracking-[0.3em] font-black hover:bg-navy hover:text-pearl transition-all text-center">
                VIEW RETAINER PLANS
              </Link>
            </div>
          </motion.div>
          <div className="relative">
             <div className="aspect-square bg-pearl p-12 grid grid-cols-2 gap-4 border border-navy/5 rounded-sm shadow-2xl relative">
                <div className="bg-navy rounded-sm p-6 flex flex-col justify-between">
                   <div className="w-4 h-4 bg-gold rounded-full"></div>
                   <p className="text-[8px] text-pearl/40 uppercase tracking-widest font-black">Primary Color</p>
                </div>
                <div className="bg-navy/5 rounded-sm p-6 border border-navy/10 flex items-center justify-center">
                   <Type className="text-navy/20" size={40} />
                </div>
                <div className="bg-gold rounded-sm p-6 flex items-end">
                   <p className="text-navy text-[10px] font-black uppercase tracking-widest leading-none">Authority</p>
                </div>
                <div className="bg-white rounded-sm p-6 border border-navy/5 flex flex-col justify-center gap-2">
                   <div className="h-0.5 w-full bg-navy/10"></div>
                   <div className="h-0.5 w-2/3 bg-navy/10"></div>
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/5 -z-10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg prose-navy max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-navy prose-p:text-navy/70 prose-strong:text-navy">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <section className="space-y-6">
                <p className="text-2xl text-navy font-light leading-relaxed italic border-l-4 border-gold pl-8">
                  Different fonts on your deck versus your one-pager. A logo that's been stretched, recolored, or replaced. This isn't a design problem — it's a credibility problem.
                </p>
                <p>
                  A Mergelith brand kit gives your business a single, documented visual identity that everyone uses. Every time. Delivered in 48 hours. No designer retainer. No branding agency process.
                </p>
              </section>

              <section className="space-y-8 pb-12 border-b border-navy/5">
                <h2 className="text-3xl font-serif text-navy italic">What's Included</h2>
                <div className="grid md:grid-cols-2 gap-12">
                   {[
                     { icon: Palette, title: "Color Palette", desc: "Primary, secondary, and accent colors with exact hex, RGB, and CMYK values documented for consistency." },
                     { icon: Type, title: "Typography System", desc: "Typefaces with size hierarchy, weight guidance, and usage rules for headlines and body." },
                     { icon: Maximize, title: "Logo Usage Guidelines", desc: "Rules for safe space, minimum sizes, and color variations. Stop the misuse before it happens." },
                     { icon: Volume2, title: "Brand Voice Summary", desc: "A one-page reference for your brand's tone — useful for anyone writing on your behalf." },
                     { icon: Layout, title: "Usage Guide", desc: "A concise reference PDF your team and vendors can use to create cohesive materials." }
                   ].map((item, i) => (
                     <div key={i} className="space-y-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-gold/10 text-gold rounded-sm border border-gold/20">
                           <item.icon size={20} />
                        </div>
                        <h4 className="text-xl font-serif text-navy italic">{item.title}</h4>
                        <p className="text-sm text-navy/60 leading-relaxed font-light">{item.desc}</p>
                     </div>
                   ))}
                </div>
              </section>

              <section className="space-y-8 py-12 border-b border-navy/5">
                <h2 className="text-3xl font-serif text-navy italic">Who This Is For</h2>
                <ul className="list-none pl-0 space-y-6">
                   {[
                     { title: "New Businesses", text: "Identity built for trust from day one — not a DIY logo and inconsistent colors." },
                     { title: "Scaling Teams", text: "Growing teams that need to professionalize and standardize output across multiple people." },
                     { title: "Credential Hungry", text: "Businesses losing credibility because their materials look visually fragmented." }
                   ].map((item, i) => (
                     <li key={i} className="flex gap-4">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mt-3 shrink-0"></div>
                        <div className="space-y-1">
                           <p className="font-bold text-navy uppercase tracking-widest text-xs">{item.title}</p>
                           <p className="text-navy/70 font-light leading-relaxed">{item.text}</p>
                        </div>
                     </li>
                   ))}
                </ul>
              </section>

              <section className="space-y-8 pt-12">
                <h2 className="text-3xl font-serif text-navy italic">Frequently Asked Questions</h2>
                <div className="space-y-10">
                  <div className="space-y-3 font-light">
                    <h4 className="text-xl font-serif text-navy italic">Do I need to have a logo already?</h4>
                    <p className="text-navy/70">If you have a logo, we build the kit around it. If you don't have a finalized logo, let us know — we can work with a wordmark and recommend next steps.</p>
                  </div>
                  <div className="space-y-3 font-light">
                    <h4 className="text-xl font-serif text-navy italic">Will the brand kit work with Canva?</h4>
                    <p className="text-navy/70">Yes. The values (hex codes, fonts) we provide are standard and can be applied in Canva, PowerPoint, Google Slides, or any web tool.</p>
                  </div>
                  <div className="space-y-3 font-light">
                    <h4 className="text-xl font-serif text-navy italic">What if I want a full rebrand?</h4>
                    <p className="text-navy/70">If you're starting from scratch with a new name and direction, reach out first. We can scope it appropriately for your needs.</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar info */}
            <aside className="space-y-8">
              <div className="bg-navy p-10 text-pearl rounded-sm space-y-6 sticky top-32">
                <h4 className="text-xs uppercase tracking-[0.4em] font-black text-gold/60">The Delivery</h4>
                <div className="space-y-2">
                  <p className="text-3xl font-serif italic text-gold">48 Hours</p>
                  <p className="text-xs text-pearl/40 font-light uppercase tracking-widest">Turnaround</p>
                </div>
                <div className="pt-6 border-t border-white/5 space-y-6">
                  <p className="text-sm font-light text-pearl/60 italic leading-relaxed">
                    Brand kits are included in Standard ($997/mo) and Growth ($1,999/mo) plans.
                  </p>
                  <Link to="/pricing" className="block w-full py-4 bg-gold text-navy text-[10px] uppercase tracking-widest font-black text-center hover:bg-white transition-colors">
                    EXPLORE PLANS &rarr;
                  </Link>
                </div>
              </div>

              <div className="p-8 border border-navy/5 rounded-sm space-y-4">
                 <ShieldCheck className="text-gold" size={24} />
                 <h4 className="text-xs uppercase tracking-widest font-black">Institutional Standards</h4>
                 <p className="text-xs text-navy/60 font-light leading-relaxed">Built to the same standards used by corporate teams. No freelance guesswork.</p>
              </div>
            </aside>
          </div>
        </div>

        {/* Footer CTA */}
        <section className="mt-32 p-16 bg-pearl border border-navy/5 rounded-sm text-center">
          <h2 className="text-4xl font-serif text-navy italic mb-8 italic">Build a Brand That Looks Like You Mean It</h2>
          <a href="https://calendly.com/mergelith/30min" className="btn-primary px-16 py-6 text-sm tracking-widest italic font-serif inline-block">
             GET YOUR BRAND KIT &rarr;
          </a>
        </section>
      </article>
    </div>
  );
};

export default BrandKit;
