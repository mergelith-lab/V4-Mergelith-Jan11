import React from 'react';

const ScopeSection: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-navy italic">What Mergelith Is Not</h2>
            <p className="text-navy/60 text-lg leading-relaxed font-light">
              We believe in being direct about scope. Mergelith is not a full-service agency. We don't run your ads, manage your social accounts, or promise leads. Here's what that means for you:
            </p>
          </div>

          <div className="bg-navy/5 p-12 border-l-4 border-gold shadow-sm space-y-8">
             <p className="text-2xl font-serif text-navy leading-relaxed italic">
                “We build the materials. <span className="text-gold">You use them.</span>”
             </p>
             <p className="text-navy/70 leading-relaxed font-light lg:text-lg">
                Our value is in the quality, speed, and commercial rigor of what we produce — not in managing campaigns on your behalf. If you want an agency that does everything, Mergelith isn't that.
             </p>
             <p className="text-navy/70 leading-relaxed font-light lg:text-lg">
                If you want a senior marketing strategist producing corporate-grade deliverables in 48 hours at a fraction of agency cost, Mergelith is exactly that.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScopeSection;
