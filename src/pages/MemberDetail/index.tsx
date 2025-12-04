import { useParams } from "react-router-dom";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMarkdown } from "../../shared/hooks/useMarkdown";
import { teamMembers } from "../Home/components/SidePanel/utils";
import Loader from "../../shared/components/Loader";

const MemberDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const theme = useTheme();

  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h5">Miembro no encontrado</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
          Puede que este enlace sea incorrecto o el perfil aún no esté
          configurado.
        </Typography>
      </Box>
    );
  }

  const markdownUrl = `https://cdn.lomn.app/titan/media/markdown/members/${member.slug}.md`;

  const { content, loading, error } = useMarkdown(markdownUrl);

  return (
    <Box
      sx={{
        margin: "2rem auto 0 auto",
        padding: "0rem 2rem",
        width: "100%",
        maxWidth: 800,
      }}
    >
      <Stack
        sx={{
          padding: "2rem",
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Typography variant="overline" sx={{ letterSpacing: ".18em" }}>
          TEAM MEMBER
        </Typography>

        <Typography variant="h4" component="h1" fontWeight={700}>
          {member.name}
        </Typography>

        <Stack>
          <Typography variant="subtitle1">{member.role}</Typography>

          {member.subtitle && (
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {member.subtitle}
            </Typography>
          )}
        </Stack>
      </Stack>

      {loading && <Loader />}

      {error && (
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Ainda não tem uma bio configurada para este membro.
        </Typography>
      )}

      {!loading && !error && content && (
        <Box
          sx={{
            mt: 2,
            "& h1": { fontSize: "1.6rem", marginBottom: "0.75rem" },
            "& h2": { fontSize: "1.3rem", margin: "1.5rem 0 0.75rem" },
            "& h3": { fontSize: "1.1rem", margin: "1rem 0 0.5rem" },
            "& p": {
              fontSize: ".95rem",
              color: "text.secondary",
              marginBottom: "0.75rem",
            },
            "& ul": {
              paddingLeft: "1.25rem",
              marginBottom: "0.75rem",
            },
          }}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </Box>
      )}
    </Box>
  );
};

export default MemberDetail;
