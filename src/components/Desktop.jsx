import Icon from "./Icon";
import Window from "./Window";
import Taskbar from "./Taskbar";
import { windowsData } from "../data/windowsData";
import { useEffect, useState, useRef } from "react";

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState([]);
  const [zIndex, setZIndex] = useState(10);
  const menuRef = useRef(null);

  // Auto-open About window on initial load for instant recruiter engagement
  useEffect(() => {
    setOpenWindows([
      { key: 'about', z: 10, isMinimized: false, isMaximized: false }
    ]);
  }, []);

  // Open a new window or focus existing
  const openWindow = (key) => {
    const existing = openWindows.find((w) => w.key === key);

    if (!existing) {
      setOpenWindows((prev) => [
        ...prev,
        { key, z: zIndex, isMinimized: false, isMaximized: false }
      ]);
      setZIndex((prev) => prev + 1);
    } else {
      // Un-minimize and bring to front
      setOpenWindows((prev) =>
        prev.map((w) =>
          w.key === key ? { ...w, z: zIndex, isMinimized: false } : w
        )
      );
      setZIndex((prev) => prev + 1);
    }
  };

  // Close window
  const closeWindow = (key) => {
    setOpenWindows((prev) => prev.filter((w) => w.key !== key));
  };

  // Toggle minimize
  const toggleMinimize = (key) => {
    setOpenWindows((prev) =>
      prev.map((w) =>
        w.key === key ? { ...w, isMinimized: !w.isMinimized } : w
      )
    );
  };

  // Toggle maximize
  const toggleMaximize = (key) => {
    setOpenWindows((prev) =>
      prev.map((w) =>
        w.key === key ? { ...w, isMaximized: !w.isMaximized } : w
      )
    );
  };

  // Bring window to front
  const bringToFront = (key) => {
    setOpenWindows((prev) =>
      prev.map((w) =>
        w.key === key ? { ...w, z: zIndex, isMinimized: false } : w
      )
    );
    setZIndex((prev) => prev + 1);
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden select-none">

      {/* ================= DESKTOP ICONS ================= */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 absolute left-4 sm:left-8 top-4 sm:top-8 max-h-[calc(100vh-100px)] overflow-y-auto p-2">
        {Object.keys(windowsData).map((key) => (
          <Icon
            key={key}
            label={windowsData[key].title}
            onClick={() => openWindow(key)}
          />
        ))}
      </div>

      {/* ================= OPEN WINDOWS ================= */}
      {openWindows.map(({ key, z, isMinimized, isMaximized }) => {
        if (isMinimized || !windowsData[key]) return null;
        return (
          <Window
            key={key}
            title={windowsData[key].title}
            content={windowsData[key].content}
            onClose={() => closeWindow(key)}
            onMinimize={() => toggleMinimize(key)}
            onToggleMaximize={() => toggleMaximize(key)}
            isMaximized={isMaximized}
            onFocus={() => bringToFront(key)}
            zIndex={z}
          />
        );
      })}

      {/* ================= TASKBAR ================= */}
      <Taskbar
        openWindows={openWindows}
        openWindow={openWindow}
        toggleMinimize={toggleMinimize}
        windowsData={windowsData}
      />
    </div>
  );
}
