import { Typography } from "@mui/material";

const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography
      sx={{
        letterSpacing: ".18em",
        fontSize: ".75rem",
        textTransform: "uppercase",
        color: "text.secondary",
        margin: "0px",
        fontWeight: 400,
      }}
    >
      {children}
    </Typography>
  );
};

export default Subtitle;
