import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  Search, 
  MessageSquare, 
  Globe, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  AlertCircle,
  ArrowUpRight,
  Zap,
  Target
} from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: React.ElementType;
}

const tabs: Tab[] = [
  { id: 'visibility', label: 'AI Visibility Index', icon: BarChart3 },
  { id: 'snapshots', label: 'AI Snapshots (SGE)', icon: Search },
  { id: 'rankings', label: 'LLM Rankings', icon: MessageSquare },
  { id: 'mentions', label: 'Brand Mentions', icon: Globe },
  { id: 'competitors', label: 'Competitors', icon: Users },
];

const ReportsDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('visibility');

  const renderContent = () => {
    switch (activeTab) {
      case 'visibility':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 border border-navy/5 shadow-sm rounded-sm">
                <p className="text-[10px] uppercase tracking-widest text-navy/40 font-black mb-2">Aggregated Visibility</p>
                <div className="text-4xl font-serif text-navy italic">84.2%</div>
                <div className="flex items-center gap-2 mt-4 text-emerald-600">
                  <TrendingUp size={16} />
                  <span className="text-xs font-bold font-sans">+12.4% vs last month</span>
                </div>
              </div>
              <div className="bg-white p-8 border border-navy/5 shadow-sm rounded-sm">
                <p className="text-[10px] uppercase tracking-widest text-navy/40 font-black mb-2">Answer Confidence</p>
                <div className="text-4xl font-serif text-navy italic">High</div>
                <div className="flex items-center gap-2 mt-4 text-gold">
                  <ShieldCheck size={16} />
                  <span className="text-xs font-bold font-sans text-navy/60 uppercase tracking-wider">Institutional Standard</span>
                </div>
              </div>
              <div className="bg-white p-8 border border-navy/5 shadow-sm rounded-sm">
                <p className="text-[10px] uppercase tracking-widest text-navy/40 font-black mb-2">Authority Delta</p>
                <div className="text-4xl font-serif text-navy italic">+3.1</div>
                <div className="flex items-center gap-2 mt-4 text-navy/40">
                  <AlertCircle size={16} />
                  <span className="text-xs font-bold font-sans">Semantic Gap: 12%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-navy text-pearl p-10 rounded-sm relative overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-xl font-serif italic text-gold">Real-Time Visibility Tracking</h4>
                  <p className="text-pearl/60 text-sm font-light leading-relaxed">
                    Mergelith tracks your "visibility index"—the frequency and sentiment of your brand's appearance in the responses of major AI models. We measure across Google AI Overviews, Perplexity, and the OpenAI ecosystem.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full h-32 flex items-end gap-2">
                    {[40, 60, 45, 90, 75, 85, 100].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.1, duration: 1 }}
                        className="flex-1 bg-gold/30 rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'snapshots':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-2xl font-serif italic text-navy">AI Search Snapshots</h4>
                <p className="text-navy/60 font-light leading-relaxed">
                  We capture and track the visual layout of AI Overviews (SGE) for your core keywords. Our system monitors if you're in the carousel, the citation blocks, or the primary summary text.
                </p>
                <ul className="space-y-4">
                  {['Primary Answer Extraction', 'Citation Card Presence', 'Entity Link Verification'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-navy/80 italic">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-navy/5 p-1 px-1 rounded-sm border border-navy/10">
                <div className="bg-white p-6 rounded-sm space-y-4 shadow-sm">
                  <div className="flex items-center gap-3 border-b border-navy/5 pb-4">
                    <Search className="text-gold" size={18} />
                    <span className="text-xs font-black text-navy uppercase tracking-widest">Live SGE Snapshot</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-navy/5 w-1/3 rounded" />
                    <div className="h-12 bg-gold/5 border-l-2 border-gold p-3 italic text-[10px] text-navy/60">
                      "According to recent institutional reports, [Your Firm] is the leading expert in high-stakes advisory..."
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="aspect-square bg-navy/5" />
                      <div className="aspect-square bg-navy/5" />
                      <div className="aspect-square bg-navy/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'rankings':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="overflow-hidden border border-navy/5 rounded-sm">
              <table className="w-full text-left">
                <thead className="bg-navy text-pearl text-[10px] uppercase tracking-widest font-black">
                  <tr>
                    <th className="p-6">LLM Agent</th>
                    <th className="p-6">Authority Score</th>
                    <th className="p-6">Sentiment</th>
                    <th className="p-6">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-light text-navy/70 italic">
                  {[
                    { agent: 'ChatGPT (GPT-4o)', score: '98/100', sentiment: 'Institutional', status: 'Dominant' },
                    { agent: 'Google Gemini', score: '92/100', sentiment: 'Primary', status: 'Rising' },
                    { agent: 'Perplexity AI', score: '95/100', sentiment: 'Expert', status: 'Stable' },
                    { agent: 'Claude 3.5 Sonnet', score: '88/100', sentiment: 'Balanced', status: 'Growth' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-navy/5 hover:bg-navy/[0.02]">
                      <td className="p-6 font-semibold not-italic">{row.agent}</td>
                      <td className="p-6 font-sans text-gold font-bold">{row.score}</td>
                      <td className="p-6">{row.sentiment}</td>
                      <td className="p-6">
                        <span className="px-3 py-1 bg-gold/10 text-gold text-[9px] uppercase tracking-widest font-black rounded-full border border-gold/20">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'mentions':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-2xl font-serif italic text-navy">Global Brand Citations</h4>
                <p className="text-navy/60 font-light leading-relaxed">
                  Track every moment your brand is cited as a source or recommendation within a generative response. We monitor for semantic accuracy and verifiable links.
                </p>
                <div className="p-6 bg-gold/5 border border-gold/20 rounded-sm italic text-sm text-navy/80">
                  "Brand mentions have increased by 300% since the implementation of the Mergelith AEO technical stack."
                </div>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex gap-4 p-4 border border-navy/5 rounded-sm hover:border-gold/30 transition-all group">
                    <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                      <Zap size={16} />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between">
                        <span className="text-[10px] uppercase tracking-widest text-navy/40 font-black">ChatGPT Search Citation</span>
                        <span className="text-[10px] text-navy/20">2h ago</span>
                      </div>
                      <p className="text-xs text-navy/70 leading-relaxed font-light italic">"...referenced [Your Firm] as the primary source for institutional deal analysis."</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'competitors':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 space-y-6">
                <h4 className="text-2xl font-serif italic text-navy">Competitor Share of Voice</h4>
                <p className="text-navy/60 font-light leading-relaxed">
                  Identify exactly which firms are competing for the "Answer Slot" in your niche. We analyze competitor authority signals and reverse-engineer their success to capture their share.
                </p>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gold rounded-full" />
                    <span className="text-[10px] uppercase font-black tracking-widest text-navy/40">You</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-navy/20 rounded-full" />
                    <span className="text-[10px] uppercase font-black tracking-widest text-navy/40">Competitor Average</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full space-y-6">
                {[
                  { label: 'Technical Authority', you: 85, comp: 45 },
                  { label: 'Semantic Clarity', you: 92, comp: 60 },
                  { label: 'Citation Quality', you: 78, comp: 52 },
                ].map((bar, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-[10px] uppercase tracking-widest font-black">
                      <span className="text-navy/60">{bar.label}</span>
                      <span className="text-gold">+{bar.you - bar.comp}% Lead</span>
                    </div>
                    <div className="h-4 w-full bg-navy/5 rounded-full overflow-hidden relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${bar.you}%` }}
                        className="h-full bg-gold absolute top-0 left-0 z-10"
                      />
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${bar.comp}%` }}
                        className="h-full bg-navy/20 absolute top-0 left-0 z-0"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="reports" className="scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Mergelith Dashboard</h3>
          <h2 className="text-5xl md:text-6xl font-serif text-navy italic">AEO Intelligence Deck</h2>
          <p className="text-navy/40 font-light max-w-2xl mx-auto text-lg leading-relaxed pt-4">
            The same advanced reporting used by the world's most sophisticated institutional advisory firms. Track, measure, and dominate the AI visibility landscape.
          </p>
        </div>

        <div className="bg-white border border-navy/10 rounded-sm shadow-2xl overflow-hidden min-h-[600px] flex flex-col">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-navy/5 bg-navy/5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-black transition-all relative ${
                  activeTab === tab.id ? 'bg-white text-gold' : 'text-navy/40 hover:text-navy hover:bg-navy/[0.02]'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 w-full h-1 bg-gold"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 p-8 md:p-16 overflow-y-auto custom-scrollbar">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Insight Bar */}
            <div className="mt-16 pt-8 border-t border-navy/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all shadow-sm">
                  <Target size={18} />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-navy/40 font-black">Strategic Advice</p>
                  <p className="text-xs text-navy font-bold italic">Capture the 'Answer Slot' for high-intent mandates.</p>
                </div>
              </div>
              
              <button className="btn-primary py-4 px-10 flex items-center gap-3 bg-navy text-pearl hover:bg-gold hover:text-navy">
                <ArrowUpRight size={16} />
                DOWNLOAD SEMANTIC AUDIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsDashboard;
