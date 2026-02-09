type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
  techStack?: string[]
  thumbnail?: string
}

type WorkExperience = {
  company: string
  video?: string
  thumbnail?: string
  title: string
  start: string
  end: string
  location?: string
  link: string
  id: string
  description?: string
  techStack?: string[]
}

type SocialLink = {
  label: string
  link: string
}

type Education = {
  institution: string
  degree: string
  start: string
  end: string
  id: string
}

type TechSkill = {
  name: string
}

export type { Project, WorkExperience, SocialLink, Education, TechSkill }

export const PROJECTS: Project[] = [
  {
    name: 'Jump',
    description:
      'A Vim-inspired terminal directory navigation tool using Rust and TUI. Enables rapid filesystem traversal through deterministic two-character key sequences (AA, AS, AD...) instead of traditional cd commands. Features cross-platform support (Linux, macOS, WSL, Windows), dual-character labeling with ergonomic home-row keys, walkdir-based traversal with hidden file toggle, and j/k scroll navigation.',
    link: 'https://vimjump.vercel.app',
    video: 'jump.mp4',
    id: 'project-1',
    techStack: [
      'Rust',
      'Ratatui',
      'Crossterm',
      'Walkdir',
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS 4',
      'Shadcn/UI',
      'Cargo',
    ],
    thumbnail: 'jump.png',
  },
  {
    name: 'Spotbuds',
    description:
      'Spotbuds uses the Spotify API to give insights on your top artists, tracks, and genres. Create playlists and share your statistics. View your friends favorite artists and songs!.',
    link: 'https://spotbuds.vercel.app/',
    video: 'spotbuds.mp4',
    id: 'project0',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Spotify API',
      'OAuth',
      'Neon',
      'Prisma',
    ],
    thumbnail: 'spotbuds.png',
  },
  {
    name: 'Macrotrue',
    description:
      'Macrotrue is a platform that curates macro recipes based on your goals and preferences.',
    link: 'https://macrotrue.vercel.app/',
    video: 'macrotrue.mp4',
    id: 'project1',
    techStack: ['Next.js', 'React', 'TypeScript', 'Neon', 'Clerk', 'OpenAI'],
    thumbnail: '',
  },
  {
    name: 'Always',
    description:
      'Full Stack Workout Tracker that helps you track your workouts and progress.',
    link: 'https://alwaysv1.vercel.app/',
    video: 'always.mp4',
    id: 'project2',
    techStack: ['Next.js', 'React', 'TypeScript', 'Supabase'],
    thumbnail: '',
  },
  {
    name: 'TrailTales',
    description:
      'A web app that helps you find the best trails for your next adventure.',
    link: 'https://trailtales.vercel.app/',
    video: 'tt.mp4',
    id: 'project3',
    techStack: ['Next.js', 'React', 'TypeScript'],
    thumbnail: '',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Kontaktsource',
    video: '/ksource.mp4',
    thumbnail: '/ksource.png',
    title: 'Web Developer Intern',
    start: 'June 2025',
    end: 'August 2025',
    location: 'Miami, FL',
    link: 'https://kontaktsource.com',
    id: 'work1',
    description:
      'Shipped UX-focused features that helped increase client acquisition by 13%. Modernized the front-end architecture with responsive, component-driven UI. Led and mentored a 3-person team to deliver high‑quality releases on time. Managed 70+ client relationships, translating requirements into solutions and resolving bugs and requests. Improved legacy code performance, maintainability, and SEO, raising engagement by 68%.',
    techStack: [
      'WordPress',
      'JavaScript',
      'PHP',
      'HTML',
      'Tailwind CSS',
      'Figma',
    ],
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/JoseMaurette1',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/maurette',
  },
]

export const EMAIL = 'josemaurette1234@gmail.com'

export const EDUCATION: Education[] = [
  {
    institution: 'Florida International University',
    degree: 'Masters of Science in Computer Science',
    start: 'Starting Summer 2026',
    end: '',
    id: 'education1',
  },
  {
    institution: 'Florida International University',
    degree: 'Bachelor of Art in Computer Science',
    start: 'August 2022',
    end: 'December 2025',
    id: 'education2',
  },
]

export const TECH_STACK: TechSkill[] = [
  { name: 'Next.js' },
  { name: 'React' },
  { name: 'TypeScript' },
  { name: 'Tailwind CSS' },
  { name: 'Postgresql' },
  { name: 'Node.js' },
  { name: 'Figma' },
  { name: 'Python' },
  { name: 'Rust' },
  { name: 'JavaScript' },
]

export const PROFILE_IMAGE_URL = '/pfp.jpg'

export const RESUME_URL = '/resume.pdf'
