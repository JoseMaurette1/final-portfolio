'use client'

import { motion } from 'motion/react'

type TechStackCarouselProps = {
  items: string[]
}

type CarouselRowProps = {
  items: string[]
  direction: 'left' | 'right'
  duration?: number
}

const CarouselRow = ({ items, direction, duration = 25 }: CarouselRowProps) => {
  const duplicatedItems = [...items, ...items]
  const animationTo = direction === 'left' ? '-50%' : '50%'

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="inline-flex min-w-max shrink-0 gap-2 whitespace-nowrap"
        animate={{ x: ['0%', animationTo] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {duplicatedItems.map((name, index) => (
          <span
            key={`row-${direction}-${index}-${name}`}
            className="flex-none rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export const TechStackCarousel = ({ items }: TechStackCarouselProps) => {
  if (!items || items.length === 0) {
    return null
  }

  const midpoint = Math.ceil(items.length / 2)
  const firstRow = items.slice(0, midpoint)
  const secondRow = items.slice(midpoint)

  return (
    <div className="space-y-3">
      <CarouselRow items={firstRow} direction="right" duration={24} />
      <CarouselRow
        items={secondRow.length ? secondRow : firstRow}
        direction="left"
        duration={26}
      />
    </div>
  )
}
