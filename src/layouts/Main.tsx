import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Header from "./components/Header";

const MainLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          position: "relative",
          color: "text.primary",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          component="video"
          autoPlay
          muted
          loop
          playsInline
          sx={{
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            opacity: 0.25,
            filter: "blur(20px)",
            transform: "scale(1.05)",
            pointerEvents: "none",
          }}
        >
          {
            <source
              src="https://cdn.lomn.app/titan/media/videos/48H.mp4"
              type="video/mp4"
            />
          }
        </Box>

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Header setMenuOpen={setMenuOpen} />

          <Box
            component="main"
            sx={{
              flex: 1,
              width: "100%",
              display: "flex",
              minHeight: 0,
            }}
          >
            <Outlet />
          </Box>

          <Footer />
        </Box>
      </Box>

      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default MainLayout;
