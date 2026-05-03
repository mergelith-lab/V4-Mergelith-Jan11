import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  FileText,
  MousePointer2,
  Cpu,
  BarChart3,
  Users,
  Activity,
  MessagesSquare,
  Target
} from 'lucide-react';
import { motion } from 'motion/react';

const MarketingAIAudit: React.FC = () => {
  useEffect(() => {
    document.title = "What Does a Marketing AI Audit Include? | Mergelith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "A marketing AI audit reviews your marketing and sales workflow to identify where AI tools can eliminate manual work and improve conversion. Here's exactly what's in one.");
    }
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 mb-16"
        >
          <div className="flex items-center gap-4 text-gold mb-6">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black border-b border-gold/30 pb-1">AI & Automation</span>
            <span className="w-1 h-1 bg-gold/30 rounded-full"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black border-b border-gold/30 pb-1">May 2, 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-navy italic leading-tight">
            What Does a Marketing <span className="text-gold">AI Audit</span> Include? (And Do You Need One?)
          </h1>
          <p className="text-xl text-navy/60 font-light leading-relaxed max-w-3xl border-l-2 border-gold/20 pl-8 italic">
            Every week, another tool promises to transform your marketing. An audit cuts through the noise and identifies specifically where AI can eliminate friction and improve your bottom line.
          </p>
        </motion.header>

        {/* Content */}
        <div className="prose prose-lg prose-navy max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-navy prose-p:text-navy/70 prose-strong:text-navy prose-li:text-navy/70 prose-a:text-gold prose-a:transition-colors prose-a:decoration-gold/30">
          <p>
            Most small business owners have subscribed to two or three AI tools, deployed them partially, and aren't sure whether they're working. A marketing AI audit reviews your actual marketing and sales workflow, identifies specifically where AI tools can eliminate manual work, and gives you a sequenced implementation plan.
          </p>

          <h2 className="text-3xl font-serif text-navy italic mt-16 mb-8">What a Marketing AI Audit Is (and Isn't)</h2>
          <p>
            <strong>What it is:</strong> A structured review of your end-to-end marketing and sales process conducted by an expert who understands both AI capabilities and commercial marketing. The output is a written report with tool recommendations and an implementation roadmap.
          </p>
          <p>
            <strong>What it isn't:</strong> A generic list of popular tools, a technology assessment disconnected from commercial goals, or a pitch to buy a specific platform.
          </p>

          <h2 className="text-3xl font-serif text-navy italic mt-16 mb-8">What a Marketing AI Audit Reviews</h2>
          <p>A thorough marketing AI audit covers five key areas of your operation:</p>

          <div className="space-y-12 my-12 not-prose">
            <section className="p-8 bg-pearl border border-navy/5 rounded-sm space-y-4">
              <div className="flex items-center gap-4 text-gold">
                <MousePointer2 size={24} />
                <h3 className="text-xl font-serif text-navy italic">1. Lead Capture and Qualification</h3>
              </div>
              <p className="text-navy/70 font-light leading-relaxed">
                The audit examines where leads are entering and where AI can automate initial qualification and routing — reducing manual load and improving speed-to-contact.
              </p>
              <p className="text-[10px] uppercase tracking-widest font-black text-navy/40">Opportunities: AI Voice Receptionists, Automated CRM Intake, Chatbot Qualification.</p>
            </section>

            <section className="p-8 bg-pearl border border-navy/5 rounded-sm space-y-4">
              <div className="flex items-center gap-4 text-gold">
                <MessagesSquare size={24} />
                <h3 className="text-xl font-serif text-navy italic">2. Follow-Up and Nurture</h3>
              </div>
              <p className="text-navy/70 font-light leading-relaxed">
                Most leads are lost due to inconsistent follow-up. The audit reviews touchpoint frequency and identifies where AI can execute personalized, multi-touch nurture sequences at scale.
              </p>
              <p className="text-[10px] uppercase tracking-widest font-black text-navy/40">Opportunities: Automated SMS/Email Sequences, AI-Powered CRM Triggers.</p>
            </section>

            <section className="p-8 bg-pearl border border-navy/5 rounded-sm space-y-4">
              <div className="flex items-center gap-4 text-gold">
                <Target size={24} />
                <h3 className="text-xl font-serif text-navy italic">3. Conversion and Sales Enablement</h3>
              </div>
              <p className="text-navy/70 font-light leading-relaxed">
                We look at what happens when a lead reaches a sales conversation. The audit reviews sales materials and identifies tools that improve scheduling, proposal generation, and meeting follow-up.
              </p>
              <p className="text-[10px] uppercase tracking-widest font-black text-navy/40">Opportunities: Meeting Schedulers, Proposal Automation, Pipeline Management.</p>
            </section>

            <section className="p-8 bg-pearl border border-navy/5 rounded-sm space-y-4">
              <div className="flex items-center gap-4 text-gold">
                <Users size={24} />
                <h3 className="text-xl font-serif text-navy italic">4. Customer Retention and Reactivation</h3>
              </div>
              <p className="text-navy/70 font-light leading-relaxed">
                For many businesses, the most profitable AI investment is reactivation. We look at lapsed customers and how AI voice or messaging can recover revenue without manual effort.
              </p>
              <p className="text-[10px] uppercase tracking-widest font-black text-navy/40">Opportunities: AI Voice Agent Reactivation, Automated Win-back Campaigns.</p>
            </section>

            <section className="p-8 bg-pearl border border-navy/5 rounded-sm space-y-4">
              <div className="flex items-center gap-4 text-gold">
                <BarChart3 size={24} />
                <h3 className="text-xl font-serif text-navy italic">5. Reporting and Decision Intelligence</h3>
              </div>
              <p className="text-navy/70 font-light leading-relaxed">
                We review how you measure performance. Is it instinct or data? We identify attribution and dashboard tools that give a clear picture of what's actually working.
              </p>
              <p className="text-[10px] uppercase tracking-widest font-black text-navy/40">Opportunities: Attribution Tools, Automated Analytics, ROI Dashboards.</p>
            </section>
          </div>

          <h2 className="text-3xl font-serif text-navy italic mt-16 mb-8">What the Report Delivers</h2>
          <p>At the end of a marketing AI audit, you receive a written report featuring:</p>
          <ul>
            <li><strong>Current state summary:</strong> A factual description of your existing workflow.</li>
            <li><strong>Gap and friction map:</strong> Specific points where leads are lost or bottlenecks exist.</li>
            <li><strong>Prioritized recommendations:</strong> Tools matched to your gaps, prioritized by impact vs. effort.</li>
            <li><strong>Implementation roadmap:</strong> A sequenced action plan for week one through month three.</li>
            <li><strong>ROI framing:</strong> Estimated commercial impact of the automated improvements.</li>
          </ul>

          <h2 className="text-3xl font-serif text-navy italic mt-16 mb-8">How to Know If You're Ready</h2>
          <p>A marketing AI audit delivers the most value when:</p>
          <ul className="space-y-4">
            <li>You have a marketing and sales process, even if it's informal.</li>
            <li>You suspect you're losing leads but don't know exactly where.</li>
            <li>You've subscribed to AI tools that aren't delivering the expected results.</li>
            <li>You're scaling and manual processes are becoming bottlenecks.</li>
            <li>You want a vendor-neutral expert opinion, not a sales pitch.</li>
          </ul>

          <p className="mt-12">
            Marketing AI audits range from $1,500 to $5,000. High-quality audits are custom, require a detailed intake process, and deliver specific recommendations tied to your actual business goals.
          </p>

          {/* Related Links */}
          <div className="mt-20 p-10 bg-pearl border border-navy/5 rounded-sm not-prose space-y-8">
            <h4 className="text-xs uppercase tracking-[0.4em] font-black text-gold/60">Related Deliverables</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link to="/process-intelligence-report" className="group block space-y-2">
                <p className="text-navy font-serif italic text-lg group-hover:text-gold transition-colors">Process Intelligence Report &rarr;</p>
                <p className="text-xs text-navy/50 font-light">Mergelith's custom $3k flat-fee audit.</p>
              </Link>
              <Link to="/blog/what-is-marketing-as-a-service" className="group block space-y-2">
                <p className="text-navy font-serif italic text-lg group-hover:text-gold transition-colors">What is MaaS? &rarr;</p>
                <p className="text-xs text-navy/50 font-light">The complete guide to the model.</p>
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-24 space-y-12">
            <h2 className="text-3xl font-serif text-navy italic">Frequently Asked Questions</h2>
            <div className="space-y-10">
              <div className="space-y-3">
                <h4 className="text-xl font-serif text-navy italic">Does an audit require account access?</h4>
                <p className="text-navy/70 font-light leading-relaxed">Detailed intake information is the primary input. Account access can deepen recommendations but isn't always required to identify strategic gaps.</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-serif text-navy italic">How is this different from an SEO audit?</h4>
                <p className="text-navy/70 font-light leading-relaxed">SEO focus is on visibility. An AI audit focuses on internal workflow — how leads move, where friction exists, and how automation improves conversion.</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-serif text-navy italic">What if I've already implemented AI tools?</h4>
                <p className="text-navy/70 font-light leading-relaxed">Existing tools are an input. The audit reviews if they're configured correctly and if you're missing higher-impact opportunities elsewhere in the funnel.</p>
              </div>
            </div>
          </section>

          {/* Footer CTA */}
          <section className="mt-24 pt-16 border-t border-navy/5 text-center space-y-8">
            <h2 className="text-4xl font-serif text-navy italic italic">Stop Guessing. Start Automating.</h2>
            <p className="text-navy/60 font-light max-w-xl mx-auto italic">
              See how a Process Intelligence Report can map your growth by identifying the exact AI tools your business needs to scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link to="/process-intelligence-report" className="btn-primary px-12 py-5 text-sm tracking-widest italic font-serif">
                LEARN ABOUT THE REPORT &rarr;
              </Link>
              <a href="https://calendly.com/mergelith/30min" className="px-12 py-5 border border-navy/10 text-navy text-[11px] uppercase tracking-[0.3em] font-black hover:bg-navy hover:text-pearl transition-all text-center">
                BOOK DISCOVERY
              </a>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default MarketingAIAudit;
