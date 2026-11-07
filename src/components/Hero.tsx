import React from 'react';
import { ArrowDown, ArrowRight, Compass, Sparkles, MapPin, Target, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center overflow-hidden"
    >
      {/* Background Subtle Radial Glow & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-sky-500/10 to-indigo-600/5 blur-[120px] rounded-full dark:opacity-100 opacity-60" />
        <div className="absolute -top-40 right-10 w-[350px] h-[350px] bg-blue-500/10 blur-[90px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Small introduction */}
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400">
                HELLO, I'M PIYUSH KUMAR
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Bihar, India
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-['Outfit'] text-slate-900 dark:text-white leading-[1.1] text-balance">
              Building My Future in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 dark:from-blue-400 dark:via-sky-300 dark:to-indigo-300">
                Technology.
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-200 text-balance leading-relaxed">
              {PERSONAL_INFO.supportingHeadline}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.description}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#education"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-xl shadow-lg shadow-blue-500/25 transition-all"
              >
                <Compass className="w-4 h-4" />
                <span>Explore My Journey</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-300/60 dark:border-slate-700 active:scale-[0.98] rounded-xl transition-all"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Markers & Focus Anchors */}
            <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/80 grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold">
                  Current Status
                </p>
                <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 mt-0.5">
                  Class 10 Student
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold">
                  Academic Ambition
                </p>
                <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 mt-0.5">
                  IIT Bombay
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold">
                  Long-Term Vision
                </p>
                <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 mt-0.5">
                  Tech Enterprise in Bihar
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gradient border */}
              <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-blue-500/40 via-sky-500/20 to-slate-800 shadow-2xl shadow-blue-900/20">
                <div className="rounded-[15px] overflow-hidden bg-slate-950/90 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                  <img
                    src="/src/assets/images/hero_tech_vision_1794039177903.jpg"
                    alt="Futuristic Technology Research & Engineering Visual"
                    className="w-full h-full object-cover object-center filter brightness-95 contrast-105 hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Visual gradient overlay scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent opacity-80" />

                  {/* Minimal authentic badge overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white tracking-wide">
                        Engineering · Hardware · AI
                      </p>
                      <p className="text-[11px] text-slate-300">
                        Future Tech Ecosystem Blueprint
                      </p>
                    </div>
                    <span className="text-[11px] text-blue-400 font-mono">
                      Bihar ➔ Global
                    </span>
                  </div>
                </div>
              </div>

              {/* Subtle back ambient glow */}
              <div className="absolute -inset-4 bg-blue-500/10 blur-xl rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
