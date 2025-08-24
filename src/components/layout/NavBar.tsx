import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { ThemeSettingsButton } from '@/components/ThemeSettingsModal';

const NavBar: React.FC<{onOpenSettings:()=>void}> = ({onOpenSettings}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-4 left-4 right-4 z-40 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <button className="md:hidden p-2 rounded bg-white/10 border border-white/10 text-white" onClick={()=>setOpen(o=>!o)}>
          <Menu className="w-5 h-5"/>
        </button>
        <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-2">
          <Link to="/" className="px-3 py-2 rounded text-sm text-white/80 hover:text-white hover:bg-white/15 theme-transition">Home</Link>
          <Link to="/courses" className="px-3 py-2 rounded text-sm text-white/80 hover:text-white hover:bg-white/15 theme-transition">Courses</Link>
          <Link to="/about" className="px-3 py-2 rounded text-sm text-white/80 hover:text-white hover:bg-white/15 theme-transition">About</Link>
          <Link to="/contact" className="px-3 py-2 rounded text-sm text-white/80 hover:text-white hover:bg-white/15 theme-transition">Contact</Link>
        </div>
      </div>
      <ThemeSettingsButton onOpen={onOpenSettings} />
      {open && (
        <div className="absolute top-12 left-4 bg-zinc-900/95 border border-white/10 rounded-lg p-2 flex flex-col w-40 md:hidden">
          <Link to="/" onClick={()=>setOpen(false)} className="px-3 py-2 rounded text-sm text-white/80 hover:text-white hover:bg-white/15 theme-transition">Home</Link>
          <Link to="/courses" onClick={()=>setOpen(false)} className="px-3 py-2 rounded text-sm text-white/80 hover:text-white hover:bg-white/15 theme-transition">Courses</Link>
          <Link to="/about" onClick={()=>setOpen(false)} className="px-3 py-2 rounded text-sm text-white/80 hover:text-white hover:bg-white/15 theme-transition">About</Link>
          <Link to="/contact" onClick={()=>setOpen(false)} className="px-3 py-2 rounded text-sm text-white/80 hover:text-white hover:bg-white/15 theme-transition">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;

