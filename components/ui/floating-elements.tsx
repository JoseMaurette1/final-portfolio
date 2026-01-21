'use client'
import { motion } from 'motion/react'
import { FLOATING_ANIMATION } from '@/lib/animations'

const FloatingElement = ({
  className,
  delay = 0,
  duration = 20,
  size = 4,
}: {
  className?: string
  delay?: number
  duration?: number
  size?: number
}) => (
  <motion.div
    className={`absolute rounded-full bg-zinc-200/20 dark:bg-zinc-700/20 ${className}`}
    style={{ width: size, height: size }}
    animate={FLOATING_ANIMATION.animate}
    transition={{
      ...FLOATING_ANIMATION.transition,
      delay,
      duration,
    }}
  />
)

export const FloatingElements = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <FloatingElement
        className="top-20 left-10"
        delay={0}
        duration={25}
        size={6}
      />
      <FloatingElement
        className="top-40 right-20"
        delay={5}
        duration={30}
        size={4}
      />
      <FloatingElement
        className="top-80 left-20"
        delay={10}
        duration={20}
        size={3}
      />
      <FloatingElement
        className="top-60 right-10"
        delay={15}
        duration={35}
        size={5}
      />
      <FloatingElement
        className="top-96 left-1/2"
        delay={8}
        duration={28}
        size={4}
      />
    </div>
  )
}
