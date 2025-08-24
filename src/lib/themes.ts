export type ThemeConfig = {
  mode: "light" | "dark";
  accent: "crimson" | "emerald" | "blue" | "purple" | "black";
  background: "gradient" | "minimal";
  font: "geist" | "inter" | "mono" | "poppins";
  badgePair: string;
  chatInputStyle: "default" | "frosty";
};

export const DEFAULT_THEME: ThemeConfig = {
  mode: "dark",
  accent: "crimson",
  background: "gradient",
  font: "geist",
  badgePair: "gold-green",
  chatInputStyle: "default",
};

export const ACCENT_COLORS = {
  crimson: {
    id: "crimson",
    name: "Crimson",
    description: "Bold, warm red tones",
    primary: "#9d1c2b",
    secondary: "#821624",
    tertiary: "#66111b",
    background: { primary: "#1f1317", secondary: "#2a151d" },
    gradient: {
      light: "linear-gradient(0deg, rgba(255,255,255,0.6), rgba(255,255,255,0.6)), radial-gradient(68% 58% at 50% 50%, #ff5e7a 0%, #e14b66 16%, #b33952 32%, #852a3e 46%, #5e1f2d 60%, #431a21 72%, #2f1619 84%, #1f1012 94%, #0f0a0a 100%)",
      dark: "linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), radial-gradient(68% 58% at 50% 50%, #c81e3a 0%, #a51d35 16%, #7d1a2f 32%, #591828 46%, #3c1722 60%, #2a151d 72%, #1f1317 84%, #141013 94%, #0a0a0a 100%)",
    },
  },
  emerald: { id: "emerald", name: "Emerald", description: "Vibrant green", primary: "#0b7f5a" },
  blue: { id: "blue", name: "Blue", description: "Cool blue", primary: "#2a62ba" },
  purple: { id: "purple", name: "Purple", description: "Rich purple", primary: "#663fba" },
  black: { id: "black", name: "Black", description: "Neutral black", primary: "#000000" },
};

export const BACKGROUND_STYLES = {
  gradient: {
    id: "gradient",
    name: "Gradient",
    description: "Rich, complex radial gradients",
    className: "bg-gradient-theme",
  },
  minimal: {
    id: "minimal",
    name: "Minimal",
    description: "Clean solid background with subtle patterns",
    className: "bg-minimal-theme",
  },
};

export const FONT_FAMILIES = {
  geist: { id: "geist", name: "Geist", description: "Modern sans-serif" },
  inter: { id: "inter", name: "Inter", description: "Clean sans-serif" },
  mono: { id: "mono", name: "JetBrains Mono", description: "Monospace" },
  poppins: { id: "poppins", name: "Poppins", description: "Rounded sans-serif" },
};

export const validateThemeConfig = (config: Partial<ThemeConfig>): ThemeConfig => {
  return { ...DEFAULT_THEME, ...config };
};

export const generateThemeClasses = (config: ThemeConfig): string[] => {
  return [
    config.mode,
    `accent-${config.accent}`,
    `font-${config.font}`,
    `bg-${config.background}-theme`,
    `chatinput-${config.chatInputStyle}`,
  ];
};
