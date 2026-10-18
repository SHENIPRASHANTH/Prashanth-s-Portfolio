/**
 * Central portfolio data for Prashanth.
 * Keep the design and motion intact, while updating all personal facts here.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Sheni Prashanth',
  displayName: 'Prashanth',
  firstName: 'PRASHANTH',
  seriesTag: 'PORTFOLIO',
  originalLabel: 'A PRASHANTH PORTFOLIO',
  role: 'Associate Software Engineer',
  tagline: ['Associate Software Engineer', 'Java • Spring Boot', 'AWS • AI Engineering'],
  intro:
    'Associate Software Engineer focused on Java, Spring Boot, microservices, AWS, and cloud-native engineering with an interest in system design and AI-driven application development.',
  location: 'Bengaluru, India',
  email: 'prashanth20cm022@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/prs1028/',
    github: 'https://github.com/SHENIPRASHANTH',
  },
  resumePdf: '/assets/Prashanth_Resume.pdf',
  portrait: {
    src: '/assets/prashanth-portrait.png',
    srcSet: '/assets/prashanth-portrait.png 1x',
    alt: 'Prashanth portrait',
  },
  interests: ['Java', 'Spring Boot', 'Microservices', 'AWS', 'Docker', 'System Design', 'AI Engineering'],
};

export const education: { school: string; place: string; degree: string; period: string; score: string }[] = [
  {
    school: 'Vasavi College of Engineering',
    place: '',
    degree: 'B.E. in Information Technology',
    period: '2023 – 2026',
    score: 'CGPA: 8.60',
  },
  {
    school: 'Sanjay Gandhi Memorial Polytechnic',
    place: '',
    degree: 'Diploma in Computer Engineering',
    period: '2020 – 2023',
    score: 'CGPA: 9.15',
  },
];

export const experience = [
  {
    company: 'Relanto Global',
    role: 'Associate Software Engineer',
    place: 'Bengaluru, India',
    period: '1 July 2026 – Present',
    points: ['Associate Software Engineer at Relanto Global.'],
  },
  {
    company: 'DBS Tech India',
    role: 'Software Engineering Intern (Apprenticeship)',
    place: 'Bengaluru, India',
    period: 'June 2025 – December 2025',
    points: ['Software Engineering Intern (Apprenticeship) at DBS Tech India.'],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'lifelink-organ-donation-platform',
    title: 'LifeLink – Organ Donation Platform',
    year: '—',
    genre: 'React.js • Node.js • Express.js • Neo4j',
    logline: 'Graph-based donor-recipient matching platform designed for efficient and relationship-driven coordination.',
    stack: ['React.js', 'Node.js', 'Express.js', 'Neo4j'],
    build: [
      'Designed a donor-recipient matching platform using graph database relationships and Neo4j.',
      'Developed RESTful backend APIs using Node.js and Express.js.',
      'Optimized database queries for datasets containing 1,000+ records and supported match response times under 10 seconds.',
      'Tested matching workflows with multiple scenarios and improved backend maintainability through modular design.',
    ],
    features: [
      'Graph-based donor-recipient matching',
      'RESTful API layer for platform workflows',
      'Query optimization for large datasets',
      'Modular backend design for maintainability',
    ],
    metrics: [
      { value: '1,000+', label: 'records optimized' },
      { value: '<10s', label: 'match response' },
    ],
    palette: { from: '#081a18', via: '#0d544a', to: '#050b0d', accent: '#46e3a8' },
    motif: 'flow',
  },
  {
    id: 'vasavi-campus-mentorship-platform',
    title: 'Vasavi Campus Mentorship Platform',
    year: '—',
    genre: 'React.js • Node.js • Express.js • MongoDB',
    logline: 'Full-stack mentorship platform for managing mentors, mentees, roles, and coordination workflows.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    build: [
      'Developed a full-stack mentor-mentee management platform with authentication and role-based dashboards.',
      'Implemented backend APIs, database integration, and responsive application interfaces.',
      'Streamlined mentorship coordination workflows, reducing manual coordination effort by approximately 50%.',
    ],
    features: [
      'Role-based mentor and mentee workflows',
      'Authentication and dashboard access management',
      'Responsive full-stack interface',
      'Reduced manual coordination effort',
    ],
    metrics: [{ value: '~50%', label: 'coordination effort reduction' }],
    palette: { from: '#130824', via: '#4a1d72', to: '#07060d', accent: '#b98bff' },
    motif: 'tenants',
  },
  {
    id: 'edutrack-course-enrollment-system',
    title: 'EduTrack Course Enrollment System',
    year: '—',
    genre: 'Java • MySQL',
    logline: 'Java-based course enrollment application focused on secure authentication and reliable CRUD-based operations.',
    stack: ['Java', 'MySQL'],
    build: [
      'Developed a Java-based application for course enrollment with authentication and CRUD operations.',
      'Implemented database operations and used debugging and testing to improve application reliability.',
    ],
    features: [
      'Authentication and enrollment flows',
      'CRUD-based course management',
      'Database-backed operations',
      'Debugging and validation for reliability',
    ],
    metrics: [],
    palette: { from: '#1d1204', via: '#7d4f10', to: '#090807', accent: '#ffb547' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Core languages in use',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Core' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'Python', mono: 'Py' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side engineering',
    skills: [
      { name: 'Spring Boot', mono: 'Sb' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Microservices', mono: 'Ms' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'User-facing interfaces',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'Angular', mono: 'An' },
    ],
  },
  {
    id: 'data',
    title: 'Data & Infra',
    subtitle: 'Cloud and delivery workflows',
    skills: [
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'AWS', mono: 'Aw' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Git', mono: 'Gt' },
      { name: 'CI/CD', mono: 'Ci' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Learning and design areas',
    skills: [
      { name: 'AI Engineering', mono: 'Ai' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'Redis', mono: 'Rd' },
      { name: 'System Design', mono: 'Sd' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Java: ['Core backend language focus'],
  JavaScript: ['Web application and frontend workflows'],
  Python: ['Complementary scripting and tooling'],
  SQL: ['Relational data handling'],
  'Spring Boot': ['Backend framework focus'],
  'Node.js': ['Server-side runtime experience'],
  'Express.js': ['API development experience'],
  'REST APIs': ['Service integration and endpoint design'],
  Microservices: ['Distributed systems and scalable architecture'],
  React: ['User-facing frontend work'],
  Angular: ['Frontend framework experience'],
  MongoDB: ['NoSQL data storage interest'],
  AWS: ['Cloud and deployment platform focus'],
  Docker: ['Containerization and environment consistency'],
  Git: ['Version control workflow'],
  'CI/CD': ['Delivery and deployment automation'],
  'AI Engineering': ['Learning and workflow interest'],
  RAG: ['Retrieval-augmented generation interest'],
  Redis: ['Caching and data-access performance patterns'],
  'System Design': ['Architecture and scalability thinking'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Academic Foundation',
    period: '2020 – 2026',
    synopsis: 'Academic foundation in information technology and computer engineering, with strong performance across diploma and undergraduate study.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Vasavi College of Engineering',
        description: 'B.E. in Information Technology — CGPA: 8.60',
        tags: ['B.E. in Information Technology', '2023 – 2026'],
        runtime: '2023 – 2026',
        palette: ocean,
      },
      {
        code: 'S01 E02',
        title: 'Sanjay Gandhi Memorial Polytechnic',
        description: 'Diploma in Computer Engineering — CGPA: 9.15',
        tags: ['Diploma in Computer Engineering', '2020 – 2023'],
        runtime: '2020 – 2023',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Current Focus',
    period: '2026 – Present',
    synopsis: 'Associate Software Engineer at Relanto Global, working with backend engineering, Java-based application development, and cloud-focused delivery work.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Relanto Global',
        description: 'Associate Software Engineer at Relanto Global, Bengaluru, India.',
        tags: ['Relanto Global', 'Java', 'Spring Boot'],
        runtime: '1 July 2026 – Present',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Early Experience',
    period: '2025',
    synopsis: 'Software Engineering Intern (Apprenticeship) at DBS Tech India with a focus on engineering fundamentals and application development.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'DBS Tech India',
        description: 'Software Engineering Intern (Apprenticeship) at DBS Tech India from June 2025 to December 2025.',
        tags: ['DBS', 'Internship', 'Apprenticeship'],
        runtime: 'Jun 2025 – Dec 2025',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: 'Core Stack',
    period: 'Java • Spring Boot • AWS',
    synopsis: 'Focused on core backend engineering across Java, Spring Boot, REST APIs, MongoDB, cloud, and delivery workflows.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Java & Spring',
        description: 'Core work around Java, Spring Boot, REST APIs, and microservices-oriented backend engineering.',
        tags: ['Java', 'Spring Boot', 'Microservices'],
        runtime: 'Core stack',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'Cloud & Delivery',
        description: 'Working with AWS, Docker, Git, and CI/CD for modern deployment and delivery workflows.',
        tags: ['AWS', 'Docker', 'CI/CD'],
        runtime: 'Delivery',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: 'Learning & Growth',
    period: 'AI • RAG • Redis',
    synopsis: 'Continuing learning across AI engineering, retrieval workflows, Redis, and system design interests.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'AI Engineering',
        description: 'Exploring AI engineering and applied retrieval-based workflows as part of ongoing learning.',
        tags: ['AI Engineering', 'RAG', 'Redis'],
        runtime: 'Learning',
        palette: amber,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary focus', title: 'Java', detail: 'Core backend language and service development', palette: amber },
  { label: 'Framework', title: 'Spring Boot', detail: 'API and microservice architecture', palette: crimson },
  { label: 'Cloud', title: 'AWS', detail: 'Deployment and platform awareness', palette: ocean },
  { label: 'Containerization', title: 'Docker', detail: 'Environment consistency and delivery', palette: violet },
  { label: 'System design', title: 'Microservices', detail: 'Scalable service-oriented thinking', palette: jade },
  { label: 'Frontend', title: 'React', detail: 'Modern UI and product experiences', palette: amber },
  { label: 'Data', title: 'MongoDB', detail: 'NoSQL data store work and storage patterns', palette: crimson },
  { label: 'Delivery', title: 'CI/CD', detail: 'Automation and release workflows', palette: ocean },
  { label: 'Architecture', title: 'System Design', detail: 'Scalability and resilience thinking', palette: jade },
  { label: 'Learning', title: 'AI Engineering', detail: 'Exploring AI-driven workflows and retrieval patterns', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Profile',
    title: 'Prashanth',
    lines: ['Associate Software Engineer', 'Bengaluru, India'],
    chips: ['Java', 'Spring Boot', 'AWS'],
  },
  {
    kicker: 'Skills',
    title: 'Core stack',
    lines: ['Java · Spring Boot · JavaScript', 'Node.js · Express.js · REST APIs'],
    chips: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'React'],
  },
  {
    kicker: 'Data & cloud',
    title: 'Delivery focus',
    lines: ['MongoDB · AWS · Docker', 'Git · CI/CD · Microservices'],
    chips: ['MongoDB', 'AWS', 'Docker', 'CI/CD'],
  },
  {
    kicker: 'Learning',
    title: 'AI & systems',
    lines: ['AI Engineering', 'RAG · Redis · System Design'],
    chips: ['AI Engineering', 'RAG', 'Redis', 'System Design'],
  },
  {
    kicker: 'Experience',
    title: 'Relanto Global',
    lines: ['Associate Software Engineer', 'Current role — 1 July 2026 onward'],
  },
  {
    kicker: 'Previous work',
    title: 'DBS Tech India',
    lines: ['Software Engineering Intern (Apprenticeship)', 'June 2025 – December 2025'],
  },
  {
    kicker: 'Focus',
    title: 'Backend engineering',
    lines: ['Java · Spring Boot · Microservices', 'Cloud-native and delivery workflows'],
  },
];

export type ProfileId = 'prashanth' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'prashanth',
    name: 'Prashanth',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume and skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • profile & focus', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: projects.length ? `${projects.length} verified project${projects.length === 1 ? '' : 's'}` : 'Projects coming soon', palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Core strengths and interests', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Highlights', meta: achievements.length || certifications.length ? `${achievements.length} moments • ${certifications.length} credentials` : 'No awards or credentials yet', palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
