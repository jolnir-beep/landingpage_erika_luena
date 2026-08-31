import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'darkTeal';
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  variant = 'primary',
  href = '#cta-final',
  onClick,
  className = '',
  fullWidth = false,
  icon
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-base tracking-wide transition-all duration-300 transform active:scale-98 shadow-md cursor-pointer select-none";

  let variantClasses = "";

  if (variant === 'primary') {
    variantClasses = "bg-brand-coral text-white hover:bg-brand-coral-hover hover:scale-[1.02] shadow-coral-glow hover:shadow-lg";
  } else if (variant === 'secondary') {
    variantClasses = "bg-white text-brand-coral border-2 border-brand-coral/40 hover:border-brand-coral hover:bg-brand-coral-soft hover:scale-[1.02]";
  } else if (variant === 'darkTeal') {
    variantClasses = "bg-brand-teal text-white hover:bg-brand-teal-dark hover:scale-[1.02] shadow-teal-glow";
  }

  const widthClass = fullWidth ? "w-full" : "w-auto";

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    } else if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses} ${widthClass} ${className}`}
    >
      <span>{children}</span>
      {icon && <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
    </a>
  );
};
