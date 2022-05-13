import { createContext } from 'react';

export const themes = {
  light: {
    foreground: "#000000",
    background: "#c1e6fb",
  },
  dark: {
    foreground: "#ffffff",
    background: "#0d2f44"
  }
};

export const ThemeContext = createContext(themes.light);