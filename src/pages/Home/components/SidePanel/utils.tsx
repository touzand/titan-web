export type TeamMember = {
  id: string;
  slug: string;
  name: string;
  role: string;
  subtitle?: string;
  avatar: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "alan-alonso",
    slug: "alan-alonso",
    name: "Alan Gabriel Alonso Fernandez",
    role: "Modelador 3D",
    subtitle: "Full-stack developer",
    avatar: "/vite.svg",
  },
  {
    id: "camilo-barreto",
    slug: "camilo-barreto",
    name: "Camilo Barreto",
    role: "Líder e dev. principal",
    subtitle: "VR Developer",
    avatar: "/vite.svg",
  },
  {
    id: "luiz-fellipe-nunes",
    slug: "luiz-fellipe-nunes",
    name: "Luiz Fellipe Nunes",
    role: "Pesquisa e Coleta de Dados",
    subtitle: "Dev Python | QA | DevOps",
    avatar: "/vite.svg",
  },
  {
    id: "raul-fernandes-silva-melo",
    slug: "raul-fernandes-silva-melo",
    name: "Raul Fernandes Silva Melo",
    role: "Modelador 3D, Back-end e Apoio Geral",
    subtitle: "Dev BackEnd | DevSecOps | Cybersecurity",
    avatar: "https://cdn.lomn.app/titan/media/members/raul.png",
  },
];
