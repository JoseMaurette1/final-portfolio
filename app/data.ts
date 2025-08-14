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

export const PROJECTS: Project[] = [
  {
    name: 'Macrotrue',
    description:
      'Macrotrue is a platform that curates macro recipes based on your goals and preferences.',
    link: 'https://macrotrue.vercel.app/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    thumbnail: '',
  },
  {
    name: 'Always',
    description: 'Full Stack Workout Tracker that helps you track your workouts and progress.',
    link: 'https://alwaysv1.vercel.app/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    thumbnail: '',
  },
  {
    name: 'TrailTales',
    description: 'A web app that helps you find the best trails for your next adventure.',
    link: 'https://trailtales.vercel.app/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project3',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    thumbnail: '',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Kontaktsource',
    video: '/ksource.mp4',
    thumbnail: '/ksource.png',
    title: 'Lead Developer Intern',
    start: 'June 2025',
    end: 'August 2025',
    link: 'https://kontaktsource.com',
    id: 'work1',
    description:
      'Shipped UX-focused features that helped increase client acquisition by 13%. Modernized the front-end architecture with responsive, component-driven UI. Led and mentored a 3-person team to deliver high‑quality releases on time. Managed 70+ client relationships, translating requirements into solutions and resolving bugs and requests. Improved legacy code performance, maintainability, and SEO, raising engagement by 68%.',
    techStack: ['WordPress', 'JavaScript', 'PHP', 'HTML', 'Tailwind CSS', 'Figma'],
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
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/hose_04',
  },
]

export const EMAIL = 'josemaurette1234@gmail.com'

export const EDUCATION: Education[] = [
  {
    institution: 'Florida International University',
    degree: 'Bachelor of Art in Computer Science',
    start: 'August 2022',
    end: 'Expected December 2025',
    id: 'education1',
  },
]

export const TECH_STACK: TechSkill[] = [
  { name: 'Next.js' },
  { name: 'React' },
  { name: 'TypeScript' },
  { name: 'Tailwind CSS' },
  { name: 'Framer Motion' },
  { name: 'WordPress' },
  { name: 'Node.js' },
  { name: 'Vite' },
  { name: 'Supabase' },
  { name: 'GitHub' },
  { name: 'Figma' },
  { name: 'Git' },
  { name: 'Stripe' },
  { name: 'Vercel' },
]

export const PROFILE_IMAGE_URL = '/pfp.jpg'

export const RESUME_URL = '/resume.pdf'
