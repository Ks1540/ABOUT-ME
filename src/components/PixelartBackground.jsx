export default function PixelartBackground({ isDarkMode }) {
  return (
    <div 
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{
        backgroundImage: isDarkMode
          ? `url(/dark-bg.png)`
          : `url(/light-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      {/* SVG overlay removed - just showing background images */}
    </div>
  );
}
