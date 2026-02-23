import React from 'react';
import { Phone, Users, FileText, Search } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: 'AI VOICE RECEPTIONIST',
      description: 'An AI voice receptionist built by Mergelith answers inbound calls for your business 24/7. It captures customer intent, qualifies relevance, and books meetings directly into your team calendars, preventing lead leakage from missed calls.',
      icon: <Phone className="w-6 h-6 text-gold" />
    },
    {
      title: 'AI CHATBOTS FOR QUALIFICATION',
      description: 'Mergelith deploys AI chatbots that pre-qualify leads before human involvement. The chatbot gathers key information, screens for relevance, and routes only qualified opportunities to your team.',
      icon: <Users className="w-6 h-6 text-gold" />
    },
    {
      title: 'AI DEAL INTAKE SYSTEMS',
      description: 'Mergelith designs AI-driven lead intake and pre-screening systems that standardize data capture and accelerate initial assessment. These systems eliminate incomplete submissions and ensure consistent qualification.',
      icon: <FileText className="w-6 h-6 text-gold" />
    },
    {
      title: 'AEO FOR BUSINESS WEBSITES',
      description: 'Mergelith optimizes business websites for AI-driven search platforms, including Google AI Overviews and ChatGPT Search, so firms are accurately identified, recommended, and cited by AI engines as trusted authorities.',
      icon: <Search className="w-6 h-6 text-gold" />
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid-bright" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#001F3F" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-bright)" />
        </svg>
      </div>

      <div className="z-10 text-center px-6 max-w-7xl mx-auto flex-1 flex flex-col justify-center">
        <div className="space-y-10 mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-navy/10 bg-white/50 backdrop-blur-md mb-6 animate-fade-in shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse shadow-[0_0_8px_#D4AF37]"></span>
            <span className="text-[11px] uppercase tracking-[0.4em] text-navy font-black">Mergelith AI Retrieval Active</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-8xl font-serif leading-[1.1] text-navy tracking-tight max-w-5xl mx-auto">
              Revolutionize Your <br />
              <span className="italic text-gold font-serif drop-shadow-sm">Business Operations with AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-navy/70 font-light leading-relaxed max-w-3xl mx-auto">
              Leverage the power of AI for appointment setting, live transfers, cold calling, and customer service—all in one integrated solution.
            </p>
          </div>
          
          <div className="pt-6 flex flex-col items-center gap-8">
            <button 
              onClick={() => scrollTo('contact')}
              className="btn-primary px-12 py-5 text-xs tracking-[0.3em]"
            >
              GET STARTED TODAY
            </button>
          </div>
        </div>

        {/* Services Grid - NEW SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 border border-navy/5 shadow-sm hover:shadow-xl transition-all duration-500 text-left group">
              <div className="mb-6 p-3 bg-navy/5 w-fit rounded-sm group-hover:bg-gold/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-navy font-cinzel text-sm tracking-[0.2em] font-black mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-navy/60 text-xs font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-pearl to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;