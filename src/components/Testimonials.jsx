import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Developer at TechCorp",
      avatar: "👩‍💻",
      message: "Kajol is an incredibly talented developer with an eye for beautiful UI design. Her attention to detail and creative solutions make her a valuable team member.",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager",
      avatar: "👨‍💼",
      message: "Working with Kajol was amazing! She turned our complex requirements into a beautiful, functional application. Her communication skills are top-notch.",
      rating: 5,
      project: "Dashboard Redesign"
    },
    {
      name: "Emily Watson",
      role: "UX Designer",
      avatar: "👩‍🎨",
      message: "Kajol has a unique ability to bridge the gap between design and development. She brings designs to life perfectly and adds her own creative touches.",
      rating: 5,
      project: "Mobile App UI"
    },
    {
      name: "David Kim",
      role: "Startup Founder",
      avatar: "🚀",
      message: "Kajol helped us build our MVP in record time. Her full-stack skills and proactive approach saved us months of development time.",
      rating: 5,
      project: "Startup MVP"
    },
    {
      name: "Lisa Thompson",
      role: "Team Lead",
      avatar: "👩‍🔬",
      message: "Kajol's passion for learning and problem-solving is infectious. She's not just a coder, she's a true problem-solver who thinks outside the box.",
      rating: 5,
      project: "API Integration"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-pink-600 mb-2">💕 What People Say 💕</h3>
        <p className="text-sm text-pink-500">Kind words from amazing people I've worked with</p>
      </div>

      {/* Testimonial Card */}
      <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-pink-200 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-2 right-2 text-pink-200 text-2xl animate-pulse">"</div>
        <div className="absolute bottom-2 left-2 text-purple-200 text-2xl animate-pulse" style={{ animationDelay: '1s' }}>"</div>

        <div className="relative z-10">
          {/* Avatar and Info */}
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl animate-bounce">{testimonial.avatar}</div>
            <div>
              <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              <p className="text-xs text-purple-600 font-semibold">📁 {testimonial.project}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex gap-1 mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                ⭐
              </span>
            ))}
          </div>

          {/* Message */}
          <p className="text-gray-700 leading-relaxed italic">
            "{testimonial.message}"
          </p>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={prevTestimonial}
          className="p-2 bg-gradient-to-r from-pink-300 to-purple-300 text-white rounded-full hover:scale-110 transition-transform"
        >
          ←
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-gradient-to-r from-pink-400 to-purple-400 w-8'
                  : 'bg-pink-200 hover:bg-pink-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          className="p-2 bg-gradient-to-r from-pink-300 to-purple-300 text-white rounded-full hover:scale-110 transition-transform"
        >
          →
        </button>
      </div>

      {/* Auto-play Toggle */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
        >
          {isAutoPlaying ? '⏸️ Pause' : '▶️ Auto-play'}
        </button>
      </div>

      {/* Stats Summary */}
      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-3 rounded-lg text-center">
          <div className="text-2xl mb-1">⭐</div>
          <div className="text-xl font-bold text-yellow-800">{testimonials.length}</div>
          <div className="text-xs text-yellow-600">Reviews</div>
        </div>
        <div className="bg-gradient-to-r from-pink-100 to-pink-200 p-3 rounded-lg text-center">
          <div className="text-2xl mb-1">💯</div>
          <div className="text-xl font-bold text-pink-800">5.0</div>
          <div className="text-xs text-pink-600">Average Rating</div>
        </div>
        <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-3 rounded-lg text-center">
          <div className="text-2xl mb-1">🏆</div>
          <div className="text-xl font-bold text-purple-800">100%</div>
          <div className="text-xs text-purple-600">Satisfaction</div>
        </div>
      </div>
    </div>
  );
}
