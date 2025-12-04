import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import App from "./App.tsx";
import "./index.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#02040A",
      paper: "#050816",
    },
    primary: {
      main: "#38BDF8",
      light: "#7DD3FC",
      dark: "#0EA5E9",
    },
    secondary: {
      main: "#00FF9C",
      light: "#4DFFC4",
      dark: "#00B86F",
    },
    text: {
      primary: "#F9FAFB",
      secondary: "#9CA3AF",
    },
    divider: "#1F2933",
    success: {
      main: "#22C55E",
    },
    warning: {
      main: "#EAB308",
    },
    error: {
      main: "#F97373",
    },
  },
  typography: {
    fontFamily:
      '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
