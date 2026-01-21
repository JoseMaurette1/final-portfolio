'use client'
import { motion } from 'motion/react'

type TechSkill = { name: string }
type Props = { techStack: ReadonlyArray<TechSkill> }

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
      staggerChildren: 0.05,
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
        className="mb-5 font-[family-name:var(--font-playfair-display)] text-lg font-medium"
        variants={ITEM_VARIANTS}
      >
        tech stack
      </motion.h3>
      <motion.div className="flex flex-wrap gap-2" variants={STAGGER_CONTAINER}>
        {techStack.map((skill) => (
          <motion.span
            key={skill.name}
            className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
            variants={ITEM_VARIANTS}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {skill.name}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  )
}
