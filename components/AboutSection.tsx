import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column: Focus on Professional Standing */}
          <div className="lg:w-1/3 space-y-6">
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] font-bold">Strategic Leadership</h3>
            <h2 className="text-4xl font-serif text-white italic leading-tight border-l border-[#c5a059]/30 pl-8 py-2">
              Founded on <br />
              Institutional <br />
              Rigor
            </h2>
            
            <div className="pt-8">
              <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <svg className="w-16 h-16 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-white font-cinzel text-lg tracking-widest relative z-10">Sasha Aleksic</p>
                <p className="text-[#c5a059] text-[10px] uppercase tracking-[0.2em] font-bold mt-1 relative z-10">Founder & Managing Partner</p>
                <div className="mt-6 h-px w-12 bg-[#c5a059]/50"></div>
                <p className="mt-4 text-[10px] text-slate-500 uppercase tracking-widest leading-relaxed">
                  2+ Decades Global Operations <br />
                  Life Sciences & Bioprocessing <br />
                  Strategic Market Development
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:w-2/3 space-y-8">
            <div className="space-y-6 text-slate-400 font-light leading-relaxed text-lg">
              <p>
                <span className="text-white font-medium italic">Sasha Aleksic</span> brings a breadth of experience from corporate America industry as a senior market development and strategic leader. With over two decades of experience in global life science organizations, her expertise spans bioprocessing, cell and gene therapy, and advanced manufacturing in highly regulated commercial environments.
              </p>
              <p>
                Her career has been built at the intersection of strategy, execution, and scale, working closely with executive leadership, legal, compliance, R&D, and commercial teams to drive growth in complex, high-stakes settings. 
              </p>
              <p>
                Through this institutional background, she has developed deep expertise in managing critical workflows where <span className="text-white italic">accuracy, speed, risk mitigation, and reputation protection</span> are non-negotiable. She has led cross-functional initiatives that improved throughput, reduced operational risk, and enabled organizations to operate with greater confidence under regulatory and commercial pressure.
              </p>
              <p>
                Today, Sasha is applying this background to the Mergers and Acquisitions space. She works with M&A advisors, attorneys, and deal teams to design AI-enabled workflows and automations that address the most critical bottlenecks across the deal lifecycle. Her focus remains on solving problems that materially impact outcomes: risk reduction, deal velocity, workload scalability, and reputation protection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-slate-800">
              <div className="space-y-4">
                <h4 className="text-white font-cinzel text-xs tracking-widest uppercase">The M&A Mandate</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  We bridge the gap between legacy processes and institutional-grade AI. Our systems are built for advisors who require precision and absolute discretion.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-cinzel text-xs tracking-widest uppercase">The Measurable Goal</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  Enable M&A professionals to close more deals, with less friction, and greater control over their proprietary deal flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;