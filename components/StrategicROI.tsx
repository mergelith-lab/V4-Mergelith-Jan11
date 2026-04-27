import React from 'react';
import { TrendingUp, Zap, Trophy, BarChart3 } from 'lucide-react';

const StrategicROI: React.FC = () => {
  const points = [
    {
      title: "Secure the Answer Slot",
      desc: "Being the direct answer in Google AI Overviews and ChatGPT Search eliminates the need for 'more ads'. You own the intent.",
      icon: Zap
    },
    {
      title: "Establish Institutional Moats",
      desc: "Encoding your brand into LLM training data creates a competitive advantage that traditional SEO cannot replicate.",
      icon: Trophy
    },
    {
      title: "Real-Time Intelligence",
      desc: "Track your AI Visibility Index. If you aren't measuring your presence in generative results, you are flying blind.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="strategic-roi" className="scroll-mt-32">
      <div className="bg-navy p-12 md:p-24 rounded-sm relative overflow-hidden">
        {/* Decorative background text */}
        <div className="absolute top-0 right-0 text-[200px] font-serif text-white/5 select-none pointer-events-none leading-none -translate-y-1/4 translate-x-1/4">
          AEO
        </div>

        <div className="relative z-10 space-y-16">
          <div className="max-w-3xl space-y-6">
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Performance</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-pearl italic leading-tight">
              Why AEO Produces <br />
              <span className="text-gold">Sustained ROI</span>
            </h2>
            <p className="text-pearl/60 text-xl font-serif italic">"Visibility Wins Deals"</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {points.map((point, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-sm">
                  <point.icon className="w-5 h-5 text-gold" />
                </div>
                <h4 className="text-xl font-serif text-pearl italic">{point.title}</h4>
                <p className="text-pearl/50 text-sm font-light leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-pearl/80 text-xl font-light max-w-xl">
              Most firms do not need more content. <br />
              <span className="text-gold font-serif italic">They need better AI distribution.</span>
            </p>
            <a 
              href="https://api.leadconnectorhq.com/widget/bookings/mergelith-calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-gold text-navy hover:bg-pearl px-10 py-4 text-[10px] tracking-widest"
            >
              REQUEST AEO STRATEGY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicROI;
