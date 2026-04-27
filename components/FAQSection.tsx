import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exactly does Mergelith deliver?",
      answer: "Corporate-grade commercial documents -- pitch decks, brand kits, battle cards, one-pagers, infographics, GTM strategy documents, and campaign briefs. You receive finished files (Google Doc, PDF, or PowerPoint). You own the execution. Mergelith does not manage campaigns, publish content, or run ads."
    },
    {
      question: "What is the difference between Standard and Growth?",
      answer: "Standard ($999/month) covers core execution deliverables: slide decks, pitch decks, brand kits, battle cards, infographics, and one-pagers. Growth ($1,999/month) adds GTM strategy documents, campaign briefs, SEO/AEO/GEO reports, and 4 social posts per month. Both tiers: 1 active task at a time, 48-hour turnaround, month-to-month."
    },
    {
      question: "What is the Process Intelligence Report?",
      answer: "A standalone $3,000 AI process audit. Mergelith reviews your current marketing and sales workflow, identifies where AI tools can reduce friction and accelerate revenue, and delivers a written report with specific tool recommendations and an implementation roadmap. No subscription required. 1-week turnaround after intake."
    },
    {
      question: "What does 'one active task at a time' mean?",
      answer: "We work on one deliverable per client at a time -- this ensures quality and focus. You submit a request, we deliver it in 48 hours, then you submit the next. No cap on the total number of requests per month."
    },
    {
      question: "What if I need a revision?",
      answer: "Revisions are included and delivered within 24 hours of your feedback. Revisions must relate to the original request scope."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. Month-to-month on both subscription tiers. No cancellation fees. Cancel with one click, effective at the end of your billing period."
    },
    {
      question: "How is Mergelith different from a freelancer or agency?",
      answer: "Freelancers are one person with one skill set and unpredictable availability. Agencies are slow, expensive, and contract-heavy. Mergelith is a full commercial strategy execution service built by a 20+ year corporate strategist -- at a fixed monthly rate, with a 48-hour guarantee, and no contract."
    }
  ];

  return (
    <section id="faq" className="scroll-mt-32">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Inquiries</h3>
          <h2 className="text-4xl md:text-6xl font-serif text-navy italic">Everything You Are Wondering. Answered Directly.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-navy/5 bg-white overflow-hidden transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-8 flex justify-between items-center text-left hover:bg-navy/5 transition-colors"
              >
                <span className="text-lg font-serif text-navy italic">{faq.question}</span>
                {openIndex === idx ? <Minus className="w-5 h-5 text-gold" /> : <Plus className="w-5 h-5 text-gold" />}
              </button>
              <div className={`transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-svh opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-8 pt-0 text-navy/60 font-light leading-relaxed border-t border-navy/5">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-12 space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-serif text-navy italic">Stop Showing Up to Meetings Underprepared.</h3>
            <p className="text-navy/60 font-light">Your competitors have the materials. You could too -- in 48 hours.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://api.leadconnectorhq.com/widget/bookings/mergelith-calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-12 py-5 text-xs tracking-[0.3em] w-full md:w-auto text-center"
            >
              START YOUR FIRST REQUEST
            </a>
            <p className="text-navy/40 font-serif italic">or</p>
            <a 
              href="https://api.leadconnectorhq.com/widget/bookings/mergelith-calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy font-black text-[10px] uppercase tracking-widest border-b-2 border-gold pb-1 hover:text-gold transition-colors"
            >
              Book a 15-minute call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
