import { useState, useRef, useEffect } from 'react';

export default function Terminal({ openWindow }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'KajolOS Command Prompt [Version 2026.1]' },
    { type: 'system', text: 'Type "help" to view available commands.\n' }
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const raw = input.trim();
      const cmd = raw.toLowerCase();
      
      const newHistory = [...history, { type: 'user', text: `kajol@portfolio:~$ ${raw}` }];
      if (raw) {
        setCommandHistory((prev) => [...prev, raw]);
        setHistoryIndex(-1);
      }

      switch (cmd) {
        case 'help':
          newHistory.push({
            type: 'output',
            text: `Available Commands:
  • about       - View quick bio & background
  • skills      - List technical stack & tools
  • projects    - View featured projects & repo links
  • experience  - View internship history
  • contact     - Display contact info & social links
  • resume      - Open resume PDF
  • whoami      - Current user information
  • date        - Print current date & time
  • sudo hire   - Request hire Kajol (Special command)
  • clear       - Clear terminal screen`
          });
          break;

        case 'about':
        case 'whoami':
          newHistory.push({
            type: 'output',
            text: `👤 Kajol Sunar
🎓 B.Tech Computer Science & Engineering (Expected 2027)
📍 Dimapur, Nagaland, India
💼 Full Stack Developer & UI/UX Designer
⭐ GitHub: https://github.com/Ks1540`
          });
          break;

        case 'skills':
          newHistory.push({
            type: 'output',
            text: `🛠️ Technical Arsenal:
  [Languages] : JavaScript (ES6+), TypeScript, Python, HTML5, CSS3
  [Frontend]  : React 19, Next.js, Tailwind CSS, Framer Motion, Vite
  [Backend]   : Node.js, Express, FastAPI, REST APIs
  [AI / ML]   : scikit-learn, OpenCV, Playwright Agent, WCAG 2.1 Testing`
          });
          break;

        case 'projects':
          newHistory.push({
            type: 'output',
            text: `🚀 Featured Projects:
  1. Nexora (Autonomous Robotics & Drone E-Commerce)
     Stack: React 19, Vite, Vanilla CSS, AI Chatbot
     Link: https://github.com/Ks1540/nexora

  2. Showmint (Smart Theatre Booking System)
     Stack: Next.js, TypeScript, Tailwind CSS, Framer Motion
     Link: https://github.com/Ks1540/JumpPack-India

  3. TRIS (Meghalaya Travel & Crafts Boutique)
     Stack: React 19, TypeScript, Vite, Framer Motion, Express
     Link: https://github.com/aj-techsoul/trismeghalaya`
          });
          break;

        case 'experience':
          newHistory.push({
            type: 'output',
            text: `💼 Work Experience:
  1. TechSoul (techsoul.in) | 2026
     Role: UI/UX & AI Intern
     Work: Contributed to UXVision AI autonomous visual-analysis platform.

  2. TechieHelp (techiehelp.in) | 2025
     Role: App Development Intern
     Work: Delivered core frontend and application development modules.`
          });
          break;

        case 'contact':
          newHistory.push({
            type: 'output',
            text: `📬 Contact Information:
  • Email     : kajolsunar1292@gmail.com
  • GitHub    : https://github.com/Ks1540
  • Instagram : https://www.instagram.com/kajol.sunar.ks
  • Phone     : +91 9366124046`
          });
          break;

        case 'resume':
          window.open('/Kajol_Sunar_Resume.pdf', '_blank');
          newHistory.push({
            type: 'output',
            text: '📄 Opening Resume PDF in new tab...'
          });
          break;

        case 'sudo hire':
        case 'sudo hire kajol':
        case 'hire':
          newHistory.push({
            type: 'output',
            text: `🎉 ============================================== 🎉
  [ACCESS GRANTED]: Offer accepted!
  Thank you for choosing to collaborate with Kajol Sunar!
  Let's build extraordinary, high-impact products together.
  Email: kajolsunar1292@gmail.com
🎉 ============================================== 🎉`
          });
          break;

        case 'date':
          newHistory.push({
            type: 'output',
            text: new Date().toString()
          });
          break;

        case 'clear':
        case 'cls':
          setHistory([]);
          setInput('');
          return;

        case '':
          break;

        default:
          if (cmd.startsWith('echo ')) {
            newHistory.push({
              type: 'output',
              text: raw.slice(5)
            });
          } else {
            newHistory.push({
              type: 'error',
              text: `Command not recognized: "${raw}". Type "help" for a list of commands.`
            });
          }
          break;
      }

      setHistory(newHistory);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInput(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInput(commandHistory[nextIdx]);
        } else {
          setHistoryIndex(-1);
          setInput('');
        }
      }
    }
  };

  return (
    <div 
      className="bg-gray-950 text-emerald-400 font-mono p-4 rounded-lg shadow-inner h-[380px] overflow-y-auto flex flex-col text-xs leading-relaxed border border-gray-800 selection:bg-emerald-500 selection:text-black"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex-1 space-y-1">
        {history.map((h, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {h.type === 'system' && <span className="text-gray-400">{h.text}</span>}
            {h.type === 'user' && <span className="text-amber-400 font-bold">{h.text}</span>}
            {h.type === 'output' && <span className="text-emerald-300">{h.text}</span>}
            {h.type === 'error' && <span className="text-rose-400 font-semibold">{h.text}</span>}
          </div>
        ))}

        {/* Active Input Line */}
        <div className="flex items-center gap-1.5 pt-1">
          <span className="text-amber-400 font-bold">kajol@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent border-none outline-none text-emerald-300 font-mono text-xs focus:ring-0 p-0"
            autoFocus
            spellCheck={false}
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
