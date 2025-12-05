import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
      }}
    >
      <Stack gap="2rem" alignItems="flex-end" textAlign="right">
        <Typography variant="overline" color="textSecondary" sx={{ letterSpacing: ".18em" }}>
          NASA SPACE APPS 2025 · FINALISTAS GLOBAIS
        </Typography>

        <Typography
          variant="h3"
          component="h1"
          sx={{ width: "700px" }}
          fontWeight="bold"
        >
          Explorando soluções para o futuro do espaço
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "text.secondary", width: "800px" }}
        >
          Desenvolvemos um projeto para o NASA Space Apps Challenge e agora
          buscamos patrocinadores que queiram impulsionar ciência, tecnologia e
          inovação com impacto real.
        </Typography>

        <Stack gap="1rem" flexDirection="row">
          <Button
            variant="contained"
            onClick={() => navigate("/project")}
            sx={{ textTransform: "none" }}
          >
            Saiba mais sobre o projeto
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate("/project")}
            sx={{ textTransform: "none" }}
          >
            Assistir making of
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HeroSection;
