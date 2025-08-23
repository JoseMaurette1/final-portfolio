'use client'
import { motion } from 'motion/react'
import { TechStackEmblaTwoRows } from '@/components/ui/tech-stack-embla'

type TechSkill = { name: string }
type Props = { techStack: ReadonlyArray<TechSkill> }

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

export const TechStackSection = ({ techStack }: Props) => {
  if (!techStack || techStack.length === 0) return null

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
        Tech Stack
      </motion.h3>
      <motion.p
        className="text-zinc-600 dark:text-zinc-400 mb-5"
        variants={ITEM_VARIANTS}
      >
        I'm proficient in a wide range of technologies, from frontend to backend, and everything in between.
      </motion.p>
      <motion.div
        variants={ITEM_VARIANTS}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <TechStackEmblaTwoRows items={techStack.map((s) => s.name)} />
      </motion.div>
    </motion.section>
  )
}


