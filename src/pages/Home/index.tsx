import { Box } from "@mui/material";
import SidePanel from "./components/SidePanel";
import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        width: "100%",
        minHeight: 0,
        overflow: "hidden",
        padding:'0rem 5rem'
      }}
    >
      <SidePanel />
      <HeroSection />
    </Box>
  );
};

export default Home;
