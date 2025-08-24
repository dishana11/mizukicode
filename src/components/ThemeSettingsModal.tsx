import React, { useState } from 'react';
import { Settings, X } from 'lucide-react';
import { useTheme } from '@/lib/themeContext';
import AccentSelector, { AccentKey } from '@/components/selectors/AccentSelector';
import BackgroundSelector, { BackgroundKey } from '@/components/selectors/BackgroundSelector';
import FontSelector, { FontKey } from '@/components/selectors/FontSelector';

type TabKey = 'colors' | 'backgrounds' | 'fonts';

const TabButton: React.FC<{active:boolean; onClick:()=>void; children:React.ReactNode}> = ({active,onClick,children}) => (
  <button onClick={onClick} className={`px-3 py-1 rounded-lg border ${active? 'bg-white/15 text-white border-white/20' : 'text-white/70 hover:text-white hover:bg-white/10 border-white/10'} theme-transition`}>
    {children}
  </button>
);

export const ThemeSettingsButton: React.FC<{onOpen:()=>void}> = ({onOpen}) => (
  <button onClick={onOpen} aria-label="Theme settings" className="p-2 rounded bg-white/10 hover:bg-white/15 border border-white/10 text-white theme-transition">
    <Settings className="w-5 h-5" />
  </button>
);

const ThemeSettingsModal: React.FC<{open:boolean; onClose:()=>void}> = ({open,onClose}) => {
  const { accent, background, font, setAccent, setBackground, setFont } = useTheme();
  const [tab, setTab] = useState<TabKey>('colors');
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-zinc-900/95 border border-white/10 rounded-2xl p-6 max-w-2xl w-full text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              <TabButton active={tab==='colors'} onClick={()=>setTab('colors')}>Colors</TabButton>
              <TabButton active={tab==='backgrounds'} onClick={()=>setTab('backgrounds')}>Backgrounds</TabButton>
              <TabButton active={tab==='fonts'} onClick={()=>setTab('fonts')}>Fonts</TabButton>
            </div>
            <button onClick={onClose} aria-label="Close" className="p-2 rounded hover:bg-white/10">
              <X className="w-5 h-5" />
            </button>
          </div>
          {tab==='colors' && (
            <AccentSelector value={accent as AccentKey} onChange={(v)=>setAccent(v)} />
          )}
          {tab==='backgrounds' && (
            <BackgroundSelector value={background as BackgroundKey} onChange={(v)=>setBackground(v)} />
          )}
          {tab==='fonts' && (
            <FontSelector value={font as FontKey} onChange={(v)=>setFont(v)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeSettingsModal;

