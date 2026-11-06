import React from 'react';
import { Heart } from 'lucide-react';
import { INSTAGRAM_LINK, INSTAGRAM_HANDLE } from '../data/config';

/* Instagram SVG icon — lucide-react v1 doesn't include it */
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark text-white/70 py-12 border-t border-white/10 text-left font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
              Erica Luena
            </h3>
            <p className="font-sans text-xs uppercase tracking-widest text-brand-teal-light font-semibold">
              Psicóloga Clínica • CRP: 06/159579
            </p>
            <p className="font-sans text-xs text-white/60 max-w-sm leading-relaxed pt-1">
              Especialista em Terapia Cognitivo-Comportamental focada em Emagrecimento, Controle da Ansiedade e Saúde Mental.
            </p>

            {/* Instagram Link */}
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mt-3 group w-fit"
            >
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <InstagramIcon className="w-4 h-4 text-white" />
              </span>
              <span className="font-sans text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-200">
                {INSTAGRAM_HANDLE}
              </span>
            </a>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-white">Navegação</h4>
            <div className="flex flex-col space-y-2 text-xs">
              <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="hover:text-brand-coral transition-colors">
                Início
              </a>
              <a href="#sobre" onClick={(e) => handleNavClick(e, '#sobre')} className="hover:text-brand-coral transition-colors">
                Sobre a Profissional
              </a>
              <a href="#metodo" onClick={(e) => handleNavClick(e, '#metodo')} className="hover:text-brand-coral transition-colors">
                O Método TCC
              </a>
              <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-brand-coral transition-colors">
                Dúvidas Frequentes (FAQ)
              </a>
              <a href="#cta-final" onClick={(e) => handleNavClick(e, '#cta-final')} className="hover:text-brand-coral transition-colors">
                Agendar Sessão
              </a>
            </div>
          </div>

          {/* Contact / Service Scope (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-white">Atendimento</h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Atendimento 100% On-line para pacientes em todo o Brasil e Brasileiros no Exterior.
            </p>
            <div className="pt-2 text-xs text-brand-teal-light">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2" />
              Agendamentos Abertos
            </div>
          </div>

        </div>

        {/* Bottom Rights & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <p>© {currentYear} Erica Luena | Psicologia Clínica. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/40 hover:text-pink-400 transition-colors duration-200"
            >
              <InstagramIcon className="w-3 h-3" />
              <span>{INSTAGRAM_HANDLE}</span>
            </a>
            <p className="flex items-center gap-1">
              <span>Feito com cuidado para sua saúde mental</span>
              <Heart className="w-3 h-3 text-brand-coral fill-brand-coral" />
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
