import React from 'react';

export const DecorativeElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Soft Top Left Butterfly SVG */}
      <div className="absolute top-16 left-6 md:left-12 opacity-15 text-brand-teal animate-butterfly">
        <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12C10.5 8.5 7 5 3 6.5C1.5 7.5 1 10 2.5 12C4 14 7 14.5 10 13.5C9 15.5 8 18 9 20C9.5 21 11 21.5 12 20C13 21.5 14.5 21 15 20C16 18 15 15.5 14 13.5C17 14.5 20 14 21.5 12C23 10 22.5 7.5 21 6.5C17 5 13.5 8.5 12 12Z" />
        </svg>
      </div>

      {/* Mid Right Decorative Soft Circle */}
      <div className="absolute top-[28%] -right-16 w-80 h-80 rounded-full border border-brand-teal/10 bg-gradient-to-br from-brand-teal/5 to-transparent pointer-events-none blur-sm" />

      {/* Floating Butterfly Mid Section */}
      <div className="absolute top-[48%] left-4 md:left-16 opacity-20 text-brand-coral animate-float">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12C10.5 8.5 7 5 3 6.5C1.5 7.5 1 10 2.5 12C4 14 7 14.5 10 13.5C9 15.5 8 18 9 20C9.5 21 11 21.5 12 20C13 21.5 14.5 21 15 20C16 18 15 15.5 14 13.5C17 14.5 20 14 21.5 12C23 10 22.5 7.5 21 6.5C17 5 13.5 8.5 12 12Z" />
        </svg>
      </div>

      {/* Soft Bottom Left Blur Glow */}
      <div className="absolute bottom-[20%] -left-20 w-96 h-96 rounded-full bg-brand-teal-veryLight/60 pointer-events-none blur-3xl" />

      {/* Discrete Corner Butterfly */}
      <div className="absolute bottom-32 right-10 opacity-15 text-brand-teal animate-float-delayed">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12C10.5 8.5 7 5 3 6.5C1.5 7.5 1 10 2.5 12C4 14 7 14.5 10 13.5C9 15.5 8 18 9 20C9.5 21 11 21.5 12 20C13 21.5 14.5 21 15 20C16 18 15 15.5 14 13.5C17 14.5 20 14 21.5 12C23 10 22.5 7.5 21 6.5C17 5 13.5 8.5 12 12Z" />
        </svg>
      </div>
    </div>
  );
};
