import React from 'react';

interface CircularProgressProps {
  percentage: number;
  label: string;
  sublabel: string;
  size?: number;
  strokeWidth?: number;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  label,
  sublabel,
  size = 140,
  strokeWidth = 10
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center text-center group p-6 rounded-2xl bg-white border-2 border-brand-teal/25 shadow-soft-md hover:shadow-soft-lg hover:border-brand-teal/45 hover:-translate-y-1 transition-all duration-300">
      <div className="relative flex items-center justify-center my-2" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90 w-full h-full">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="stroke-brand-teal-veryLight"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="stroke-brand-teal transition-all duration-1000 ease-out group-hover:stroke-brand-coral"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-serif text-3xl font-bold text-brand-dark group-hover:text-brand-coral transition-colors duration-300">
            {percentage}%
          </span>
        </div>
      </div>

      <h4 className="font-serif text-lg font-bold text-brand-dark mt-3 mb-1">{label}</h4>
      <p className="font-sans text-xs text-brand-muted max-w-[180px] leading-relaxed">{sublabel}</p>
    </div>
  );
};
