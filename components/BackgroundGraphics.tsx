import React from 'react';

const BackgroundGraphics: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-pearl">
      {/* Pearl Luster Gradients - creating a soft, iridescent feel */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-navy/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-gold/5 blur-[150px] rounded-full"></div>
      <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-white blur-[100px] rounded-full opacity-50"></div>
      
      <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-30">
        <defs>
          <linearGradient id="pearlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--color-gold)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Subtle Flowing Lines - like silk or pearl luster */}
        {[...Array(6)].map((_, i) => (
          <path
            key={i}
            d={`M ${-200 + i * 300} ${i * 200} Q ${500 + i * 150} ${400 + i * 100}, ${1400} ${900 + i * 150}`}
            stroke="url(#pearlGrad)"
            strokeWidth="0.75"
            fill="none"
            className="animate-[pulse_10s_infinite]"
            style={{ animationDelay: `${i * 1.5}s` }}
          />
        ))}

        {/* Floating Pearl Nodes - subtle gold points */}
        {[...Array(12)].map((_, i) => (
          <circle
            key={`node-${i}`}
            cx={`${10 + Math.random() * 80}%`}
            cy={`${10 + Math.random() * 80}%`}
            r={Math.random() * 2.5 + 1}
            fill="var(--color-gold)"
            filter="url(#glow)"
            className="animate-pulse opacity-30"
            style={{ 
              animationDuration: `${6 + Math.random() * 6}s`, 
              animationDelay: `${Math.random() * 12}s` 
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default BackgroundGraphics;