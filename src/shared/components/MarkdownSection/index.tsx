import { Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMarkdown } from "../../hooks/useMarkdown";
import Loader from "../Loader";

export const MarkdownSection = ({ section }) => {
  const { content, loading, error } = useMarkdown(section.markdownUrl);

  console.log(content);

  return (
    <Box id={section.id} sx={{ mb: 6 }}>
      <Typography variant="h6" sx={{ mb: 1.5 }}>
        {section.label}
      </Typography>

      {loading && <Loader />}

      {error && (
        <Typography variant="body2" sx={{ color: "error.main" }}>
          Erro ao carregar conteúdo.
        </Typography>
      )}

      {!loading && !error && content && (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      )}
    </Box>
  );
};
