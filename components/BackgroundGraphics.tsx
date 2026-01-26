import React from 'react';

const BackgroundGraphics: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-10">
      <svg width="100%" height="100%" className="absolute top-0 left-0">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E6B65C" stopOpacity="0" />
            <stop offset="50%" stopColor="#E6B65C" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#E6B65C" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {[...Array(12)].map((_, i) => (
          <path
            key={i}
            d={`M ${-200 + i * 180} ${i * 120} Q ${i * 250} ${i * 350}, ${i * 450} ${1200}`}
            stroke="url(#lineGrad)"
            strokeWidth="0.7"
            fill="none"
            className="animate-[pulse_6s_infinite]"
            style={{ animationDelay: `${i * 0.8}s` }}
          />
        ))}

        {[...Array(25)].map((_, i) => (
          <circle
            key={`node-${i}`}
            cx={`${Math.random() * 100}%`}
            cy={`${Math.random() * 100}%`}
            r="1.5"
            fill="#E6B65C"
            className="animate-ping"
            style={{ animationDuration: `${4 + Math.random() * 6}s`, animationDelay: `${Math.random() * 5}s` }}
          />
        ))}
      </svg>
    </div>
  );
};

export default BackgroundGraphics;