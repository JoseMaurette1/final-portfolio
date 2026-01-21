'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { PROJECTS } from '@/lib/content'
import { ProjectVideoDialog } from '@/components/ui/project-video-dialog'

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

export default function ProjectsPage() {
  return (
    <motion.main
      className="py-8"
      initial="hidden"
      animate="visible"
      variants={STAGGER_CONTAINER}
    >
      <motion.div className="mb-8" variants={ITEM_VARIANTS}>
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <ArrowLeft size={14} />
          <span>back</span>
        </Link>
      </motion.div>

      <motion.h1
        className="mb-8 font-[family-name:var(--font-playfair-display)] text-2xl font-medium"
        variants={ITEM_VARIANTS}
      >
        projects
      </motion.h1>

      <motion.div className="flex flex-col gap-8" variants={STAGGER_CONTAINER}>
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900/50"
            variants={ITEM_VARIANTS}
          >
            <ProjectVideoDialog
              src={project.video}
              title={project.name}
              description={project.description}
              techStack={project.techStack}
              link={project.link}
            />
            <div className="mt-3 px-1">
              <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                {project.name}
              </h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {project.description}
              </p>
              {project.techStack && project.techStack.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="rounded-full border border-zinc-200 bg-white px-2.5 py-0.5 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.main>
  )
}
