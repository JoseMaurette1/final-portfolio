'use client'
import { motion } from 'motion/react'

type Stat = {
  label: string
  value: string
}

const STATS: Stat[] = [
  { label: 'weighted pull-ups', value: '75 lbs' },
  { label: 'typing speed 15s', value: '155 wpm' },
  { label: 'typing speed 60s', value: '130 wpm' },
]

const ITEM = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

export const PersonalStatsSection = () => {
  return (
    <motion.section variants={STAGGER} initial="hidden" animate="visible">
      <motion.p
        variants={ITEM}
        className="mb-7 text-xs tracking-[0.2em] text-[#444] uppercase"
      >
        Random Facts
      </motion.p>
      <motion.div className="space-y-4" variants={STAGGER}>
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            className="flex items-baseline gap-2"
            variants={ITEM}
          >
            <span className="text-sm text-[#666]">{stat.label}</span>
            <span className="flex-1 border-b border-dotted border-[#2a2a2a]" />
            <span className="text-sm text-[#e8e4df]">{stat.value}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
