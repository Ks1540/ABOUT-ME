import { useState, useEffect } from "react";
import Desktop from "./components/Desktop";
import PixelartBackground from "./components/PixelartBackground";
import { playClickSound } from "./utils/sound";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    playClickSound();
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      {/* Pixel Art Background */}
      <PixelartBackground isDarkMode={isDarkMode} />

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2 font-bold border-2 border-yellow-600 cursor-pointer"
        title="Toggle Theme"
      >
        <span className="text-lg">{isDarkMode ? '🌙' : '☀️'}</span>
        <span className="text-sm font-medium">{isDarkMode ? 'Dark' : 'Light'}</span>
      </button>

      {/* Your Desktop */}
      <Desktop />
    </>
  );
}
