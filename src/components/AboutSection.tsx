import React from 'react';
import { Award, CheckCircle2, Brain, Scale, GraduationCap } from 'lucide-react';
import { SectionBadge } from './SectionBadge';
import { CTAButton } from './CTAButton';
import { images } from '../data/images';
import { WHATSAPP_LINK } from '../data/config';

const approaches = [
  {
    icon: <Brain className="w-5 h-5" />,
    label: 'TCC',
    full: 'Terapia Cognitivo-Comportamental',
    description: 'Identifico e transformo pensamentos disfuncionais que alimentam a ansiedade, a culpa e o comportamento compulsivo.',
    color: 'teal' as const,
  },
  {
    icon: <Scale className="w-5 h-5" />,
    label: 'DBT',
    full: 'Terapia Comportamental Dialética',
    description: 'Desenvolvo habilidades de regulação emocional, tolerância ao mal-estar e efetividade interpessoal para uma vida mais equilibrada.',
    color: 'teal' as const,
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    label: 'Supervisão',
    full: 'Para profissionais da saúde mental',
    description: 'Ofereço supervisão clínica individual com base em TCC e DBT, apoiando psicólogos no desenvolvimento da identidade e competência clínica.',
    color: 'coral' as const,
  },
];

const pillars = [
  "Escuta empática, humanizada e 100% livre de julgamentos",
  "TCC & DBT fundamentadas em evidências científicas",
  "Foco na raiz emocional do comportamento alimentar e da ansiedade",
  "Desenvolvimento de autonomia e regulação emocional duradoura",
  "Supervisão clínica para psicólogos em formação e carreira",
];

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Photo with Asymmetric Frame (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Asymmetric Soft Background Offset Block */}
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-brand-teal-veryLight rounded-[2.5rem] border border-brand-teal/20 -z-10 transform -rotate-2" />

              {/* Photo Frame Container */}
              <div className="bg-white p-3 rounded-[2.2rem] shadow-soft-lg border border-brand-teal/10 overflow-hidden">
                <img
                  src={images.about}
                  alt="Psicóloga Clínica Erica Luena"
                  className="w-full h-[460px] sm:h-[500px] object-cover rounded-[1.8rem]"
                />
              </div>

              {/* Floating Badge Overlay */}
              <div className="absolute -bottom-6 -right-4 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-soft-md border border-brand-coral/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-coral-soft text-brand-coral flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="font-serif font-bold text-sm text-brand-dark block">CRP: 06/159579</span>
                  <span className="font-sans text-[11px] text-brand-muted block">Psicóloga Clínica Ativa</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Approach Content (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            <SectionBadge text="❤️ Quem é a profissional?" variant="coral" />

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
              Especialista em <span className="text-brand-coral">Transformação Real</span> e Saúde Mental
            </h2>

            <div className="space-y-4 font-sans text-brand-muted text-base leading-relaxed">
              <p>
                Olá! Sou <strong className="text-brand-dark font-semibold">Erica Luena</strong>, psicóloga clínica apaixonada por ajudar pessoas a superarem a ansiedade e construírem uma relação saudável e em paz com a alimentação e o próprio corpo.
              </p>
              <p>
                Ao longo dos anos de prática clínica, percebi que a grande maioria das pessoas que lutam contra o efeito sanfona ou compulsões alimentares não precisa de mais uma dieta restritiva — precisa cuidar da mente.
              </p>
              <p>
                Trabalho com <strong className="text-brand-dark font-semibold">TCC</strong> para identificar e transformar os padrões de pensamento que alimentam a ansiedade e os impulsos, e com <strong className="text-brand-dark font-semibold">DBT</strong> para desenvolver habilidades práticas de regulação emocional, tornando a mudança de comportamento possível e duradoura.
              </p>
              <p>
                Também ofereço <strong className="text-brand-dark font-semibold">supervisão clínica</strong> para psicólogos que desejam aprofundar sua prática em TCC e DBT, crescer com segurança e desenvolver uma identidade clínica sólida.
              </p>
            </div>

            {/* Approach Cards — TCC, DBT, Supervisão */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 w-full">
              {approaches.map((a, i) => (
                <div
                  key={i}
                  className={`group flex flex-col gap-2 p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-md ${
                    a.color === 'coral'
                      ? 'bg-brand-coral-soft/50 border-brand-coral/15 hover:border-brand-coral/30'
                      : 'bg-brand-teal-veryLight/70 border-brand-teal/15 hover:border-brand-teal/30'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    a.color === 'coral'
                      ? 'bg-brand-coral-soft text-brand-coral'
                      : 'bg-white text-brand-teal'
                  }`}>
                    {a.icon}
                  </div>
                  <div>
                    <span className={`font-serif font-bold text-sm block leading-tight ${
                      a.color === 'coral' ? 'text-brand-coral' : 'text-brand-teal'
                    }`}>
                      {a.label}
                    </span>
                    <span className="font-sans text-[10px] text-brand-muted block leading-tight mb-1">
                      {a.full}
                    </span>
                    <p className="font-sans text-[11px] text-brand-muted leading-relaxed">
                      {a.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pillars Check list */}
            <div className="space-y-2.5 pt-1 w-full border-t border-brand-teal/10 pt-4">
              {pillars.map((pillar, index) => (
                <div key={index} className="flex items-start gap-3 text-sm font-medium text-brand-dark">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <CTAButton href={WHATSAPP_LINK} variant="primary">
                Agendar Sessão com Erica 👇
              </CTAButton>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
