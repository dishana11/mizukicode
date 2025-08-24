"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { ThemeConfig, DEFAULT_THEME, validateThemeConfig, generateThemeClasses } from "@/lib/themes";

const ThemeContext = createContext<{
  theme: ThemeConfig;
  isLoaded: boolean;
  setAccent: (accent: string) => void;
  setBackground: (background: string) => void;
  setFont: (font: string) => void;
  toggleMode: () => void;
  updateTheme: (updates: Partial<ThemeConfig>) => void;
}>({
  theme: DEFAULT_THEME,
  isLoaded: false,
  setAccent: () => {},
  setBackground: () => {},
  setFont: () => {},
  toggleMode: () => {},
  updateTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(validateThemeConfig(JSON.parse(savedTheme)));
    }
    setIsLoaded(true);
  }, []);

  const updateTheme = (updates: Partial<ThemeConfig>) => {
    const newTheme = validateThemeConfig({ ...theme, ...updates });
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
    document.documentElement.className = "";
    document.documentElement.classList.add(...generateThemeClasses(newTheme));
  };

  const setAccent = (accent: string) => updateTheme({ accent });
  const setBackground = (background: string) => updateTheme({ background });
  const setFont = (font: string) => updateTheme({ font });
  const toggleMode = () => updateTheme({ mode: theme.mode === "dark" ? "light" : "dark" });

  return (
    <ThemeContext.Provider value={{ theme, isLoaded, setAccent, setBackground, setFont, toggleMode, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
