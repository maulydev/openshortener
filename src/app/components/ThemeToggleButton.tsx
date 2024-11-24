"use client";

import { useEffect, useState } from "react";
import { LuMoon, LuSunMoon } from "react-icons/lu";
import ThemeController from "tailwind-theme-controller";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState("dark"); // Default theme

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure localStorage is accessible
      ThemeController.initialize();
      const currentTheme = localStorage.getItem("theme") || "dark";
      setTheme(currentTheme);
    }
  }, []);

  const toggler = () => {
    if (typeof window !== "undefined") {
      // Ensure localStorage is accessible
      ThemeController.toggle();
      const updatedTheme = localStorage.getItem("theme") || "dark";
      setTheme(updatedTheme);
    }
  };

  return (
    <button
      onClick={toggler}
      className="absolute top-6 right-6 dark:text-slate-50 text-slate-950 text-lg p-4 bg-slate-200 dark:bg-slate-800 rounded-full"
    >
      {theme === "light" ? <LuSunMoon /> : <LuMoon />}
    </button>
  );
};

export default ThemeToggleButton;
