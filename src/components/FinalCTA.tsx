import React from 'react';
import { ShieldCheck, Brain, Scale, GraduationCap, CheckCircle } from 'lucide-react';
import { CTAButton } from './CTAButton';
import { WHATSAPP_LINK, INSTAGRAM_LINK, INSTAGRAM_HANDLE } from '../data/config';

/* Instagram SVG icon — lucide-react v1 doesn't include it */
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

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
        <div className="pt-4 flex flex-col items-center gap-3">
          <CTAButton
            href={WHATSAPP_LINK}
            variant="primary"
            className="!px-10 !py-5 text-lg shadow-2xl"
          >
            Agendar Minha Sessão Agora 👇
          </CTAButton>

          {/* Instagram subtle secondary CTA */}
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-pink-400/60 backdrop-blur-sm transition-all duration-300 text-sm font-medium text-white/80 hover:text-white"
          >
            <span className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <InstagramIcon className="w-3.5 h-3.5 text-white" />
            </span>
            <span>Me siga no Instagram</span>
            <span className="text-pink-300 font-semibold">{INSTAGRAM_HANDLE}</span>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/80 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-coral" />
            <span>🔒 100% Sigiloso</span>
          </div>
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-brand-teal-light" />
            <span>🧠 TCC Especializada</span>
          </div>
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-sky-300" />
            <span>⚖️ DBT Especializada</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-brand-coral" />
            <span>🎓 Supervisão Clínica</span>
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
