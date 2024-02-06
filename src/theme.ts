"use client";

import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontSize: "clamp(2rem, 6.5vw, 3.25rem)",
      fontWeight: 700,
      lineHeight: 1.222,
      color: "#1b1e3e",
    },
    h2: {
      fontSize: "clamp(1.5rem, 4.5vw, 2.5rem)",
      lineHeight: 1.41,
      fontWeight: 700,
      color: "#1b1e3e",
    },
    caption: {
      textTransform: "uppercase",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 479,
      md: 767,
      lg: 991,
      xl: 1279,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 7px 0 rgba(27, 30, 62, 0.08)",
        },
      },
    },
  },
  palette: {
    primary: {
      "300": "#ebebf0",
      main: "#1b1e3e",
      "600": "#7e7f88",
      "800": "#1b1e3e",
    },
    secondary: {
      main: "#408bfc",
    },
    text: {
      primary: "#7e7f88",
    },
  },
});

export default theme;
