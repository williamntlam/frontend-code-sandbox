"use client";

import { useColourMode } from "@/context/ColourContext";

const ThemeToggleButton = () => {
  const { mode, toggleMode } = useColourMode();

  return (
    <button
      onClick={toggleMode}
      className="p-2 border rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
    >
      {mode === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggleButton;
