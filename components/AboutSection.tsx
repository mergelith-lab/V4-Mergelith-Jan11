import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-32">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">The Visionary</h3>
          <h2 className="text-5xl md:text-7xl font-serif text-navy italic leading-tight">
            Meet the <span className="text-gold">Founder</span>
          </h2>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl text-navy/80 font-serif italic leading-relaxed max-w-3xl mx-auto">
              "With over 20 years of deep-rooted experience in the Life Science sector, I have witnessed firsthand the complexities and inefficiencies that can hinder institutional growth."
            </p>
            <div className="pt-4">
              <p className="text-navy font-black tracking-[0.2em] text-xs uppercase">Sasha Aleksic</p>
              <p className="text-gold text-[10px] uppercase tracking-[0.3em] font-medium mt-1">Founder of Mergelith</p>
            </div>
          </div>
          
          <p className="text-navy/60 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Today, I am bridging the gap between traditional industry expertise and the future of technology. By implementing Mergelith's advanced AI growth systems, we are not just automating tasks—we are engineering operational leverage that allows firms to scale with unprecedented precision and speed.
          </p>

          <div className="pt-12 grid grid-cols-2 gap-12 max-w-md mx-auto">
            <div>
              <p className="text-4xl font-serif text-navy italic">20+</p>
              <p className="text-[10px] uppercase tracking-widest text-navy/40 font-black mt-2">Years Life Science</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-navy italic">AI-First</p>
              <p className="text-[10px] uppercase tracking-widest text-navy/40 font-black mt-2">Growth Strategy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
