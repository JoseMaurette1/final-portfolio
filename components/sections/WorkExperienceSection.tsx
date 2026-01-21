'use client'
import { motion } from 'motion/react'

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  location?: string
  link: string
  id: string
}

type Props = { jobs: ReadonlyArray<WorkExperience> }

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

export const WorkExperienceSection = ({ jobs }: Props) => {
  if (!jobs || jobs.length === 0) return null

  return (
    <motion.section
      variants={STAGGER_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.h3
        className="mb-4 font-[family-name:var(--font-playfair-display)] text-lg font-medium"
        variants={ITEM_VARIANTS}
      >
        work experience
      </motion.h3>
      <motion.div
        className="flex flex-col space-y-3"
        variants={STAGGER_CONTAINER}
      >
        {jobs.map((job) => (
          <motion.a
            key={job.id}
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between rounded-xl border border-zinc-100 bg-zinc-50 p-4 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
            variants={ITEM_VARIANTS}
          >
            <div className="flex flex-col">
              <span className="font-medium text-zinc-900 group-hover:underline dark:text-zinc-100">
                {job.company}
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {job.title}
              </span>
            </div>
            <div className="flex flex-col items-end text-right">
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {job.start} - {job.end}
              </span>
              {job.location && (
                <span className="text-sm text-zinc-400 dark:text-zinc-500">
                  {job.location}
                </span>
              )}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  )
}
