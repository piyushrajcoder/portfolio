import React from 'react';
import {
  User,
  GraduationCap,
  MapPin,
  Cpu,
  Target,
  Rocket,
  Code2,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react';
import { ABOUT_CARDS, PERSONAL_INFO } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  User: <User className="w-5 h-5 text-blue-500" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-indigo-500" />,
  MapPin: <MapPin className="w-5 h-5 text-sky-500" />,
  Cpu: <Cpu className="w-5 h-5 text-blue-400" />,
  Target: <Target className="w-5 h-5 text-red-400" />,
  Rocket: <Rocket className="w-5 h-5 text-amber-500" />,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background subtleties */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              About Me
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Foundational Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-['Outfit'] text-slate-900 dark:text-white mb-6">
            Curiosity Today. Innovation Tomorrow.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-balance">
            I am a Class 10 student from Bihar, India with an insatiable passion for how
            machines think, how software scales, and how hardware connects people. Rather than
            waiting for college to start exploring, I spend my self-study hours dissecting
            programming languages, understanding smartphone architectures, and laying rigorous
            mathematical foundations for my ambition to study at IIT Bombay.
          </p>
        </div>

        {/* Narrative & Philosophy Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          <div className="lg:col-span-8 p-8 rounded-2xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-['Outfit'] text-slate-900 dark:text-white">
                My Philosophy: First-Principles & Engineering Grit
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Coming from Bihar, I carry the inspiration of generations who turned limited
                resources into intellectual excellence. I believe deep engineering knowledge
                is the single greatest equalizer. Whether it is solving multi-step calculus
                problems or writing modular Python logic, I focus on fundamental mechanics rather
                than shortcuts.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                My dream is not just to secure an engineering seat, but to emerge as a
                technologist capable of founding an Indian consumer technology giant that competes
                head-to-head with Apple, Microsoft, and Google—rooted right here in Bihar.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Analytical & Mathematical Rigor</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Hands-on Code Exploration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Hardware & Consumer Tech Devotion</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 via-slate-900/40 to-slate-900/60 dark:bg-gradient-to-br dark:from-blue-950/40 dark:via-slate-900/70 dark:to-[#0B1020] border border-blue-500/20 dark:border-blue-500/20 flex flex-col justify-center text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-500 mb-4">
              <Lightbulb className="w-5 h-5" />
            </div>
            <p className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
              Core Guiding Principle
            </p>
            <blockquote className="text-lg font-bold font-['Outfit'] text-slate-900 dark:text-white leading-snug mb-3">
              "{PERSONAL_INFO.motto}"
            </blockquote>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Every day spent mastering a concept in physics or writing cleaner code is a step
              toward creating technology that shapes India's future.
            </p>
          </div>
        </div>

        {/* The 6 Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ABOUT_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {iconMap[card.iconName] || <Cpu className="w-5 h-5 text-blue-500" />}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    {card.label}
                  </p>
                  <p className="text-base sm:text-lg font-bold font-['Outfit'] text-slate-900 dark:text-white mt-0.5">
                    {card.value}
                  </p>
                </div>
              </div>
              {card.description && (
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                  {card.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
