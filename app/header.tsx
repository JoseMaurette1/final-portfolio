'use client'
import { motion } from 'motion/react'
import { TextEffect } from '@/components/ui/text-effect'
import { ThemeSwitch } from '@/components/ui/theme-switch'
import { LAYOUT_ANIMATIONS, COMPONENT_ANIMATIONS, HOVER_ANIMATIONS } from '@/lib/animations'
import Link from 'next/link'

export function Header() {
  return (
    <motion.header
      className="mb-8 flex items-center justify-between"
      variants={LAYOUT_ANIMATIONS.header}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={COMPONENT_ANIMATIONS.item}>
        <motion.div
          whileHover={HOVER_ANIMATIONS.scale.small}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className="font-medium text-black dark:text-white">
            Jose Maurette
          </Link>
        </motion.div>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Full Stack Developer
        </TextEffect>
      </motion.div>
      <motion.div
        className="text-xs text-zinc-400"
        variants={COMPONENT_ANIMATIONS.item}
        whileHover={HOVER_ANIMATIONS.scale.medium}
        transition={{ duration: 0.2 }}
      >
        <ThemeSwitch />
      </motion.div>
    </motion.header>
  )
}
