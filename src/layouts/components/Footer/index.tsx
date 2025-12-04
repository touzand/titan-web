import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        textAlign: "right",
        fontSize: 12,
        opacity: 0.7,
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      © {new Date().getFullYear()} NASA Space Apps · Team — Made on Earth a few
      seconds ago 🌍
    </Box>
  );
};

export default Footer;
