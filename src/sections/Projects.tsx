import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Layers, Code2, ShoppingCart, Activity, Box, TrendingUp } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  icon: React.ElementType;
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Portfolio Website',
      description: 'Interactive developer portfolio with smooth animations and responsive design',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: ['Responsive design', 'Performance optimization', 'SEO friendly'],
      image: '/project-portfolio.jpg',
      liveUrl: 'https://asifa-siraj-portfolio-website-sand.vercel.app',
      githubUrl: 'https://github.com/AsifaSiraj',
      icon: Layers,
    },
    {
      id: 2,
      title: 'Library Management System',
      description: 'Full-stack application with role-based authentication and CRUD operations',
      tech: ['React', 'Express.js', 'MySQL', 'JWT Authentication'],
      features: ['Admin/Student roles', 'Book borrowing system', 'Real-time search'],
      image: '/project-library.jpg',
      liveUrl: '#',
      githubUrl: 'https://github.com/AsifaSiraj/Library-Management-System-JSX',
      icon: Code2,
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      description: 'Feature-rich shopping platform with cart management and payment integration',
      tech: ['React', 'Context API', 'Styled Components', 'REST API'],
      features: ['Product catalog', 'User authentication', 'Payment gateway'],
      image: '/project-ecommerce.jpg',
      liveUrl: '#',
      githubUrl: 'https://github.com/AsifaSiraj/UrbanCart',
      icon: ShoppingCart,
    },
    {
      id: 4,
      title: 'COVID-19 Tracker Dashboard',
      description: 'Real-time data visualization application with global statistics',
      tech: ['JavaScript', 'Chart.js', 'REST API', 'Bootstrap'],
      features: ['Live data updates', 'Interactive charts', 'Country comparison'],
      image: '/project-covid.jpg',
      liveUrl: '#',
      githubUrl: 'https://github.com/AsifaSiraj/Covid19-App',
      icon: Activity,
    },
    {
      id: 5,
      title: 'React Component Library',
      description: 'Collection of reusable UI components with comprehensive documentation',
      tech: ['React', 'TypeScript', 'Storybook', 'Jest'],
      features: ['Component isolation', 'Automated testing', 'Documentation'],
      image: '/project-components.jpg',
      liveUrl: '#',
      githubUrl: 'https://github.com/AsifaSiraj/MINI-REACT-ZOO',
      icon: Box,
    },
    {
      id: 6,
      title: 'Financial Tracking Website',
      description: 'Personal finance tracker using greedy and dynamic programming algorithms',
      tech: ['JavaScript', 'HTML', 'CSS', 'Algorithms'],
      features: ['Expense tracking', 'Budget optimization', 'Data visualization'],
      image: '/project-finance.jpg',
      liveUrl: '#',
      githubUrl: 'https://github.com/AsifaSiraj/Financial-Tracking-Website',
      icon: TrendingUp,
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0a0a0f]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121a]/50 to-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-sm text-indigo-400 font-medium">Portfolio</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <p
            className={`text-zinc-400 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            A selection of my recent work showcasing my skills and experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden bg-[#12121a] border border-white/5 hover:border-indigo-500/30 transition-all duration-500 card-hover ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredProject === project.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-[#12121a]/50 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <project.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs text-indigo-300 bg-indigo-500/10 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-1 mb-6">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-zinc-500">
                      <span className="w-1 h-1 rounded-full bg-indigo-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg hover:from-indigo-500 hover:to-violet-500 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="https://github.com/AsifaSiraj?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 border border-white/10 rounded-xl hover:text-white hover:border-indigo-500/30 hover:bg-white/5 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
