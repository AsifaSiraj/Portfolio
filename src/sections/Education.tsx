import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award, School, BookOpen } from 'lucide-react';

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location?: string;
  grade?: string;
  skills?: string[];
  logo?: string;
}

const Education = () => {
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
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) itemObserver.observe(ref);
    });

    return () => itemObserver.disconnect();
  }, []);

  const educationItems: EducationItem[] = [
    {
      id: 1,
      institution: 'NED University of Engineering and Technology',
      degree: 'Bachelor of Science - BS',
      field: 'Computer Science and Information Technology',
      startDate: 'Sep 2022',
      endDate: 'Sep 2027',
      location: 'Karachi, Pakistan',
      skills: ['C (Programming Language)', 'C++ (Object Oriented Programming)'],
    },
    {
      id: 2,
      institution: 'Sir Syed Govt Girls College',
      degree: 'Intermediate',
      field: 'Pre-Engineering',
      startDate: 'Jul 2020',
      endDate: 'Apr 2022',
      grade: 'A+',
    },
    {
      id: 3,
      institution: 'High Star Public Sec School',
      degree: 'Matriculation',
      field: 'Computer Science',
      startDate: 'Mar 2015',
      endDate: 'Mar 2020',
      grade: 'A+',
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0a0a0f]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121a]/50 to-[#0a0a0f]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <BookOpen className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-400 font-medium">Academic Background</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-gradient">Education</span>
          </h2>

          <p
            className={`text-zinc-400 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            My academic journey and qualifications
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-pink-500/30 to-transparent" />

          {/* Education Items */}
          <div className="space-y-12">
            {educationItems.map((item, index) => {
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
                      className={`w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 p-0.5 transition-all duration-500 ${
                        isItemVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      }`}
                    >
                      <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-violet-400" />
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
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="p-6 rounded-2xl bg-[#12121a] border border-white/5 hover:border-violet-500/20 transition-all duration-300 group">
                      {/* Institution */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors">
                          <School className="w-5 h-5 text-violet-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-violet-400 transition-colors">
                            {item.institution}
                          </h3>
                        </div>
                      </div>

                      {/* Degree & Field */}
                      <div className="mb-4">
                        <p className="text-white font-medium">{item.degree}</p>
                        <p className="text-zinc-400 text-sm">{item.field}</p>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-zinc-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.startDate} - {item.endDate}
                        </span>
                        {item.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </span>
                        )}
                        {item.grade && (
                          <span className="flex items-center gap-1 text-green-400">
                            <Award className="w-3 h-3" />
                            Grade: {item.grade}
                          </span>
                        )}
                      </div>

                      {/* Skills */}
                      {item.skills && (
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 text-xs text-violet-300 bg-violet-500/10 rounded-md"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
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

export default Education;
