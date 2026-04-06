import { PROJECTS } from '@/lib/content'

export type ShowcaseProject = {
  type: 'image' | 'video'
  title: string
  date: string
  href: string
  src: string
  alt: string
  ratio: number
  placeholderSrc: string
}

const fallbackPlaceholder = '/cover.jpg'

const projectMedia: Record<
  string,
  Pick<ShowcaseProject, 'type' | 'src' | 'ratio' | 'placeholderSrc'>
> = {
  'project-1': {
    type: 'image',
    src: '/jump.png',
    ratio: 1.852317,
    placeholderSrc: '/jump.png',
  },
  project0: {
    type: 'image',
    src: '/spotbuds.png',
    ratio: 1.78119,
    placeholderSrc: '/spotbuds.png',
  },
  project1: {
    type: 'video',
    src: '/macrotrue.mp4',
    ratio: 1.777778,
    placeholderSrc: fallbackPlaceholder,
  },
  project2: {
    type: 'video',
    src: '/always.mp4',
    ratio: 1.777778,
    placeholderSrc: fallbackPlaceholder,
  },
  project3: {
    type: 'video',
    src: '/tt.mp4',
    ratio: 1.777778,
    placeholderSrc: fallbackPlaceholder,
  },
}

export const projects: ShowcaseProject[] = PROJECTS.map((project) => {
  const media = projectMedia[project.id] ?? {
    type: 'video' as const,
    src: `/${project.video}`,
    ratio: 1.777778,
    placeholderSrc: fallbackPlaceholder,
  }

  return {
    type: media.type,
    title: project.name,
    date: project.date,
    href: project.link,
    src: media.src,
    alt: project.name,
    ratio: media.ratio,
    placeholderSrc: media.placeholderSrc,
  }
})
