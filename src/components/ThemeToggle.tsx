import React, { useState } from 'react';
import { Palette, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { themes } from '../lib/themes';
import { AccentSelector } from './selectors/AccentSelector';
import { BackgroundSelector } from './selectors/BackgroundSelector';
import { FontSelector } from './selectors/FontSelector';

export const ThemeToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'colors' | 'backgrounds' | 'fonts'>('colors');
  const { theme } = useTheme();

  const tabs = [
    { id: 'colors' as const, label: 'Colors' },
    { id: 'backgrounds' as const, label: 'Backgrounds' },
    { id: 'fonts' as const, label: 'Fonts' }
  ];

  return (
    <>
      {/* Settings Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-40 h-9 w-9 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center group"
      >
        <Palette className="h-5 w-5 text-white group-hover:text-white/80 transition-colors" />
      </button>

      {/* Settings Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-zinc-900/95 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal */}
          <div className="relative w-full max-w-2xl bg-zinc-900/95 backdrop-blur-sm border border-white/10 rounded-2xl p-6 theme-transition">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Theme Settings</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-all duration-300"
              >
                <X className="h-4 w-4 text-white" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 mb-6 bg-white/5 p-1 rounded-lg border border-white/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-white/10 text-white border border-white/10'
                      : 'text-white/60 hover:text-white/80 hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
              {activeTab === 'colors' && <AccentSelector />}
              {activeTab === 'backgrounds' && <BackgroundSelector />}
              {activeTab === 'fonts' && <FontSelector />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};