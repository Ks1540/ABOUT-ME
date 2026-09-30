import { useEffect, useState, useRef } from "react";
import StartMenu from "./StartMenu";
import { playClickSound } from "../utils/sound";

export default function Taskbar({ openWindows, openWindow, toggleMinimize, windowsData }) {
  // CLOCK STATE
  const [time, setTime] = useState("");

  // START MENU STATE
  const [isStartOpen, setIsStartOpen] = useState(false);

  // REF FOR OUTSIDE CLICK
  const menuRef = useRef(null);

  // CLOCK EFFECT
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // CLOSE START MENU WHEN CLICKING OUTSIDE
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsStartOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="
        absolute bottom-0 left-0 w-full 
        bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        border-t-4 border-amber-400 dark:border-amber-600
        flex justify-between items-center px-2 sm:px-4 h-16 z-50
        shadow-[0_-6px_20px_rgba(0,0,0,0.3)]
      "
    >
      {/* LEFT SIDE */}
      <div className="flex gap-2 sm:gap-3 items-center flex-1 overflow-x-auto py-1">
        {/* START BUTTON */}
        <button
          onClick={() => {
            playClickSound();
            setIsStartOpen(!isStartOpen);
          }}
          className={`
            px-4 sm:px-6 py-2 border-2 font-bold text-xs sm:text-sm
            transition-all duration-200 ease-out flex-shrink-0
            shadow-md flex items-center gap-1.5 sm:gap-2 rounded-sm
            ${
              isStartOpen
                ? "bg-gradient-to-b from-amber-400 to-amber-600 text-gray-900 border-amber-700 shadow-lg translate-y-0.5"
                : "bg-gradient-to-b from-amber-300 to-amber-500 text-gray-900 border-amber-600 hover:from-amber-200 hover:to-amber-400 hover:shadow-lg"
            }
          `}
        >
          <span className="text-base">🌸</span>
          <span>Start</span>
        </button>

        {/* OPEN WINDOWS IN TASKBAR */}
        <div className="flex gap-1.5 sm:gap-2 overflow-x-auto">
          {openWindows.map((w) => {
            const title = windowsData?.[w.key]?.title || w.key;
            return (
              <button
                key={w.key}
                onClick={() => {
                  playClickSound();
                  if (w.isMinimized) {
                    toggleMinimize(w.key);
                  } else {
                    openWindow(w.key);
                  }
                }}
                className={`
                  px-2.5 sm:px-3.5 py-1.5 border-2 text-xs font-bold cursor-pointer
                  transition-all duration-200 ease-out shadow-sm rounded-sm flex items-center gap-1.5 max-w-[140px] sm:max-w-[180px] truncate
                  ${
                    w.isMinimized
                      ? "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-400 opacity-80 hover:opacity-100"
                      : "bg-gradient-to-b from-amber-300 to-amber-500 text-gray-900 border-amber-600 hover:from-amber-200 hover:to-amber-400"
                  }
                `}
                title={title}
              >
                <span className="text-xs">✨</span>
                <span className="truncate">{title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* CLOCK & QUICK TRAY */}
      <div className="flex items-center gap-2 flex-shrink-0 ml-2">
        <div
          className="text-xs font-bold text-gray-900 dark:text-gray-100 bg-gradient-to-b from-amber-300 to-amber-500 dark:from-gray-800 dark:to-gray-900 px-3 sm:px-4 py-1.5 border-2 border-amber-600 dark:border-gray-700 shadow-sm rounded-sm flex items-center gap-1.5"
        >
          <span>⏰</span>
          <span>{time}</span>
        </div>
      </div>

      {/* START MENU POPUP */}
      {isStartOpen && (
        <div className="fixed bottom-20 left-4 sm:left-6 z-50 animate-slide-up" ref={menuRef}>
          <StartMenu
            openWindow={openWindow}
            closeMenu={() => setIsStartOpen(false)}
          />
        </div>
      )}
    </div>
  );
}