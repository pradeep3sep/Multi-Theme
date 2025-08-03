import React, { createContext, useContext, useEffect, useState } from "react";
import type { Theme } from "../types/theme";

interface ThemeContextProps {
  Theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [Theme, setThemeState] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "Light";
  });

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', Theme)
    document.documentElement.className = Theme; // Used for Tailwind/CSS theme classes
  }, [Theme]);

  return <ThemeContext.Provider value={{ Theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
