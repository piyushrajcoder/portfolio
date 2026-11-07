import {
  NavItem,
  InfoCard,
  VisionPillar,
  TimelineMilestone,
  SkillItem,
  ProjectItem,
  AchievementItem,
  BlogPost,
} from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'vision', label: 'Vision', href: '#vision' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'achievements', label: 'Achievements', href: '#achievements' },
  { id: 'blog', label: 'Blog', href: '#blog' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const PERSONAL_INFO = {
  name: 'Piyush Kumar',
  role: 'Aspiring Engineer & Future Tech Entrepreneur',
  education: 'Class 10 Student',
  location: 'Bihar, India',
  email: 'piyushraj12345v@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  headline: 'Building My Future in Technology.',
  supportingHeadline:
    'An aspiring engineer, technology enthusiast, and future entrepreneur from Bihar, India.',
  description:
    'Currently exploring technology, programming, and engineering while working towards my dream of studying at IIT Bombay and building innovative Indian technology products.',
  motto: 'Dream Big. Learn Deeply. Build Fearlessly.',
  visionStatement:
    'My dream is to help build a technology ecosystem in India that creates products for the world, with its roots in Bihar.',
  brandMessage:
    'An ambitious young mind from Bihar, working towards a future in engineering, innovation, and technology entrepreneurship.',
};

export const ABOUT_CARDS: InfoCard[] = [
  {
    label: 'Name',
    value: 'Piyush Kumar',
    description: 'Tech enthusiast & future builder',
    iconName: 'User',
  },
  {
    label: 'Education',
    value: 'Class 10',
    description: 'School Education & STEM Foundation',
    iconName: 'GraduationCap',
  },
  {
    label: 'Location',
    value: 'Bihar, India',
    description: 'Rooted locally, aiming globally',
    iconName: 'MapPin',
  },
  {
    label: 'Interests',
    value: 'Technology & Innovation',
    description: 'AI, Computing, Hardware & Startups',
    iconName: 'Cpu',
  },
  {
    label: 'Academic Goal',
    value: 'IIT Bombay',
    description: 'Targeting JEE Main & JEE Advanced',
    iconName: 'Target',
  },
  {
    label: 'Career Goal',
    value: 'Technology Entrepreneurship',
    description: 'Founding a world-class Indian tech enterprise',
    iconName: 'Rocket',
  },
];

export const VISION_PILLARS: VisionPillar[] = [
  {
    id: 'hardware',
    cardTitle: 'HARDWARE INNOVATION',
    category: 'CARD 1',
    description:
      'Designing and manufacturing world-class smartphones, consumer electronics, and next-generation connected devices with Indian engineering excellence.',
    highlights: [
      'Next-generation flagship smartphones',
      'Custom silicon & high-efficiency electronics',
      'Precision industrial design and build standards',
      'Consumer tech hardware ecosystem',
    ],
    imageSrc: '/src/assets/images/hardware_smartphone_concept_1794039179025.jpg',
    status: 'Long-Term Blueprint',
  },
  {
    id: 'software',
    cardTitle: 'SOFTWARE ECOSYSTEM',
    category: 'CARD 2',
    description:
      'Architecting native mobile operating systems, intuitive computer applications, developer platforms, and secure digital service infrastructures.',
    highlights: [
      'Seamless mobile and desktop operating platforms',
      'High-performance productivity and creativity suites',
      'Developer APIs & native app architecture',
      'Privacy-first connected cloud services',
    ],
    imageSrc: '/src/assets/images/software_ecosystem_concept_1794039179026.jpg',
    status: 'Platform Architecture Goal',
  },
  {
    id: 'future-tech',
    cardTitle: 'FUTURE TECHNOLOGIES',
    category: 'CARD 3',
    description:
      'Pioneering artificial intelligence systems, localized intelligent solutions, advanced R&D, and frontier computing technologies solving real human challenges.',
    highlights: [
      'Edge AI & localized intelligence models',
      'Applied machine learning for regional challenges',
      'Advanced robotics & computer vision systems',
      'Research lab fostering Indian scientific talent',
    ],
    imageSrc: '/src/assets/images/future_ai_tech_concept_1794039179495.jpg',
    status: 'Frontier R&D Ambition',
  },
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    id: 'class-10',
    title: 'Class 10 – School Education',
    institutionOrPhase: 'Secondary Schooling & Foundations',
    status: 'current',
    statusLabel: 'Current Milestone',
    periodOrTarget: 'Present Academic Year',
    description:
      'Strengthening core fundamentals in Mathematics, Physics, Chemistry, and Computer Science while exploring software programming and computer architecture.',
    keyFocusAreas: [
      'CBSE / Secondary Curriculum Mastery',
      'Foundational Problem Solving & Algebra',
      'Introduction to Programming Concepts',
    ],
  },
  {
    id: 'jee-main',
    title: 'JEE Main Preparation',
    institutionOrPhase: 'National Engineering Entrance Stage 1',
    status: 'next',
    statusLabel: 'Next Immediate Milestone',
    periodOrTarget: 'Upcoming Target',
    description:
      'Structured preparation for Joint Entrance Examination (Main), cultivating intense speed, accuracy, and deep conceptual clarity across Physics, Chemistry, and Advanced Mathematics.',
    keyFocusAreas: [
      'Rigorous Analytical Problem Solving',
      'Time Management & Speed Drills',
      'National Percentile Target',
    ],
  },
  {
    id: 'jee-advanced',
    title: 'JEE Advanced',
    institutionOrPhase: 'IIT Entrance Examination Stage 2',
    status: 'future',
    statusLabel: 'Future Milestone',
    periodOrTarget: 'Target Phase',
    description:
      'Mastery of multi-concept advanced questions, deep physical intuition, and higher-order mathematical deduction required for securing a top All India Rank (AIR).',
    keyFocusAreas: [
      'Multi-Concept Synthesis',
      'High-Complexity Physics & Calculus',
      'Top Tier National Ranking Target',
    ],
  },
  {
    id: 'iit-bombay',
    title: 'IIT Bombay',
    institutionOrPhase: 'Indian Institute of Technology Bombay',
    status: 'dream',
    statusLabel: 'Dream Institution',
    periodOrTarget: 'Undergraduate Target',
    description:
      'Pursuing an elite engineering degree at IIT Bombay, immersing in world-class research, computing labs, innovative peer circles, and tech incubators.',
    keyFocusAreas: [
      'Computer Science & Engineering Studies',
      'Cutting-Edge Systems & AI Research Labs',
      'Entrepreneurship Cell & Innovation Hubs',
    ],
  },
  {
    id: 'future-company',
    title: 'Indian Technology Enterprise',
    institutionOrPhase: 'Headquarters: Bihar, India',
    status: 'future',
    statusLabel: 'Long-Term Vision',
    periodOrTarget: 'Future Goal',
    description:
      'Founding and scaling a world-class technology company inspired by Apple, Microsoft, and Google—building smartphones, operating systems, and AI systems headquartered in Bihar.',
    keyFocusAreas: [
      'Consumer Electronics & Smartphone Hardware',
      'Indigenous Operating System Architecture',
      'Creating High-Tech R&D Jobs in Bihar',
    ],
  },
];

