import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionBadge } from './SectionBadge';
import { faqItems } from '../data/faq';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('item-1');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <SectionBadge text="❓ Dúvidas Frequentes" variant="green" />

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
            Sua Nova Jornada <span className="text-brand-teal">Começa Aqui</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Tire suas dúvidas sobre o atendimento e dê o primeiro passo rumo à sua transformação com total segurança.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-brand-teal/40 shadow-soft-md'
                    : 'border-brand-teal/10 shadow-xs hover:border-brand-teal/25'
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-brand-teal/20 rounded-2xl cursor-pointer"
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-brand-dark pr-4 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-brand-teal text-white rotate-180'
                        : 'bg-brand-teal-veryLight text-brand-teal'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-6 pb-6 pt-1 border-t border-brand-teal/5 font-sans text-sm sm:text-base text-brand-muted leading-relaxed text-left animate-fadeIn"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
