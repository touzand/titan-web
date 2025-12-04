import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { teamMembers } from "../Home/components/SidePanel/utils";

const MemberDetail = () => {
  const { slug } = useParams<{ slug: string }>();

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

  return (
    <Box sx={{ margin: "2rem auto 0rem auto" }}>
      <Typography variant="overline" sx={{ letterSpacing: ".18em" }}>
        TEAM MEMBER
      </Typography>

      <Typography variant="h4" component="h1" sx={{ mt: 1, mb: 2 }}>
        {member.name}
      </Typography>

      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        {member.role}
      </Typography>

      {member.subtitle && (
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
          {member.subtitle}
        </Typography>
      )}

      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Aquí podemos contar la historia del miembro, su rol en el proyecto,
        background, habilidades técnicas, etc. Luego lo rellenamos con info
        real.
      </Typography>
    </Box>
  );
};

export default MemberDetail;
