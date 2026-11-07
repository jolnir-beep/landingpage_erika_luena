import React from 'react';

interface SectionBadgeProps {
  text: string;
  icon?: string | React.ReactNode;
  variant?: 'green' | 'coral' | 'teal' | 'blue';
  className?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({
  text,
  icon,
  variant = 'green',
  className = ''
}) => {
  let styleClasses = 'bg-brand-teal-veryLight text-brand-teal border-brand-teal/20';

  if (variant === 'coral') {
    styleClasses = 'bg-brand-coral-soft text-brand-coral border-brand-coral/20';
  } else if (variant === 'blue') {
    styleClasses = 'bg-sky-100 text-sky-800 border-sky-300 shadow-xs';
  } else if (variant === 'teal') {
    styleClasses = 'bg-brand-teal/10 text-brand-teal-dark border-brand-teal/30';
  }

  return (
    <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border text-[11px] sm:text-xs font-semibold tracking-wide uppercase transition-all duration-300 shadow-sm ${styleClasses} ${className}`}>
      {icon && <span className="text-sm leading-none">{icon}</span>}
      <span>{text}</span>
    </div>
  );
};
