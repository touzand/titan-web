import { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Subtitle from "../../../../shared/components/Subtitle";
import MakingOfDialog from "../MakingOfDialog";

const MAKING_OF_URL = "https://cdn.lomn.app/titan/media/videos/48H.mp4";

const HeroSection = () => {
  const navigate = useNavigate();
  const [openMakingOf, setOpenMakingOf] = useState(false);

  return (
    <>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <Stack gap="2rem" alignItems="flex-end" textAlign="right">
          <Subtitle>NASA SPACE APPS 2025 · FINALISTAS GLOBAIS</Subtitle>

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
            buscamos patrocinadores que queiram impulsionar ciência, tecnologia
            e inovação com impacto real.
          </Typography>

          <Stack gap="1rem" flexDirection="row">
            <Button
              variant="outlined"
              sx={{ textTransform: "none" }}
              onClick={() => setOpenMakingOf(true)}
            >
              Assistir making of
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/project")}
              sx={{ textTransform: "none" }}
            >
              Saiba mais sobre o projeto
            </Button>
          </Stack>
        </Stack>
      </Box>

      <MakingOfDialog
        open={openMakingOf}
        onClose={() => setOpenMakingOf(false)}
        src={MAKING_OF_URL}
        title="MAKING OF · TITAN TEAM"
      />
    </>
  );
};

export default HeroSection;
