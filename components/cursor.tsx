'use client'

import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion, useMotionValue, useSpring } from 'motion/react'

export function CustomCursor() {
  const { resolvedTheme } = useTheme()
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springX = useSpring(mouseX, { damping: 22, stiffness: 500, mass: 0.4 })
  const springY = useSpring(mouseY, { damping: 22, stiffness: 500, mass: 0.4 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground"
        style={{ x: mouseX, y: mouseY }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/25 mix-blend-difference"
        style={{ x: springX, y: springY }}
      />
    </>
  )
}
