import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setIsSubmitted(true);
    setTimeout(() => {
      // Potentially reset or keep success message
    }, 5000);
  };

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
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-white italic">
              Elite advisors don't scale people. <br />
              <span className="text-[#c5a059]">They scale systems.</span>
            </h2>
            
            <div className="pt-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] font-bold mb-2">Immediate Access</p>
              <a href="tel:714-477-7490" className="text-2xl md:text-3xl font-serif text-white hover:text-[#c5a059] transition-colors italic tracking-wider">
                714-477-7490
              </a>
            </div>
          </div>
          
          <p className="text-slate-400 text-lg font-light">
            Due to the sensitive nature of our deployments, we only partner with a limited number of firms per quarter. Request a private audit of your current deal-sourcing infrastructure.
          </p>

          {!isSubmitted ? (
            <form className="space-y-6 max-w-lg mx-auto" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                <input 
                  type="text" 
                  required
                  placeholder="Principal Name" 
                  className="w-full bg-[#050a14]/50 border border-slate-800 p-4 text-white placeholder-slate-600 focus:border-[#c5a059] outline-none transition-colors rounded-sm text-sm tracking-wide"
                />
                <input 
                  type="email" 
                  required
                  placeholder="Institutional Email" 
                  className="w-full bg-[#050a14]/50 border border-slate-800 p-4 text-white placeholder-slate-600 focus:border-[#c5a059] outline-none transition-colors rounded-sm text-sm tracking-wide"
                />
                <textarea 
                  required
                  placeholder="Brief Overview of Growth Objectives" 
                  rows={4}
                  className="w-full bg-[#050a14]/50 border border-slate-800 p-4 text-white placeholder-slate-600 focus:border-[#c5a059] outline-none transition-colors rounded-sm text-sm tracking-wide resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-5 bg-[#c5a059] text-[#050a14] font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-all duration-300 rounded-sm cursor-pointer"
              >
                Initiate Private Consultation
              </button>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest italic">
                All inquiries handled with strict confidentiality protocols.
              </p>
            </form>
          ) : (
            <div className="p-12 border border-[#c5a059]/30 bg-[#c5a059]/5 backdrop-blur-sm rounded-sm animate-pulse">
              <div className="mb-4 text-[#c5a059]">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-white font-serif text-2xl italic mb-2">Request Transmitted</h4>
              <p className="text-slate-400 text-sm font-light">
                Secure link established. An advisor will contact you via institutional channels shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-[10px] uppercase tracking-widest text-[#c5a059] hover:text-white transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;