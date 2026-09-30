import { useState } from 'react';

export default function PersonalityQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  const questions = [
    {
      question: "What's your favorite color palette?",
      options: [
        { text: "Pink & Purple 💖", type: "frontend" },
        { text: "Blue & Green 💙", type: "backend" },
        { text: "Rainbow 🌈", type: "fullstack" },
        { text: "Black & White 🖤", type: "devops" }
      ]
    },
    {
      question: "How do you prefer to solve problems?",
      options: [
        { text: "Make it look beautiful ✨", type: "frontend" },
        { text: "Build efficient systems ⚙️", type: "backend" },
        { text: "Do everything! 🚀", type: "fullstack" },
        { text: "Automate everything 🤖", type: "devops" }
      ]
    },
    {
      question: "What's your ideal workspace?",
      options: [
        { text: "Creative design studio 🎨", type: "frontend" },
        { text: "Quiet server room 🖥️", type: "backend" },
        { text: "Startup office ☕", type: "fullstack" },
        { text: "Command center 📊", type: "devops" }
      ]
    },
    {
      question: "Choose your spirit animal:",
      options: [
        { text: "Butterfly 🦋", type: "frontend" },
        { text: "Owl 🦉", type: "backend" },
        { text: "Unicorn 🦄", type: "fullstack" },
        { text: "Phoenix 🔥", type: "devops" }
      ]
    }
  ];

  const results = {
    frontend: {
      title: "Frontend Developer 🎨",
      description: "You love creating beautiful user interfaces and amazing user experiences!",
      skills: ["React", "CSS", "UI/UX", "Animation"],
      emoji: "🦋",
      color: "pink"
    },
    backend: {
      title: "Backend Developer ⚙️",
      description: "You enjoy building robust systems and solving complex logic puzzles!",
      skills: ["Node.js", "Database", "APIs", "Security"],
      emoji: "🦉",
      color: "blue"
    },
    fullstack: {
      title: "Full Stack Developer 🚀",
      description: "You're a versatile developer who can do it all!",
      skills: ["Everything!", "React", "Node.js", "Database"],
      emoji: "🦄",
      color: "purple"
    },
    devops: {
      title: "DevOps Engineer 🔥",
      description: "You love automation, deployment, and keeping everything running smoothly!",
      skills: ["Docker", "CI/CD", "Cloud", "Monitoring"],
      emoji: "🔥",
      color: "orange"
    }
  };

  const createSparkles = () => {
    const newSparkles = [];
    for (let i = 0; i < 10; i++) {
      newSparkles.push({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10
      });
    }
    setSparkles(newSparkles);
    setTimeout(() => setSparkles([]), 2000);
  };

  const handleAnswer = (type) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
      createSparkles();
    }
  };

  const getResult = () => {
    const answerCounts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {});
    
    const result = Object.keys(answerCounts).reduce((a, b) => 
      answerCounts[a] > answerCounts[b] ? a : b
    );
    
    return results[result] || results.fullstack;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setSparkles([]);
  };

  if (showResult) {
    const result = getResult();
    return (
      <div className="p-6 dark:bg-gradient-to-br dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl relative overflow-hidden">
        {sparkles.map(sparkle => (
          <div
            key={sparkle.id}
            className="absolute animate-ping"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              fontSize: `${sparkle.size}px`
            }}
          >
            ✨
          </div>
        ))}
        
        <div className="text-center relative z-10">
          <div className="text-6xl mb-4 animate-bounce">{result.emoji}</div>
          <h3 className="text-2xl font-bold dark:text-cyan-400 text-pink-600 mb-2">{result.title}</h3>
          <p className="dark:text-gray-200 text-gray-700 mb-4">{result.description}</p>
          
          <div className="mb-6">
            <h4 className="font-semibold dark:text-purple-300 text-purple-600 mb-2">Your Core Skills:</h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {result.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 dark:bg-gradient-to-r dark:from-cyan-600 dark:to-blue-600 dark:text-white bg-gradient-to-r from-pink-200 to-purple-200 text-pink-800 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <button
            onClick={resetQuiz}
            className="px-6 py-3 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            Play Again 🔄
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 dark:bg-gradient-to-br dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold dark:text-cyan-400 text-pink-600 mb-2">🌟 Developer Personality Quiz 🌟</h3>
        <p className="text-sm dark:text-purple-300 text-pink-500">Discover your developer type!</p>
        <div className="flex justify-center gap-2 mt-2">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index <= currentQuestion ? 'dark:bg-cyan-400 bg-pink-400' : 'dark:bg-purple-600 bg-pink-200'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold dark:text-purple-300 text-purple-600 mb-4">
          Question {currentQuestion + 1}: {questions[currentQuestion].question}
        </h4>
        
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.type)}
              className="w-full p-4 text-left dark:bg-gray-800 dark:border-2 dark:border-cyan-600 dark:hover:border-cyan-400 dark:hover:shadow-cyan-500/25 bg-white border-2 border-pink-200 rounded-xl hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/25 hover:scale-[1.02] transition-all duration-300 group"
            >
              <span className="text-lg dark:text-gray-100 text-gray-800 group-hover:scale-110 inline-block transition-transform duration-200">
                {option.text}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
