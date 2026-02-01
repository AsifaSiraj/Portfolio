import { useEffect, useRef, useState } from 'react';
import {
  Code2,
  Palette,
  Wrench,
  Server,
  Layers,
  GitBranch,
  Terminal,
  Database,
  Globe,
  Cpu,
  Layout,
  FileCode,
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const allSkills = new Set<string>();
        skillCategories.forEach((category) => {
          category.skills.forEach((skill) => {
            allSkills.add(skill.name);
          });
        });
        setAnimatedSkills(allSkills);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: [
        { name: 'React.js', level: 90, icon: Layers },
        { name: 'JavaScript (ES6+)', level: 85, icon: FileCode },
        { name: 'TypeScript', level: 80, icon: Code2 },
        { name: 'HTML5', level: 95, icon: Globe },
        { name: 'CSS3', level: 90, icon: Palette },
      ],
    },
    {
      title: 'Styling & UI',
      icon: Layout,
      skills: [
        { name: 'Tailwind CSS', level: 90, icon: Palette },
        { name: 'Bootstrap', level: 85, icon: Layout },
        { name: 'Styled Components', level: 75, icon: Layers },
        { name: 'SASS', level: 70, icon: Palette },
      ],
    },
    {
      title: 'Tools & Workflow',
      icon: Wrench,
      skills: [
        { name: 'Git & GitHub', level: 85, icon: GitBranch },
        { name: 'VS Code', level: 90, icon: Terminal },
        { name: 'Vite', level: 80, icon: Cpu },
        { name: 'Webpack', level: 70, icon: Wrench },
      ],
    },
    {
      title: 'Backend & Database',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 75, icon: Server },
        { name: 'Express.js', level: 70, icon: Cpu },
        { name: 'MySQL', level: 65, icon: Database },
        { name: 'REST APIs', level: 80, icon: Globe },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#12121a]"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-sm text-indigo-400 font-medium">My Expertise</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Technical <span className="text-gradient">Skills</span>
          </h2>

          <p
            className={`text-zinc-400 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`p-6 lg:p-8 rounded-2xl bg-[#0a0a0f] border border-white/5 hover:border-indigo-500/20 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + categoryIndex * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-indigo-500/10">
                  <category.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                        <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-zinc-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-1000 ease-out"
                        style={{
                          width: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div
          className={`mt-16 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-center text-zinc-500 mb-6">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Redux',
              'Context API',
              'React Router',
              'Axios',
              'JWT',
              'bcrypt',
              'Jest',
              'Storybook',
              'Figma',
              'Postman',
              'MongoDB',
              'Firebase',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm text-zinc-400 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-indigo-500/30 hover:text-white transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
