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
    label: "Foco na Autonomia",
    sublabel: "Estratégias práticas em TCC"
  },
  {
    percentage: 98,
    label: "Satisfação no Atendimento",
    sublabel: "Acolhimento & escuta empática"
  },
  {
    percentage: 90,
    label: "Mudança de Hábitos",
    sublabel: "Foco na constância a longo prazo"
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
