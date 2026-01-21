'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type Project = {
  name: string
  description: string
  link: string
  id: string
  techStack?: string[]
}

type Props = { projects: ReadonlyArray<Project> }

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const ProjectsSection = ({ projects }: Props) => {
  if (!projects || projects.length === 0) return null

  return (
    <motion.section
      variants={STAGGER_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="mb-4 flex items-center justify-between"
        variants={ITEM_VARIANTS}
      >
        <h3 className="font-[family-name:var(--font-playfair-display)] text-lg font-medium">
          selected projects
        </h3>
        <Link
          href="/projects"
          className="flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <span>view all</span>
          <ArrowRight size={14} />
        </Link>
      </motion.div>
      <motion.div
        className="flex flex-col space-y-3"
        variants={STAGGER_CONTAINER}
      >
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between rounded-xl border border-zinc-100 bg-zinc-50 p-4 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
            variants={ITEM_VARIANTS}
          >
            <div className="flex flex-col">
              <span className="font-medium text-zinc-900 group-hover:underline dark:text-zinc-100">
                {project.name}
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {project.description}
              </span>
              {project.techStack && project.techStack.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-xs text-zinc-400 dark:text-zinc-500">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              )}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  )
}
