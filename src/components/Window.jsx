import Draggable from "react-draggable";
import { playClickSound } from "../utils/sound";

export default function Window({
  title,
  content,
  onClose,
  onMinimize,
  onFocus,
  zIndex,
  isMaximized,
  onToggleMaximize
}) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const windowWidth = Math.min(520, typeof window !== 'undefined' ? window.innerWidth - 24 : 520);
  const windowHeight = 520;
  const taskbarHeight = 64;
  
  const centerX = typeof window !== 'undefined' ? Math.max(12, (window.innerWidth - windowWidth) / 2) : 12;
  const centerY = typeof window !== 'undefined' ? Math.max(16, (window.innerHeight - windowHeight - taskbarHeight) / 2) : 16;

  const handleClose = (e) => {
    e.stopPropagation();
    playClickSound();
    onClose();
  };

  const handleMinimize = (e) => {
    e.stopPropagation();
    playClickSound();
    onMinimize();
  };

  const handleToggleMaximize = (e) => {
    e.stopPropagation();
    playClickSound();
    onToggleMaximize();
  };

  if (isMaximized || isMobile) {
    return (
      <div
        className="window fixed top-2 left-2 right-2 bottom-20 z-50 flex flex-col shadow-2xl animate-fade-in sm:top-3 sm:left-3 sm:right-3"
        style={{ zIndex, width: 'calc(100vw - 16px)', height: 'calc(100vh - 88px)' }}
        onMouseDown={onFocus}
      >
        <div className="title-bar flex items-center justify-between select-none cursor-default">
          <span className="flex items-center gap-2 truncate">
            <span className="text-xl animate-pulse">✨</span>
            <span className="font-bold truncate">{title}</span>
          </span>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {!isMobile && (
              <button 
                onClick={handleMinimize}
                className="hover:bg-amber-600 hover:border-amber-700 transition-colors"
                title="Minimize"
              >
                _
              </button>
            )}
            {!isMobile && (
              <button 
                onClick={handleToggleMaximize}
                className="hover:bg-amber-600 hover:border-amber-700 transition-colors text-xs"
                title="Restore"
              >
                ❐
              </button>
            )}
            <button 
              onClick={handleClose}
              className="hover:bg-red-600 hover:border-red-700 transition-colors px-2 py-0.5"
              title="Close"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-3 sm:p-6 text-gray-800 dark:text-gray-100 flex-1 overflow-y-auto">
          {content}
        </div>
      </div>
    );
  }

  return (
    <Draggable 
      handle=".title-bar" 
      cancel="button, a, input, textarea, select" 
      bounds="body"
      defaultPosition={{ x: centerX, y: centerY }}
    >
      <div
        className="window absolute w-[94vw] sm:w-[500px] shadow-2xl"
        style={{ zIndex }}
        onMouseDown={onFocus}
      >
        <div className="title-bar flex items-center justify-between select-none cursor-move">
          <span className="flex items-center gap-2 truncate">
            <span className="text-xl animate-pulse">✨</span>
            <span className="font-bold truncate">{title}</span>
          </span>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <button 
              onClick={handleMinimize}
              className="hover:bg-amber-600 hover:border-amber-700 transition-colors"
              title="Minimize"
            >
              _
            </button>
            <button 
              onClick={handleToggleMaximize}
              className="hover:bg-amber-600 hover:border-amber-700 transition-colors text-xs"
              title="Maximize"
            >
              🗖
            </button>
            <button 
              onClick={handleClose}
              className="hover:bg-red-600 hover:border-red-700 transition-colors px-2 py-0.5"
              title="Close"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-6 text-gray-800 dark:text-gray-100 max-h-[70vh] sm:max-h-[460px] overflow-y-auto">
          <div className="space-y-4">
            {content}
          </div>
        </div>
      </div>
    </Draggable>
  );
}
