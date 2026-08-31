import React from 'react';
import { Heart, Moon, RefreshCw, Scale, BrainCircuit, ZapOff } from 'lucide-react';
import { SectionBadge } from './SectionBadge';

interface EmotionalCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const EmotionalCard: React.FC<EmotionalCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 sm:p-7 rounded-2xl border border-brand-teal/10 shadow-soft-md hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-start text-left group">
    <div className="w-12 h-12 rounded-xl bg-brand-teal-veryLight text-brand-teal group-hover:bg-brand-coral-soft group-hover:text-brand-coral flex items-center justify-center mb-5 transition-colors duration-300">
      {icon}
    </div>
    <h3 className="font-serif text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-teal transition-colors">
      {title}
    </h3>
    <p className="font-sans text-sm text-brand-muted leading-relaxed">
      {description}
    </p>
  </div>
);

export const EmotionalEating: React.FC = () => {
  const cards = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Comer por Emoção",
      description: "Buscar conforto na comida sempre que sente ansiedade, tristeza, estresse ou solidão."
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: "Compulsão Noturna",
      description: "Ataques de fome ou episódios de exagero à noite, mesmo sem estar com fome física real."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Ciclo de Culpa",
      description: "Sentir remorso e profunda culpa após comer, o que gera ainda mais ansiedade e sofrimento."
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Dietas Falhas",
      description: "Tentar inúmeras dietas restritivas e milagrosas sem jamais conseguir sustentar os resultados."
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "Pensamentos Obsessivos",
      description: "Ficar com a mente constantemente focada em comida, calorias, peso e regras alimentares."
    },
    {
      icon: <ZapOff className="w-6 h-6" />,
      title: "Exaustão Mental",
      description: "Cansaço emocional extremo do dia a dia que leva a escolhas alimentares impulsivas e ruins."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-bg-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <SectionBadge text="🍔 Ansiedade e Fome Emocional" variant="coral" />
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
            Você come suas <span className="text-brand-coral">emoções</span>?
          </h2>

          <p className="font-sans text-base sm:text-lg text-brand-muted leading-relaxed">
            A ansiedade não aparece só na mente — ela reflete diretamente no seu prato. Entenda como suas emoções influenciam suas escolhas alimentares e descubra que existe um caminho seguro para a mudança.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <EmotionalCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
