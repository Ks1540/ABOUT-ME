import { useState, useEffect } from 'react';

export default function InteractiveTimeline() {
  const [activeEvent, setActiveEvent] = useState(null);
  const [visibleEvents, setVisibleEvents] = useState([]);

  const timelineEvents = [
    {
      year: '2023',
      title: 'Started B.Tech CSE 🎓',
      description: 'Began Computer Science & Engineering degree with strong focus on software engineering',
      type: 'education',
      icon: '🎓',
      color: 'from-blue-400 to-blue-600'
    },
    {
      year: '2025',
      title: 'App Development Intern @ TechieHelp 💼',
      description: 'Strengthened core front-end & app development skills delivering structured assignments',
      type: 'experience',
      icon: '💼',
      color: 'from-green-400 to-green-600'
    },
    {
      year: '2025',
      title: 'Nexora & Showmint Projects 🚀',
      description: 'Built drone e-commerce platform & smart theatre ticket booking system with AI features',
      type: 'project',
      icon: '🚀',
      color: 'from-purple-400 to-purple-600'
    },
    {
      year: '2026',
      title: 'UI/UX & AI Intern @ TechSoul 🤖',
      description: 'Contributed to UXVision AI with Playwright browser agent & OpenCV/scikit-learn scoring',
      type: 'experience',
      icon: '🤖',
      color: 'from-amber-400 to-amber-600'
    },
    {
      year: '2026',
      title: 'TRIS Meghalaya Travel Boutique 🌿',
      description: 'Crafted immersive travel platform with scroll-bound parallax hero & fair-trade craft store',
      type: 'project',
      icon: '🌿',
      color: 'from-pink-400 to-pink-600'
    },
    {
      year: '2027',
      title: 'B.Tech CSE Graduation (Expected) 🌟',
      description: 'Completing Bachelor of Technology in Computer Science & Engineering',
      type: 'education',
      icon: '🌟',
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleEvents(timelineEvents.map((_, index) => index));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 dark:bg-gradient-to-br dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold dark:text-cyan-400 text-pink-600 mb-2">🌟 My Journey Timeline 🌸</h3>
        <p className="text-sm dark:text-purple-300 text-pink-500">Click on any event to see details!</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Main timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full dark:bg-gradient-to-b dark:from-cyan-400 dark:via-purple-400 dark:to-cyan-400 bg-gradient-to-b from-pink-300 via-purple-300 to-pink-300 rounded-full"></div>

        {/* Timeline events */}
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div
              key={event.year + index}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              } ${visibleEvents.includes(index) ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Event card */}
              <div
                className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 order-1'}`}
              >
                <div
                  className="dark:bg-gray-800 dark:border-2 dark:border-cyan-600 dark:hover:shadow-cyan-500/25 bg-white p-4 rounded-xl border-2 border-pink-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => setActiveEvent(activeEvent === index ? null : index)}
                >
                  <div className="flex items-center gap-2 mb-2" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                    <span className="text-2xl">{event.icon}</span>
                    <span className="font-bold dark:text-cyan-400 text-purple-600">{event.year}</span>
                  </div>
                  <h4 className="font-semibold dark:text-gray-100 text-gray-800 mb-1 text-sm">{event.title}</h4>
                  <p className="text-xs dark:text-gray-300 text-gray-600">{event.description}</p>
                  
                  {/* Expanded details */}
                  {activeEvent === index && (
                    <div className="mt-3 pt-3 border-t border-pink-200">
                      <div className="flex items-center gap-2 mb-2" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                        <span className={`px-2 py-1 bg-gradient-to-r ${event.color} text-white rounded-full text-xs`}>
                          {event.type}
                        </span>
                        <span className="text-xs text-pink-500">Click to collapse</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {event.type === 'education' && '📚 Learning and growing!'}
                        {event.type === 'experience' && '💪 Building real-world experience!'}
                        {event.type === 'project' && '🎯 Creating amazing things!'}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 order-2">
                <div className={`w-8 h-8 bg-gradient-to-r ${event.color} rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-pulse`}>
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline stats */}
      <div className="mt-8 p-4 dark:bg-gray-800/50 bg-white/50 rounded-lg">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold dark:text-cyan-400 text-pink-600">2</div>
            <div className="text-sm dark:text-gray-300 text-gray-600">Internships</div>
          </div>
          <div>
            <div className="text-2xl font-bold dark:text-cyan-400 text-pink-600">3+</div>
            <div className="text-sm dark:text-gray-300 text-gray-600">Featured Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold dark:text-cyan-400 text-pink-600">2027</div>
            <div className="text-sm dark:text-gray-300 text-gray-600">Graduation Year</div>
          </div>
        </div>
      </div>
    </div>
  );
}
