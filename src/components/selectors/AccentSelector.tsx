import React from 'react';
import { Check } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { themes } from '../../lib/themes';
import type { AccentTheme } from '../../lib/themes';

export const AccentSelector: React.FC = () => {
  const { theme, updateTheme } = useTheme();

  const handleAccentChange = (accent: AccentTheme) => {
    updateTheme({ accent });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white mb-4">Accent Colors</h3>
      <div className="grid grid-cols-5 gap-3">
        {Object.entries(themes.accents).map(([key, accent]) => (
          <button
            key={key}
            onClick={() => handleAccentChange(key as AccentTheme)}
            className="accent-swatch group relative w-12 h-12 rounded-lg border-2 transition-all duration-300 hover:scale-110 flex items-center justify-center"
            style={{
              backgroundColor: accent.primary,
              borderColor: theme.accent === key ? '#ffffff' : 'transparent'
            }}
          >
            {theme.accent === key && (
              <Check className="h-5 w-5 text-white" />
            )}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {accent.name}
            </div>
          </button>
        ))}
      </div>
      
      {/* Preview */}
      <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
        <div className="flex items-center space-x-3">
          <div 
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: themes.accents[theme.accent].primary }}
          />
          <span className="text-white text-sm">
            {themes.accents[theme.accent].name} Preview
          </span>
        </div>
        <div className="mt-3 flex space-x-2">
          <button 
            className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: themes.accents[theme.accent].primary,
              boxShadow: `0 0 10px ${themes.accents[theme.accent].primary}45`
            }}
          >
            Primary Button
          </button>
          <button 
            className="px-4 py-2 rounded-lg text-sm font-medium text-white border transition-all duration-300 hover:scale-105"
            style={{ 
              borderColor: themes.accents[theme.accent].primary,
              backgroundColor: themes.accents[theme.accent].background.primary
            }}
          >
            Secondary Button
          </button>
        </div>
      </div>
    </div>
  );
};