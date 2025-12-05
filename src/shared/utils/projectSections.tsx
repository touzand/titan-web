type SectionConfig = {
  id: string;
  label: string;
  markdownUrl?: string;
};

export const sections: SectionConfig[] = [
  { id: "overview", label: "Visão geral do projeto" },
  { id: "challenge", label: "Desafio do NASA Space Apps" },
  { id: "solution", label: "Nossa solução" },
  { id: "impact", label: "Impacto e resultados" },
  { id: "sponsors", label: "Por que apoiar o Titan Team" },
];
