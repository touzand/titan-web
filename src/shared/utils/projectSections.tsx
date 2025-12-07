type SectionConfig = {
  id: string;
  label: string;
  markdownUrl?: string;
};

export const sections: SectionConfig[] = [
  { id: "overview", label: "Visão geral do projeto" },
  { id: "challenge", label: "Desafio do NASA Space Apps" },
  { id: "solution", label: "Nossa solução em VR" },
  { id: "experience", label: "Experiência do usuário" },
  { id: "technology", label: "Tecnologia, dados e IA" },
  { id: "process", label: "Como construímos em 48h" },
  { id: "impact", label: "Impacto e próximos passos" },
  { id: "sponsors", label: "Por que apoiar o Titan Team" },
];
