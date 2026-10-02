import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Import the context directly

const ThemeToggleBtn = () => {
  // Use React's built-in useContext hook directly
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="py-2 px-4 rounded-xl border border-gray-300 bg-white dark:bg-gray-800 text-black dark:text-white transition-colors cursor-pointer"
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggleBtn;
