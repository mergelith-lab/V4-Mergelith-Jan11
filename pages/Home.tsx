import React from 'react';
import SEO from '../components/SEO.tsx';
import Hero from '../components/Hero.tsx';
import ProblemSection from '../components/ProblemSection.tsx';
import SolutionSection from '../components/SolutionSection.tsx';
import HowItWorks from '../components/HowItWorks.tsx';
import Testimonials from '../components/Testimonials.tsx';
import FAQSection from '../components/FAQSection.tsx';
import PricingGridTable from '../components/PricingGridTable.tsx';
import ComparisonSection from '../components/ComparisonSection.tsx';
import ExpertiseSection from '../components/ExpertiseSection.tsx';
import ScopeSection from '../components/ScopeSection.tsx';
import DeliverablesSection from '../components/DeliverablesSection.tsx';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-32 pb-32">
      <SEO 
        title="Marketing as a Service" 
        description="Mergelith delivers corporate-grade marketing materials in 48 hours. Specializing in AEO, GEO, and high-velocity marketing execution for small businesses." 
      />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <DeliverablesSection />
        <ExpertiseSection />
        <ComparisonSection />
        <section id="pricing" className="scroll-mt-32 space-y-16">
          <div className="text-center space-y-4">
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Investment</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-navy italic">Simple, Flat-Rate Marketing Retainer Pricing</h2>
            <p className="text-navy/60 font-light max-w-2xl mx-auto italic">
              No proposals. No discovery fees. No pricing tiers that require a sales call to unlock. Pick your tier and get your first deliverable in 48 hours.
            </p>
          </div>
          <PricingGridTable />
        </section>
        <ScopeSection />

        {/* Section 5 — Process Intelligence Report CTA */}
        <section className="bg-navy p-12 md:p-24 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 text-gold">
            <Link to="/process-intelligence-report">
              <ArrowRight size={300} />
            </Link>
          </div>
          <div className="max-w-3xl space-y-8 relative z-10">
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Audit First</h3>
            <h2 className="text-4xl md:text-6xl font-serif italic text-pearl leading-tight">
              Not Ready for a Retainer? <br />
              <span className="text-gold">Start with a Marketing AI Audit.</span>
            </h2>
            <p className="text-xl text-pearl/60 font-light leading-relaxed italic border-l-2 border-gold/20 pl-8">
              The Process Intelligence Report is a private, one-time AI audit of your marketing and sales workflow — delivered in one week, flat fee, no retainer required. Walk away with specific tool recommendations and a sequenced implementation roadmap.
            </p>
            <div className="pt-6">
              <Link 
                to="/process-intelligence-report" 
                className="inline-flex items-center gap-4 bg-gold text-navy px-12 py-5 text-xs uppercase tracking-widest font-black hover:bg-white transition-colors"
              >
                Learn about the Process Intelligence Report <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <Testimonials />
        <FAQSection />
      </div>
    </div>
  );
};

export default Home;
