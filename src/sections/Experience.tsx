import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, Building2, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  type: string;
  startDate: string;
  endDate: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
  hasCertificate?: boolean;
}

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems((prev) => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) itemObserver.observe(ref);
    });

    return () => itemObserver.disconnect();
  }, []);

  const experienceItems: ExperienceItem[] = [
    {
      id: 1,
      title: 'Virtual Office Assistant',
      company: 'DesertBIM',
      type: 'Freelance',
      startDate: 'Aug 2025',
      endDate: 'Dec 2025',
      duration: '5 mos',
      location: 'Remote',
      description: 'Provided comprehensive administrative and organizational support to clients, ensuring smooth day-to-day operations and efficient workflow management. Responsibilities included calendar coordination, research, documentation, and team communication to help streamline business processes and enhance productivity.',
      skills: ['Team Coordination', 'Team Management', 'Time Management', 'Virtual Assistance', 'Documentation', 'Research Skills', 'Communication'],
    },
    {
      id: 2,
      title: 'Digital Accessibility Intern',
      company: 'Deserts Digital OÜ',
      type: 'Internship',
      startDate: 'Jul 2025',
      endDate: 'Dec 2025',
      duration: '6 mos',
      location: 'Remote',
      description: 'Supporting web and PDF accessibility compliance, conducting accessibility audits, assisting with outreach to prospects, supporting business development in assigned regions, and coordinating efforts to help close deals.',
      skills: ['SEO', 'User Experience (UX)', 'Accessible PDF Creation', 'PDF Accessibility', 'Web Development'],
    },
    {
      id: 3,
      title: 'Summer Intern',
      company: 'CodeAlpha',
      type: 'Internship',
      startDate: 'Jun 2025',
      endDate: 'Jul 2025',
      duration: '2 mos',
      location: 'Remote',
      description: 'Designed and developed visually appealing, user-friendly, and responsive web applications using HTML, CSS, JavaScript, and frontend frameworks like React, Angular, and Vue.js. Collaborated with designers and backend teams to deliver seamless user experiences.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Vue.js', 'Responsive Design'],
    },
    {
      id: 4,
      title: 'Information Technology Support Staff',
      company: 'Karachi Development Authority (KDA)',
      type: 'Internship',
      startDate: 'Mar 2025',
      endDate: 'Mar 2025',
      duration: '1 mo',
      location: 'Karachi, Sindh, Pakistan',
      description: 'Explored different sectors of the IT department, gaining practical exposure to system management, software maintenance, and web development processes.',
      skills: ['IT Infrastructure', 'IT Service Management', 'Technical Support'],
      hasCertificate: true,
    },
    {
      id: 5,
      title: 'Frontend Web Developer',
      company: 'NED University of Engineering and Technology',
      type: 'Internship',
      startDate: 'Jan 2025',
      endDate: 'Mar 2025',
      duration: '3 mos',
      location: 'Karachi, Sindh, Pakistan',
      description: 'Working on the DIL Service Portal, diving deep into front-end technologies and refining skills in building user-friendly and efficient web interfaces. Gained hands-on exposure to real-world development challenges, enhancing both technical expertise and problem-solving abilities.',
      skills: ['Front-End Development', 'React', 'JavaScript', 'UI/UX'],
    },
    {
      id: 6,
      title: 'Frontend Developer',
      company: 'Interns School (intern.pk)',
      type: 'Internship',
      startDate: 'Dec 2024',
      endDate: 'Jan 2025',
      duration: '2 mos',
      location: 'Remote',
      description: 'Gained hands-on experience in designing and developing web applications. Key projects included developing a web app for COVID-19 testing, enhancing skills in responsive design and user interface development. Created a personal portfolio website using WordPress, showcasing ability to work with CMS and customize themes.',
      skills: ['Front-End Development', 'WordPress', 'jQuery', 'HTML', 'CSS', 'JavaScript'],
      hasCertificate: true,
    },
    {
      id: 7,
      title: 'Virtual Reality Development Intern',
      company: 'NED University Virtual Reality Center',
      type: 'Apprenticeship',
      startDate: 'Sep 2024',
      endDate: 'Nov 2024',
      duration: '3 mos',
      location: 'Karachi, Sindh, Pakistan',
      description: 'Completed apprenticeship in Virtual Reality with immersive learning, innovative projects, and an amazing team. Gained hands-on experience in VR development workflows.',
      skills: ['Virtual Reality (VR)', 'Blender', 'Unity'],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#12121a]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Briefcase className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-400 font-medium">Professional Journey</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Work <span className="text-gradient">Experience</span>
          </h2>

          <p
            className={`text-zinc-400 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            My professional experience and internships
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experienceItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isItemVisible = visibleItems.has(item.id);

              return (
                <div
                  key={item.id}
                  ref={(el) => { itemRefs.current[index] = el; }}
                  data-id={item.id}
                  className={`relative flex items-start gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 p-0.5 transition-all duration-500 ${
                        isItemVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      }`}
                    >
                      <div className="w-full h-full rounded-full bg-[#12121a] flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-indigo-400" />
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] transition-all duration-700 ${
                      isItemVisible
                        ? 'opacity-100 translate-x-0'
                        : `opacity-0 ${isLeft ? '-translate-x-8' : 'translate-x-8'}`
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="p-6 rounded-2xl bg-[#0a0a0f] border border-white/5 hover:border-indigo-500/20 transition-all duration-300 group">
                      {/* Header */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                          <Building2 className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-zinc-400 text-sm">{item.company}</p>
                        </div>
                        {item.hasCertificate && (
                          <span className="px-2 py-1 text-xs text-green-400 bg-green-500/10 rounded-md flex items-center gap-1">
                            <ExternalLink className="w-3 h-3" />
                            Certificate
                          </span>
                        )}
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-zinc-500">
                        <span className="px-2 py-1 bg-white/5 rounded-md">{item.type}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.startDate} - {item.endDate}
                        </span>
                        <span className="text-indigo-400">{item.duration}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs text-indigo-300 bg-indigo-500/10 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
