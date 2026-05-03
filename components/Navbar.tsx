import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const location = useLocation();
  
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Services', path: '/services' },
    { label: 'Blog', path: '/blog' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-pearl/95 backdrop-blur-md border-b border-navy/10 py-3 shadow-sm' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-[1800px] mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-9 h-9 bg-navy flex items-center justify-center rounded-sm shadow-md group-hover:bg-gold transition-colors">
            <span className="text-pearl font-cinzel font-bold text-lg group-hover:text-navy">M</span>
          </div>
          <div className="hidden xl:block">
            <h1 className="font-cinzel text-base tracking-[0.2em] font-bold text-navy leading-none">MERGELITH</h1>
            <p className="text-[9px] tracking-[0.3em] text-gold uppercase font-black">Marketing-as-a-Service</p>
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <Link 
                key={idx}
                to={link.path}
                className={`text-[9px] uppercase tracking-widest transition-colors font-black whitespace-nowrap ${
                  location.pathname === link.path ? 'text-gold' : 'text-navy/60 hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-6 border-l border-navy/10 pl-8">
            <a 
              href="https://calendly.com/mergelith/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] uppercase tracking-widest text-gold font-black hover:text-navy transition-colors"
            >
              Book Call
            </a>
            <Link 
              to="/get-started"
              className="btn-primary px-6 py-2.5 text-[9px] tracking-[0.2em] whitespace-nowrap"
            >
              START REQUEST
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;