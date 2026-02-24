import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const features = [
    "Calls new leads instantly (30–60 seconds)",
    "Qualifies with a short conversation",
    "Books the appointment automatically",
    "Connects hot leads to a rep in real time",
    "Sends SMS/email follow-up to confirm"
  ];

  return (
    <section id="solution" className="scroll-mt-32">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">The Solution</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-navy italic leading-tight">
              A Revenue-Driven Inbound <br />
              <span className="text-gold">Conversion Engine</span>
            </h2>
            <p className="text-navy/40 text-sm italic">(Not just a receptionist)</p>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl text-navy/70 font-light leading-relaxed border-l-2 border-gold pl-8">
              When someone contacts you, our system responds immediately:
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
                You do not buy “AI calling.” <br />
                <span className="text-gold">You buy more closed revenue per lead.</span>
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="https://api.leadconnectorhq.com/widget/bookings/mergelith-calendar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-10 py-4 text-[10px] tracking-widest inline-block"
              >
                BOOK A DEMO
              </a>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="aspect-square rounded-sm overflow-hidden shadow-2xl border border-navy/10 relative z-10">
            <img 
              src="https://picsum.photos/seed/mergelith-solution/1000/1000" 
              alt="AI Conversion Engine" 
              className="w-full h-full object-cover"
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
