'use client'
import { motion } from 'motion/react'
import { ReactNode } from 'react'
import { PAGE_ANIMATIONS } from '@/lib/animations'

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

export const PageTransition = ({ children, className }: PageTransitionProps) => {
  return (
    <motion.div
      className={className}
      variants={PAGE_ANIMATIONS.pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}
