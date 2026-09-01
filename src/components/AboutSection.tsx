import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { SectionBadge } from './SectionBadge';
import { CTAButton } from './CTAButton';
import { images } from '../data/images';
import { WHATSAPP_LINK } from '../data/config';

export const AboutSection: React.FC = () => {
  const pillars = [
    "Escuta empática, humanizada e 100% livre de julgamentos",
    "Terapia Cognitivo-Comportamental (TCC) fundamentada em evidências",
    "Foco na raiz emocional do comportamento alimentar e da ansiedade",
    "Desenvolvimento de autonomia e regulação emocional duradoura"
  ];

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
                Através da Terapia Cognitivo-Comportamental (TCC), ofereço um acompanhamento estruturado, acolhedor e altamente prático, onde você aprenderá a reconhecer seus pensamentos, dominar seus impulsos e viver com leveza.
              </p>
            </div>

            {/* Pillars Check list */}
            <div className="space-y-3 pt-2 w-full">
              {pillars.map((pillar, index) => (
                <div key={index} className="flex items-start gap-3 text-sm font-medium text-brand-dark">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
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
