"use client";

import { useTheme } from "@/lib/themeContext";
import { Settings } from "lucide-react";

export function ThemeToggle() {
  const { setAccent, setBackground, toggleMode } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-20">
      <button
        className="p-2 rounded-md bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
        onClick={() => {
          setBackground("gradient");
          setAccent("crimson");
          toggleMode();
        }}
      >
        <Settings size={20} className="text-white" />
      </button>
    </div>
  );
}
