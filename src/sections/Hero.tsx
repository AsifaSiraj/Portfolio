import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Code2, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/50 via-[#0a0a0f]/70 to-[#0a0a0f]" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left">
            {/* Greeting */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-zinc-300">Hello, I'm</span>
            </div>

            {/* Name */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-gradient">Asifa Siraj</span>
            </h1>

            {/* Title */}
            <div
              className={`flex items-center justify-center lg:justify-start gap-3 mb-6 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Code2 className="w-6 h-6 text-indigo-400" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                Frontend Developer
              </h2>
            </div>

            {/* Tagline */}
            <p
              className={`text-lg sm:text-xl text-zinc-400 mb-4 max-w-xl mx-auto lg:mx-0 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Crafting Modern, User-Friendly Web Experiences with React & JavaScript
            </p>

            {/* Description */}
            <p
              className={`text-base text-zinc-500 mb-8 max-w-lg mx-auto lg:mx-0 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Computer Science & IT Student at NED University of Engineering & Technology.
              Passionate about building responsive, accessible, and performant web applications.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 glow-hover group"
              >
                View My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
              <button
                onClick={handleScrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white border border-white/20 rounded-xl hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div
              className={`flex items-center justify-center lg:justify-start gap-4 transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href="https://github.com/AsifaSiraj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/asifa-siraj-7baa40272/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:as1615533@gmail.com"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Decorative */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Orbiting circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full border border-indigo-500/20 animate-spin" style={{ animationDuration: '20s' }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 rounded-full border border-violet-500/10 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
              </div>
              
              {/* Center glow */}
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-indigo-600/20 to-violet-600/20 blur-3xl" />
              
              {/* Floating icons */}
              <div className="absolute top-0 right-0 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm animate-float" style={{ animationDelay: '0s' }}>
                <Code2 className="w-8 h-8 text-indigo-400" />
              </div>
              <div className="absolute bottom-10 left-0 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}>
                <Sparkles className="w-8 h-8 text-violet-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-zinc-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-zinc-600 flex justify-center pt-2">
            <div className="w-1 h-2 bg-zinc-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
