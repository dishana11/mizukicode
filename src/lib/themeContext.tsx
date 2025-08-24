import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Accent = 'crimson' | 'emerald' | 'blue' | 'purple' | 'black';
type Mode = 'dark' | 'light';
type Background = 'gradient' | 'minimal';
type Font = 'geist' | 'inter' | 'jetbrains' | 'poppins';

type ThemeState = {
  mode: Mode;
  accent: Accent;
  background: Background;
  font: Font;
};

type ThemeContextValue = ThemeState & {
  setMode: (m: Mode) => void;
  setAccent: (a: Accent) => void;
  setBackground: (b: Background) => void;
  setFont: (f: Font) => void;
};

const defaultTheme: ThemeState = {
  mode: 'dark',
  accent: 'crimson',
  background: 'gradient',
  font: 'geist',
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = 'mizuki-theme-v1';

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeState>(() => {
    const raw = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (raw) {
      try { return JSON.parse(raw) as ThemeState; } catch {}
    }
    return defaultTheme;
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    const html = document.documentElement;
    // Mode
    html.classList.toggle('dark', theme.mode === 'dark');
    html.classList.toggle('light', theme.mode === 'light');
    // Accent
    ['accent-crimson','accent-emerald','accent-blue','accent-purple','accent-black']
      .forEach(c => html.classList.remove(c));
    html.classList.add(`accent-${theme.accent}`);
    // Background
    html.classList.remove('bg-gradient-theme','bg-minimal-theme');
    html.classList.add(theme.background === 'gradient' ? 'bg-gradient-theme' : 'bg-minimal-theme');
    // Font
    html.classList.remove('font-geist','font-inter','font-jetbrains','font-poppins');
    html.classList.add(`font-${theme.font}`);
  }, [theme]);

  const value = useMemo<ThemeContextValue>(() => ({
    ...theme,
    setMode: (m) => setTheme(t => ({ ...t, mode: m })),
    setAccent: (a) => setTheme(t => ({ ...t, accent: a })),
    setBackground: (b) => setTheme(t => ({ ...t, background: b })),
    setFont: (f) => setTheme(t => ({ ...t, font: f })),
  }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
