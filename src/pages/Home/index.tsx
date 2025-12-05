import { Box, Stack } from "@mui/material";
import SidePanel from "./components/SidePanel";
import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        minHeight: 0,
        overflow: "hidden",
      }}
    >
      <Stack flexDirection="row" sx={{width:'1500px', margin:'auto'}}>
        <SidePanel />
        <HeroSection />
      </Stack>
    </Box>
  );
};

export default Home;
