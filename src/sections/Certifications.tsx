import { useEffect, useRef, useState } from 'react';
import { Award, Calendar, ExternalLink, CheckCircle, FileText, Code, Globe, Database, TrendingUp, Layers, Monitor } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  organization: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  skills?: string[];
  hasCredential?: boolean;
  icon: React.ElementType;
}

const Certifications = () => {
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

  const certifications: Certification[] = [
    {
      id: 1,
      title: 'Google Analytics Certification',
      organization: 'Skillshop (Google)',
      issueDate: 'Apr 2025',
      expiryDate: 'Apr 2026',
      credentialId: '140938094',
      icon: TrendingUp,
      hasCredential: true,
    },
    {
      id: 2,
      title: 'Information Technology Internship Trainee',
      organization: 'Karachi Development Authority (KDA)',
      issueDate: 'Apr 2025',
      icon: Monitor,
      hasCredential: true,
    },
    {
      id: 3,
      title: 'Basics of React and JavaScript',
      organization: 'Udemy',
      issueDate: 'Mar 2024',
      skills: ['React', 'JavaScript'],
      icon: Code,
      hasCredential: true,
    },
    {
      id: 4,
      title: 'Fundamentals of Python',
      organization: 'Great Learning',
      issueDate: 'Sep 2023',
      icon: Database,
      hasCredential: true,
    },
    {
      id: 5,
      title: 'HTML, CSS, JavaScript for Web Development',
      organization: 'Coursera',
      issueDate: 'Sep 2023',
      credentialId: 'ZMDG7RKAJXM2',
      skills: ['JavaScript', 'HTML', 'CSS'],
      icon: Globe,
      hasCredential: true,
    },
    {
      id: 6,
      title: 'Fundamentals of Digital Marketing',
      organization: 'Google',
      issueDate: 'Aug 2023',
      credentialId: '189998199',
      skills: ['Digital Marketing'],
      icon: TrendingUp,
      hasCredential: true,
    },
    {
      id: 7,
      title: 'Fundamentals of Information Technology',
      organization: 'Future Creator Collegiate',
      issueDate: 'Mar 2017',
      skills: ['Basic Computer and IT (CIT)'],
      icon: Monitor,
    },
    {
      id: 8,
      title: 'Frontend Internship Certificate',
      organization: 'Interns School',
      issueDate: 'Dec 2024',
      expiryDate: 'Jan 2025',
      icon: Code,
      hasCredential: true,
    },
    {
      id: 9,
      title: 'Basic Angular Development',
      organization: 'NED University of Engineering and Technology',
      issueDate: '2024',
      icon: Layers,
      hasCredential: true,
    },
    {
      id: 10,
      title: 'Content Writing Internship',
      organization: 'Kshitiksha Foundation',
      issueDate: '2024',
      skills: ['Web Content Writing'],
      icon: FileText,
      hasCredential: true,
    },
    {
      id: 11,
      title: 'SQL Basic',
      organization: 'LeetCode',
      issueDate: '2024',
      skills: ['SQL'],
      icon: Database,
      hasCredential: true,
    },
    {
      id: 12,
      title: 'Social Media Marketing Internship',
      organization: 'Kshitiksha Foundation',
      issueDate: '2024',
      skills: ['Social Media Marketing'],
      icon: TrendingUp,
      hasCredential: true,
    },
    {
      id: 13,
      title: 'Unity Essential Basic Course',
      organization: 'Unity',
      issueDate: '2024',
      icon: Layers,
      hasCredential: true,
    },
    {
      id: 14,
      title: 'Web Development',
      organization: 'Coursera',
      issueDate: '2024',
      skills: ['HTML', 'CSS', 'React Basics'],
      icon: Globe,
      hasCredential: true,
    },
  ];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0a0a0f]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121a]/50 to-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Award className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-pink-400 font-medium">Credentials</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-gradient">Certifications</span> & Licenses
          </h2>

          <p
            className={`text-zinc-400 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Professional certifications and credentials I've earned
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const isItemVisible = visibleItems.has(cert.id);
            const Icon = cert.icon;

            return (
              <div
                key={cert.id}
                ref={(el) => { itemRefs.current[index] = el; }}
                data-id={cert.id}
                className={`group p-6 rounded-2xl bg-[#12121a] border border-white/5 hover:border-pink-500/30 transition-all duration-500 ${
                  isItemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-pink-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-white group-hover:text-pink-400 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-zinc-400">{cert.organization}</p>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Calendar className="w-3 h-3" />
                    Issued {cert.issueDate}
                  </span>
                  {cert.expiryDate && (
                    <span className="text-xs text-zinc-500">
                      · Expires {cert.expiryDate}
                    </span>
                  )}
                </div>

                {/* Credential ID */}
                {cert.credentialId && (
                  <p className="text-xs text-zinc-600 mb-3">
                    ID: {cert.credentialId}
                  </p>
                )}

                {/* Skills */}
                {cert.skills && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs text-pink-300 bg-pink-500/10 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Credential Link */}
                {cert.hasCredential && (
                  <div className="flex items-center gap-2 text-xs text-pink-400">
                    <CheckCircle className="w-3 h-3" />
                    <span>Credential Verified</span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {[
            { value: '14+', label: 'Certifications' },
            { value: '10+', label: 'Organizations' },
            { value: '8+', label: 'Years Learning' },
            { value: '20+', label: 'Skills Gained' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-[#12121a] border border-white/5"
            >
              <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
