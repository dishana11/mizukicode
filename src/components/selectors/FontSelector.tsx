import React from 'react';
import { Check } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { themes } from '../../lib/themes';
import type { FontTheme } from '../../lib/themes';

export const FontSelector: React.FC = () => {
  const { theme, updateTheme } = useTheme();

  const handleFontChange = (font: FontTheme) => {
    updateTheme({ font });
  };

  const previewText = "The quick brown fox jumps over the lazy dog";

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white mb-4">Typography</h3>
      <div className="space-y-3">
        {Object.entries(themes.fonts).map(([key, font]) => (
          <button
            key={key}
            onClick={() => handleFontChange(key as FontTheme)}
            className="w-full p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02] text-left group"
            style={{
              borderColor: theme.font === key ? themes.accents[theme.accent].primary : 'rgba(255, 255, 255, 0.1)',
              backgroundColor: theme.font === key ? themes.accents[theme.accent].background.primary : 'rgba(255, 255, 255, 0.02)'
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-medium">{font.name}</span>
              {theme.font === key && (
                <Check className="h-4 w-4 text-white" />
              )}
            </div>
            <div className={`font-preview-${key} text-white/80 text-sm`}>
              {previewText}
            </div>
            <div className={`font-preview-${key} text-white/60 text-xs mt-1`}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
            </div>
          </button>
        ))}
      </div>
      
      {/* Current Font Info */}
      <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
        <div className="flex items-center space-x-3">
          <div 
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: themes.accents[theme.accent].primary }}
          />
          <span className="text-white text-sm">
            Currently using {themes.fonts[theme.font].name}
          </span>
        </div>
      </div>
    </div>
  );
};