import { useCallback } from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { sections } from "./utils";
import { useMarkdown } from "../../shared/hooks/useMarkdown";
import rehypeRaw from "rehype-raw";
import Loader from "../../shared/components/Loader";
import Subtitle from "../../shared/components/Subtitle";

const ProjectDetail = () => {
  const handleScrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  }, []);

  const { content, loading, error } = useMarkdown(
    "https://cdn.lomn.app/titan/media/markdown/titan-project.md",
  );

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
          <Subtitle>PROJETO</Subtitle>

          <List dense>
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
          {loading && <Loader />}

          {error && (
            <Typography variant="body2" sx={{ color: "error.main" }}>
              Erro ao carregar conteúdo.
            </Typography>
          )}

          {!loading && !error && content && (
            <Box
              sx={{
                "& h1": { fontSize: "2rem", marginBottom: "1rem" },
                "& h2": { fontSize: "1.4rem", margin: "2rem 0 0.75rem" },
                "& h3": {
                  fontSize: ".75rem",
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "text.secondary",
                  margin: "0px",
                  fontWeight: 400,
                },
                "& p": {
                  fontSize: ".9rem",
                  color: "text.secondary",
                  marginBottom: "0.75rem",
                },
              }}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {content}
              </ReactMarkdown>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDetail;
