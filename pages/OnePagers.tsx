import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  CheckCircle2, 
  BarChart, 
  Zap, 
  ArrowRight,
  Layout,
  MousePointer2,
  Share2,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

const OnePagers: React.FC = () => {
  useEffect(() => {
    document.title = "One-Pagers & Infographics for Small Business | 48-Hour Delivery | Mergelith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional one-pagers and infographics that explain your offer, process, or data clearly — delivered in 48 hours. The leave-behind that gets read.");
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
          "name": "What's the difference between a one-pager and an infographic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A one-pager is primarily text-led — it delivers a message or argument in a structured, designed format. An infographic is visual-led — it communicates through charts, diagrams, icons, or sequential visuals."
          }
        },
        {
          "@type": "Question",
          "name": "Do I provide the content or does Mergelith write it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both options work. If you have the content written, we design and structure it. If you need the copy written from scratch, include that in your brief — it's part of the same task."
          }
        },
        {
          "@type": "Question",
          "name": "What file formats are delivered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PDF (print and digital) plus an editable source file. PNG or JPG export available for web and social use."
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
              MARKETING & SALES ASSETS
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-navy italic leading-tight">
              The <span className="text-gold">Leave-Behind</span> Nobody Reads — and How to Fix It
            </h1>
            <p className="text-xl text-navy/60 font-light max-w-xl leading-relaxed">
              Most one-pagers are walls of text that targets close immediately. We design for attention, moving buyers in less than 60 seconds of reading.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="https://calendly.com/mergelith/30min" target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-5 text-sm tracking-widest text-center italic font-serif">
                ORDER YOUR ASSET &rarr;
              </a>
              <Link to="/pricing" className="px-12 py-5 border border-navy/10 text-navy text-[11px] uppercase tracking-[0.3em] font-black hover:bg-navy hover:text-pearl transition-all text-center">
                VIEW RETAINER PLANS
              </Link>
            </div>
          </motion.div>
          <div className="relative">
             <div className="aspect-[3/4] bg-pearl border border-navy/5 shadow-2xl p-12 flex flex-col justify-between overflow-hidden group">
                <div className="flex justify-between items-start">
                   <div className="w-12 h-0.5 bg-gold"></div>
                   <FileText className="text-navy/10 group-hover:text-gold transition-colors" size={40} />
                </div>
                <div className="space-y-6">
                   <div className="h-2 w-full bg-navy/5"></div>
                   <div className="h-2 w-2/3 bg-navy/5"></div>
                   <div className="grid grid-cols-3 gap-2 pt-4">
                      <div className="h-16 bg-gold/10 border border-gold/10"></div>
                      <div className="h-16 bg-gold/10 border border-gold/10"></div>
                      <div className="h-16 bg-gold/10 border border-gold/10"></div>
                   </div>
                </div>
                <div className="flex justify-end pt-8">
                   <div className="px-4 py-2 bg-navy text-pearl text-[8px] font-black tracking-widest uppercase">
                     Call to Action
                   </div>
                </div>
             </div>
             {/* Decorative */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 -z-10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* content */}
        <div className="prose prose-lg prose-navy max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-navy prose-p:text-navy/70 prose-strong:text-navy">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <section className="space-y-6">
                <p className="text-2xl text-navy font-light leading-relaxed italic border-l-4 border-gold pl-8">
                  One Page. One Message. One Next Step. Infographics and one-pagers travel further than a paragraph ever will — making complex data or multi-step processes clear, visual, and shareable.
                </p>
                <p>
                  A Mergelith one-pager is designed for a single purpose: give a qualified prospect exactly the information they need to take the next step. Delivered in 48 hours. Built to move buyers.
                </p>
              </section>

              <section className="space-y-8 pb-12 border-b border-navy/5">
                <h2 className="text-3xl font-serif text-navy italic font-semibold">What's Included</h2>
                <div className="grid md:grid-cols-2 gap-12">
                   <div className="space-y-6">
                      <h3 className="text-xl font-serif text-navy italic border-b border-navy/5 pb-2">One-Pagers</h3>
                      <ul className="list-none pl-0 space-y-4 text-sm font-light">
                         <li className="flex items-center gap-2"><CheckCircle2 className="text-gold" size={14} /> Service Summaries</li>
                         <li className="flex items-center gap-2"><CheckCircle2 className="text-gold" size={14} /> Customer Onboarding</li>
                         <li className="flex items-center gap-2"><CheckCircle2 className="text-gold" size={14} /> Product & Program Briefs</li>
                         <li className="flex items-center gap-2"><CheckCircle2 className="text-gold" size={14} /> Partnership Proposals</li>
                         <li className="flex items-center gap-2"><CheckCircle2 className="text-gold" size={14} /> Event & Offer Assets</li>
                      </ul>
                   </div>
                   <div className="space-y-6">
                      <h3 className="text-xl font-serif text-navy italic border-b border-navy/5 pb-2">Infographics</h3>
                      <ul className="list-none pl-0 space-y-4 text-sm font-light">
                         <li className="flex items-center gap-2"><CheckCircle2 className="text-gold" size={14} /> Process Explainers</li>
                         <li className="flex items-center gap-2"><CheckCircle2 className="text-gold" size={14} /> Data Visualizations</li>
                         <li className="flex items-center gap-2"><CheckCircle2 className="text-gold" size={14} /> Comparison Charts</li>
                         <li className="flex items-center gap-2"><CheckCircle2 className="text-gold" size={14} /> Timeline Onboarding</li>
                         <li className="flex items-center gap-2"><CheckCircle2 className="text-gold" size={14} /> Sequence Lists</li>
                      </ul>
                   </div>
                </div>
              </section>

              <section className="space-y-8 py-12 border-b border-navy/5">
                <h2 className="text-3xl font-serif text-navy italic">Who This Is For</h2>
                <div className="grid md:grid-cols-2 gap-6">
                   {[
                     { title: "Sales Conversations", desc: "A leave-behind that re-sells your offer after the meeting ends, when you're not in the room." },
                     { title: "Marketing Campaigns", desc: "Shareable assets that travel further than a link and get read more thoroughly than a post." },
                     { title: "B2B Sales Teams", desc: "One-pager per product or service, so reps have the right asset for every conversation." },
                     { title: "Events & Trade Shows", desc: "Something worth handing over that works harder than a business card." }
                   ].map((item, i) => (
                     <div key={i} className="p-8 bg-pearl border border-navy/5 rounded-sm">
                        <strong className="block text-navy mb-2 uppercase tracking-widest text-[10px] font-black">{item.title}</strong>
                        <p className="text-sm font-light text-navy/60 leading-relaxed">{item.desc}</p>
                     </div>
                   ))}
                </div>
              </section>

              <section className="space-y-8 pt-12">
                <h2 className="text-3xl font-serif text-navy italic">Frequently Asked Questions</h2>
                <div className="space-y-10">
                  {[
                    { q: "What's the difference between a one-pager and an infographic?", a: "A one-pager is primarily text-led (message/argument). An infographic is visual-led (charts/diagrams). Both fit on a single page." },
                    { q: "Do I provide the content?", a: "Both work. If you have it, we design it. If you need it written, we write the full narrative as part of the same task." },
                    { q: "What file formats are delivered?", a: "High-resolution PDF (print/digital) plus editable source files. PNG/JPG exports available." }
                  ].map((faq, i) => (
                    <div key={i} className="space-y-3">
                       <h4 className="text-xl font-serif text-navy italic">{faq.q}</h4>
                       <p className="text-navy/70 font-light leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="bg-navy p-10 text-pearl rounded-sm space-y-6 sticky top-32">
                <h4 className="text-xs uppercase tracking-[0.4em] font-black text-gold/60">Turnaround</h4>
                <div className="space-y-2">
                  <p className="text-3xl font-serif italic text-gold">48 Hours</p>
                  <p className="text-[10px] text-pearl/40 font-light uppercase tracking-widest leading-none">Per asset</p>
                </div>
                <div className="pt-6 border-t border-white/5 space-y-6">
                  <p className="text-sm font-light text-pearl/60 italic leading-relaxed">
                    One-pagers and infographics are included in Standard ($997/mo) and Growth ($1,999/mo) plans.
                  </p>
                  <Link to="/pricing" className="block w-full py-4 bg-gold text-navy text-[10px] uppercase tracking-widest font-black text-center hover:bg-white transition-colors">
                    VIEW PLANS &rarr;
                  </Link>
                </div>
              </div>

              <div className="p-8 border border-navy/5 rounded-sm space-y-4">
                 <ShieldCheck className="text-gold" size={24} />
                 <h4 className="text-xs uppercase tracking-widest font-black">Institutional Integrity</h4>
                 <p className="text-xs text-navy/60 font-light leading-relaxed">Held to the standard of global corporate marketing. No agency fluff.</p>
              </div>
            </aside>
          </div>
        </div>

        {/* Footer CTA */}
        <section className="mt-32 p-16 bg-pearl border border-navy/5 rounded-sm text-center space-y-8">
           <h2 className="text-4xl font-serif text-navy italic">The leave-behind that earns the follow-up.</h2>
           <p className="text-navy/60 font-light max-w-2xl mx-auto">
             Stop sending materials that get ignored. Build professional, visual assets that communicate your value in seconds.
           </p>
           <div className="pt-4">
              <a href="https://calendly.com/mergelith/30min" className="btn-primary px-16 py-6 text-sm tracking-widest italic font-serif">
                 BOOK DISCOVERY CALL &rarr;
              </a>
           </div>
        </section>
      </article>
    </div>
  );
};

export default OnePagers;
