import React from 'react';
import { Search, Brain, Sparkles } from 'lucide-react';
import { SectionBadge } from './SectionBadge';
import { CircularProgress } from './CircularProgress';
import { methodMetrics, methodSteps } from '../data/method';

export const MethodSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'Brain':
        return <Brain className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Brain className="w-5 h-5" />;
    }
  };

  return (
    <section id="metodo" className="py-16 md:py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <SectionBadge text="🛠️ O Método TCC" variant="green" />
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
            A Ciência por Trás da <span className="text-brand-teal">Mudança de Hábito</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-brand-muted leading-relaxed">
            A Terapia Cognitivo-Comportamental (TCC) é a abordagem psicológica mais recomendada mundialmente pela comunidade científica para o tratamento da ansiedade e reeducação comportamental.
          </p>
        </div>

        {/* 3 Circular Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-4xl mx-auto">
          {methodMetrics.map((item, index) => (
            <CircularProgress
              key={index}
              percentage={item.percentage}
              label={item.label}
              sublabel={item.sublabel}
            />
          ))}
        </div>

        {/* 3 Method Step Cards (Horizontal grid desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {methodSteps.map((step, index) => (
            <div
              key={index}
              className="bg-brand-teal-veryLight/70 p-7 rounded-2xl border border-brand-teal/15 hover:border-brand-teal/30 hover:bg-brand-teal-veryLight transition-all duration-300 flex flex-col text-left relative group shadow-sm hover:shadow-soft-md"
            >
              {/* Step number pill badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="w-10 h-10 rounded-full bg-brand-teal text-white font-serif font-bold text-base flex items-center justify-center shadow-sm">
                  {step.number}
                </span>
                <div className="w-9 h-9 rounded-xl bg-white text-brand-teal flex items-center justify-center shadow-xs">
                  {getIcon(step.iconName)}
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-teal transition-colors">
                {step.title}
              </h3>

              <p className="font-sans text-sm text-brand-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
