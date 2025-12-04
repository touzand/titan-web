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
        padding: "2rem",
      }}
    >
      <Stack gap="2rem" alignItems="flex-end" textAlign="right" maxWidth={640}>
        <Typography variant="overline" sx={{ letterSpacing: ".18em" }}>
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

        <Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 1 }}
            onClick={() => navigate("/project")}
          >
            Saiba mais sobre o projeto
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default HeroSection;
