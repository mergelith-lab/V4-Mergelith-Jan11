import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How fast does it call new leads?",
      answer: "Typically within 30–60 seconds of a form fill or inquiry. This ensures you catch the buyer while their intent is at its absolute peak."
    },
    {
      question: "Does it replace my team?",
      answer: "No. It supports your team by qualifying, booking, and routing so reps speak only with the right leads. It eliminates the 'grunt work' of chasing leads."
    },
    {
      question: "Can it transfer to a live rep?",
      answer: "Yes. Hot leads can be transferred instantly to a live representative based on your specific qualification rules and team availability."
    },
    {
      question: "What if someone does not answer?",
      answer: "The system can retry automatically at strategic intervals, send SMS/email follow-ups, and keep the lead warm until they respond or are disqualified."
    },
    {
      question: "Is this just a receptionist bot?",
      answer: "No. This is a revenue engine focused specifically on speed-to-lead, booking, and conversion performance. It's engineered for ROI, not just answering phones."
    }
  ];

  return (
    <section id="faq" className="scroll-mt-32">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Inquiries</h3>
          <h2 className="text-4xl md:text-6xl font-serif text-navy italic">FAQ</h2>
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
              <div className={`transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-8 pt-0 text-navy/60 font-light leading-relaxed border-t border-navy/5">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-12 space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-serif text-navy italic">⚡ Decision Moment</h3>
            <p className="text-navy/60 font-light">15 minutes • no pressure • instant value</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://api.leadconnectorhq.com/widget/bookings/mergelith-calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-12 py-5 text-xs tracking-[0.3em] w-full md:w-auto text-center"
            >
              BOOK YOUR FREE REVENUE DEMO
            </a>
            <p className="text-navy/40 font-serif italic">or</p>
            <a 
              href="https://api.leadconnectorhq.com/widget/bookings/mergelith-calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy font-black text-[10px] uppercase tracking-widest border-b-2 border-gold pb-1 hover:text-gold transition-colors"
            >
              Book a Free Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
