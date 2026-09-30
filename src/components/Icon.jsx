import { getPixelIcon } from './PixelIcons';
import { playClickSound } from '../utils/sound';

export default function Icon({ label, onClick }) {

  const handleClick = (e) => {
    playClickSound();
    onClick();
  };



  return (
    <div 
      className="text-center group cursor-pointer transition-all duration-300 ease-out animate-fade-in"
      onClick={handleClick}
    >
      {/* Retro frame with pixel art icon */}
      <div className="
        relative inline-block
        mb-3 transition-all duration-300 ease-out transform
        group-hover:scale-110 group-active:translate-y-0.5
      ">
        {/* Outer frame */}
        <div className="
          relative p-3
          border-4
          shadow-lg
        "
        style={{
          borderColor: '#d97706',
          background: 'linear-gradient(to bottom, #fbbf24, #f59e0b)',
          borderStyle: 'solid',
          boxShadow: '-4px 4px 0 rgba(0, 0, 0, 0.3), -2px 2px 0 rgba(0, 0, 0, 0.1)',
        }}>
          {/* Inner highlight */}
          <div className="
            absolute inset-0
            pointer-events-none
            opacity-60
          "
          style={{
            borderColor: '#fcd34d',
            border: '2px solid #fcd34d',
            top: '2px',
            left: '2px',
            right: '2px',
            bottom: '2px',
          }}></div>

          {/* Icon content */}
          <div className="relative z-10">
            {getPixelIcon(label)}
          </div>
        </div>
      </div>
      
      {/* Label */}
      <div className="icon-label">
        {label}
      </div>
    </div>
  );
}
