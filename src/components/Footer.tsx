import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-[#070b16] text-slate-400 border-t border-slate-200/20 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Motto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-['Outfit'] font-bold text-xs">
                PK
              </div>
              <span className="font-['Outfit'] font-extrabold text-lg text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <blockquote className="text-sm font-semibold text-slate-200 font-['Outfit']">
              "{PERSONAL_INFO.motto}"
            </blockquote>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {PERSONAL_INFO.brandMessage}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Location: {PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Quick Navigation
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="hover:text-blue-400 transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Connect */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Direct Channels
            </p>
            <div className="flex flex-col space-y-2 text-xs">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span className="break-all">{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Year and Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Piyush Kumar. All personal rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
