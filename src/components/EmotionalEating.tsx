import React from 'react';
import { Heart, Moon, RefreshCw, Scale, BrainCircuit, ZapOff } from 'lucide-react';
import { SectionBadge } from './SectionBadge';
import { images } from '../data/images';

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

        {/* Literature & Specialization Showcase Banner */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-brand-teal/15 shadow-soft-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-teal bg-brand-teal-veryLight px-3 py-1 rounded-full inline-block">
              📚 Embasamento Científico & Prático
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">
              Superando as <span className="text-brand-coral">Armadilhas da Dieta</span> e Reeducando o Comportamento
            </h3>
            <p className="font-sans text-brand-muted text-sm sm:text-base leading-relaxed">
              O processo de emagrecimento definitivo e controle da ansiedade exige entender o funcionamento do cérebro. Trabalhamos com literatura científica atualizada para ajudar você a identificar gatilhos emocionais, quebrar o ciclo de restrição e compulsão e construir hábitos duradouros.
            </p>
          </div>
          
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="relative group overflow-hidden rounded-2xl border border-brand-teal/10 shadow-soft-md">
              <img
                src={images.comportamentoAlimentar}
                alt="Erica Luena estudando Ciência do Comportamento Alimentar"
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/85 to-transparent p-2.5 text-center">
                <span className="text-[11px] font-medium text-white block truncate">Comportamento Alimentar</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl border border-brand-teal/10 shadow-soft-md">
              <img
                src={images.armadilhasDieta}
                alt="Erica Luena com o livro Armadilhas da Dieta"
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/85 to-transparent p-2.5 text-center">
                <span className="text-[11px] font-medium text-white block truncate">Armadilhas da Dieta</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
