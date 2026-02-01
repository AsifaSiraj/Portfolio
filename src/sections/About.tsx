import { useEffect, useRef, useState } from 'react';
import { Briefcase, Building2, FolderGit, GraduationCap } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  isVisible: boolean;
}

const Counter = ({ end, suffix = '', duration = 2000, isVisible }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: FolderGit, value: 38, suffix: '+', label: 'GitHub Repositories' },
    { icon: Briefcase, value: 1, suffix: '', label: 'Year Experience' },
    { icon: Building2, value: 5, suffix: '+', label: 'Organizations' },
    { icon: GraduationCap, value: 3, suffix: '', label: 'Degrees' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0a0a0f]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/about-image.jpg"
                alt="Developer workspace"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-[#12121a] border border-white/10 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">
                  <Counter end={38} suffix="+" isVisible={isVisible} />
                </div>
                <div className="text-sm text-zinc-400">Repositories</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Section Label */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-sm text-indigo-400 font-medium">About Me</span>
            </div>

            {/* Title */}
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Building the{' '}
              <span className="text-gradient">Future</span> of the Web
            </h2>

            {/* Bio Paragraphs */}
            <div
              className={`space-y-4 mb-10 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-zinc-400 leading-relaxed">
                I'm a results-driven Frontend Developer specializing in modern React.js 
                applications with a strong focus on creating responsive, accessible, and 
                performant user interfaces.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Currently pursuing my Bachelor's in Computer Systems at{' '}
                <span className="text-white font-medium">NED University of Engineering & Technology</span>, 
                I've built a solid foundation in software engineering principles, data structures, 
                and full-stack development.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                My passion lies in transforming complex problems into elegant, user-centric 
                solutions. I believe in clean code architecture, UI/UX best practices, and 
                continuous learning.
              </p>
            </div>

            {/* Stats Grid */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <stat.icon className="w-5 h-5 text-indigo-400 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-white">
                    <Counter end={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                  </div>
                  <div className="text-xs text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
