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
  },
  palette: {
    primary: {
      main: "#1b1e3e",
      "800": "#1b1e3e",
      "600": "#7e7f88",
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
