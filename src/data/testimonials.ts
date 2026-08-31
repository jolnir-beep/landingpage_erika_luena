export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  resultBadge: string;
  initials: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria S.",
    role: "Professora, 34 anos",
    quote: "A terapia com a Erica transformou completamente minha relação com a comida. Eu comia por pura ansiedade no final do dia. Hoje consigo identificar os gatilhos, manter a calma e conquistei uma vida muito mais leve.",
    resultBadge: "-8kg em 3 meses",
    initials: "MS",
    rating: 5
  },
  {
    id: 2,
    name: "Carolina R.",
    role: "Advogada, 29 anos",
    quote: "Sempre começava dietas restritivas e desistia no primeiro deslize por causa da culpa. O método TCC me ensinou a ter flexibilidade mental e paz. O resultado na balança foi consequência de uma mente verdadeiramente curada.",
    resultBadge: "Fim do ciclo de culpa",
    initials: "CR",
    rating: 5
  },
  {
    id: 3,
    name: "Fernanda M.",
    role: "Empresária, 41 anos",
    quote: "A rotina corrida me levava à compulsão noturna. Através da psicoterapia online, no conforto do meu lar, consegui organizar minha rotina e minhas emoções. Me sinto no controle da minha própria vida.",
    resultBadge: "-12kg com saúde",
    initials: "FM",
    rating: 5
  },
  {
    id: 4,
    name: "Juliana T.",
    role: "Médica, 36 anos",
    quote: "Excelente profissional! A empatia e a profundidade científica da TCC me deram ferramentas práticas para lidar com o estresse do trabalho sem buscar alívio em doces. Recomendo de olhos fechados.",
    resultBadge: "Controle da Ansiedade",
    initials: "JT",
    rating: 5
  }
];
