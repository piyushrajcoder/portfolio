import React from 'react';
import {
  GraduationCap,
  Calendar,
  CheckCircle,
  Clock,
  Compass,
  Star,
  Rocket,
  ArrowRight,
} from 'lucide-react';
import { TIMELINE_MILESTONES } from '../data/portfolioData';
import { TimelineMilestone } from '../types';

export const EducationTimeline: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Academic Roadmap
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Clear Milestone Distinction
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-['Outfit'] text-slate-900 dark:text-white mb-6">
            Education & Academic Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-balance">
            Every major technological endeavor starts with deep academic rigor. Here is my
            sequential roadmap—clearly separating my current active secondary school milestones
            from my rigorous upcoming targets and lifelong entrepreneurial ambitions.
          </p>
        </div>

        {/* Timeline Indicator Legend */}
        <div className="mb-12 flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-400 p-4 rounded-xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="font-semibold text-slate-900 dark:text-white">Active / Current Phase</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="font-semibold text-slate-900 dark:text-white">Immediate Next Target</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-indigo-500" />
            <span className="font-semibold text-slate-900 dark:text-white">Future Milestone</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-500" />
            <span className="font-semibold text-slate-900 dark:text-white">Dream Institution & Vision</span>
          </div>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {TIMELINE_MILESTONES.map((milestone, idx) => {
            const isCurrent = milestone.status === 'current';
            const isNext = milestone.status === 'next';
            const isDream = milestone.status === 'dream';

            let dotColor = 'bg-slate-400 dark:bg-slate-600';
            let badgeBg = 'text-slate-600 dark:text-slate-400';

            if (isCurrent) {
              dotColor = 'bg-blue-500 ring-4 ring-blue-500/20';
              badgeBg = 'text-blue-600 dark:text-blue-400 font-semibold';
            } else if (isNext) {
              dotColor = 'bg-amber-500 ring-4 ring-amber-500/20';
              badgeBg = 'text-amber-600 dark:text-amber-400 font-semibold';
            } else if (isDream) {
              dotColor = 'bg-purple-500 ring-4 ring-purple-500/20';
              badgeBg = 'text-purple-600 dark:text-purple-400 font-semibold';
            } else {
              dotColor = 'bg-indigo-500 ring-4 ring-indigo-500/20';
              badgeBg = 'text-indigo-600 dark:text-indigo-400 font-semibold';
            }

            return (
              <div key={milestone.id} className="relative group">
                {/* Node on the line */}
                <div
                  className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full transition-transform group-hover:scale-125 ${dotColor}`}
                />

                {/* Content Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 shadow-sm transition-all duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className={`text-xs uppercase tracking-wider ${badgeBg}`}>
                      {milestone.statusLabel}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {milestone.periodOrTarget}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-slate-900 dark:text-white mb-1">
                    {milestone.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                    {milestone.institutionOrPhase}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {milestone.description}
                  </p>

                  {/* Key Focus Points */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                      Key Focus Points
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {milestone.keyFocusAreas.map((focus, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
