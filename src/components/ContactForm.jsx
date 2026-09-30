import { useState } from 'react';
import { playClickSound } from '../utils/sound';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: 'collaboration'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sparkles, setSparkles] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const createSparkles = () => {
    setSparkles(true);
    setTimeout(() => setSparkles(false), 2000);
  };

  const handleCopyEmail = () => {
    playClickSound();
    navigator.clipboard.writeText('kajolsunar1292@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name || 'Visitor'} (${formData.projectType})`);
    const body = encodeURIComponent(`Hi Kajol,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}\n`);
    return `mailto:kajolsunar1292@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    playClickSound();

    const targetUrl = import.meta.env.VITE_API_URL 
      ? `${import.meta.env.VITE_API_URL.replace(/\/$/, '')}/api/contact`
      : '/api/contact';

    try {
      const response = await fetch(targetUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        createSparkles();

        // Reset form after 3.5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            message: '',
            projectType: 'collaboration'
          });
        }, 3500);
      } else {
        setErrorMessage(data.message || 'Unable to deliver message right now.');
      }
    } catch (error) {
      console.warn('Backend contact route unavailable:', error);
      setErrorMessage('Backend server is offline or unreachable. You can send directly using your email app below:');
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateForm = () => {
    return formData.name && formData.email && formData.message;
  };

  if (isSubmitted) {
    return (
      <div className="p-6 dark:bg-gradient-to-br dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl text-center relative overflow-hidden">
        {sparkles && (
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 100}ms`
                }}
              >
                ✨
              </div>
            ))}
          </div>
        )}
        
        <div className="relative z-10">
          <div className="text-6xl mb-4 animate-bounce">🎉</div>
          <h3 className="text-2xl font-bold dark:text-cyan-400 text-pink-600 mb-2">Message Sent! 🚀</h3>
          <p className="dark:text-gray-200 text-gray-700 mb-4">Thank you for reaching out! I'll get back to you soon.</p>
          <div className="flex justify-center gap-2">
            <span className="text-2xl animate-pulse">💖</span>
            <span className="text-2xl animate-pulse" style={{ animationDelay: '0.2s' }}>✨</span>
            <span className="text-2xl animate-pulse" style={{ animationDelay: '0.4s' }}>⭐</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 dark:bg-gradient-to-br dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold dark:text-cyan-400 text-pink-600 mb-2">📬 Get In Touch 🚀</h3>
        <p className="text-sm dark:text-purple-300 text-pink-500">I'd love to hear from you!</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold dark:text-purple-300 text-purple-700 mb-2">
            Your Name 🌟
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 dark:bg-gray-800 dark:border-2 dark:border-cyan-600 dark:text-white dark:focus:border-cyan-400 border-2 border-pink-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold dark:text-purple-300 text-purple-700 mb-2">
            Email Address 📧
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 dark:bg-gray-800 dark:border-2 dark:border-cyan-600 dark:text-white dark:focus:border-cyan-400 border-2 border-pink-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors"
            placeholder="your.email@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold dark:text-purple-300 text-purple-700 mb-2">
            Project Type 🎯
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-2 dark:bg-gray-800 dark:border-2 dark:border-cyan-600 dark:text-white dark:focus:border-cyan-400 border-2 border-pink-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors"
          >
            <option value="collaboration">Collaboration 🤝</option>
            <option value="project">New Project 🚀</option>
            <option value="question">Just Saying Hi! 👋</option>
            <option value="job">Job Opportunity 💼</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold dark:text-purple-300 text-purple-700 mb-2">
            Your Message ✨
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 dark:bg-gray-800 dark:border-2 dark:border-cyan-600 dark:text-white dark:focus:border-cyan-400 border-2 border-pink-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors resize-none"
            placeholder="Tell me about your project or just say hello!"
            required
          />
        </div>

        <button
          type="submit"
          disabled={!validateForm() || isSubmitting}
          className="w-full py-3 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin">⚡</span>
              Sending Message...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <span>Send Message</span>
              <span>🚀</span>
            </span>
          )}
        </button>

        {errorMessage && (
          <div className="p-3 bg-amber-100/90 dark:bg-gray-800 border-2 border-amber-400 dark:border-amber-600 rounded-xl text-xs space-y-2 animate-fade-in">
            <p className="text-amber-900 dark:text-amber-300 font-semibold flex items-center gap-1.5">
              <span>⚠️</span> {errorMessage}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={getMailtoUrl()}
                className="px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900 font-bold rounded-md shadow-sm hover:scale-105 transition-transform flex items-center gap-1"
              >
                <span>📬 Open in Mail App</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold rounded-md shadow-sm hover:scale-105 transition-transform flex items-center gap-1 cursor-pointer"
              >
                <span>{copiedEmail ? '✓ Copied!' : '📋 Copy Email'}</span>
              </button>
            </div>
          </div>
        )}
      </form>

      <div className="mt-6 p-4 dark:bg-gray-800/50 bg-white/50 rounded-lg">
        <div className="flex flex-wrap items-center justify-center gap-2 text-center text-sm dark:text-purple-300 text-purple-700 mb-3">
          <span>🌟 Email:</span>
          <a
            href="mailto:kajolsunar1292@gmail.com"
            className="font-bold underline hover:text-amber-500 transition-colors"
          >
            kajolsunar1292@gmail.com
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="text-xs px-2 py-0.5 bg-pink-100 dark:bg-pink-900/60 text-pink-700 dark:text-pink-300 rounded font-semibold hover:bg-pink-200 transition-colors cursor-pointer"
          >
            {copiedEmail ? 'Copied! ✓' : 'Copy'}
          </button>
        </div>
        <div className="flex justify-center items-center gap-4 mt-2">
          {/* GitHub */}
          <a
            href="https://github.com/Ks1540"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-900 text-white hover:bg-black hover:scale-110 shadow-md transition-all duration-300 border border-gray-700"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0A66C2] text-white hover:bg-[#004182] hover:scale-110 shadow-md transition-all duration-300"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.64 1.64 0 0 0-1.64 1.64c0 .9.74 1.64 1.64 1.64.9 0 1.64-.74 1.64-1.64A1.64 1.64 0 0 0 7.83 6.6z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/kajol.sunar.ks?stkn=cnhnMTFueGRjOWh2"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white hover:opacity-90 hover:scale-110 shadow-md transition-all duration-300"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:kajolsunar1292@gmail.com"
            title="Email"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-pink-500 text-white hover:bg-pink-600 hover:scale-110 shadow-md transition-all duration-300"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
