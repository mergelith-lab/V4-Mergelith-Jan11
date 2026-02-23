import React from 'react';
import { ShieldCheck, MessageSquare, RefreshCw } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const sections = [
    {
      title: "Cold Calling:",
      icon: <ShieldCheck className="w-6 h-6 text-gold" />,
      items: [
        {
          label: "Compliance:",
          text: "Our AI can cold call publicly listed business numbers. For residential or personal lines, prior consent is required."
        },
        {
          label: "Simultaneous Calls:",
          text: "The AI can dial up to 10,000 leads and engage with 1,000 people simultaneously."
        },
        {
          label: "Short Call Optimization:",
          text: "Best suited for calls under 10 minutes for optimal performance."
        }
      ]
    },
    {
      title: "Handling Objections:",
      icon: <MessageSquare className="w-6 h-6 text-gold" />,
      items: [
        {
          text: "The AI can address common objections like \"I'm too busy\" or \"I'm not interested\" using its extensive knowledge base."
        },
        {
          text: "Customized responses can be added using the \"knowledge base\" feature, making it adaptable to your unique business needs."
        }
      ]
    },
    {
      title: "Follow-up and Lead Nurturing:",
      icon: <RefreshCw className="w-6 h-6 text-gold" />,
      items: [
        {
          text: "Follow-up calls can be scheduled based on lead behavior, ensuring timely engagement without overstepping boundaries."
        },
        {
          text: "The AI can handle multiple follow-ups automatically, reducing manual workload."
        }
      ]
    }
  ];

  return (
    <section id="how-it-works" className="bg-navy py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="how-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#how-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-pearl italic leading-tight">
            How Can Our <span className="text-gold">AI Work for You?</span>
          </h2>
          <div className="h-1 w-24 bg-gold mt-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-8 group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-sm group-hover:bg-gold/10 transition-colors">
                  {section.icon}
                </div>
                <h3 className="text-gold font-cinzel text-sm tracking-[0.2em] font-black uppercase">
                  {section.title}
                </h3>
              </div>

              <ul className="space-y-6">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/40 mt-2 shrink-0"></div>
                    <p className="text-pearl/70 font-light leading-relaxed text-sm">
                      {item.label && (
                        <span className="text-pearl font-semibold block mb-1 uppercase tracking-wider text-[10px]">
                          {item.label}
                        </span>
                      )}
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
