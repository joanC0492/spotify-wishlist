"use client";
import { createTheme } from "@mui/material/styles";

export const ThemeDark = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  palette: {
    mode: "dark",
  },
});