export const SKILL_ITEMS: SkillItem[] = [
  // Programming
  {
    name: 'Python',
    category: 'programming',
    stage: 'Core Language Fundamentals',
    stageNote: 'Syntax, control flows, data structures, algorithms, and modular scripting.',
    levelBadge: 'Active Study',
  },
  {
    name: 'HTML',
    category: 'programming',
    stage: 'Semantic Web Structure',
    stageNote: 'Semantic elements, DOM hierarchy, accessibility, and clean markup.',
    levelBadge: 'Mastered Fundamentals',
  },
  {
    name: 'CSS',
    category: 'programming',
    stage: 'Responsive Styling & Layouts',
    stageNote: 'Flexbox, CSS Grid, media queries, modern UI aesthetics, and Tailwind CSS.',
    levelBadge: 'Active Practice',
  },
  {
    name: 'JavaScript',
    category: 'programming',
    stage: 'Client-Side Logic & Modern ES6+',
    stageNote: 'Variables, functions, async patterns, DOM manipulation, and dynamic state.',
    levelBadge: 'Active Exploration',
  },

  // Technology
  {
    name: 'Web Development',
    category: 'technology',
    stage: 'Responsive Interface Building',
    stageNote: 'Component-driven frontend design, modern SPA architecture, and user experience.',
    levelBadge: 'Applied Learning',
  },
  {
    name: 'Computer Science',
    category: 'technology',
    stage: 'Foundational Theory',
    stageNote: 'Binary logic, memory hierarchy, operating system basics, and algorithmic thinking.',
    levelBadge: 'Foundational',
  },
  {
    name: 'Artificial Intelligence Fundamentals',
    category: 'technology',
    stage: 'Conceptual Understanding',
    stageNote: 'Machine learning fundamentals, neural network concepts, LLMs, and prompt design.',
    levelBadge: 'Theoretical Study',
  },
  {
    name: 'Software Development',
    category: 'technology',
    stage: 'Project Architecture',
    stageNote: 'Clean code principles, Git version control, modular decomposition, and debugging.',
    levelBadge: 'Growing Practice',
  },

  // Personal Skills
  {
    name: 'Problem Solving',
    category: 'personal',
    stage: 'Analytical Mindset',
    stageNote: 'Deconstructing complex engineering problems into solvable first-principles.',
    levelBadge: 'Core Strength',
  },
  {
    name: 'Logical Thinking',
    category: 'personal',
    stage: 'Structured Reasoning',
    stageNote: 'Mathematical rigor, algorithmic reasoning, and structured hypothesis testing.',
    levelBadge: 'Core Strength',
  },
  {
    name: 'Creativity',
    category: 'personal',
    stage: 'Product & Vision Conception',
    stageNote: 'Imagining novel user experiences, device form-factors, and system solutions.',
    levelBadge: 'Creative Focus',
  },
  {
    name: 'Innovation',
    category: 'personal',
    stage: 'Future Technology Drive',
    stageNote: 'Passion to build impactful solutions with global standards originating from India.',
    levelBadge: 'Guiding Drive',
  },
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'python-algo-lab',
    title: 'Python Algorithmic Logic Suite',
    subtitle: 'Mathematical Computation & Algorithm Exploration',
    description:
      'A collection of structured Python scripts exploring mathematical sequences, prime factorization, sorting algorithms, and CLI utility tools built while studying foundational computer science.',
    technologies: ['Python', 'Algorithms', 'CLI'],
    status: 'In Development',
    category: 'Software & Logic',
    githubUrl: 'https://github.com',
  },
  {
    id: 'bihar-tech-concept',
    title: 'Next-Gen Mobile OS Architecture Blueprint',
    subtitle: 'System Concept & UI Design Study',
    description:
      'Conceptual architectural notes and interface wireframes exploring how a modern mobile operating system could harmonize privacy, hardware-accelerated on-device AI, and minimal distraction.',
    technologies: ['UI/UX Architecture', 'Operating Systems', 'System Design'],
    status: 'Concept Prototype',
    category: 'System Design',
    githubUrl: 'https://github.com',
  },
  {
    id: 'personal-portfolio-web',
    title: 'Personal Technology Portfolio',
    subtitle: 'Modern Minimalist Web Portfolio',
    description:
      'This responsive personal portfolio built with React, TypeScript, and Tailwind CSS, presenting my educational milestones, technical skills, and long-term tech company vision.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    status: 'In Development',
    category: 'Web Platform',
    githubUrl: 'https://github.com',
  },
];

