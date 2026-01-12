
import React from 'react';

const BackgroundGraphics: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-20">
      {/* Abstract Animated Nodes/Lines (using SVG) */}
      <svg width="100%" height="100%" className="absolute top-0 left-0">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c5a059" stopOpacity="0" />
            <stop offset="50%" stopColor="#c5a059" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#c5a059" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Abstract "Intelligence" lines */}
        {[...Array(12)].map((_, i) => (
          <path
            key={i}
            d={`M ${-100 + i * 150} ${i * 100} Q ${i * 200} ${i * 300}, ${i * 400} ${1000}`}
            stroke="url(#lineGrad)"
            strokeWidth="0.5"
            fill="none"
            className="animate-[pulse_4s_infinite]"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}

        {/* Neural Nodes */}
        {[...Array(20)].map((_, i) => (
          <circle
            key={`node-${i}`}
            cx={`${Math.random() * 100}%`}
            cy={`${Math.random() * 100}%`}
            r="1"
            fill="#c5a059"
            className="animate-ping"
            style={{ animationDuration: `${3 + Math.random() * 5}s` }}
          />
        ))}
      </svg>
    </div>
  );
};

export default BackgroundGraphics;
