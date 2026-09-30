import AboutMe from "../components/AboutMe";
import InteractiveTimeline from "../components/InteractiveTimeline";
import ContactForm from "../components/ContactForm";
import Terminal from "../components/Terminal";

export const windowsData = {
  about: {
    title: "About.exe",
    content: <AboutMe />,
  },

  resume: {
    title: "Resume.pdf",
    content: (
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-amber-50 dark:bg-gray-800 rounded-lg border border-amber-200 dark:border-amber-700">
          <div>
            <h3 className="font-bold text-gray-800 dark:text-gray-100 text-sm">Kajol Sunar - Resume</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">PDF Document</p>
          </div>
          <div className="flex gap-2">
            <a
              href="/Kajol_Sunar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-semibold bg-amber-400 hover:bg-amber-500 text-gray-900 rounded shadow transition-all hover:scale-105 flex items-center gap-1 border border-amber-500"
            >
              <span>↗</span> Open
            </a>
            <a
              href="/Kajol_Sunar_Resume.pdf"
              download="Kajol_Sunar_Resume.pdf"
              className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900 rounded shadow transition-all hover:scale-105 flex items-center gap-1 border border-amber-600"
            >
              <span>📥</span> Download
            </a>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border-2 border-amber-300 shadow-inner bg-white">
          <iframe
            src="/Kajol_Sunar_Resume.pdf"
            className="w-full h-[400px] border-0"
            title="Kajol Sunar Resume PDF"
          />
        </div>
      </div>
    ),
  },

  projects: {
    title: "Projects.exe",
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b pb-2">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
            <span>🚀</span> Featured Projects
          </h3>
          <a
            href="https://github.com/Ks1540"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-2.5 py-1 bg-gray-900 text-white dark:bg-gray-700 rounded-md hover:bg-black transition-all flex items-center gap-1.5 shadow-sm"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <span>GitHub Profile</span>
          </a>
        </div>
        
        <div className="space-y-3.5">
          {/* Project 1: Nexora */}
          <div className="border border-amber-200 dark:border-gray-700 bg-amber-50/40 dark:bg-gray-800/60 rounded-xl p-4 hover:shadow-md transition-all">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 flex-1">
                <div className="text-2xl p-2 bg-amber-100 dark:bg-amber-900/50 rounded-lg">🤖</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h4 className="font-bold text-gray-800 dark:text-gray-100 text-base">Nexora</h4>
                    <a
                      href="https://github.com/Ks1540/nexora"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold text-xs rounded-md shadow-sm transition-all hover:scale-105 flex items-center gap-1"
                    >
                      <span>Code ↗</span>
                    </a>
                  </div>
                  <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 mt-0.5">
                    Autonomous Robotics & Drone E-Commerce Platform
                  </p>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 mt-2 space-y-1 list-disc list-inside">
                    <li>Built full e-commerce web app for drone & robotics hardware with modular product configurator.</li>
                    <li>Integrated 4-way spec comparison matrix and Indian checkout flow (UPI, cards, net banking).</li>
                    <li>Implemented AI-powered product advisor chatbot for custom hardware recommendations.</li>
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded text-[11px] font-medium">React 19</span>
                    <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded text-[11px] font-medium">Vite</span>
                    <span className="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 rounded text-[11px] font-medium">Vanilla CSS</span>
                    <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded text-[11px] font-medium">AI Chatbot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Showmint */}
          <div className="border border-purple-200 dark:border-gray-700 bg-purple-50/40 dark:bg-gray-800/60 rounded-xl p-4 hover:shadow-md transition-all">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 flex-1">
                <div className="text-2xl p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">🎟️</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h4 className="font-bold text-gray-800 dark:text-gray-100 text-base">Showmint (JumpPack-India)</h4>
                    <a
                      href="https://github.com/Ks1540/JumpPack-India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-purple-500 hover:bg-purple-600 text-white font-bold text-xs rounded-md shadow-sm transition-all hover:scale-105 flex items-center gap-1"
                    >
                      <span>Code ↗</span>
                    </a>
                  </div>
                  <p className="text-xs font-semibold text-purple-700 dark:text-purple-400 mt-0.5">
                    Smart Theatre Booking System
                  </p>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 mt-2 space-y-1 list-disc list-inside">
                    <li>Built seat selection UI, booking flow, and ticket display integrated with AI recommendation engine.</li>
                    <li>Incorporated cryptographically signed ticket security and real-time seat availability.</li>
                    <li>Developed in Next.js & TypeScript adhering to Dark Luxe design system & Framer Motion animations.</li>
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    <span className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded text-[11px] font-medium">Next.js</span>
                    <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded text-[11px] font-medium">TypeScript</span>
                    <span className="px-2 py-0.5 bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 rounded text-[11px] font-medium">Tailwind CSS</span>
                    <span className="px-2 py-0.5 bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 rounded text-[11px] font-medium">Framer Motion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: TRIS */}
          <div className="border border-pink-200 dark:border-gray-700 bg-pink-50/40 dark:bg-gray-800/60 rounded-xl p-4 hover:shadow-md transition-all">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 flex-1">
                <div className="text-2xl p-2 bg-pink-100 dark:bg-pink-900/50 rounded-lg">🌿</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h4 className="font-bold text-gray-800 dark:text-gray-100 text-base">TRIS</h4>
                    <a
                      href="https://github.com/aj-techsoul/trismeghalaya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-pink-500 hover:bg-pink-600 text-white font-bold text-xs rounded-md shadow-sm transition-all hover:scale-105 flex items-center gap-1"
                    >
                      <span>Code ↗</span>
                    </a>
                  </div>
                  <p className="text-xs font-semibold text-pink-700 dark:text-pink-400 mt-0.5">
                    Immersive Meghalaya Travel & Crafts Boutique
                  </p>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 mt-2 space-y-1 list-disc list-inside">
                    <li>Created scroll-bound parallax hero, interactive destination explorer, and full trip planner.</li>
                    <li>Integrated vehicle rentals, activity add-ons, and dynamic live cost calculation engine.</li>
                    <li>Developed fair-trade boutique with cart, wishlist, and checkout for local artisanal crafts.</li>
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded text-[11px] font-medium">React 19</span>
                    <span className="px-2 py-0.5 bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 rounded text-[11px] font-medium">TypeScript</span>
                    <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded text-[11px] font-medium">Express</span>
                    <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded text-[11px] font-medium">Framer Motion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  education: {
    title: "Education.exe",
    content: <InteractiveTimeline />,
  },

  experience: {
    title: "Experience.exe",
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b pb-2">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
            <span>💼</span> Internship Experience
          </h3>
          <span className="text-xs px-2.5 py-1 bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 font-semibold rounded-md">
            2 Internships
          </span>
        </div>
        
        <div className="space-y-3.5">
          {/* Experience 1: TechSoul */}
          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-gray-800/60 p-4 rounded-r-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <h4 className="font-bold text-gray-800 dark:text-gray-100 text-base">UI/UX & AI Intern</h4>
                <p className="text-xs font-semibold text-amber-700 dark:text-amber-400">
                  <a href="https://techsoul.in" target="_blank" rel="noopener noreferrer" className="hover:underline">TechSoul (techsoul.in)</a> • 2026
                </p>
              </div>
              <a
                href="https://github.com/aj-techsoul/uxvision-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold text-xs rounded-md shadow-sm transition-all hover:scale-105 flex items-center gap-1"
              >
                <span>Project: UXVision AI ↗</span>
              </a>
            </div>
            <ul className="text-xs text-gray-600 dark:text-gray-300 mt-2.5 space-y-1.5 list-disc list-inside">
              <li>
                Contributed to <strong>UXVision AI</strong>, an autonomous visual-analysis platform combining a Playwright browser-exploration agent, an OpenCV/scikit-learn layout-scoring pipeline, and WCAG 2.1 accessibility checks to score and improve UI/UX quality.
              </li>
            </ul>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 rounded text-[11px] font-medium">UI/UX</span>
              <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded text-[11px] font-medium">Playwright</span>
              <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded text-[11px] font-medium">OpenCV</span>
              <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded text-[11px] font-medium">scikit-learn</span>
              <span className="px-2 py-0.5 bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 rounded text-[11px] font-medium">WCAG 2.1</span>
            </div>
          </div>

          {/* Experience 2: TechieHelp */}
          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-gray-800/60 p-4 rounded-r-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <h4 className="font-bold text-gray-800 dark:text-gray-100 text-base">App Development Intern</h4>
                <p className="text-xs font-semibold text-purple-700 dark:text-purple-400">
                  <a href="https://techiehelp.in" target="_blank" rel="noopener noreferrer" className="hover:underline">TechieHelp (techiehelp.in)</a> • 2025
                </p>
              </div>
            </div>
            <ul className="text-xs text-gray-600 dark:text-gray-300 mt-2.5 space-y-1.5 list-disc list-inside">
              <li>
                Built and delivered app development assignments as part of a structured internship program, strengthening core front-end and application development skills.
              </li>
            </ul>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded text-[11px] font-medium">App Development</span>
              <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded text-[11px] font-medium">React</span>
              <span className="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 rounded text-[11px] font-medium">JavaScript</span>
              <span className="px-2 py-0.5 bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 rounded text-[11px] font-medium">Frontend</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  terminal: {
    title: "Terminal.exe",
    content: <Terminal />,
  },

  contact: {
    title: "Contact.exe",
    content: <ContactForm />,
  },
};
