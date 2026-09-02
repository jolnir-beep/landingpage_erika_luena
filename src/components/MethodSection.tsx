import React, { useState } from 'react';
import { Search, Brain, Sparkles, Scale, GraduationCap, Users, BookOpen, Lightbulb, HeartHandshake } from 'lucide-react';
import { SectionBadge } from './SectionBadge';
import { CircularProgress } from './CircularProgress';
import { methodMetrics, methodSteps } from '../data/method';

/* ─── DBT content ─── */
const dbtMetrics = [
  { percentage: 92, label: "Regulação Emocional", sublabel: "Redução de crises e impulsividade" },
  { percentage: 96, label: "Mindfulness Aplicado", sublabel: "Presença & autoconsciência" },
  { percentage: 88, label: "Efetividade Interpessoal", sublabel: "Relações mais saudáveis" },
];

const dbtSteps = [
  {
    number: "01",
    icon: <Scale className="w-5 h-5" />,
    title: "Regulação das Emoções",
    description: "Desenvolvemos habilidades práticas para identificar, nomear e modular emoções intensas, reduzindo o sofrimento causado por reações impulsivas.",
  },
  {
    number: "02",
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Tolerância ao Mal-Estar",
    description: "Aprendemos a atravessar crises e situações difíceis sem agir de forma destrutiva, usando estratégias de sobrevivência eficazes e seguras.",
  },
  {
    number: "03",
    icon: <HeartHandshake className="w-5 h-5" />,
    title: "Efetividade Interpessoal",
    description: "Fortalecemos a capacidade de comunicar necessidades, estabelecer limites saudáveis e construir vínculos genuínos e equilibrados.",
  },
];

/* ─── Supervisão content ─── */
const supervisaoMetrics = [
  { percentage: 100, label: "Supervisão Individual", sublabel: "Atenção personalizada ao caso" },
  { percentage: 94, label: "Embasamento Teórico", sublabel: "TCC & DBT com evidência científica" },
  { percentage: 97, label: "Satisfação dos Supervisionados", sublabel: "Crescimento clínico real" },
];

const supervisaoSteps = [
  {
    number: "01",
    icon: <BookOpen className="w-5 h-5" />,
    title: "Análise de Casos Clínicos",
    description: "Revisão cuidadosa de casos reais, auxiliando o profissional na formulação de hipóteses, planejamento terapêutico e tomada de decisão clínica.",
  },
  {
    number: "02",
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Aperfeiçoamento em TCC & DBT",
    description: "Aprofundamento teórico e prático nas abordagens Cognitivo-Comportamental e de Terapia Comportamental Dialética, com foco em aplicação clínica.",
  },
  {
    number: "03",
    icon: <Users className="w-5 h-5" />,
    title: "Desenvolvimento Profissional",
    description: "Espaço seguro para o psicólogo crescer com confiança, desenvolver identidade clínica e aprimorar habilidades terapêuticas com suporte especializado.",
  },
];

/* ─── Tab config ─── */
const tabs = [
  {
    key: 'tcc',
    label: 'TCC',
    subtitle: 'Terapia Cognitivo-Comportamental',
    emoji: '🧠',
    badge: '🛠️ O Método TCC',
    color: 'teal' as const,
  },
  {
    key: 'dbt',
    label: 'DBT',
    subtitle: 'Terapia Comportamental Dialética',
    emoji: '⚖️',
    badge: '⚖️ O Método DBT',
    color: 'teal' as const,
  },
  {
    key: 'supervisao',
    label: 'Supervisão',
    subtitle: 'Para profissionais da saúde mental',
    emoji: '🎓',
    badge: '🎓 Supervisão Clínica',
    color: 'coral' as const,
  },
] as const;

type TabKey = typeof tabs[number]['key'];

