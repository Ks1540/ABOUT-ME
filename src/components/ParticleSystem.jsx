import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ParticleSystem() {
  const [particles, setParticles] = useState([]);
  const { isDarkMode, toggleTheme } = useTheme();

  const particleEmojis = ['🌸', '✨', '💫', '🌺', '🌷', '🦋'];

  useEffect(() => {
    const createParticle = () => {
      const newParticle = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 50,
        emoji: particleEmojis[Math.floor(Math.random() * particleEmojis.length)],
        size: Math.random() * 20 + 15,
        speed: Math.random() * 2 + 1,
        swaySpeed: Math.random() * 2 + 1,
        swayAmount: Math.random() * 50 + 20,
        opacity: Math.random() * 0.6 + 0.4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 4
      };

      setParticles(prev => [...prev, newParticle]);

      // Remove particle after it floats up
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 15000);
    };

    // Create particles periodically
    const interval = setInterval(createParticle, 2000);

    // Create initial particles
    for (let i = 0; i < 5; i++) {
      setTimeout(createParticle, i * 400);
    }

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y - particle.speed,
        x: particle.x + Math.sin(Date.now() / 1000 * particle.swaySpeed) * particle.swayAmount * 0.01,
        rotation: particle.rotation + particle.rotationSpeed
      })));
    };

    const animationFrame = requestAnimationFrame(function animate() {
      updateParticles();
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <>
      {/* Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-10 transition-opacity duration-1000"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            fontSize: `${particle.size}px`,
            opacity: particle.opacity,
            transform: `rotate(${particle.rotation}deg)`,
            transition: 'none'
          }}
        >
          {particle.emoji}
        </div>
      ))}

      {/* Theme Toggle Button */}
      <button
        onClick={handleThemeToggle}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center gap-2"
      >
        <span className="text-lg">{isDarkMode ? '🌙' : '☀️'}</span>
        <span className="text-sm font-semibold">{isDarkMode ? 'Night' : 'Day'}</span>
      </button>

      {/* Theme Styles */}
      <style jsx>{`
        .dark-mode {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%) !important;
        }
        .dark-mode .window {
          background: #2a2a3e !important;
          border-color: #4a4a6e !important;
          color: #e0e0e0 !important;
        }
        .dark-mode .title-bar {
          background: linear-gradient(135deg, #4a4a6e 0%, #6a6a8e 100%) !important;
        }
      `}</style>
    </>
  );
}
