import React from 'react';
import { Smartphone, Layers, Cpu, Sparkles, Globe2, ArrowRight } from 'lucide-react';
import { VISION_PILLARS, PERSONAL_INFO } from '../data/portfolioData';

const pillarIcons: Record<string, React.ReactNode> = {
  hardware: <Smartphone className="w-5 h-5 text-blue-400" />,
  software: <Layers className="w-5 h-5 text-sky-400" />,
  'future-tech': <Cpu className="w-5 h-5 text-indigo-400" />,
};

export const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-24 bg-slate-50/50 dark:bg-[#0B1020]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Future Enterprise Blueprint
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Long-Term Ambition
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-['Outfit'] text-slate-900 dark:text-white mb-6">
            From Bihar to the Global Technology Stage.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-balance">
            Inspired by the transformative impact of Apple, Microsoft, and Google, my long-term
            vision is to establish a world-class Indian technology enterprise headquartered in
            Bihar. This blueprint outlines the three foundational pillars I aim to develop in the
            decades ahead after rigorous engineering education at IIT Bombay.
          </p>
        </div>

        {/* 3 Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {VISION_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="group rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Card Visual Header */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                <img
                  src={pillar.imageSrc}
                  alt={pillar.cardTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />

                {/* Unboxed Metadata Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-mono font-semibold tracking-wider text-blue-300 drop-shadow">
                    {pillar.category}
                  </span>
                  <span className="text-[11px] text-slate-300 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    {pillar.status}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      {pillarIcons[pillar.id]}
                    </div>
                    <h3 className="text-lg font-bold font-['Outfit'] text-slate-900 dark:text-white tracking-tight">
                      {pillar.cardTitle}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 dark:border-slate-800/80 pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                      Target Focus Areas
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      {pillar.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-500 font-bold mt-0.5">·</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span>Vision Horizon</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Post-IIT Foundation
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Powerful Anchor Quote Statement */}
        <div className="relative rounded-2xl overflow-hidden p-8 sm:p-12 bg-gradient-to-r from-blue-900/30 via-slate-900/60 to-indigo-900/30 border border-blue-500/30 text-center shadow-xl">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              <Globe2 className="w-4 h-4" />
              <span>The Core Commitment</span>
            </div>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold font-['Outfit'] text-slate-900 dark:text-white leading-snug">
              "{PERSONAL_INFO.visionStatement}"
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Presenting my aspirations transparently: this is not what I have already
              built, but the monumental mission that guides my every study session, line of code,
              and problem set.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
