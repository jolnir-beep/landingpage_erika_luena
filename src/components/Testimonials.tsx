import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { SectionBadge } from './SectionBadge';
import { testimonials } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-brand-bg-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <SectionBadge text="💬 Depoimentos" variant="coral" />

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
            Histórias de Mulheres que <span className="text-brand-coral">Mudaram o Estilo de Vida</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-brand-muted leading-relaxed">
            Veja o depoimento real de pacientes que superaram a ansiedade e alcançaram paz com a alimentação através do método TCC.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Card */}
          <div className="bg-white rounded-[2.2rem] p-8 sm:p-12 border-2 border-brand-teal/25 shadow-soft-lg relative transition-all duration-500 overflow-hidden">
            
            {/* Decorative Quote Icon in background */}
            <Quote className="absolute top-6 right-8 w-24 h-24 text-brand-teal-veryLight/80 pointer-events-none -rotate-12" />

            <div className="relative z-10 flex flex-col items-start text-left space-y-6">
              
              {/* Rating & Result Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 w-full border-b border-gray-100 pb-5">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>

                <span className="px-3.5 py-1.5 rounded-full bg-brand-teal-veryLight text-brand-teal text-xs font-semibold tracking-wide border border-brand-teal/20">
                  {current.resultBadge}
                </span>
              </div>

              {/* Quote text */}
              <blockquote className="font-serif text-xl sm:text-2xl text-brand-dark italic leading-relaxed min-h-[100px] flex items-center">
                "{current.quote}"
              </blockquote>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-2">
                <div className="w-13 h-13 rounded-full bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white font-serif font-bold text-lg flex items-center justify-center shadow-md flex-shrink-0">
                  {current.initials}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-brand-dark leading-tight">{current.name}</h4>
                  <p className="font-sans text-xs text-brand-muted">{current.role}</p>
                </div>
              </div>

            </div>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-between mt-8 px-4">
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-brand-coral' : 'w-2.5 bg-brand-teal/20 hover:bg-brand-teal/40'
                  }`}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next / Prev Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-full bg-white border-2 border-brand-teal/25 text-brand-dark hover:text-brand-coral hover:border-brand-coral flex items-center justify-center transition-all shadow-sm active:scale-95"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-full bg-white border-2 border-brand-teal/25 text-brand-dark hover:text-brand-coral hover:border-brand-coral flex items-center justify-center transition-all shadow-sm active:scale-95"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

        {/* Ethical Note / Disclaimer */}
        <p className="mt-8 text-center text-xs text-brand-muted/70 font-sans max-w-2xl mx-auto">
          * Depoimentos ilustrativos de experiências com o processo terapêutico em TCC. Os resultados da psicoterapia são individuais e variam conforme o engajamento e a singularidade de cada paciente.
        </p>

      </div>
    </section>
  );
};
