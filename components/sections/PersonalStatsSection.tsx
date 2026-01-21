'use client'
import { motion } from 'motion/react'

type Stat = {
  label: string
  value: string
}

const STATS: Stat[] = [
  { label: 'weighted pull-ups', value: '60 lbs' },
  { label: 'typing speed 15s', value: '152 wpm' },
  { label: 'typing speed 60s', value: '130 wpm' },
]

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

export const PersonalStatsSection = () => {
  return (
    <motion.section
      variants={STAGGER_CONTAINER}
      initial="hidden"
      animate="visible"
      className="pb-8"
    >
      <motion.h3
        className="mb-3 font-[family-name:var(--font-playfair-display)] text-lg font-medium"
        variants={ITEM_VARIANTS}
      >
        random facts
      </motion.h3>
      <motion.div
        className="flex flex-col space-y-1"
        variants={STAGGER_CONTAINER}
      >
        {STATS.map((stat, index) => (
          <motion.p
            key={index}
            className="text-sm text-zinc-600 dark:text-zinc-400"
            variants={ITEM_VARIANTS}
          >
            <span className="font-medium text-zinc-900 dark:text-zinc-200">
              {stat.label}:
            </span>{' '}
            {stat.value}
          </motion.p>
        ))}
      </motion.div>
    </motion.section>
  )
}
