'use client'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'

type Education = {
  institution: string
  degree: string
  start: string
  end: string
  id: string
}

type Props = { education: ReadonlyArray<Education> }

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

export const EducationSection = ({ education }: Props) => {
  if (!education || education.length === 0) return null

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
        Education
      </motion.h3>
      <motion.div
        className="flex flex-col space-y-2"
        variants={STAGGER_CONTAINER}
      >
        {education.map((edu) => (
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
            key={edu.id}
            variants={CARD_VARIANTS}
            whileHover={{
              y: -3,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <Spotlight className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50" size={64} />
            <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
              <div className="relative flex w-full flex-row justify-between">
                <div>
                  <h4 className="font-normal dark:text-zinc-100">{edu.degree}</h4>
                  <p className="text-zinc-500 dark:text-zinc-400">{edu.institution}</p>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">{edu.start} - {edu.end}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}


