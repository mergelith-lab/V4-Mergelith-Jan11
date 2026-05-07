import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import BackgroundGraphics from './components/BackgroundGraphics.tsx';

// Pages
import Home from './pages/Home.tsx';
import HowItWorksPage from './pages/HowItWorks.tsx';
import Pricing from './pages/Pricing.tsx';
import Services from './pages/Services.tsx';
import LandingPage from './pages/Landing.tsx';
import WhatIsMarketingAsAService from './pages/blog/WhatIsMarketingAsAService.tsx';
import MaaSVsAgency from './pages/blog/MaaSVsAgency.tsx';
import HowToHireFractionalAgency from './pages/blog/HowToHireFractionalAgency.tsx';
import FractionalCMOVsAgency from './pages/blog/FractionalCMOVsAgency.tsx';
import MarketingAIAudit from './pages/blog/MarketingAIAudit.tsx';
import CGTInvisibleInAISearch from './pages/blog/CGTInvisibleInAISearch.tsx';
import GEOMoatInstitutionalAdvisory from './pages/blog/GEOMoatInstitutionalAdvisory.tsx';
import HowAICanHelpSmallBusiness from './pages/blog/HowAICanHelpSmallBusiness.tsx';
import Blog from './pages/Blog.tsx';
import StandardPlan from './pages/StandardPlan.tsx';
import GrowthPlan from './pages/GrowthPlan.tsx';
import ProcessIntelligenceReport from './pages/ProcessIntelligenceReport.tsx';
import SalesPitchDecks from './pages/SalesPitchDecks.tsx';
import CapabilityDecks from './pages/CapabilityDecks.tsx';
import BrandKit from './pages/BrandKit.tsx';
import BattleCards from './pages/BattleCards.tsx';
import OnePagers from './pages/OnePagers.tsx';
import GTMStrategy from './pages/GTMStrategy.tsx';
import CampaignBriefs from './pages/CampaignBriefs.tsx';
import SearchVisibilityReport from './pages/SearchVisibilityReport.tsx';
import NotFound from './pages/NotFound.tsx';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen relative selection:bg-navy/10 selection:text-navy bg-pearl">
        <BackgroundGraphics />
        <Navbar isScrolled={isScrolled} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/get-started" element={<LandingPage />} />
            <Route path="/blog/what-is-marketing-as-a-service" element={<WhatIsMarketingAsAService />} />
            <Route path="/blog/marketing-as-a-service-vs-agency" element={<MaaSVsAgency />} />
            <Route path="/blog/how-to-hire-fractional-marketing-agency" element={<HowToHireFractionalAgency />} />
            <Route path="/blog/fractional-cmo-vs-marketing-agency" element={<FractionalCMOVsAgency />} />
            <Route path="/blog/what-does-a-marketing-ai-audit-include" element={<MarketingAIAudit />} />
            <Route path="/blog/cgt-companies-invisible-in-ai-search" element={<CGTInvisibleInAISearch />} />
            <Route path="/blog/geo-new-competitive-moat" element={<GEOMoatInstitutionalAdvisory />} />
            <Route path="/blog/how-ai-can-help-small-business" element={<HowAICanHelpSmallBusiness />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/standard-plan" element={<StandardPlan />} />
            <Route path="/growth-plan" element={<GrowthPlan />} />
            <Route path="/process-intelligence-report" element={<ProcessIntelligenceReport />} />
            <Route path="/sales-pitch-decks" element={<SalesPitchDecks />} />
            <Route path="/capability-decks" element={<CapabilityDecks />} />
            <Route path="/brand-kit" element={<BrandKit />} />
            <Route path="/battle-cards" element={<BattleCards />} />
            <Route path="/one-pagers-infographics" element={<OnePagers />} />
            <Route path="/gtm-strategy" element={<GTMStrategy />} />
            <Route path="/campaign-briefs" element={<CampaignBriefs />} />
            <Route path="/seo-aeo-geo-report" element={<SearchVisibilityReport />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;