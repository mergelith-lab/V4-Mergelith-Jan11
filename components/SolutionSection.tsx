import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const features = [
    "Pitch decks built to close -- not just to impress",
    "Battle cards your sales team will actually use in the field",
    "Brand kits that make you look like the obvious choice",
    "GTM strategy documents that map your path to more customers",
    "Campaign briefs that translate your offer into a growth plan",
    "All delivered in 48 hours. Fixed price. No surprises."
  ];

  return (
    <section id="solution" className="scroll-mt-32">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">The Solution</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-navy italic leading-tight">
              A Commercial Strategist <br />
              <span className="text-gold">on Retainer.</span>
            </h2>
            <p className="text-navy/40 text-sm italic">(For Less Than One Freelance Invoice)</p>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl text-navy/70 font-light leading-relaxed border-l-2 border-gold pl-8">
              Mergelith is a Marketing-as-a-Service platform built by a 20+ year corporate commercial strategist. The same systematic approach that scaled global companies — now applied to your business.
            </p>
            
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-navy/80 font-medium group-hover:text-navy transition-colors">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8">
              <p className="text-2xl font-serif text-navy italic leading-relaxed">
                Mergelith delivers — <br />
                <span className="text-gold">you deploy.</span>
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="https://api.leadconnectorhq.com/widget/bookings/mergelith-calendar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-10 py-4 text-[10px] tracking-widest inline-block"
              >
                START YOUR FIRST REQUEST
              </a>
            </div>

            <div className="mt-12 p-8 bg-gold/5 border border-gold/20 rounded-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-black">Corporate Strategy Active</p>
              </div>
              <p className="text-navy/70 text-sm font-light italic leading-relaxed">
                "Your deliverable arrives as a Google Doc, PDF, or PowerPoint. Complex deliverables include a Loom walkthrough. You review, request any revisions, and execute."
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="aspect-square rounded-sm overflow-hidden shadow-2xl border border-navy/10 relative z-10 text-center flex items-center justify-center bg-navy/5">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" 
              alt="AEO Protocol Illustration" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-navy/20 mix-blend-multiply"></div>
          </div>
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-gold/10 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-navy/5 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
