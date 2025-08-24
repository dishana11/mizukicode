export const themes = {
  accents: {
    crimson: {
      id: 'crimson',
      name: 'Crimson',
      primary: '#9d1c2b',
      secondary: '#821624',
      tertiary: '#66111b',
      interactive: {
        primary: '#9d1c2b',
        secondary: '#821624',
        hover: '#b31f30'
      },
      background: {
        primary: 'rgba(157, 28, 43, 0.1)',
        secondary: 'rgba(157, 28, 43, 0.05)',
        tertiary: 'rgba(157, 28, 43, 0.02)'
      }
    },
    emerald: {
      id: 'emerald',
      name: 'Emerald',
      primary: '#0b7f5a',
      secondary: '#0a6b4d',
      tertiary: '#085740',
      interactive: {
        primary: '#0b7f5a',
        secondary: '#0a6b4d',
        hover: '#0d9366'
      },
      background: {
        primary: 'rgba(11, 127, 90, 0.1)',
        secondary: 'rgba(11, 127, 90, 0.05)',
        tertiary: 'rgba(11, 127, 90, 0.02)'
      }
    },
    blue: {
      id: 'blue',
      name: 'Blue',
      primary: '#2a62ba',
      secondary: '#24559e',
      tertiary: '#1e4882',
      interactive: {
        primary: '#2a62ba',
        secondary: '#24559e',
        hover: '#306fd1'
      },
      background: {
        primary: 'rgba(42, 98, 186, 0.1)',
        secondary: 'rgba(42, 98, 186, 0.05)',
        tertiary: 'rgba(42, 98, 186, 0.02)'
      }
    },
    purple: {
      id: 'purple',
      name: 'Purple',
      primary: '#663fba',
      secondary: '#58369e',
      tertiary: '#4a2d82',
      interactive: {
        primary: '#663fba',
        secondary: '#58369e',
        hover: '#7448d1'
      },
      background: {
        primary: 'rgba(102, 63, 186, 0.1)',
        secondary: 'rgba(102, 63, 186, 0.05)',
        tertiary: 'rgba(102, 63, 186, 0.02)'
      }
    },
    black: {
      id: 'black',
      name: 'Black',
      primary: '#000000',
      secondary: '#1a1a1a',
      tertiary: '#333333',
      interactive: {
        primary: '#000000',
        secondary: '#1a1a1a',
        hover: '#333333'
      },
      background: {
        primary: 'rgba(0, 0, 0, 0.1)',
        secondary: 'rgba(0, 0, 0, 0.05)',
        tertiary: 'rgba(0, 0, 0, 0.02)'
      }
    }
  },
  backgrounds: {
    gradient: {
      id: 'gradient',
      name: 'Gradient',
      class: 'bg-gradient-theme'
    },
    minimal: {
      id: 'minimal',
      name: 'Minimal',
      class: 'bg-minimal-theme'
    }
  },
  fonts: {
    geist: {
      id: 'geist',
      name: 'Geist',
      class: 'font-geist'
    },
    inter: {
      id: 'inter',
      name: 'Inter',
      class: 'font-inter'
    },
    jetbrains: {
      id: 'jetbrains',
      name: 'JetBrains Mono',
      class: 'font-mono'
    },
    poppins: {
      id: 'poppins',
      name: 'Poppins',
      class: 'font-poppins'
    }
  }
};

export type AccentTheme = keyof typeof themes.accents;
export type BackgroundTheme = keyof typeof themes.backgrounds;
export type FontTheme = keyof typeof themes.fonts;