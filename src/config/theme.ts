import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#050505",
      paper: "#111827",
    },
    primary: {
      main: "#FACC6B",
      light: "#FDE68A",
      dark: "#CA8A04",
    },
    secondary: {
      main: "#F97316",
      light: "#FDBA74",
      dark: "#EA580C",
    },
    text: {
      primary: "#F9FAFB",
      secondary: "#9CA3AF",
    },
    divider: "#111827",
    success: {
      main: "#22C55E",
    },
    warning: {
      main: "#FBBF24",
    },
    error: {
      main: "#FB7185",
    },
    info: {
      main: "#38BDF8",
    },
  },
  typography: {
    fontFamily:
      '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
});

//const makeDebugPalette = (color: string) => ({
//mode: "dark",
//background: {
//default: "#000000",
//paper: "#000000",
//},
//primary: {
//main: color,
//light: color,
//dark: color,
//contrastText: "#000000",
//},
//secondary: {
//main: color,
//light: color,
//dark: color,
//contrastText: "#000000",
//},
//text: {
//primary: color,
//secondary: color,
//disabled: color,
//},
//divider: color,
//success: {
//main: color,
//},
//warning: {
//main: color,
//},
//error: {
//main: color,
//},
//info: {
//main: color,
//},
//});

//export const debugTheme = createTheme({
//palette: makeDebugPalette("#ff1744"),
//typography: {
//fontFamily:
//'"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//},
//});
