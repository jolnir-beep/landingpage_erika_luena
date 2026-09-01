import React from 'react';
import { Home, Clock, ShieldCheck, NavigationOff, Lock, Wifi, Star } from 'lucide-react';
import { SectionBadge } from './SectionBadge';
import { images } from '../data/images';

export const OnlineTherapy: React.FC = () => {
  const benefits = [
    {
      icon: <Home className="w-5 h-5 text-brand-teal" />,
      title: "Conforto do Seu Lar",
      description: "Realize suas sessões no ambiente onde você se sente mais segura e acolhida."
    },
    {
      icon: <Clock className="w-5 h-5 text-brand-teal" />,
      title: "Horários Flexíveis",
      description: "Opções de horários adaptadas à sua rotina pessoal e de trabalho."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-teal" />,
      title: "Sigilo Garantido",
      description: "Plataforma segura com criptografia médica de ponta a ponta."
    },
    {
      icon: <NavigationOff className="w-5 h-5 text-brand-teal" />,
      title: "Sem Deslocamento",
      description: "Economize tempo e evite o estresse do trânsito das grandes cidades."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-bg-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Text & Benefits (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            <SectionBadge text="🌎 Psicoterapia On-line" variant="teal" />

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
              Cuidado de Alto Padrão, <br className="hidden sm:block" />
              <span className="text-brand-teal">Onde Você Estiver</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-brand-muted leading-relaxed">
              Você não precisa sair de casa para cuidar da sua saúde mental. A psicoterapia online proporciona um espaço seguro, acolhedor e altamente eficaz, onde quer que você esteja.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 w-full">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl border border-brand-teal/10 shadow-xs flex items-start gap-3 hover:border-brand-teal/30 transition-all duration-200"
                >
                  <div className="p-2 rounded-lg bg-brand-teal-veryLight flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-sm text-brand-dark mb-0.5">{item.title}</h3>
                    <p className="font-sans text-xs text-brand-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Online Video Session Interactive Mockup (6 cols) */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="w-full max-w-lg">
              
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-teal/20 to-brand-coral/20 rounded-[2.5rem] blur-xl opacity-60 pointer-events-none" />

              {/* Main Session Video Call Mockup Container */}
              <div className="relative bg-white rounded-[2rem] p-6 shadow-soft-lg border border-brand-teal/15 overflow-hidden">
                
                {/* Mockup Header Bar */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                    </span>
                    <span className="font-sans text-xs font-semibold text-brand-dark">🎥 Sessão em Andamento</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-medium">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Ambiente Seguro</span>
                  </div>
                </div>

                {/* Simulated Screen Body */}
                <div className="relative rounded-2xl overflow-hidden shadow-inner h-[280px] sm:h-[300px] group border border-white/20">
                  <img
                    src={images.tccSessao}
                    alt="Erica Luena em Atendimento On-line"
                    className="w-full h-full object-cover object-top filter brightness-[0.95] group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Top-Right HD Badge */}
                  <div className="absolute top-3 right-3 bg-brand-dark/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-white flex items-center gap-1.5 border border-white/20">
                    <Wifi className="w-3 h-3 text-emerald-400" />
                    <span>HD 1080p</span>
                  </div>

                  {/* Gradient Overlay & Details Bar at Bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent p-4 sm:p-5 flex items-end justify-between text-white">
                    <div>
                      <h3 className="font-serif text-lg font-bold tracking-wide">Erica Luena | Psicóloga</h3>
                      <p className="font-sans text-xs text-white/80 font-normal">Sessão Individual TCC • CRP: 06/159579</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/20">
                      <span>50 min</span>
                    </div>
                  </div>
                </div>

                {/* Mockup Bottom Stats Strip */}
                <div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-3 gap-2 text-center">
                  <div className="bg-brand-bg-alt p-3 rounded-xl">
                    <span className="font-serif font-bold text-lg text-brand-teal block">500+</span>
                    <span className="font-sans text-[11px] text-brand-muted block">Sessões Online</span>
                  </div>

                  <div className="bg-brand-bg-alt p-3 rounded-xl">
                    <span className="font-serif font-bold text-lg text-brand-teal block">98%</span>
                    <span className="font-sans text-[11px] text-brand-muted block">Satisfação</span>
                  </div>

                  <div className="bg-brand-bg-alt p-3 rounded-xl">
                    <div className="flex items-center justify-center gap-0.5 text-amber-400">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <span className="font-serif font-bold text-lg text-brand-dark ml-0.5">5.0</span>
                    </div>
                    <span className="font-sans text-[11px] text-brand-muted block">Avaliações</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
