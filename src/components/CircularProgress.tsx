import React from 'react';

interface CircularProgressProps {
  percentage: number;
  label: string;
  sublabel: string;
  size?: number;
  strokeWidth?: number;
  variant?: 'teal' | 'coral' | 'blue';
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  label,
  sublabel,
  size = 140,
  strokeWidth = 10,
  variant = 'teal'
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const colorStyles = {
    teal: {
      cardBorder: 'border-brand-teal/25 hover:border-brand-teal/45',
      bgStroke: 'stroke-brand-teal-veryLight',
      progressStroke: 'stroke-brand-teal group-hover:stroke-brand-coral',
      textHover: 'group-hover:text-brand-coral',
    },
    blue: {
      cardBorder: 'border-sky-300/80 hover:border-sky-500 hover:shadow-sky-100',
      bgStroke: 'stroke-sky-100',
      progressStroke: 'stroke-sky-600 group-hover:stroke-sky-700',
      textHover: 'group-hover:text-sky-600',
    },
    coral: {
      cardBorder: 'border-brand-coral/25 hover:border-brand-coral/45',
      bgStroke: 'stroke-brand-coral-soft',
      progressStroke: 'stroke-brand-coral group-hover:stroke-brand-coral-light',
      textHover: 'group-hover:text-brand-coral',
    },
  }[variant];

  return (
    <div className={`flex flex-col items-center text-center group p-5 sm:p-6 rounded-2xl bg-white border-2 ${colorStyles.cardBorder} shadow-soft-md hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300`}>
      <div className="relative flex items-center justify-center my-2" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90 w-full h-full">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className={colorStyles.bgStroke}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className={`${colorStyles.progressStroke} transition-all duration-1000 ease-out`}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`font-serif text-3xl font-bold text-brand-dark ${colorStyles.textHover} transition-colors duration-300`}>
            {percentage}%
          </span>
        </div>
      </div>

      <h4 className="font-serif text-lg font-bold text-brand-dark mt-3 mb-1">{label}</h4>
      <p className="font-sans text-xs text-brand-muted max-w-[180px] leading-relaxed">{sublabel}</p>
    </div>
  );
};
