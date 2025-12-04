import { teamMembers } from "../../../pages/Home/components/SidePanel/utils";
import { sections } from "../../../pages/ProjectDetail/utils";

export type MainMenuProps = {
  open: boolean;
  onClose: () => void;
};

export type MenuLink = {
  label: string;
  to: string;
};

export type MenuSection = {
  id: string;
  title: string;
  items: MenuLink[];
  footer?: MenuLink;
};

export const menuSections: MenuSection[] = [
  {
    id: "articles",
    title: "Artigos e conteudo",
    items: [
      {
        label: "Mission Launch November 16th, 2025: Sentinel-6B Mission",
        to: "/stories/sentinel-6b",
      },
      {
        label: "Mission Launch November 13th, 2025: ESCAPADE Mission",
        to: "/stories/escapade",
      },
      {
        label: "October 3rd, 2025: Comet 31/ATLAS Mars Flyby",
        to: "/stories/comet-31-atlas",
      },
      {
        label: "Closest Approach to the Sun: Parker Solar Probe Perihelion",
        to: "/stories/parker-solar-probe",
      },
    ],
    footer: {
      label: "View 9 Stories",
      to: "/stories",
    },
  },
  {
    id: "members",
    title: "Members",
    items: teamMembers.map((member) => ({
      label: member.name,
      to: `/team/${member.slug}`,
    })),
    footer: {
      label: "Ver todos os membros",
      to: "/team",
    },
  },

  {
    id: "project",
    title: "Detalhes do projeto",
    items: sections.map((section) => ({
      label: section.label,
      to: `/project#${section.id}`,
    })),
    footer: {
      label: "Ver página do projeto",
      to: "/project",
    },
  },
  {
    id: "comets",
    title: "Patrocinadores",
    items: [{ label: "YOUR LOGO HERE", to: "/comets/atlas" }],
  },
];
