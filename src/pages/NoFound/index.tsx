import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3" gutterBottom>
        404 – Lost in Space
      </Typography>
      <Typography>
        La página que buscas no existe en este sector del universo.
      </Typography>
    </Box>
  );
};

export default NotFound;
