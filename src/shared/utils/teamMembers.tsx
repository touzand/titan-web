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
    avatar: "https://cdn.lomn.app/titan/media/members/faces/alan_face.png",
  },
  {
    id: "camilo-barreto",
    slug: "camilo-barreto",
    name: "Camilo Barreto",
    role: "Líder e dev. principal",
    subtitle: "VR Developer",
    avatar: "https://cdn.lomn.app/titan/media/members/faces/camilo_face.png",
  },
  {
    id: "luiz-fellipe-nunes",
    slug: "luiz-fellipe-nunes",
    name: "Luiz Fellipe Nunes",
    role: "Pesquisa e Coleta de Dados",
    subtitle: "Dev Python | QA | DevOps",
    avatar: "https://cdn.lomn.app/titan/media/members/faces/felipe_face.png",
  },
  {
    id: "raul-fernandes-silva-melo",
    slug: "raul-fernandes-silva-melo",
    name: "Raul Fernandes Silva Melo",
    role: "Modelador 3D E Apoio Geral",
    subtitle: "Dev BackEnd | DevSecOps | Cybersecurity",
    avatar: "https://cdn.lomn.app/titan/media/members/faces/raul_face.png",
  },
  {
    id: "samuel-santos-de-souza",
    slug: "samuel-santos-de-souza",
    name: "Samuel Santos de Souza",
    role: "Design de som e Narrativa Interativa",
    subtitle: "Dev Java | Analista de dados",
    avatar: "https://cdn.lomn.app/titan/media/members/faces/samuel_face.png",
  },
];
