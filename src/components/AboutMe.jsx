import { useState } from 'react';

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState('bio');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kajolsunar1292@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Header Profile Section */}
      <div className="relative p-4 rounded-xl bg-gradient-to-r from-amber-100/70 via-pink-100/60 to-purple-100/70 dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-800 border-2 border-amber-300 dark:border-gray-700 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          {/* Avatar with Status */}
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-400 dark:border-amber-500 shadow-md transform hover:scale-105 hover:rotate-2 transition-all duration-300 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
              <img
                src="/kajol.jpeg"
                alt="Kajol Sunar"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.innerText = 'KS';
                    e.currentTarget.parentElement.className += ' text-white text-2xl font-black';
                  }
                }}
              />
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white dark:border-gray-800"></span>
            </span>
          </div>

          {/* Details */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h2 className="text-2xl font-black text-gray-800 dark:text-gray-100">Kajol Sunar</h2>
              <span className="px-2.5 py-0.5 text-[11px] font-bold bg-amber-200 dark:bg-amber-900/60 text-amber-900 dark:text-amber-300 rounded-full border border-amber-300 dark:border-amber-700">
                v2026.1
              </span>
            </div>
            <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 mt-0.5">
              B.Tech CSE Student • Aspiring Software Engineer
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-1.5 mt-2 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Available for Software Engineering Roles & Internships</span>
            </div>
          </div>
        </div>
      </div>

      {/* Retro Navigation Tabs */}
      <div className="flex gap-1.5 p-1 bg-amber-200/50 dark:bg-gray-800/80 rounded-lg border border-amber-300 dark:border-gray-700 overflow-x-auto">
        <button
          onClick={() => setActiveTab('bio')}
          className={`flex-1 min-w-[75px] py-1.5 px-2 rounded-md text-xs font-bold transition-all flex items-center justify-center gap-1 ${
            activeTab === 'bio'
              ? 'bg-amber-400 dark:bg-amber-500 text-gray-900 shadow-sm scale-102 border border-amber-500'
              : 'text-gray-700 dark:text-gray-300 hover:bg-amber-200 dark:hover:bg-gray-700'
          }`}
        >
          <span>👤</span> Bio
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`flex-1 min-w-[75px] py-1.5 px-2 rounded-md text-xs font-bold transition-all flex items-center justify-center gap-1 ${
            activeTab === 'skills'
              ? 'bg-amber-400 dark:bg-amber-500 text-gray-900 shadow-sm scale-102 border border-amber-500'
              : 'text-gray-700 dark:text-gray-300 hover:bg-amber-200 dark:hover:bg-gray-700'
          }`}
        >
          <span>🛠️</span> Arsenal
        </button>
        <button
          onClick={() => setActiveTab('values')}
          className={`flex-1 min-w-[75px] py-1.5 px-2 rounded-md text-xs font-bold transition-all flex items-center justify-center gap-1 ${
            activeTab === 'values'
              ? 'bg-amber-400 dark:bg-amber-500 text-gray-900 shadow-sm scale-102 border border-amber-500'
              : 'text-gray-700 dark:text-gray-300 hover:bg-amber-200 dark:hover:bg-gray-700'
          }`}
        >
          <span>🎯</span> Focus
        </button>
        <button
          onClick={() => setActiveTab('trivia')}
          className={`flex-1 min-w-[75px] py-1.5 px-2 rounded-md text-xs font-bold transition-all flex items-center justify-center gap-1 ${
            activeTab === 'trivia'
              ? 'bg-amber-400 dark:bg-amber-500 text-gray-900 shadow-sm scale-102 border border-amber-500'
              : 'text-gray-700 dark:text-gray-300 hover:bg-amber-200 dark:hover:bg-gray-700'
          }`}
        >
          <span>✨</span> Facts
        </button>
      </div>

      {/* Tab Content */}
      <div className="min-h-[220px]">
        {/* Tab 1: Bio */}
        {activeTab === 'bio' && (
          <div className="space-y-3 animate-fade-in">
            <div className="p-3 bg-white/70 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 leading-relaxed shadow-sm">
              <span className="font-bold text-amber-700 dark:text-amber-400">👋 Hello!</span> I am a Computer Science student with hands-on internship experience in full-stack web applications, UI/UX design, and AI-driven platforms. I love building responsive, user-friendly digital products from scratch — from pixel-perfect frontend interfaces to robust backend APIs.
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-2.5 rounded-lg bg-blue-50/70 dark:bg-gray-800/80 border border-blue-200 dark:border-blue-900/40">
                <div className="text-[11px] font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                  <span>📍</span> Location
                </div>
                <div className="text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5">
                  Dimapur, Nagaland
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-purple-50/70 dark:bg-gray-800/80 border border-purple-200 dark:border-purple-900/40">
                <div className="text-[11px] font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1">
                  <span>🎓</span> Degree
                </div>
                <div className="text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5">
                  B.Tech CSE (Expected 2027)
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-pink-50/70 dark:bg-gray-800/80 border border-pink-200 dark:border-pink-900/40">
                <div className="text-[11px] font-bold text-pink-600 dark:text-pink-400 flex items-center gap-1">
                  <span>💼</span> Experience
                </div>
                <div className="text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5">
                  TechSoul & TechieHelp Intern
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-50/70 dark:bg-gray-800/80 border border-emerald-200 dark:border-emerald-900/40">
                <div className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <span>🚀</span> Shipped
                </div>
                <div className="text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5">
                  Nexora, Showmint, TRIS
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Arsenal (Skills) */}
        {activeTab === 'skills' && (
          <div className="space-y-2.5 animate-fade-in text-xs">
            <div className="p-3 bg-white/70 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <span className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 mb-1.5">
                <span>💻</span> Core Languages
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['JavaScript (ES6+)', 'TypeScript', 'Python', 'HTML5', 'CSS3'].map((s) => (
                  <span key={s} className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded text-[11px] font-medium border border-blue-200 dark:border-blue-800">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3 bg-white/70 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <span className="font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1.5 mb-1.5">
                <span>🎨</span> Frontend & UI/UX
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['React 19', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vite', 'UI/UX Prototyping'].map((s) => (
                  <span key={s} className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded text-[11px] font-medium border border-purple-200 dark:border-purple-800">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3 bg-white/70 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1.5">
                <span>⚙️</span> Backend, AI & Testing
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Node.js', 'Express', 'FastAPI', 'REST APIs', 'scikit-learn', 'OpenCV', 'Playwright', 'Git / GitHub'].map((s) => (
                  <span key={s} className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded text-[11px] font-medium border border-emerald-200 dark:border-emerald-800">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Values & Philosophy */}
        {activeTab === 'values' && (
          <div className="space-y-2.5 animate-fade-in text-xs">
            <div className="p-3 bg-white/70 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 flex gap-3">
              <div className="text-xl">✨</div>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-gray-100">Design Meets Functionality</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-0.5 leading-relaxed">
                  I believe software should be delightfully intuitive, visually captivating, and accessible to everyone.
                </p>
              </div>
            </div>

            <div className="p-3 bg-white/70 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 flex gap-3">
              <div className="text-xl">🤖</div>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-gray-100">AI-Powered Engineering</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-0.5 leading-relaxed">
                  Excited about combining machine learning, automated exploration agents, and intelligent UX to build next-gen tools.
                </p>
              </div>
            </div>

            <div className="p-3 bg-white/70 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 flex gap-3">
              <div className="text-xl">📦</div>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-gray-100">Independent Shipper</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-0.5 leading-relaxed">
                  Driven by shipping complete end-to-end production-style projects from architecture to deployment.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Fun Facts */}
        {activeTab === 'trivia' && (
          <div className="space-y-2.5 animate-fade-in text-xs">
            <div className="p-3 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-xl border border-pink-200 dark:border-gray-700">
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span>🌸</span>
                  <span>Love retro aesthetics, pixel art, and playful UI interactions.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>☕</span>
                  <span>Fuel complex debugging sessions with good music and iced coffee.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>⚡</span>
                  <span>Obsessed with high performance, smooth 60fps animations, and clean layouts.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🚀</span>
                  <span>Always curious and experimenting with new frameworks and AI tools.</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-2 border-t border-amber-200 dark:border-gray-700 flex flex-wrap items-center justify-between gap-2">
        <button
          onClick={handleCopyEmail}
          className="px-3 py-1.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-xs rounded-lg shadow-sm transition-all hover:scale-105 flex items-center gap-1.5 border border-amber-500"
        >
          <span>{copied ? '✅' : '📋'}</span>
          <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
        </button>

        <div className="flex flex-wrap gap-2">
          <a
            href="https://www.linkedin.com/in/kajol-sunar-ks/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-[#0A66C2] hover:bg-[#004182] text-white font-bold text-xs rounded-lg shadow-sm transition-all hover:scale-105 flex items-center gap-1.5"
          >
            <span>LinkedIn ↗</span>
          </a>
          <a
            href="https://github.com/Ks1540"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-gray-900 text-white dark:bg-gray-700 hover:bg-black font-bold text-xs rounded-lg shadow-sm transition-all hover:scale-105 flex items-center gap-1.5"
          >
            <span>GitHub ↗</span>
          </a>
          <a
            href="/Kajol_Sunar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900 font-bold text-xs rounded-lg shadow-sm transition-all hover:scale-105 flex items-center gap-1.5 border border-amber-600"
          >
            <span>Resume PDF ↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
