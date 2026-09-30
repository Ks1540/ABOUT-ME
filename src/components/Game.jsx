import { useState, useEffect } from "react";

export default function Game() {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [flowers, setFlowers] = useState([]);
  const [gameActive, setGameActive] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [combo, setCombo] = useState(0);

  const flowersList = ['🌸', '🌺', '🌷', '🌹', '🌻', '🌼', '💐', '🏵️'];

  // Generate random flower
  const generateFlower = () => {
    const newFlower = {
      id: Date.now(),
      x: Math.random() * 80 + 10,
      y: Math.random() * 70 + 15,
      emoji: flowersList[Math.floor(Math.random() * flowersList.length)],
      points: Math.floor(Math.random() * 3) + 1,
      size: Math.random() * 20 + 30
    };
    setFlowers(prev => [...prev, newFlower]);
    
    // Remove flower after some time
    setTimeout(() => {
      setFlowers(prev => prev.filter(f => f.id !== newFlower.id));
    }, 2000 - (score * 50)); // Flowers disappear faster as score increases
  };

  // Start game
  const startGame = () => {
    setScore(0);
    setTime(30);
    setFlowers([]);
    setGameActive(true);
    setCombo(0);
  };

  // Handle flower click
  const catchFlower = (flowerId, points) => {
    setFlowers(prev => prev.filter(f => f.id !== flowerId));
    setScore(prev => prev + points + combo);
    setCombo(prev => Math.min(prev + 1, 10)); // Max combo of 10
    
    // Create sparkle effect
    createSparkles();
  };

  // Create sparkle effects
  const createSparkles = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '✨';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1500);
      }, i * 100);
    }
  };

  // Timer effect
  useEffect(() => {
    if (!gameActive || time <= 0) {
      if (time <= 0) {
        setGameActive(false);
        if (score > highScore) {
          setHighScore(score);
        }
      }
      return;
    }

    const timer = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameActive, time, score, highScore]);

  // Flower generation effect
  useEffect(() => {
    if (!gameActive) return;

    const interval = setInterval(() => {
      generateFlower();
    }, Math.max(800 - score * 10, 300)); // Generate flowers faster as score increases

    return () => clearInterval(interval);
  }, [gameActive, score]);

  // Reset combo if no flowers clicked for 2 seconds
  useEffect(() => {
    if (combo > 0) {
      const timeout = setTimeout(() => setCombo(0), 2000);
      return () => clearTimeout(timeout);
    }
  }, [combo, flowers]);

  return (
    <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-pink-600 mb-2">🌸 Flower Catcher 🌸</h3>
        <p className="text-sm text-pink-500">Catch the beautiful flowers before they fade away!</p>
      </div>

      {/* Game Stats */}
      <div className="flex justify-between items-center mb-4 bg-white/80 rounded-lg p-3">
        <div className="text-center">
          <div className="text-2xl font-bold text-pink-600">{score}</div>
          <div className="text-xs text-pink-500">Score</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">{time}s</div>
          <div className="text-xs text-purple-500">Time</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-500">{combo}x</div>
          <div className="text-xs text-yellow-600">Combo</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{highScore}</div>
          <div className="text-xs text-blue-500">Best</div>
        </div>
      </div>

      {/* Game Area */}
      <div className="relative h-64 bg-gradient-to-b from-sky-100 to-green-100 rounded-xl border-4 border-pink-200 overflow-hidden">
        {!gameActive ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🌸</div>
              <h3 className="text-2xl font-bold mb-2">
                {time <= 0 ? 'Game Over!' : 'Ready to Play?'}
              </h3>
              {time <= 0 && (
                <div className="mb-4">
                  <p className="text-xl">Final Score: {score}</p>
                  {score === highScore && score > 0 && (
                    <p className="text-lg text-yellow-300">🏆 New High Score! 🏆</p>
                  )}
                </div>
              )}
              <button
                onClick={startGame}
                className="px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                {time <= 0 ? 'Play Again' : 'Start Game'}
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Flowers */}
            {flowers.map(flower => (
              <button
                key={flower.id}
                onClick={() => catchFlower(flower.id, flower.points)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform cursor-pointer animate-bounce"
                style={{
                  left: `${flower.x}%`,
                  top: `${flower.y}%`,
                  fontSize: `${flower.size}px`
                }}
              >
                {flower.emoji}
                {flower.points > 1 && (
                  <span className="absolute -top-2 -right-2 text-xs bg-yellow-400 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {flower.points}
                  </span>
                )}
              </button>
            ))}
            
            {/* Combo indicator */}
            {combo > 3 && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-yellow-400 animate-pulse">
                🔥 {combo}x Combo! 🔥
              </div>
            )}
          </>
        )}
      </div>

      {/* Instructions */}
      <div className="mt-4 text-center text-xs text-pink-600">
        <p>Click on flowers to catch them! Build combos for bonus points! 🌟</p>
      </div>
    </div>
  );
}
