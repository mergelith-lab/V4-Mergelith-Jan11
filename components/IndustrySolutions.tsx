import React from 'react';

const solutions = [
  {
    title: "M&A Advisory Firms",
    problem: "Missed mandates due to delayed lead response and manual intake friction.",
    intervention: "24/7 AI Voice Receptionists for immediate seller engagement and conflict checks.",
    outcome: "Increased mandate conversion and improved deal-room velocity."
  },
  {
    title: "Investment Banks",
    problem: "High senior-partner overhead on initial deal-flow screening and CIM parsing.",
    intervention: "Neural Deal Intake layers that categorize opportunities based on institutional criteria.",
    outcome: "400% increase in analyst efficiency and filtered deal pipeline quality."
  },
  {
    title: "Business Brokers",
    problem: "Low-quality lead noise burying high-value seller inquiries.",
    intervention: "Automated buyer/seller qualification chatbots with integrated scheduling.",
    outcome: "Streamlined pipeline focus on closable revenue mandates."
  },
  {
    title: "Private Equity Teams",
    problem: "Proprietary sourcing gaps and slow response to competitive signals.",
    intervention: "Digital AEO strategies that position the firm as the primary authority in targeted sectors.",
    outcome: "Enhanced brand visibility in LLM search results for sell-side founders."
  }
];

const IndustrySolutions: React.FC = () => {
  return (
    <section id="industry-solutions" className="scroll-mt-32">
      <div className="text-center mb-20">
        <h3 className="text-[11px] uppercase tracking-[0.5em] text-[#E6B65C] font-black mb-4">Who We Serve</h3>
        <h2 className="text-5xl font-serif text-[#2F4F68] italic">AI Solutions for M&A Firms</h2>
        <p className="mt-6 text-[#2F4F68]/60 max-w-3xl mx-auto font-light leading-relaxed text-xl">
          Mergelith builds custom AI infrastructure for the specific operational demands of the mid-market and institutional M&A ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {solutions.map((item, idx) => (
          <div key={idx} className="bg-white border border-[#2F4F68]/10 p-12 rounded-sm shadow-sm hover:border-[#E6B65C]/40 transition-all group">
            <h4 className="text-2xl font-serif text-[#2F4F68] mb-6 italic">{item.title}</h4>
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#E6B65C] font-black block mb-2">Workflow Problem</span>
                <p className="text-[#2F4F68]/70 font-light leading-relaxed">{item.problem}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#2F4F68] font-black block mb-2">AI Intervention</span>
                <p className="text-[#2F4F68]/70 font-light leading-relaxed">{item.intervention}</p>
              </div>
              <div className="pt-4 border-t border-[#2F4F68]/5">
                <p className="text-sm font-semibold text-[#2F4F68] italic">{item.outcome}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustrySolutions;