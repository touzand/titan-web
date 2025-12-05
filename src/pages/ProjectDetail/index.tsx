import { useCallback, useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useMarkdown } from "../../shared/hooks/useMarkdown";
import Loader from "../../shared/components/Loader";
import Subtitle from "../../shared/components/Subtitle";
import { sections } from "../../shared/utils/projectSections";

const ProjectDetail = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>("overview");

  const handleScrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    setActiveSectionId(id);
  }, []);

  const { content, loading, error } = useMarkdown(
    "https://cdn.lomn.app/titan/media/markdown/titan-project.md",
  );

  const activeSection = sections.find((s) => s.id === activeSectionId);

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
        {/* MENU LATERAL */}
        <Box
          sx={{
            width: 250,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Subtitle>PROJETO</Subtitle>

          <List dense>
            {sections.map((section) => {
              const isActive = activeSectionId === section.id;

              return (
                <ListItemButton
                  key={section.id}
                  onClick={() => handleScrollTo(section.id)}
                  sx={(theme) => ({
                    borderRadius: 1,
                    ...(isActive && {
                      bgcolor: theme.palette.background.paper,
                      "& .MuiListItemText-primary": {
                        color: theme.palette.primary.main,
                      },
                    }),
                  })}
                >
                  <ListItemText
                    primary={section.label}
                    primaryTypographyProps={{
                      fontSize: 14,
                      sx: {
                        color: isActive ? "primary.main" : "text.primary",
                      },
                    }}
                  />
                </ListItemButton>
              );
            })}
          </List>
        </Box>

        {/* CONTEÚDO */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
          }}
        >
          {loading && <Loader />}

          {error && (
            <Typography variant="body2" sx={{ color: "error.main" }}>
              Erro ao carregar conteúdo.
            </Typography>
          )}

          {!loading && !error && content && (
            <Box
              sx={{
                // título da seção ativa (opcional)
                mb: 2,
              }}
            >
              {activeSection && (
                <Typography
                  variant="overline"
                  sx={{
                    letterSpacing: ".18em",
                    textTransform: "uppercase",
                    color: "text.secondary",
                    display: "block",
                    mb: 1,
                  }}
                >
                  {activeSection.label}
                </Typography>
              )}
              <Box
                sx={(theme) => ({
                  "& h1": { fontSize: "2rem", marginBottom: "1rem" },
                  "& h2": { fontSize: "1.4rem", margin: "2rem 0 0.75rem" },
                  "& h3": {
                    fontSize: ".75rem",
                    letterSpacing: ".18em",
                    textTransform: "uppercase",
                    color: "text.secondary",
                    margin: 0,
                    fontWeight: 400,
                  },
                  "& p": {
                    fontSize: ".9rem",
                    color: "text.secondary",
                    marginBottom: "0.75rem",
                  },

                  [`& #${activeSectionId} h2`]: {
                    color: theme.palette.primary.main,
                  },

                  [`& #${activeSectionId} h3`]: {
                    color: theme.palette.primary.main,
                  },
                })}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                >
                  {content}
                </ReactMarkdown>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDetail;
