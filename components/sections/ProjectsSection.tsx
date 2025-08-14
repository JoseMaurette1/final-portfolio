'use client'
import { motion } from 'motion/react'
import { ProjectVideoDialog } from '@/components/ui/project-video-dialog'

type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
  techStack?: string[]
  thumbnail?: string
}

type Props = { projects: ReadonlyArray<Project> }

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export const ProjectsSection = ({ projects }: Props) => {
  if (!projects || projects.length === 0) return null

  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="space-y-2">
            <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
              <ProjectVideoDialog src={project.video} title={project.name} description={project.description} techStack={project.techStack} link={project.link} />
            </div>
            <div className="px-1">
              <a
                className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                href={project.link}
                target="_blank"
              >
                {project.name}
                <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}


