import React from 'react';

const PrivacyProtocol: React.FC = () => {
  return (
    <section id="privacy-protocol" className="scroll-mt-32">
      <div className="max-w-5xl mx-auto text-center space-y-16">
        <div className="inline-flex flex-col items-center">
          <div className="w-20 h-20 rounded-full border-2 border-[#E6B65C]/30 flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(230,182,92,0.05)] bg-white">
            <svg className="w-10 h-10 text-[#E6B65C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-[#E6B65C] font-black">Privacy Protocol</h3>
          <h2 className="text-5xl font-serif text-[#2F4F68] mt-6 italic">The Mergelith Standard of Discretion</h2>
        </div>

        <p className="text-[#2F4F68]/70 text-2xl font-light leading-relaxed max-w-3xl mx-auto">
          In high-stakes M&A, your data is your alpha. We operate under a "Zero-Knowledge" infrastructure, ensuring your proprietary deal flow never trains public models.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            { 
              title: "Air-Gapped Processing", 
              desc: "Dedicated compute instances that never share resources with other firms." 
            },
            { 
              title: "Conflict Screening", 
              desc: "Automated identity masking during initial intake to prevent internal disclosure." 
            },
            { 
              title: "Data Sovereignty", 
              desc: "Your data remains yours. No retention, no model training, no exposure." 
            }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-white border border-[#2F4F68]/10 rounded-sm hover:border-[#E6B65C]/50 transition-all duration-500 group shadow-sm">
              <h4 className="text-[#E6B65C] font-cinzel text-sm tracking-[0.3em] mb-4 uppercase font-black">{item.title}</h4>
              <p className="text-sm text-[#2F4F68]/50 font-light leading-relaxed group-hover:text-[#2F4F68]/80 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyProtocol;