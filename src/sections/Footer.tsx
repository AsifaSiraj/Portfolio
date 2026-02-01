import { Github, Linkedin, Mail, Heart, Code2, ArrowUp, Briefcase, Building2, Award, FolderGit } from 'lucide-react';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AsifaSiraj', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/asifa-siraj-7baa40272/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:as1615533@gmail.com', label: 'Email' },
  ];

  const stats = [
    { icon: Briefcase, label: '1 Year Experience' },
    { icon: Building2, label: '5+ Organizations' },
    { icon: Award, label: '14+ Certifications' },
    { icon: FolderGit, label: '38+ Projects' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-[#050508] border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="inline-block text-2xl font-bold text-gradient mb-4"
            >
              Asifa Siraj
            </a>
            <p className="text-zinc-400 text-sm mb-6">
              Frontend Developer passionate about creating modern, user-friendly web experiences.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-zinc-400 hover:text-indigo-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">More</h4>
            <ul className="space-y-2">
              {quickLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-zinc-400 hover:text-indigo-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Highlights</h4>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-zinc-400">
                  <stat.icon className="w-4 h-4 text-indigo-400" />
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-zinc-500 text-sm text-center sm:text-left">
              &copy; {currentYear} Asifa Siraj. All rights reserved.
            </p>

            {/* Built With */}
            <p className="flex items-center gap-2 text-zinc-500 text-sm">
              Built with{' '}
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> using{' '}
              <Code2 className="w-4 h-4 text-indigo-400" />
              <span className="text-zinc-400">React & Tailwind CSS</span>
            </p>

            {/* Scroll to Top */}
            <button
              onClick={handleScrollToTop}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
