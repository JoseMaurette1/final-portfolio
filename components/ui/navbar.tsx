'use client'
import { motion } from 'motion/react'
import Link from 'next/link'

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export const Navbar = () => {
  return (
    <motion.nav
      className="absolute top-8 right-4 z-50"
      initial="hidden"
      animate="visible"
      variants={ITEM_VARIANTS}
    >
      <Link
        href="/projects"
        className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        projects
      </Link>
    </motion.nav>
  )
}
