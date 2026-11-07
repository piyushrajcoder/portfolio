import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Vision } from './components/Vision';
import { EducationTimeline } from './components/EducationTimeline';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeMode } from './types';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pk_theme_mode');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark'; // Default specified in prompt (#0B1020)
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      document.body.className =
        "bg-[#0B1020] text-white selection:bg-blue-500/30 selection:text-blue-200 transition-colors duration-200 font-['Plus_Jakarta_Sans',sans-serif] antialiased";
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      document.body.className =
        "bg-[#F8FAFC] text-slate-900 selection:bg-blue-500/20 selection:text-blue-900 transition-colors duration-200 font-['Plus_Jakarta_Sans',sans-serif] antialiased";
    }
    localStorage.setItem('pk_theme_mode', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0B1020] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Sticky Top Bar Contract Navigation */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Vision />
        <EducationTimeline />
        <Skills />
        <Projects />
        <Achievements />
        <Blog />
        <Contact />
      </main>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
