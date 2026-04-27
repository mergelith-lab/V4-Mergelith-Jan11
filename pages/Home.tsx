import React from 'react';
import Hero from '../components/Hero.tsx';
import ProblemSection from '../components/ProblemSection.tsx';
import SolutionSection from '../components/SolutionSection.tsx';
import HowItWorks from '../components/HowItWorks.tsx';
import Testimonials from '../components/Testimonials.tsx';
import FAQSection from '../components/FAQSection.tsx';
import PricingGridTable from '../components/PricingGridTable.tsx';

const Home: React.FC = () => {
  return (
    <div className="space-y-32 pb-32">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        <HowItWorks />
        <ProblemSection />
        <SolutionSection />
        <Testimonials />
        <FAQSection />
      </div>
    </div>
  );
};

export default Home;
