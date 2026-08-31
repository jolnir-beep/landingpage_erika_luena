import React from 'react';
import { Heart } from 'lucide-react';

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
          
          <p className="flex items-center gap-1">
            <span>Feito com cuidado para sua saúde mental</span>
            <Heart className="w-3 h-3 text-brand-coral fill-brand-coral" />
          </p>
        </div>

      </div>
    </footer>
  );
};
