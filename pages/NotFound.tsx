import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Home } from 'lucide-react';
import SEO from '../components/SEO.tsx';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6">
      <SEO title="404 - Page Not Found" description="The page you are looking for does not exist or has been moved." />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-8xl md:text-9xl font-serif italic text-navy/10">404</h1>
          <h2 className="text-3xl md:text-4xl font-serif text-navy italic">Page Missing in the Cloud.</h2>
          <p className="text-navy/60 font-light italic">
            Institutional intelligence moves fast. This page may have been moved, renamed, or deleted as part of our infrastructure evolution.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link 
            to="/" 
            className="btn-primary px-8 py-4 text-xs font-black tracking-widest flex items-center justify-center gap-2"
          >
            <Home size={14} /> BACK TO HOME
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-4 border border-navy/10 text-navy font-black text-xs uppercase tracking-widest hover:bg-navy/5 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft size={14} /> GO BACK
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
