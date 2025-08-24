import React from 'react';

export type FontKey = 'geist' | 'inter' | 'jetbrains' | 'poppins';

const FontSelector: React.FC<{
  value: FontKey;
  onChange: (v: FontKey) => void;
}> = ({ value, onChange }) => (
  <div className="grid grid-cols-2 gap-4">
    {([
      ['Geist','geist'],
      ['Inter','inter'],
      ['JetBrains Mono','jetbrains'],
      ['Poppins','poppins']
    ] as const).map(([name, key]) => (
      <button key={key} onClick={() => onChange(key)} className={`p-4 rounded border ${value===key?'border-white/80':'border-white/10'} w-full text-left`}>
        <div className={`${key==='geist'?'font-geist': key==='inter'?'font-inter': key==='jetbrains'?'font-jetbrains':'font-poppins'} text-white text-sm`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className="text-xs text-white/60 mt-1">{name}</div>
      </button>
    ))}
  </div>
);

export default FontSelector;