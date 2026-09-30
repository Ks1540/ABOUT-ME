export default function BackgroundMedia({ isDarkMode }) {
  return (
    <>
      {/* Background Image */}
      <div 
        className="bg-media"
        style={{
          background: isDarkMode 
            ? 'url("https://i.pinimg.com/736x/78/3e/cc/783ecc3c75bcd24b23f4497afeffed46.jpg")' // Night mode image
            : 'url("https://i.pinimg.com/736x/5b/14/83/5b1483abd700cca21c0035093b44dbcc.jpg")', // Light mode image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </>
  );
}
