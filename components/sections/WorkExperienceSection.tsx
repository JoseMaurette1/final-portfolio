'use client'
import { motion } from 'motion/react'
import { WorkVideoDialog } from '@/components/ui/work-video-dialog'

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

type Props = { jobs: ReadonlyArray<WorkExperience> }

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  },
}

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
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
        className="mb-5 text-lg font-medium"
        variants={ITEM_VARIANTS}
      >
        Work Experience
      </motion.h3>
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        variants={STAGGER_CONTAINER}
      >
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            className="space-y-2"
            variants={CARD_VARIANTS}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            {job.video && (
              <motion.div
                className="relative overflow-hidden rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <WorkVideoDialog
                  src={job.video}
                  title={job.title}
                  company={job.company}
                  start={job.start}
                  end={job.end}
                  link={job.link}
                  description={job.description}
                  techStack={job.techStack}
                  trigger={
                    <video
                      src={job.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="aspect-video w-full cursor-zoom-in rounded-xl object-cover scale-[1.15] md:scale-[1.25]"
                      style={{ objectPosition: 'center 40%' }}
                    />
                  }
                />
              </motion.div>
            )}
            <div className="px-1">
              <motion.a
                className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                href={job.link}
                target="_blank"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {job.company}
                <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
              </motion.a>
              <p className="text-base text-zinc-600 dark:text-zinc-400">{job.title}</p>
              <p className="text-base text-zinc-600 dark:text-zinc-400">{job.start} - {job.end}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}


