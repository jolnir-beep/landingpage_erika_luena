export interface MetricItem {
  percentage: number;
  label: string;
  sublabel: string;
}

export interface MethodStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export const methodMetrics: MetricItem[] = [
  {
    percentage: 95,
    label: "Eficácia Comprovada",
    sublabel: "Estudos científicos em TCC"
  },
  {
    percentage: 87,
    label: "Satisfação Pacientes",
    sublabel: "Melhora expressiva na ansiedade"
  },
  {
    percentage: 92,
    label: "Mudança Duradoura",
    sublabel: "Manutenção do peso a longo prazo"
  }
];

export const methodSteps: MethodStep[] = [
  {
    number: "01",
    title: "Identificação de Gatilhos Alimentares",
    description: "Mapeamos detalhadamente os pensamentos automáticos, emoções e situações diárias que disparam a vontade incontrolável de comer.",
    iconName: "Search"
  },
  {
    number: "02",
    title: "Reestruturação Cognitiva",
    description: "Substituímos padrões mentais disfuncionais de culpa e autocobrança por crenças fortalecedoras e estratégias de autorregulação.",
    iconName: "Brain"
  },
  {
    number: "03",
    title: "Planejamento de Rotina Sustentável",
    description: "Construímos hábitos consistentes e prazerosos adaptados à sua vida real, garantindo leveza e constância no dia a dia.",
    iconName: "Sparkles"
  }
];
