import { createContext } from "react";

export const ThemeContext = createContext();

export const theme = {
  light: {
    forground: "#000",
    background: "#eee",
    color: "#000",
  },
  dark: {
    forground: "#fff",
    background: "#111",
    color: "#fff",
  },
};

