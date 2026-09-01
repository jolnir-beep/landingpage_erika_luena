import React from 'react';
import { ShieldCheck, Brain, CheckCircle } from 'lucide-react';
import { CTAButton } from './CTAButton';
import { WHATSAPP_LINK } from '../data/config';

export const FinalCTA: React.FC = () => {
  return (
    <section id="cta-final" className="py-20 md:py-32 bg-brand-teal-dark text-white relative overflow-hidden">
      
      {/* Decorative Radial Lighting Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-brand-coral/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center space-y-8">
        
        {/* Butterfly Icon in Translucent Glowing Circle */}
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg animate-butterfly">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white">
            <path d="M12 12C10.5 8.5 7 5 3 6.5C1.5 7.5 1 10 2.5 12C4 14 7 14.5 10 13.5C9 15.5 8 18 9 20C9.5 21 11 21.5 12 20C13 21.5 14.5 21 15 20C16 18 15 15.5 14 13.5C17 14.5 20 14 21.5 12C23 10 22.5 7.5 21 6.5C17 5 13.5 8.5 12 12Z" />
          </svg>
        </div>

        {/* Main Headline */}
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
          Sua Transformação Começa na <br className="hidden sm:block" />
          <span className="text-brand-coral">Primeira Conversa</span>
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-lg text-white/85 max-w-2xl font-normal leading-relaxed">
          Não espere mais para cuidar da sua saúde mental e libertar sua mente da ansiedade. Agende sua primeira sessão e dê o primeiro passo rumo a uma vida leve, equilibrada e feliz.
        </p>

        {/* Primary CTA Button */}
        <div className="pt-4">
          <CTAButton
            href={WHATSAPP_LINK}
            variant="primary"
            className="!px-10 !py-5 text-lg shadow-2xl"
          >
            Agendar Minha Sessão Agora 👇
          </CTAButton>
        </div>

        {/* Trust Indicators */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-white/80 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-coral" />
            <span>🔒 100% Sigiloso</span>
          </div>
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-brand-teal-light" />
            <span>🧠 TCC Especializada</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>💚 CRP Ativo</span>
          </div>
        </div>

      </div>
    </section>
  );
};
