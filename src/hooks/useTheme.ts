import { useState, useEffect } from 'react';
import type { AccentTheme, BackgroundTheme, FontTheme } from '../lib/themes';

interface ThemeSettings {
  accent: AccentTheme;
  background: BackgroundTheme;
  font: FontTheme;
}

const defaultTheme: ThemeSettings = {
  accent: 'crimson',
  background: 'gradient',
  font: 'geist'
};

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeSettings>(defaultTheme);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('mizuki-theme');
    if (savedTheme) {
      try {
        const parsed = JSON.parse(savedTheme);
        setTheme({ ...defaultTheme, ...parsed });
      } catch (error) {
        console.error('Failed to parse saved theme:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    // Save theme to localStorage
    localStorage.setItem('mizuki-theme', JSON.stringify(theme));

    // Apply theme classes to document
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove(
      'accent-crimson', 'accent-emerald', 'accent-blue', 'accent-purple', 'accent-black',
      'bg-gradient-theme', 'bg-minimal-theme',
      'font-geist', 'font-inter', 'font-mono', 'font-poppins'
    );

    // Add current theme classes
    root.classList.add(
      `accent-${theme.accent}`,
      `bg-${theme.background}-theme`,
      `font-${theme.font}`
    );
  }, [theme, isLoaded]);

  const updateTheme = (updates: Partial<ThemeSettings>) => {
    setTheme(prev => ({ ...prev, ...updates }));
  };

  return {
    theme,
    updateTheme,
    isLoaded
  };
};