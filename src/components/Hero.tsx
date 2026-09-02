import React from 'react';
import { Brain, Sparkles, Video, ArrowRight, Scale, GraduationCap } from 'lucide-react';
import { SectionBadge } from './SectionBadge';
import { CTAButton } from './CTAButton';
import { images } from '../data/images';
import { WHATSAPP_LINK } from '../data/config';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Badge */}
            <SectionBadge text="Psicóloga Clínica 🦋" variant="green" />

            {/* Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-dark leading-[1.08]">
              <span className="text-brand-teal block mb-1">EMAGRECER</span>
              <span className="block">
                COMEÇA NA <span className="text-brand-coral underline decoration-brand-coral/30 underline-offset-8">MENTE</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-lg sm:text-xl text-brand-muted max-w-xl font-normal leading-relaxed">
              Controle sua ansiedade e conquiste um estilo de vida leve.
            </p>

            {/* Credentials Info */}
            <div className="border-l-2 border-brand-teal/30 pl-4 py-1 space-y-1">
              <p className="font-sans text-sm font-semibold text-brand-dark">
                Erica Luena | <span className="text-brand-teal font-medium">CRP: 06/159579</span>
              </p>
              <p className="font-sans text-xs text-brand-muted">
                Especialista em TCC focada em Emagrecimento, Ansiedade e Saúde Mental
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <CTAButton href={WHATSAPP_LINK} variant="primary" className="!py-4">
                Agendar Minha Psicoterapia On-line 👇
              </CTAButton>

              <CTAButton href="#metodo" variant="secondary" icon={<ArrowRight className="w-4 h-4" />}>
                Conhecer o Método
              </CTAButton>
            </div>

            {/* Quick Benefits list */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-brand-muted font-medium border-t border-brand-teal/10 w-full">
              <div className="flex items-center gap-1.5">
                <Video className="w-4 h-4 text-brand-teal" />
                <span>Atendimento Online</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Brain className="w-4 h-4 text-brand-teal" />
                <span>TCC Especializada</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-brand-teal" />
                <span>DBT Especializada</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-brand-coral" />
                <span>Supervisão Especializada</span>
              </div>
            </div>

          </div>

          {/* Right Column - Visual Area & Floating Cards (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Outer Decorative Background Card Frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-brand-teal/10 via-brand-teal-veryLight to-brand-coral-soft rounded-[2.2rem] transform rotate-1 blur-sm -z-10" />

              {/* Main Image Container */}
              <div className="relative bg-white p-3 sm:p-4 rounded-[2rem] shadow-soft-lg border border-brand-teal/10 overflow-hidden">
                <img
                  src={images.hero}
                  alt="Psicóloga Erica Luena em consultório"
                  className="w-full aspect-[772/1024] object-cover rounded-[1.5rem]"
                />

                {/* Subtle Image Vignette Gradient Overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-dark/10 to-transparent rounded-b-[1.5rem] pointer-events-none" />
              </div>

              {/* Floating Card 1: Top-Left - TCC */}
              <div className="absolute -top-3 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-soft-md border border-brand-teal/15 flex items-center gap-3 animate-float max-w-[200px] z-10">
                <div className="w-10 h-10 rounded-xl bg-brand-teal-veryLight text-brand-teal flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif font-bold text-sm text-brand-dark block leading-tight">TCC</span>
                  <span className="font-sans text-[11px] text-brand-muted leading-tight block">Cognitivo-Comportamental</span>
                </div>
              </div>

              {/* Floating Card 2: Mid-Right - Supervisão */}
              <div className="absolute top-1/3 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-soft-md border border-brand-coral/20 flex items-center gap-3 animate-float-delayed max-w-[195px] z-10">
                <div className="w-10 h-10 rounded-xl bg-brand-coral-soft text-brand-coral flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif font-bold text-sm text-brand-dark block leading-tight">Supervisão</span>
                  <span className="font-sans text-[11px] text-brand-muted leading-tight block">Clínica & Formação</span>
                </div>
              </div>

              {/* Floating Card 3: Lower-Left - DBT */}
              <div className="absolute bottom-[12%] -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-soft-md border border-brand-teal/15 flex items-center gap-3 animate-float-slow max-w-[210px] z-10">
                <div className="w-10 h-10 rounded-xl bg-brand-teal-veryLight text-brand-teal flex items-center justify-center flex-shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif font-bold text-sm text-brand-dark block leading-tight">DBT</span>
                  <span className="font-sans text-[11px] text-brand-muted leading-tight block">Terapia Comportamental Dialética</span>
                </div>
              </div>

              {/* Floating Card 4: Bottom-Right - Transformação */}
              <div className="absolute -bottom-4 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-soft-md border border-brand-coral/20 flex items-center gap-3 animate-float-reverse-fast max-w-[210px] z-10">
                <div className="w-10 h-10 rounded-xl bg-brand-coral-soft text-brand-coral flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif font-bold text-sm text-brand-dark block leading-tight">Transformação</span>
                  <span className="font-sans text-[11px] text-brand-muted leading-tight block">Mente & Corpo em sintonia</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
