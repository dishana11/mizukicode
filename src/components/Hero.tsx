"use client";

import { useTheme } from "@/lib/themeContext";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center text-white">
      <div
        className={`absolute inset-0 z-0 pointer-events-none ${
          theme.background === "gradient" ? "bg-gradient-theme" : "bg-minimal-theme"
        }`}
      />
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 animate-[pulse_10s_infinite]" />
      <div className="relative z-10 text-center px-4">
        <h1
          className="text-4xl md:text-6xl font-geist font-bold text-white tracking-wide"
          style={{ boxShadow: "0 0 20px rgba(157, 28, 43, 0.28)" }}
        >
          Mizuki Code
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/60 font-geist">
          Unlock the Cosmos of Programming
        </p>
      </div>
      <div className="fixed bottom-4 left-4 text-sm font-geist text-white hover:accent-glow-soft">
        Made by Dishana
      </div>
    </div>
  );
}
