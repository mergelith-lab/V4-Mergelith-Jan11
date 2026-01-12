import React from 'react';

const PrivacyProtocol: React.FC = () => {
  return (
    <section id="privacy-protocol" className="scroll-mt-32">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="inline-flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border border-[#c5a059]/30 flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] font-bold">Privacy Protocol</h3>
          <h2 className="text-4xl font-serif text-white mt-4 italic">The Mergelith Standard of Discretion</h2>
        </div>

        <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
          In high-stakes M&A, your data is your alpha. We operate under a "Zero-Knowledge" infrastructure, ensuring your proprietary deal flow never trains public models or leaves your secure environment.
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
            <div key={i} className="p-8 bg-[#0f172a]/50 border border-slate-800 rounded-sm hover:border-[#c5a059]/40 transition-colors">
              <h4 className="text-white font-cinzel text-xs tracking-widest mb-3 uppercase">{item.title}</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyProtocol;