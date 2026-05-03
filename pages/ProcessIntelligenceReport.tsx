import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ClipboardCheck, 
  Cpu, 
  Map, 
  Lock, 
  Clock, 
  CheckCircle2, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  Search,
  Settings
} from 'lucide-react';
import { motion } from 'motion/react';

const ProcessIntelligenceReport: React.FC = () => {
  useEffect(() => {
    document.title = "Process Intelligence Report | Mergelith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "A private, 1-week AI audit of your marketing and sales workflow. Identify revenue leaks, automate manual tasks, and get a prioritized implementation roadmap.");
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
          "name": "How is this different from a generic marketing audit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It's not a template. Every Process Intelligence Report is written specifically for your business based on your intake. The tool recommendations are matched to your workflow and budget."
          }
        },
        {
          "@type": "Question",
          "name": "How long does delivery take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "One week from the date of your completed intake."
          }
        },
        {
          "@type": "Question",
          "name": "What if I want help implementing the recommendations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mergelith's retainer plans are built to execute the recommendations in your report. If you continue after receiving the report, the $3,000 fee is credited toward your first two months."
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
    <div className="min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="px-4 py-1 border border-gold/30 text-gold text-[10px] uppercase tracking-[0.3em] font-black rounded-full inline-block">
              1-WEEK AI WORKFLOW AUDIT
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-navy italic leading-[1.1]">
              Stop Running Your Business on a Marketing Stack <span className="text-gold">Nobody Audited</span>
            </h1>
            <p className="text-xl text-navy/60 font-light max-w-2xl leading-relaxed">
              Most small businesses accumulate tools, habits, and manual processes over time. The result: revenue leaking at every stage of your marketing and sales pipeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
               <a href="https://calendly.com/mergelith/30min" target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-5 text-sm tracking-widest text-center">
                 GET YOUR REPORT — $3,000
               </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Grid */}
      <section className="bg-navy py-24 text-pearl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif italic">What is the Process Intelligence Report?</h2>
              <p className="text-pearl/60 font-light leading-relaxed">
                The Process Intelligence Report is a private, custom audit of your marketing and sales workflow — reviewed end-to-end by a senior commercial strategist with 20+ years of experience scaling marketing programs at leading global life science companies.
              </p>
              <div className="space-y-4">
                {[
                  "One week delivery time",
                  "Flat fee. No retainer required",
                  "Private, custom roadmap",
                  "Specific AI tool matches"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm tracking-widest font-bold">
                    <CheckCircle2 className="text-gold" size={18} />
                    {item.toUpperCase()}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 p-12 rounded-sm border border-white/10 backdrop-blur-sm space-y-8">
               <div className="space-y-4">
                 <h4 className="text-gold text-xs uppercase tracking-[0.3em] font-black">Current Reality</h4>
                 <ul className="space-y-4 text-sm text-pearl/40 font-light">
                   <li>&bull; CRM half-configured or unused</li>
                   <li>&bull; No monitoring on follow-up sequences</li>
                   <li>&bull; Lead database hasn't been worked in 90 days</li>
                   <li>&bull; AI tools subscribed to but never deployed</li>
                 </ul>
               </div>
               <div className="pt-8 border-t border-white/10">
                  <p className="italic text-pearl font-serif">"Most businesses don't need more leads. They need smarter systems to capture the revenue they're already generating."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-navy italic">What's Included</h2>
            <p className="text-navy/60 font-light">A technical and strategic deep-dive into your operational efficiency.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Full Intake Review",
                desc: "We analyze your current tools, workflow, conversion metrics, and biggest friction points."
              },
              {
                icon: Cpu,
                title: "End-to-End Workflow Audit",
                desc: "We map your process from first touch to closed deal, identifying gaps and manual bottlenecks."
              },
              {
                icon: Settings,
                title: "AI Tool Recommendations",
                desc: "Specific, prioritized set of tool matches tailored to your budget and growth stage."
              },
              {
                icon: Map,
                title: "Implementation Roadmap",
                desc: "Sequenced action plan for week one, month one, and quarter one. Yours to keep."
              },
              {
                icon: Lock,
                title: "Private & Secure",
                desc: "The report is delivered directly to you. Never shared, never repurposed, never public."
              },
              {
                icon: ShieldCheck,
                title: "Commercial Rigor",
                desc: "Audit discipline used for Fortune 500 programs, applied to your small business."
              }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-pearl border border-navy/5 rounded-sm hover:border-gold/30 transition-all group">
                <item.icon className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-serif text-navy italic mb-4">{item.title}</h3>
                <p className="text-sm text-navy/60 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Process */}
      <section className="bg-navy py-32 text-pearl overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-serif italic">How It Works</h2>
                <div className="space-y-8 mt-12">
                  {[
                    { step: "01", title: "Book and pay", desc: "Flat fee. Secure checkout. No contract." },
                    { step: "02", title: "Complete the intake", desc: "Structured forms take 20-30 mins to fill." },
                    { step: "03", title: "We audit", desc: "Sasha reviews your workflow end-to-end." },
                    { step: "04", title: "Report delivered", desc: "Sent within one week of intake completion." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <span className="text-gold font-black text-xs tracking-widest mt-1 opacity-40 group-hover:opacity-100 transition-opacity">{item.step}</span>
                      <div className="space-y-1">
                        <h4 className="text-lg font-serif italic group-hover:text-gold transition-colors">{item.title}</h4>
                        <p className="text-sm text-pearl/40 font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gold p-12 lg:p-16 rounded-sm text-navy space-y-8 flex flex-col justify-center">
              <div className="space-y-4">
                <h3 className="text-5xl font-serif italic">$3,000</h3>
                <p className="text-xs uppercase tracking-[0.5em] font-black opacity-60">Flat Fee One-Time</p>
              </div>
              <ul className="space-y-4 text-sm font-bold tracking-widest uppercase">
                <li className="flex items-center gap-3"><CheckCircle2 size={16} /> Intake review</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} /> Full workflow audit</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} /> Roadmap included</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} /> 1 week delivery</li>
              </ul>
              <div className="pt-8">
                 <a href="https://calendly.com/mergelith/30min" target="_blank" rel="noopener noreferrer" className="w-full btn-primary bg-navy text-pearl hover:bg-white hover:text-navy px-12 py-5 text-center font-black tracking-[0.2em]">
                   BOOK NOW &rarr;
                 </a>
              </div>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 text-center">
                Fee credited toward first 2 months of any retainer plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy italic mb-16 text-center">Common Questions</h2>
          <div className="space-y-12">
            {[
              {
                q: "How is this different from a generic marketing audit?",
                a: "It's not a template. Every Process Intelligence Report is written specifically for your business based on your intake. The tool recommendations are matched to your workflow and budget. The implementation roadmap is sequenced for your stage of growth."
              },
              {
                q: "Is this a subscription?",
                a: "No. One-time flat fee. No retainer, no ongoing charges. If you'd like to continue working together after the report, we can discuss a retainer — but there's no obligation."
              },
              {
                q: "What industries do you work with?",
                a: "Med spas, law firms, auto dealerships, real estate, B2B sales, dental practices, home services, restaurants, and financial advisors. Most SMB workflows share the same core structure."
              }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <h4 className="text-xl font-serif italic text-navy">{item.q}</h4>
                <p className="text-navy/60 font-light leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 p-10 bg-pearl border border-navy/5 rounded-sm text-center space-y-6">
            <h3 className="text-xl font-serif text-navy italic">Still have questions?</h3>
            <a href="https://calendly.com/mergelith/30min" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-black text-gold hover:text-navy transition-colors">
              SCHEDULE A QUICK DISCOVERY CALL <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessIntelligenceReport;
