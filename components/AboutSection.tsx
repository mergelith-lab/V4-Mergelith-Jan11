import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/3 space-y-10">
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-[#E6B65C] font-black">Strategic Leadership</h3>
            <h2 className="text-5xl font-serif text-[#2F4F68] italic leading-tight border-l-2 border-[#E6B65C]/40 pl-10 py-4">
              Founded on <br />
              Institutional <br />
              Rigor
            </h2>
            
            <div className="pt-10">
              <div className="p-10 bg-white border border-[#2F4F68]/10 rounded-sm relative overflow-hidden group shadow-lg">
                <div className="absolute top-0 right-0 p-6 opacity-[0.05]">
                  <svg className="w-20 h-20 text-[#E6B65C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-[#2F4F68] font-cinzel text-xl tracking-[0.3em] relative z-10 font-black">SASHA ALEKSIC</p>
                <p className="text-[#E6B65C] text-[11px] uppercase tracking-[0.4em] font-black mt-2 relative z-10">Founder & Managing Partner</p>
                <div className="mt-8 h-1 w-16 bg-[#E6B65C]/40 group-hover:w-full transition-all duration-700"></div>
                <p className="mt-8 text-[11px] text-[#2F4F68]/40 uppercase tracking-[0.3em] leading-loose font-black">
                  2+ Decades Global Operations <br />
                  Life Sciences & Bioprocessing <br />
                  Strategic Market Development
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-12">
            <div className="space-y-8 text-[#2F4F68]/70 font-light leading-relaxed text-xl">
              <p>
                <span className="text-[#2F4F68] font-semibold italic underline decoration-[#E6B65C]/50 decoration-2">Sasha Aleksic</span> brings a breadth of experience from corporate America industry as a senior market development and strategic leader. With over two decades of experience in global life science organizations, her expertise spans bioprocessing, cell and gene therapy, and advanced manufacturing in highly regulated commercial environments.
              </p>
              <p>
                Her career has been built at the intersection of strategy, execution, and scale, working closely with executive leadership, legal, compliance, R&D, and commercial teams to drive growth in complex, high-stakes settings. 
              </p>
              <p>
                Through this institutional background, she has developed deep expertise in managing critical workflows where <span className="text-[#2F4F68] font-semibold italic">accuracy, speed, risk mitigation, and reputation protection</span> are non-negotiable. She has led cross-functional initiatives that improved throughput, reduced operational risk, and enabled organizations to operate with greater confidence under regulatory and commercial pressure.
              </p>
              <p>
                Today, Sasha is applying this background to the Mergers and Acquisitions space. She works with M&A advisors, attorneys, and deal teams to design AI-enabled workflows and automations that address the most critical bottlenecks across the deal lifecycle. Her focus remains on solving problems that materially impact outcomes: risk reduction, deal velocity, workload scalability, and reputation protection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-[#2F4F68]/10">
              <div className="space-y-6">
                <h4 className="text-[#2F4F68] font-cinzel text-xs tracking-[0.4em] uppercase font-black">The M&A Mandate</h4>
                <p className="text-base text-[#2F4F68]/50 font-light leading-relaxed">
                  We bridge the gap between legacy processes and institutional-grade AI. Our systems are built for advisors who require precision and absolute discretion.
                </p>
              </div>
              <div className="space-y-6">
                <h4 className="text-[#2F4F68] font-cinzel text-xs tracking-[0.4em] uppercase font-black">The Measurable Goal</h4>
                <p className="text-base text-[#2F4F68]/50 font-light leading-relaxed">
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