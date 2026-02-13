import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1B2559",
    },
    secondary: {
      main: "#2563EB",
    },
    background: {
      default: "#F4F6FA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#0F172A",
    },
  },
  typography: {
    fontFamily: "Poppins, Inter, sans-serif",
    h1: {
      fontWeight: 800,
      fontSize: "3rem",
    },
    h2: {
      fontWeight: 700,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 14,
  },
});

export default theme;
