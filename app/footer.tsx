'use client'
import { motion } from 'motion/react'
import { TextLoop } from '@/components/ui/text-loop'
import { LAYOUT_ANIMATIONS, HOVER_ANIMATIONS } from '@/lib/animations'

export function Footer() {
  return (
    <motion.footer
      className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800"
      variants={LAYOUT_ANIMATIONS.footer}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center justify-between">
        <motion.a
          href="https://github.com/JoseMaurette1"
          target="_blank"
          whileHover={HOVER_ANIMATIONS.scale.small}
          transition={{ duration: 0.2 }}
        >
          <TextLoop className="text-xs text-zinc-500">
            <span>© 2025 Jose Maurette.</span>
            <span>Built with Next.js.</span>
          </TextLoop>
        </motion.a>
        <div className="text-xs text-zinc-400"></div>
      </div>
    </motion.footer>
  )
}
