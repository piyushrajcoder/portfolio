import React, { useState } from 'react';
import {
  Award,
  Medal,
  CheckCircle2,
  FileCheck2,
  PlusCircle,
  Sparkles,
  ShieldCheck,
  GraduationCap,
} from 'lucide-react';
import { AUTHENTIC_ACHIEVEMENTS } from '../data/portfolioData';
import { AchievementItem } from '../types';

export const Achievements: React.FC = () => {
  const [achievements, setAchievements] = useState<AchievementItem[]>(AUTHENTIC_ACHIEVEMENTS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newScope, setNewScope] = useState('');
  const [newCategory, setNewCategory] = useState<'academic' | 'programming' | 'milestone'>('academic');
  const [newYear, setNewYear] = useState('2026');
  const [newDesc, setNewDesc] = useState('');

  const handleAddAchievement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDesc.trim()) return;

    const newItem: AchievementItem = {
      id: `ach-${Date.now()}`,
      title: newTitle.trim(),
      organizationOrScope: newScope.trim() || 'Verified Milestone',
      category: newCategory,
      year: newYear.trim() || '2026',
      description: newDesc.trim(),
      isMilestone: true,
    };

    setAchievements([newItem, ...achievements]);
    setNewTitle('');
    setNewScope('');
    setNewDesc('');
    setIsModalOpen(false);
  };

  return (
    <section id="achievements" className="py-24 bg-slate-50/50 dark:bg-[#0B1020]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Honors & Verified Growth
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
              <span className="text-xs text-slate-500 dark:text-slate-400">
                100% Authentic Milestones
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-['Outfit'] text-slate-900 dark:text-white mb-4">
              Achievements & Milestones
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Rooted in honesty and self-discipline. I choose not to fabricate credentials or
              fake ranks. Every record listed here reflects genuine study milestones, self-taught
              coding consistency, and academic commitment.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-[#111827] hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300/80 dark:border-slate-700 rounded-xl transition-all shadow-sm shrink-0 self-start md:self-auto"
          >
            <PlusCircle className="w-4 h-4 text-blue-500" />
            <span>Add Verified Milestone</span>
          </button>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 shadow-sm transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <Medal className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-['Outfit'] text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>

                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                  {item.organizationOrScope}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Verified Personal Track Record</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Upcoming Olympiads & Certifications */}
        <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 shrink-0 mt-0.5 sm:mt-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                Upcoming Academic Contests & Coding Certifications
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Olympiad ranks, competitive coding ratings, and official credentials will be logged here with certificate verification links as they are earned.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-blue-600 dark:text-blue-400 whitespace-nowrap">
            Status: On Track
          </span>
        </div>
      </div>

      {/* Add Achievement Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-6 shadow-2xl z-10">
            <h3 className="text-lg font-bold font-['Outfit'] text-slate-900 dark:text-white mb-2">
              Add Verified Achievement
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Record a newly achieved competition result, Olympiad milestone, or certificate.
            </p>

            <form onSubmit={handleAddAchievement} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Science Olympiad State Finalist"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Organization / Scope
                </label>
                <input
                  type="text"
                  placeholder="e.g. National Science Olympiad / School Level"
                  value={newScope}
                  onChange={(e) => setNewScope(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) =>
                      setNewCategory(e.target.value as 'academic' | 'programming' | 'milestone')
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="academic">Academic</option>
                    <option value="programming">Programming</option>
                    <option value="milestone">Milestone</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Year
                  </label>
                  <input
                    type="text"
                    value={newYear}
                    onChange={(e) => setNewYear(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Details of the achievement..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                >
                  Add Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
