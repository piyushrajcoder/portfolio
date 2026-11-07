export type ThemeMode = 'dark' | 'light';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface InfoCard {
  label: string;
  value: string;
  description?: string;
  iconName: string;
}

export interface VisionPillar {
  id: string;
  cardTitle: string;
  category: string;
  description: string;
  highlights: string[];
  imageSrc: string;
  status: string;
}

export interface TimelineMilestone {
  id: string;
  title: string;
  institutionOrPhase: string;
  status: 'current' | 'next' | 'future' | 'dream';
  statusLabel: string;
  periodOrTarget: string;
  description: string;
  keyFocusAreas: string[];
}

export interface SkillItem {
  name: string;
  category: 'programming' | 'technology' | 'personal';
  stage: string;
  stageNote: string;
  levelBadge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  status: 'In Development' | 'Concept Prototype' | 'Research Phase';
  githubUrl?: string;
  liveUrl?: string;
  imageSrc?: string;
  category: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organizationOrScope: string;
  category: 'academic' | 'programming' | 'milestone';
  year: string;
  description: string;
  isMilestone: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  readTime: string;
  category: string;
  date: string;
  excerpt: string;
  content: string[];
  tags: string[];
}
