'use client'
import { motion } from 'motion/react'
import { TextLoop } from '@/components/ui/text-loop'
import { LAYOUT_ANIMATIONS, HOVER_ANIMATIONS } from '@/lib/animations'

export function Footer() {
  return (
    <motion.footer
      className="mt-12 border-t border-neutral-800 px-0 py-4"
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
            <span>© {new Date().getFullYear()} Jose Maurette.</span>
            <span>Built with Next.js.</span>
          </TextLoop>
        </motion.a>
        <div className="text-xs text-zinc-400"></div>
      </div>
    </motion.footer>
  )
}
