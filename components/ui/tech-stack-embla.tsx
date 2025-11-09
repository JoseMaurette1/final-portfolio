'use client'

import { motion } from 'motion/react'

type TechStackEmblaProps = {
  items: string[]
  durationMs?: number
  direction?: 'left' | 'right'
}

export const TechStackEmbla = ({ items, durationMs = 30000, direction = 'left' }: TechStackEmblaProps) => {
  if (!items || items.length === 0) {
    return null
  }

  const duplicated = [...items, ...items]
  const animateFrom = direction === 'left' ? '0%' : '-50%'
  const animateTo = direction === 'left' ? '-50%' : '0%'

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left fade gradient */}
      <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-zinc-50 via-zinc-50/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80" />
      {/* Right fade gradient */}
      <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-zinc-50 via-zinc-50/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80" />
      <motion.div
        className="inline-flex min-w-max shrink-0 items-center gap-2 whitespace-nowrap"
        animate={{ x: [animateFrom, animateTo] }}
        transition={{ duration: durationMs / 1000, ease: 'linear', repeat: Infinity }}
      >
        {duplicated.map((name, idx) => (
          <span
            key={`${name}-${idx}`}
            className="flex-none rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

type TechStackEmblaTwoRowsProps = {
  items: string[]
}

export const TechStackEmblaTwoRows = ({ items }: TechStackEmblaTwoRowsProps) => {
  if (!items || items.length === 0) {
    return null
  }

  const midpoint = Math.ceil(items.length / 2)
  const firstRow = items.slice(0, midpoint)
  const secondRow = items.slice(midpoint)

  return (
    <div className="space-y-3">
      <TechStackEmbla items={firstRow} direction="left" durationMs={28000} />
      <TechStackEmbla items={secondRow.length ? secondRow : firstRow} direction="right" durationMs={30000} />
    </div>
  )
}


