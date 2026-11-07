import React, { useState } from 'react';
import {
  Code,
  Terminal,
  Cpu,
  Brain,
  Layers,
  Sparkles,
  Lightbulb,
  Workflow,
  PlusCircle,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { SKILL_ITEMS } from '../data/portfolioData';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'programming' | 'technology' | 'personal'>('all');
  const [skillsList, setSkillsList] = useState<SkillItem[]>(SKILL_ITEMS);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillCategory, setNewSkillCategory] = useState<'programming' | 'technology' | 'personal'>('programming');
  const [newSkillStage, setNewSkillStage] = useState('');
  const [newSkillNote, setNewSkillNote] = useState('');

  const filteredSkills =
    activeTab === 'all'
      ? skillsList
      : skillsList.filter((s) => s.category === activeTab);

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim() || !newSkillStage.trim()) return;

    const newSkill: SkillItem = {
      name: newSkillName.trim(),
      category: newSkillCategory,
      stage: newSkillStage.trim(),
      stageNote: newSkillNote.trim() || 'Actively studying and applying core concepts.',
      levelBadge: 'Active Study',
    };

    setSkillsList([newSkill, ...skillsList]);
    setNewSkillName('');
    setNewSkillStage('');
    setNewSkillNote('');
    setIsAddModalOpen(false);
  };

  return (
    <section id="skills" className="py-24 bg-slate-50/50 dark:bg-[#0B1020]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Competencies & Exploration
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Authentic Progression
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-['Outfit'] text-slate-900 dark:text-white mb-4">
              Skills & Engineering Foundation
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Transparently displaying the programming languages, computer science domains, and
              analytical capabilities I have studied and continue to develop—grounded in real
              comprehension without inflated numbers.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-[#111827] hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300/80 dark:border-slate-700 rounded-xl transition-all shadow-sm shrink-0 self-start md:self-auto"
          >
            <PlusCircle className="w-4 h-4 text-blue-500" />
            <span>Add / Update Skill</span>
          </button>
        </div>

        {/* Filter Tabs (Interactive Segmented Control) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-slate-200/60 dark:bg-slate-900/80 rounded-xl border border-slate-300/50 dark:border-slate-800/80 max-w-fit">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'all'
                ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All Competencies ({skillsList.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('programming')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'programming'
                ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Programming
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('technology')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'technology'
                ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Technology & CS
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('personal')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'personal'
                ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Personal & Analytical
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono font-medium">
                    {skill.category}
                  </span>
                  {skill.levelBadge && (
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      {skill.levelBadge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold font-['Outfit'] text-slate-900 dark:text-white mb-2">
                  {skill.name}
                </h3>

                <p className="text-xs font-semibold text-slate-700 dark:text-slate-200 mb-2">
                  {skill.stage}
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {skill.stageNote}
                </p>
              </div>

              {/* Learning State Bar without fake % */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                <BookOpen className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>Verified Study Curriculum</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add / Update Skill Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsAddModalOpen(false)}
          />
          <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-6 shadow-2xl z-10">
            <h3 className="text-lg font-bold font-['Outfit'] text-slate-900 dark:text-white mb-2">
              Update / Add Skill
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Add a new skill or update your active learning track as your technical exploration progresses.
            </p>

            <form onSubmit={handleAddSkill} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Skill Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. C++ or Data Structures"
                  value={newSkillName}
                  onChange={(e) => setNewSkillName(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Category
                </label>
                <select
                  value={newSkillCategory}
                  onChange={(e) =>
                    setNewSkillCategory(
                      e.target.value as 'programming' | 'technology' | 'personal'
                    )
                  }
                  className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="programming">Programming</option>
                  <option value="technology">Technology & CS</option>
                  <option value="personal">Personal & Analytical</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Current Progression Stage
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Algorithmic Thinking & Pointers"
                  value={newSkillStage}
                  onChange={(e) => setNewSkillStage(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Learning Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Short note on what you are practicing or building..."
                  value={newSkillNote}
                  onChange={(e) => setNewSkillNote(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                >
                  Save Skill
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
