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

export type { Project, SocialLink }

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
