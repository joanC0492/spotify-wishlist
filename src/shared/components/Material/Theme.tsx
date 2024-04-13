"use client";
import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  palette: {
    mode: "dark",
  },
});