export const AUTHENTIC_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Class 10 Academic Consistency & STEM Dedication',
    organizationOrScope: 'School Academic Foundation',
    category: 'academic',
    year: '2025 – 2026',
    description:
      'Maintained consistent high academic standing with primary emphasis on Mathematics and Physical Sciences, setting strong ground for senior secondary engineering entrance preparation.',
    isMilestone: true,
  },
  {
    id: 'ach-2',
    title: 'Independent Self-Taught Programming Journey',
    organizationOrScope: 'Self-Directed Computer Science Learning',
    category: 'programming',
    year: '2025 – 2026',
    description:
      'Proactively learned Python syntax, web fundamentals (HTML, CSS, JavaScript), and basic algorithms through documentation, online lectures, and hands-on coding experiments.',
    isMilestone: true,
  },
  {
    id: 'ach-3',
    title: 'JEE Main & Advanced Foundational Milestone',
    organizationOrScope: 'IIT-JEE Preparation Track',
    category: 'milestone',
    year: '2026',
    description:
      'Committed to a disciplined self-study and problem-solving schedule tackling advanced Mathematics and Physics fundamentals targeted at IIT Bombay entrance.',
    isMilestone: true,
  },
  {
    id: 'ach-4',
    title: 'Hardware & Smartphone Technology Systems Research',
    organizationOrScope: 'Independent Technology Research',
    category: 'milestone',
    year: '2026',
    description:
      'Deep independent exploration into semiconductor nodes, ARM architectures, camera sensors, and modern smartphone manufacturing pipelines to understand global hardware engineering.',
    isMilestone: false,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'iit-bombay-journey',
    title: 'My IIT Bombay Preparation Journey: Balancing Class 10 & Competitive Foundations',
    slug: 'iit-bombay-preparation-journey',
    readTime: '4 min read',
    category: 'Academic Journey',
    date: 'November 2026',
    excerpt:
      'How I approach daily time management between secondary board studies and early JEE foundation concepts, emphasizing deep conceptual understanding over rote memorization.',
    content: [
      'Preparing for an institution like IIT Bombay while in Class 10 is not about rushing into advanced university textbooks; it is about building an unbreakable foundation in fundamental concepts.',
      'In Mathematics, instead of merely memorizing quadratic formulae or trigonometric identities, I spend time deriving them from first principles. When you understand why a theorem works, complex problem solving becomes an enjoyable puzzle rather than an intimidating obstacle.',
      'My daily routine is split into two focused blocks: the first dedicated to academic school syllabus mastery, and the second reserved for deep analytical thinking, challenging problem sets, and computer science exploration.',
      'The journey requires immense patience, discipline, and emotional balance. Success in JEE Advanced is about depth, persistence, and continuous self-correction.'
    ],
    tags: ['IIT Bombay', 'JEE Preparation', 'Study Routine', 'Mathematics'],
  },
  {
    id: 'learning-programming',
    title: 'Learning Programming: Why Python and Web Fundamentals Sparked My Passion',
    slug: 'learning-programming-python-web',
    readTime: '3 min read',
    category: 'Software',
    date: 'October 2026',
    excerpt:
      'Reflections on writing my first lines of code, the clarity of Python, and the realization that software is a tool for turning human thoughts into functioning tools.',
    content: [
      'The moment a program executes exactly as you instructed it is magical. For me, that realization came when I wrote my first Python script to automate a multi-step calculation.',
      'Python taught me the elegance of readable syntax and logical sequencing. Unlike natural languages where ambiguity often goes unnoticed, computer code demands total clarity: every variable name, condition, and loop must have an unambiguous purpose.',
      'Transitioning into HTML, CSS, and JavaScript opened my eyes to interface design. Code is not just terminal outputs—it is a visual canvas where technology meets human interaction.',
      'As a high school student, coding provides immediate creative agency: you do not need permission or heavy capital to invent an algorithm or build an interactive experience.'
    ],
    tags: ['Programming', 'Python', 'Web Development', 'Computer Science'],
  },
  {
    id: 'smartphone-hardware-vision',
    title: 'Smartphone Technology: Why India Needs Native Hardware Innovation',
    slug: 'smartphone-technology-india-hardware',
    readTime: '5 min read',
    category: 'Hardware & Devices',
    date: 'September 2026',
    excerpt:
      'Analyzing why consumer hardware engineering matters, and how indigenous smartphone design and manufacturing can transform India from a consumer market into a technology creator.',
    content: [
      'Smartphones are the most intimate computer humanity has ever built. They combine silicon design, precision optics, material science, battery chemistry, and operating system kernels in a pocket-sized form factor.',
      'Today, while millions of smartphones are assembled in India, the core intellectual property—the custom silicon, display panels, image signal processors, and operating systems—remains dominated by companies abroad.',
      'My long-term dream is to see an Indian company pioneer flagship consumer electronics that win not by cutting corners, but by offering uncompromising craftsmanship, bespoke industrial design, and seamless software integration.',
      'Achieving this requires deep engineering foundations: mastering electronics, microprocessors, materials engineering, and system-level software at places like IIT Bombay.'
    ],
    tags: ['Smartphones', 'Hardware Innovation', 'Indian Tech', 'Consumer Electronics'],
  },
  {
    id: 'ai-democratization',
    title: 'Democratizing Artificial Intelligence: Perspectives from an Aspiring Technologist',
    slug: 'democratizing-artificial-intelligence',
    readTime: '4 min read',
    category: 'Artificial Intelligence',
    date: 'August 2026',
    excerpt:
      'Understanding foundational AI principles and why edge intelligence and localized language models are critical for solving real problems across India.',
    content: [
      'Artificial intelligence is reshaping computing paradigms. From speech transcription to medical diagnostics, machine learning models are becoming fundamental building blocks.',
      'However, AI is only as valuable as the human challenges it resolves. For a country as diverse as India, intelligence cannot remain locked behind high-latency cloud servers or premium subscription walls.',
      'Edge computing—running neural network inference directly on microprocessors inside handheld devices without needing constant high-speed internet—will be pivotal.',
      'By studying the underlying linear algebra, probability, and computer architecture early on, I hope to contribute to building reliable, accessible AI technologies that empower communities.'
    ],
    tags: ['Artificial Intelligence', 'Edge AI', 'Machine Learning', 'Future Tech'],
  },
  {
    id: 'vision-for-bihar',
    title: 'Building Tech Roots in Bihar: Turning Regional Potential into Global Excellence',
    slug: 'vision-for-bihar-technology-roots',
    readTime: '4 min read',
    category: 'Vision & Startups',
    date: 'July 2026',
    excerpt:
      'Why I want my future technology company to be headquartered in Bihar, inspiring youth and demonstrating that world-class products can originate anywhere.',
    content: [
      'Historically, Bihar has been a cradle of knowledge—home to ancient universities like Nalanda and Vikramshila that attracted scholars from across the world.',
      'In modern times, students from Bihar consistently excel in competitive examinations like JEE and Civil Services through sheer grit and resilience. Yet, after graduating, the talent naturally migrates to Silicon Valley, Bengaluru, or Hyderabad.',
      'My ultimate ambition is to reverse this paradigm: to return to Bihar after rigorous engineering education, and establish a world-class technology company right here.',
      'Imagine hardware R&D labs, cleanroom manufacturing facilities, and software development centers in Bihar building devices used by millions across Tokyo, Berlin, and San Francisco. With determination and deep engineering excellence, this ambition is achievable.'
    ],
    tags: ['Bihar', 'Entrepreneurship', 'Tech Ecosystem', 'Make in India'],
  },
];
