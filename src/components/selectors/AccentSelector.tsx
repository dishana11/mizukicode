import React from 'react';

export type AccentKey = 'crimson' | 'emerald' | 'blue' | 'purple' | 'black';

const ACCENT_HEX: Record<AccentKey, string> = {
  crimson: '#9d1c2b',
  emerald: '#0b7f5a',
  blue: '#2a62ba',
  purple: '#663fba',
  black: '#000000',
};

const AccentSelector: React.FC<{
  value: AccentKey;
  onChange: (v: AccentKey) => void;
}> = ({ value, onChange }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {(Object.keys(ACCENT_HEX) as AccentKey[]).map((key) => (
        <button key={key} onClick={() => onChange(key)} className={`w-12 h-12 rounded border-2 theme-transition hover:scale-110 relative ${value===key? 'border-white/80' : 'border-white/20'}`}>
          <div className="absolute inset-0 rounded" style={{ backgroundColor: ACCENT_HEX[key] }} />
          <span className="sr-only">{key}</span>
        </button>
      ))}
    </div>
  );
};

export default AccentSelector;