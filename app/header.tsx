'use client'
import { motion } from 'motion/react'
import { TextEffect } from '@/components/ui/text-effect'
import { ThemeSwitch } from '@/components/ui/theme-switch'
import {
  LAYOUT_ANIMATIONS,
  COMPONENT_ANIMATIONS,
  HOVER_ANIMATIONS,
} from '@/lib/animations'
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
        <div className="flex flex-col items-start gap-2 text-zinc-600 dark:text-zinc-500">
          <TextEffect as="span" preset="fade" per="char" delay={0.5}>
            Full Stack Developer
          </TextEffect>
          <div className="flex gap-1 justify-start items-start">
            <TextEffect as="span" preset="fade" per="char" delay={0.5}>Miami, FL</TextEffect>
          </div>
        </div>
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
