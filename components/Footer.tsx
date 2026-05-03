import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pearl border-t border-navy/10 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-navy flex items-center justify-center rounded-sm shadow-md">
                <span className="text-pearl font-cinzel font-black text-xl">M</span>
              </div>
              <h1 className="font-cinzel text-xl tracking-[0.3em] font-black text-navy uppercase">MERGELITH</h1>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-navy/60 max-w-xs font-light leading-relaxed">
                Marketing-as-a-Service platform for high-stakes businesses. Corporate-grade marketing materials delivered in 48 hours.
              </p>
              <div className="pt-2">
                <p className="text-[11px] text-gold font-black tracking-[0.2em] uppercase">
                  Lake Elsinore, California &bull; ADVISORY: <a href="tel:7148820984" className="hover:text-navy transition-colors">714-882-0984</a>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-6">
              <h4 className="text-[11px] uppercase tracking-[0.4em] text-gold font-black">Engagement</h4>
              <ul className="space-y-3 text-sm text-navy/40 font-light list-none p-0 m-0 font-medium tracking-widest text-[10px] uppercase">
                <li><Link to="/how-it-works" className="hover:text-navy transition-colors">How It Works</Link></li>
                <li><Link to="/pricing" className="hover:text-navy transition-colors">Pricing</Link></li>
                <li><Link to="/services" className="hover:text-navy transition-colors">Services</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[11px] uppercase tracking-[0.4em] text-gold font-black">Links</h4>
              <ul className="space-y-3 text-sm text-navy/40 font-light list-none p-0 m-0 font-medium tracking-widest text-[10px] uppercase">
                <li><Link to="/blog" className="hover:text-navy transition-colors">Intelligence</Link></li>
                <li><Link to="/get-started" className="hover:text-navy transition-colors">Get Started</Link></li>
                <li><a 
                      href="https://calendly.com/mergelith/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-navy transition-colors text-gold"
                    >
                      Book Meeting
                    </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-28 pt-10 border-t border-navy/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-navy/20 uppercase tracking-[0.5em] font-black">
            &copy; {new Date().getFullYear()} Mergelith. All Rights Reserved.
          </p>
          <div className="flex gap-12 items-center">
            <div className="flex gap-3">
              <span className="px-2 py-0.5 border border-navy/10 rounded text-[8px] font-black text-navy/40 uppercase tracking-widest">B2B Growth</span>
              <span className="px-2 py-0.5 border border-navy/10 rounded text-[8px] font-black text-navy/40 uppercase tracking-widest">Strategy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;