// components/ThemeToggle.tsx
"use client";

import { useTheme } from "@/components/ThemeProvider";
import { FaMoon } from "react-icons/fa";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition
        ${
          isDark
            ? "border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-800"
            : "border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
        }`}
    >
      <FaMoon className="h-3.5 w-3.5" />
      <span>{isDark ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}