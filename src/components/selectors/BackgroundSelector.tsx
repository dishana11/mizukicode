import React from 'react';
import { Check } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { themes } from '../../lib/themes';
import type { BackgroundTheme } from '../../lib/themes';

export const BackgroundSelector: React.FC = () => {
  const { theme, updateTheme } = useTheme();

  const handleBackgroundChange = (background: BackgroundTheme) => {
    updateTheme({ background });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white mb-4">Background Styles</h3>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(themes.backgrounds).map(([key, bg]) => (
          <button
            key={key}
            onClick={() => handleBackgroundChange(key as BackgroundTheme)}
            className="relative p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 group"
            style={{
              borderColor: theme.background === key ? themes.accents[theme.accent].primary : 'rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Background Preview */}
            <div className={`w-full h-24 rounded-lg mb-3 ${bg.class} relative overflow-hidden`}>
              {key === 'gradient' && (
                <div className="absolute inset-0 animate-pulse opacity-30">
                  <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-ping" />
                  <div className="absolute top-4 right-3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute bottom-3 left-1/2 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                </div>
              )}
              {key === 'minimal' && (
                <div className="absolute inset-0 opacity-20">
                  <div 
                    className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full"
                    style={{ 
                      background: `radial-gradient(circle, ${themes.accents[theme.accent].primary}45 0%, transparent 50%)`
                    }}
                  />
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-white text-sm font-medium">{bg.name}</span>
              {theme.background === key && (
                <Check className="h-4 w-4 text-white" />
              )}
            </div>
            
            {/* Selection Indicator */}
            {theme.background === key && (
              <div 
                className="absolute inset-0 rounded-lg opacity-20"
                style={{ backgroundColor: themes.accents[theme.accent].primary }}
              />
            )}
          </button>
        ))}
      </div>
      
      {/* Description */}
      <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
        <p className="text-white/60 text-sm">
          {theme.background === 'gradient' 
            ? 'Dynamic gradient background with animated cosmic particles and nebula effects.'
            : 'Clean minimal background with subtle accent patterns and reduced visual noise.'
          }
        </p>
      </div>
    </div>
  );
};