import React from 'react';

export type BackgroundKey = 'gradient' | 'minimal';

const BackgroundSelector: React.FC<{
  value: BackgroundKey;
  onChange: (v: BackgroundKey) => void;
}> = ({ value, onChange }) => (
  <div className="grid grid-cols-2 gap-4">
    <button onClick={() => onChange('gradient')} className={`w-full h-24 rounded border ${value==='gradient'?'border-white/80':'border-white/10'} overflow-hidden relative`}>
      <div className="absolute inset-0 bg-gradient-theme" />
      <div className="absolute bottom-2 left-2 text-xs text-white/80">Gradient</div>
    </button>
    <button onClick={() => onChange('minimal')} className={`w-full h-24 rounded border ${value==='minimal'?'border-white/80':'border-white/10'} overflow-hidden relative`}>
      <div className="absolute inset-0 bg-minimal-theme" />
      <div className="absolute bottom-2 left-2 text-xs text-white/80">Minimal</div>
    </button>
  </div>
);

export default BackgroundSelector;