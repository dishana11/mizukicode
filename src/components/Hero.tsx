"use client";

import { useTheme } from "@/lib/themeContext";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center text-white">
      {/* Background with Crimson radial gradient */}
      <div
        className={`absolute inset-0 z-0 pointer-events-none ${
          theme.background === "gradient" ? "bg-gradient-theme" : "bg-minimal-theme"
        }`}
      />
      {/* Animated starry particles for cosmology theme */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 animate-[pulse_10s_infinite]" />
      <div className="relative z-10 text-center px-4">
        {/* Centered Mizuki Code title */}
        <h1
          className="text-4xl md:text-6xl font-geist font-bold text-white tracking-wide"
          style={{ boxShadow: "0 0 20px rgba(157, 28, 43, 0.28)" }}
        >
          Mizuki Code
        </h1>
        {/* Tagline */}
        <p className="mt-4 text-lg md:text-xl text-white/60 font-geist">
          Unlock the Cosmos of Programming
        </p>
        {/* Course cards grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            "Fortran",
            "C++",
            "C",
            "Rust",
            "CUDA C",
            "Julia",
            "S",
            "R",
            "AI",
            "Machine Learning",
            "Deep Learning",
            "Neuralink",
            "High-Performance Computing",
          ].map((course) => (
            <a
              key={course}
              href={`https://mizukicode.com/course/${course.toLowerCase().replace(" ", "-")}`}
              className="p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-[var(--accent-bg-primary)] hover:border-[var(--accent-interactive-primary)] accent-chip transition-all hover:scale-105"
              style={{ boxShadow: "0 0 20px rgba(157, 28, 43, 0.28)" }}
            >
              <h3 className="text-sm font-medium text-[var(--accent-interactive-primary)]">
                {course}
              </h3>
            </a>
          ))}
        </div>
      </div>
      {/* Made by Dishana */}
      <div className="fixed bottom-4 left-4 text-sm font-geist text-white hover:accent-glow-soft">
        Made by Dishana
      </div>
    </div>
  );
}