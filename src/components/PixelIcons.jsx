// Pixel art icon components - no emojis, pure SVG

export const AboutIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <rect x="8" y="8" width="48" height="48" fill="#d97706" stroke="#b45309" strokeWidth="2"/>
    {/* Head */}
    <circle cx="32" cy="20" r="8" fill="#f59e0b"/>
    {/* Body */}
    <rect x="26" y="30" width="12" height="16" fill="#f59e0b"/>
    {/* Arms */}
    <rect x="16" y="32" width="10" height="4" fill="#f59e0b"/>
    <rect x="38" y="32" width="10" height="4" fill="#f59e0b"/>
  </svg>
);

export const SkillsIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    {/* Bolt/Lightning */}
    <rect x="8" y="8" width="48" height="48" fill="#fbbf24" stroke="#d97706" strokeWidth="2"/>
    <polygon points="32,12 20,36 28,36 36,56 48,28 40,28" fill="#d97706"/>
  </svg>
);

export const ProjectsIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    {/* Palette */}
    <rect x="8" y="8" width="48" height="48" fill="#f59e0b" stroke="#b45309" strokeWidth="2"/>
    {/* Paint dots */}
    <circle cx="18" cy="22" r="3" fill="#d97706"/>
    <circle cx="28" cy="18" r="3" fill="#fbbf24"/>
    <circle cx="38" cy="20" r="3" fill="#fcd34d"/>
    <circle cx="46" cy="28" r="3" fill="#d97706"/>
    <circle cx="42" cy="40" r="3" fill="#f59e0b"/>
    <circle cx="28" cy="44" r="3" fill="#fbbf24"/>
  </svg>
);

export const EducationIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    {/* Book */}
    <rect x="8" y="8" width="48" height="48" fill="#d97706" stroke="#b45309" strokeWidth="2"/>
    {/* Book cover lines */}
    <line x1="20" y1="20" x2="44" y2="20" stroke="#fbbf24" strokeWidth="2"/>
    <line x1="20" y1="28" x2="44" y2="28" stroke="#fbbf24" strokeWidth="2"/>
    <line x1="20" y1="36" x2="44" y2="36" stroke="#fbbf24" strokeWidth="2"/>
    <line x1="20" y1="44" x2="44" y2="44" stroke="#fbbf24" strokeWidth="2"/>
  </svg>
);

export const GameIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    {/* Game controller */}
    <rect x="8" y="8" width="48" height="48" fill="#fbbf24" stroke="#d97706" strokeWidth="2"/>
    {/* D-pad */}
    <rect x="18" y="28" width="4" height="8" fill="#d97706"/>
    <rect x="14" y="32" width="8" height="4" fill="#d97706"/>
    {/* Buttons */}
    <circle cx="44" cy="28" r="3" fill="#d97706"/>
    <circle cx="48" cy="32" r="3" fill="#d97706"/>
    <circle cx="44" cy="36" r="3" fill="#d97706"/>
    <circle cx="40" cy="32" r="3" fill="#d97706"/>
  </svg>
);

export const QuizIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    {/* Question mark */}
    <rect x="8" y="8" width="48" height="48" fill="#f59e0b" stroke="#b45309" strokeWidth="2"/>
    <text x="32" y="48" fontSize="36" fontWeight="bold" textAnchor="middle" fill="#d97706">?</text>
  </svg>
);

export const ContactIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    {/* Envelope/Mail */}
    <rect x="8" y="8" width="48" height="48" fill="#d97706" stroke="#b45309" strokeWidth="2"/>
    {/* Envelope flap */}
    <polygon points="8,8 32,24 56,8" fill="#fbbf24"/>
    {/* Envelope body */}
    <rect x="8" y="18" width="48" height="30" fill="none" stroke="#fbbf24" strokeWidth="2"/>
  </svg>
);

export const ResumeIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    {/* Base box */}
    <rect x="8" y="8" width="48" height="48" fill="#d97706" stroke="#b45309" strokeWidth="2"/>
    {/* Page background */}
    <path d="M18 14 H38 L46 22 V50 H18 Z" fill="#fef3c7" stroke="#b45309" strokeWidth="1.5"/>
    {/* Folded corner */}
    <polygon points="38,14 38,22 46,22" fill="#fbbf24" stroke="#b45309" strokeWidth="1"/>
    {/* Text lines */}
    <line x1="23" y1="26" x2="35" y2="26" stroke="#d97706" strokeWidth="2" strokeLinecap="round"/>
    <line x1="23" y1="32" x2="41" y2="32" stroke="#d97706" strokeWidth="2" strokeLinecap="round"/>
    <line x1="23" y1="37" x2="41" y2="37" stroke="#d97706" strokeWidth="2" strokeLinecap="round"/>
    <line x1="23" y1="42" x2="33" y2="42" stroke="#d97706" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const TerminalIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <rect x="8" y="8" width="48" height="48" fill="#1f2937" stroke="#d97706" strokeWidth="2"/>
    <path d="M16 22 L26 32 L16 42" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <line x1="30" y1="42" x2="44" y2="42" stroke="#10b981" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const getPixelIcon = (label) => {
  if (label.includes('About')) return <AboutIcon />;
  if (label.includes('Resume')) return <ResumeIcon />;
  if (label.includes('Terminal') || label.includes('Cmd')) return <TerminalIcon />;
  if (label.includes('Skills')) return <SkillsIcon />;
  if (label.includes('Projects')) return <ProjectsIcon />;
  if (label.includes('Education')) return <EducationIcon />;
  if (label.includes('Game')) return <GameIcon />;
  if (label.includes('Quiz')) return <QuizIcon />;
  if (label.includes('Contact')) return <ContactIcon />;
  return <ProjectsIcon />; // fallback
};
