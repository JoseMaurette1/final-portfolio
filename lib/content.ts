type Project = {
  name: string
  link: string
  video: string
  id: string
  date: string
}

type SocialLink = {
  label: string
  link: string
}

type Experience = {
  company: string
  role: string
  period: string
  link?: string
}

type Education = {
  institution: string
  degree: string
  period: string
}

export type { Project, SocialLink, Experience, Education }

export const PROJECTS: Project[] = [
  {
    name: 'Jump',
    link: 'https://vimjump.vercel.app',
    video: 'jump.mp4',
    id: 'project-1',
    date: '2026',
  },
  {
    name: 'Macrotrue',
    link: 'https://macrotrue.vercel.app/',
    video: 'macrotrue.mp4',
    id: 'project1',
    date: '2025-2026',
  },
  {
    name: 'Spotbuds',
    link: 'https://spotbuds.vercel.app/',
    video: 'spotbuds.mp4',
    id: 'project0',
    date: '2025',
  },
  {
    name: 'TrailTales',
    link: 'https://trailtales.vercel.app/',
    video: 'tt.mp4',
    id: 'project3',
    date: '2024',
  },
  {
    name: 'Always',
    link: 'https://alwaysv1.vercel.app/',
    video: 'always.mp4',
    id: 'project2',
    date: '2024',
  },
]

export const EXPERIENCE: Experience[] = [
  {
    company: 'Zensah',
    role: 'Agentic AI Engineer Intern',
    period: 'May 2026 — Present',
    link: 'https://zensah.com',
  },
  {
    company: 'Kontaktsource',
    role: 'Fullstack Developer Intern',
    period: 'June 2025 - August 2025',
    link: 'https://kontaktsource.com',
  },
]

export const EDUCATION: Education[] = [
  {
    institution: 'Florida International University',
    degree: 'M.S. Computer Science',
    period: 'May 2026 - Present',
  },
  {
    institution: 'Florida International University',
    degree: 'B.A. Computer Science',
    period: '2022 - 2025',
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

export const RESUME_URL = '/resume.pdf'
