import { useState, useEffect } from 'react';

export default function AnimatedSkills() {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'React.js', level: 90, color: 'from-blue-400 to-blue-600', icon: '⚛️' },
    { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600', icon: '🟢' },
    { name: 'Tailwind CSS', level: 88, color: 'from-cyan-400 to-cyan-600', icon: '🎨' },
    { name: 'JavaScript', level: 92, color: 'from-yellow-400 to-yellow-600', icon: '📜' },
    { name: 'MongoDB', level: 75, color: 'from-emerald-400 to-emerald-600', icon: '🍃' },
    { name: 'Git', level: 80, color: 'from-orange-400 to-orange-600', icon: '🌿' },
    { name: 'TypeScript', level: 70, color: 'from-blue-500 to-indigo-600', icon: '📘' },
    { name: 'Express.js', level: 82, color: 'from-gray-600 to-gray-800', icon: '🚂' },
    { name: 'CSS/Sass', level: 86, color: 'from-pink-400 to-pink-600', icon: '🌸' },
    { name: 'Python', level: 65, color: 'from-indigo-400 to-indigo-600', icon: '🐍' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSkills(skills.map((_, index) => index));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 dark:bg-gradient-to-br dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold dark:text-cyan-400 text-pink-600 mb-2">🌟 Technical Skills Garden 🌸</h3>
        <p className="text-sm dark:text-purple-300 text-pink-500">Watch my skills bloom! Hover over each flower to see details.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`relative dark:bg-gray-800 dark:border-2 dark:border-cyan-600 dark:hover:shadow-cyan-500/25 bg-white rounded-xl p-4 border-2 border-pink-200 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer ${
              visibleSkills.includes(index) ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {/* Flower representation */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl animate-bounce" style={{ animationDelay: `${index * 200}ms` }}>
                  {skill.icon}
                </span>
                <span className="font-semibold text-gray-800">{skill.name}</span>
              </div>
              <span className="text-sm font-bold text-pink-600">{skill.level}%</span>
            </div>

            {/* Animated skill bar */}
            <div className="relative h-6 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                style={{
                  width: visibleSkills.includes(index) ? `${skill.level}%` : '0%',
                  transitionDelay: `${index * 100 + 500}ms`
                }}
              >
                <div className="h-full flex items-center justify-end pr-2">
                  {skill.level > 20 && (
                    <span className="text-xs text-white font-bold animate-pulse">
                      {skill.level}%
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Hover details */}
            {hoveredSkill === skill.name && (
              <div className="absolute -top-2 -right-2 bg-yellow-300 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold animate-bounce">
                Blooming! 🌸
              </div>
            )}

            {/* Decorative elements */}
            <div className="absolute top-1 right-1 text-pink-200 text-xs animate-pulse">
              ✨
            </div>
            <div className="absolute bottom-1 left-1 text-purple-200 text-xs animate-pulse" style={{ animationDelay: '0.5s' }}>
              💫
            </div>
          </div>
        ))}
      </div>

      {/* Skill categories summary */}
      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="bg-gradient-to-r from-pink-100 to-pink-200 p-3 rounded-lg text-center">
          <div className="text-2xl mb-1">🎨</div>
          <div className="text-sm font-semibold text-pink-800">Frontend</div>
          <div className="text-xs text-pink-600">5 Skills</div>
        </div>
        <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-3 rounded-lg text-center">
          <div className="text-2xl mb-1">⚙️</div>
          <div className="text-sm font-semibold text-purple-800">Backend</div>
          <div className="text-xs text-purple-600">3 Skills</div>
        </div>
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-3 rounded-lg text-center">
          <div className="text-2xl mb-1">🛠️</div>
          <div className="text-sm font-semibold text-blue-800">Tools</div>
          <div className="text-xs text-blue-600">2 Skills</div>
        </div>
      </div>
    </div>
  );
}
