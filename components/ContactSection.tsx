
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-32">
      <div className="deal-room-border bg-gradient-to-b from-[#0f172a] to-[#050a14] p-12 md:p-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c5a059" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-serif text-white italic">
            Elite advisors don't scale people. <br />
            <span className="text-[#c5a059]">They scale systems.</span>
          </h2>
          
          <p className="text-slate-400 text-lg font-light">
            Due to the sensitive nature of our deployments, we only partner with a limited number of firms per quarter. Request a private audit of your current deal-sourcing infrastructure.
          </p>

          <form className="space-y-6 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-4">
              <input 
                type="text" 
                placeholder="Principal Name" 
                className="w-full bg-[#050a14]/50 border border-slate-800 p-4 text-white placeholder-slate-600 focus:border-[#c5a059] outline-none transition-colors rounded-sm text-sm tracking-wide"
              />
              <input 
                type="email" 
                placeholder="Institutional Email" 
                className="w-full bg-[#050a14]/50 border border-slate-800 p-4 text-white placeholder-slate-600 focus:border-[#c5a059] outline-none transition-colors rounded-sm text-sm tracking-wide"
              />
              <textarea 
                placeholder="Brief Overview of Growth Objectives" 
                rows={4}
                className="w-full bg-[#050a14]/50 border border-slate-800 p-4 text-white placeholder-slate-600 focus:border-[#c5a059] outline-none transition-colors rounded-sm text-sm tracking-wide resize-none"
              ></textarea>
            </div>
            
            <button className="w-full py-5 bg-[#c5a059] text-[#050a14] font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-all duration-300 rounded-sm">
              Initiate Private Consultation
            </button>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest italic">
              All inquiries handled with strict confidentiality protocols.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
