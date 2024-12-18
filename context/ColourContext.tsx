"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { ColourMode, ColourContextType } from "@/interfaces/colourInterface";

const ColourContext = createContext<ColourContextType | undefined>(undefined);

export const ColourProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ColourMode>("light");

  // Set the initial theme based on system preference.
  useEffect(() => {
    const savedMode = localStorage.getItem("theme") as ColourMode | null;
    if (savedMode) {
      setMode(savedMode);
    } else {
      const darkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setMode(darkMode ? "dark" : "light");
    }
  }, []);

  // update localStorage and 'data-theme' attribute.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ColourContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ColourContext.Provider>
  );
};

export const useColourMode = () => {
  const context = useContext(ColourContext);
  if (!context) {
    throw new Error("useColourMode must be used within a ColourProvider");
  }

  return context;
};
