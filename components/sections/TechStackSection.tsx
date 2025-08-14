'use client'
import { motion } from 'motion/react'
import { TechStackEmblaTwoRows } from '@/components/ui/tech-stack-embla'

type TechSkill = { name: string }
type Props = { techStack: ReadonlyArray<TechSkill> }

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export const TechStackSection = ({ techStack }: Props) => {
  if (!techStack || techStack.length === 0) return null

  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <h3 className="mb-5 text-lg font-medium">Tech Stack</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-5">
        I'm proficient in a wide range of technologies, from frontend to backend, and everything in between.
      </p>
      <TechStackEmblaTwoRows items={techStack.map((s) => s.name)} />
    </motion.section>
  )
}


