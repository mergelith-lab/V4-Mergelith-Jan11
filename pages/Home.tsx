import React from 'react';
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

const Home: React.FC = () => {
  return (
    <div className="space-y-32 pb-32">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        <ProblemSection />
        <SolutionSection />
        <ExpertiseSection />
        <ComparisonSection />
        <section id="pricing" className="scroll-mt-32 space-y-16">
          <div className="text-center space-y-4">
            <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Investment</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-navy italic">Simple, Transparent Pricing.</h2>
            <p className="text-navy/60 font-light max-w-2xl mx-auto italic">
              No proposals. No discovery fees. No pricing tiers that require a sales call to unlock. Pick your tier and get your first deliverable in 48 hours.
            </p>
          </div>
          <PricingGridTable />
        </section>
        <ScopeSection />
        <Testimonials />
        <FAQSection />
      </div>
    </div>
  );
};

export default Home;