export const MethodSection: React.FC = () => {
  const [active, setActive] = useState<TabKey>('tcc');

  /* ─── getIcon for TCC steps (from data) ─── */
  const getTccIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':   return <Search className="w-5 h-5" />;
      case 'Brain':    return <Brain className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      default:         return <Brain className="w-5 h-5" />;
    }
  };

  /* ─── Dynamic content per tab ─── */
  const content: Record<TabKey, {
    badge: string;
    headline: React.ReactNode;
    intro: string;
    metrics: typeof dbtMetrics;
    steps: { number: string; icon: React.ReactNode; title: string; description: string }[];
    accentClass: string;
    stepBg: string;
    stepBorder: string;
  }> = {
    tcc: {
      badge: '🛠️ O Método TCC',
      headline: <>A Ciência por Trás da <span className="text-brand-teal">Mudança de Hábito</span></>,
      intro: 'A Terapia Cognitivo-Comportamental (TCC) é a abordagem psicológica mais recomendada mundialmente pela comunidade científica para o tratamento da ansiedade e reeducação comportamental.',
      metrics: methodMetrics,
      steps: methodSteps.map(s => ({ ...s, icon: getTccIcon(s.iconName) })),
      accentClass: 'text-brand-teal',
      stepBg: 'bg-brand-teal-veryLight/70 hover:bg-brand-teal-veryLight',
      stepBorder: 'border-brand-teal/35 hover:border-brand-teal/60',
    },
    dbt: {
      badge: '⚖️ O Método DBT',
      headline: <>Habilidades para uma <span className="text-brand-teal">Vida que Vale a Pena</span></>,
      intro: 'A Terapia Comportamental Dialética (DBT) é uma abordagem baseada em evidências que une estratégias cognitivo-comportamentais com práticas de mindfulness, ajudando a regular emoções intensas e construir uma vida mais equilibrada.',
      metrics: dbtMetrics,
      steps: dbtSteps,
      accentClass: 'text-brand-teal',
      stepBg: 'bg-brand-teal-veryLight/70 hover:bg-brand-teal-veryLight',
      stepBorder: 'border-brand-teal/35 hover:border-brand-teal/60',
    },
    supervisao: {
      badge: '🎓 Supervisão Clínica',
      headline: <>Crescimento Clínico com <span className="text-brand-coral">Base Científica</span></>,
      intro: 'A supervisão clínica é um espaço privilegiado para o desenvolvimento do psicólogo. Ofereço supervisão individual com foco em TCC e DBT, auxiliando profissionais a aprimorarem suas habilidades terapêuticas e fortalecerem sua identidade clínica.',
      metrics: supervisaoMetrics,
      steps: supervisaoSteps,
      accentClass: 'text-brand-coral',
      stepBg: 'bg-brand-coral-soft/60 hover:bg-brand-coral-soft',
      stepBorder: 'border-brand-coral/35 hover:border-brand-coral/60',
    },
  };

  const c = content[active];

  return (
    <section id="metodo" className="py-16 md:py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Tab Switcher — large cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {tabs.map((tab) => {
            const isActive = active === tab.key;
            const isCoral = tab.key === 'supervisao';
            return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`group relative flex flex-col items-center text-center gap-3 px-6 py-7 rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
                  isActive
                    ? isCoral
                      ? 'border-brand-coral bg-gradient-to-b from-brand-coral-soft to-white shadow-coral-glow scale-[1.03]'
                      : 'border-brand-teal bg-gradient-to-b from-brand-teal-veryLight to-white shadow-teal-glow scale-[1.03]'
                    : 'border-brand-teal/30 bg-white shadow-soft-sm hover:border-brand-teal/50 hover:shadow-soft-md hover:-translate-y-1'
                }`}
              >
                {/* Animated background shimmer on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isCoral
                    ? 'bg-gradient-to-br from-brand-coral-soft/40 via-transparent to-transparent'
                    : 'bg-gradient-to-br from-brand-teal-veryLight/60 via-transparent to-transparent'
                } pointer-events-none`} />

                {/* Emoji icon */}
                <span className={`text-4xl transition-transform duration-300 ${
                  isActive ? 'scale-110' : 'group-hover:scale-105'
                }`}>
                  {tab.emoji}
                </span>

                {/* Label */}
                <span className={`font-serif text-2xl font-bold transition-colors duration-200 ${
                  isActive
                    ? isCoral ? 'text-brand-coral' : 'text-brand-teal'
                    : 'text-brand-dark group-hover:text-brand-teal'
                }`}>
                  {tab.label}
                </span>

                {/* Subtitle */}
                <span className={`font-sans text-xs leading-snug transition-colors duration-200 ${
                  isActive ? 'text-brand-muted' : 'text-brand-muted/70 group-hover:text-brand-muted'
                }`}>
                  {tab.subtitle}
                </span>

                {/* Active indicator bar */}
                <span className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300 ${
                  isActive
                    ? isCoral ? 'bg-brand-coral opacity-100' : 'bg-brand-teal opacity-100'
                    : 'opacity-0'
                }`} />

                {/* Inactive hint — pulsing dot */}
                {!isActive && (
                  <span className={`absolute bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full animate-pulse ${
                    isCoral ? 'bg-brand-coral/40' : 'bg-brand-teal/40'
                  }`} />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Section Header (animated key change) ── */}
        <div key={active} className="text-center max-w-3xl mx-auto space-y-4 mb-16 animate-tab-content">
          <SectionBadge text={c.badge} variant={active === 'supervisao' ? 'coral' : 'green'} />

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
            {c.headline}
          </h2>

          <p className="font-sans text-base sm:text-lg text-brand-muted leading-relaxed">
            {c.intro}
          </p>
        </div>

        {/* ── 3 Circular Metrics ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-4xl mx-auto">
          {c.metrics.map((item, index) => (
            <CircularProgress
              key={`${active}-${index}`}
              percentage={item.percentage}
              label={item.label}
              sublabel={item.sublabel}
            />
          ))}
        </div>

        {/* ── 3 Step Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {c.steps.map((step, index) => (
            <div
              key={`${active}-step-${index}`}
              className={`${c.stepBg} p-7 rounded-2xl border-2 ${c.stepBorder} transition-all duration-300 flex flex-col text-left relative group shadow-sm hover:shadow-soft-md`}
            >
              {/* Step number + icon */}
              <div className="flex items-center justify-between mb-6">
                <span className={`w-10 h-10 rounded-full ${active === 'supervisao' ? 'bg-brand-coral' : 'bg-brand-teal'} text-white font-serif font-bold text-base flex items-center justify-center shadow-sm`}>
                  {step.number}
                </span>
                <div className={`w-9 h-9 rounded-xl bg-white ${active === 'supervisao' ? 'text-brand-coral' : 'text-brand-teal'} flex items-center justify-center shadow-xs`}>
                  {step.icon}
                </div>
              </div>

              <h3 className={`font-serif text-xl font-bold text-brand-dark mb-3 group-hover:${c.accentClass} transition-colors`}>
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
