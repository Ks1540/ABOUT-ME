import { windowsData } from "../data/windowsData";
import { playClickSound } from "../utils/sound";

export default function StartMenu({ openWindow, closeMenu }) {

  const handleClick = (key) => {
    playClickSound();
    openWindow(key);
    closeMenu();
  };

  return (
    <div className="
      w-80
      backdrop-blur-xl bg-gradient-to-br from-pink-50/95 to-purple-50/95
      border-2 border-pink-200/60 rounded-2xl
      shadow-2xl shadow-pink-200/30
      animate-slide-up overflow-hidden
    ">
      {/* Header */}
      <div className="
        bg-gradient-to-r from-pink-300 to-purple-300 
        text-white p-4 font-bold text-lg
        border-b-2 border-pink-200/60
      ">
        <span className="flex items-center gap-2">
          <span className="text-2xl animate-bounce">🌸</span>
          <span className="drop-shadow-lg">Kajol's Portfolio</span>
        </span>
      </div>
      
      {/* Menu Items */}
      <div className="p-3 space-y-2 max-h-96 overflow-y-auto">
        {Object.keys(windowsData).map((key) => (
          <button
            key={key}
            onClick={() => handleClick(key)}
            className="
              w-full text-left px-4 py-3 rounded-xl
              text-pink-900 font-semibold text-sm
              hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100
              hover:text-pink-700 hover:scale-[1.02] hover:shadow-lg hover:rotate-1
              transition-all duration-300 ease-out
              flex items-center gap-3
              group border border-pink-100/50 hover:border-pink-200/70
            "
          >
            <span className="text-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
              {key === 'about' && '💖'}
              {key === 'resume' && '📄'}
              {key === 'projects' && '🎀'}
              {key === 'education' && '📚'}
              {key === 'experience' && '💼'}
              {key === 'terminal' && '💻'}
              {key === 'contact' && '📬'}
            </span>
            <span className="group-hover:text-pink-600">{windowsData[key].title}</span>
            <span className="ml-auto text-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              ✨
            </span>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="
        border-t-2 border-pink-200/60 p-4 
        text-xs text-pink-600 text-center font-semibold
        bg-gradient-to-r from-pink-100/50 to-purple-100/50
      ">
        <span className="flex items-center justify-center gap-2">
          <span>💕</span>
          Click to explore my amazing portfolio!
          <span>💕</span>
        </span>
      </div>
    </div>
  );
}