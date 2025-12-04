import { useCallback } from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

type SectionConfig = {
  id: string;
  label: string;
};

export const sections: SectionConfig[] = [
  { id: "overview", label: "Visão geral do projeto" },
  { id: "challenge", label: "Desafio do NASA Space Apps" },
  { id: "solution", label: "Nossa solução" },
  { id: "impact", label: "Impacto e resultados" },
  { id: "sponsors", label: "Por que apoiar o Titan Team" },
];

const ProjectDetail = () => {
  const handleScrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        width: "100%",
        minHeight: 0,
        overflow: "hidden",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1040,
          display: "flex",
          minHeight: 0,
          paddingTop: "1.5rem",
          gap: 4,
        }}
      >
        <Box
          sx={{
            width: 250,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="overline"
            sx={{ color: "text.secondary", letterSpacing: ".16em" }}
          >
            PROJETO
          </Typography>

          <List dense sx={{}}>
            {sections.map((section) => (
              <ListItemButton
                key={section.id}
                onClick={() => handleScrollTo(section.id)}
                sx={{
                  borderRadius: 1,
                  "&:hover": {
                    bgcolor: "rgba(15,23,42,0.9)",
                  },
                }}
              >
                <ListItemText
                  primary={section.label}
                  primaryTypographyProps={{
                    fontSize: 14,
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
          }}
        >
          <Box id="overview" sx={{ mb: 6 }}>
            <Typography variant="overline" sx={{ letterSpacing: ".18em" }}>
              PROJETO · NASA SPACE APPS 2025
            </Typography>

            <Typography variant="h4" component="h1" sx={{ mt: 1, mb: 2 }}>
              Titan Team – Soluções de monitoramento e análise para o futuro do
              espaço
            </Typography>

            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Nosso projeto foi desenvolvido para o NASA Space Apps Challenge
              2025 com o objetivo de transformar dados complexos em
              visualizações e insights acessíveis, ajudando cientistas,
              educadores e o público em geral a entender melhor o que está
              acontecendo além da Terra.
            </Typography>
          </Box>

          <Box id="challenge" sx={{ mb: 6 }}>
            <Typography variant="h6" sx={{ mb: 1.5 }}>
              Desafio do NASA Space Apps
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              Participamos de um desafio que propunha usar dados reais de
              missões da NASA para criar ferramentas que facilitem a exploração,
              a compreensão ou a tomada de decisão relacionada ao espaço. O foco
              estava em acessibilidade, clareza visual e impacto educacional.
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              A partir disso, definimos uma abordagem que equilibra rigor
              científico com uma experiência simples, visual e envolvente para
              diferentes perfis de usuário.
            </Typography>
          </Box>

          <Box id="solution" sx={{ mb: 6 }}>
            <Typography variant="h6" sx={{ mb: 1.5 }}>
              Nossa solução
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              Construímos uma plataforma web que integra visualizações
              interativas, linhas do tempo, painéis comparativos e narrativas
              guiadas. O usuário pode explorar missões, eventos astronômicos e
              dados de forma intuitiva, sem precisar de conhecimento técnico
              profundo.
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Tecnicamente, utilizamos uma stack moderna baseada em React,
              TypeScript e uma arquitetura pensada para ser escalável, com
              possibilidade de integrar novas missões, conjuntos de dados e
              módulos de análise no futuro.
            </Typography>
          </Box>

          <Box id="impact" sx={{ mb: 6 }}>
            <Typography variant="h6" sx={{ mb: 1.5 }}>
              Impacto e resultados
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              O projeto foi selecionado como finalista global do NASA Space
              Apps, o que já demonstra a relevância técnica e conceitual da
              solução. Nosso objetivo agora é evoluir a plataforma para que
              possa ser utilizada em contextos educacionais, eventos de
              divulgação científica e iniciativas de inovação aberta.
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Acreditamos que aproximar pessoas dos dados e das missões
              espaciais é uma forma de inspirar novas gerações de cientistas,
              engenheiros e criadores.
            </Typography>
          </Box>

          <Box id="sponsors" sx={{ mb: 6 }}>
            <Typography variant="h6" sx={{ mb: 1.5 }}>
              Por que apoiar o Titan Team
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              Ao apoiar o Titan Team, você conecta a sua marca a um projeto
              reconhecido internacionalmente, alinhado com ciência, educação,
              tecnologia e colaboração global.
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Estamos abertos a parcerias que envolvam visibilidade de marca,
              participação em eventos, materiais educativos, estudos de caso e
              desdobramentos do projeto em novos produtos e iniciativas.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDetail;
