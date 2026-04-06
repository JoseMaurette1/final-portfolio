'use client'

import { Moon, Sun } from 'lucide-react'
import { motion } from 'motion/react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(5px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{
        ease: 'easeOut',
        duration: 0.5,
        bounce: 0,
        delay: 1,
      }}
    >
      <motion.div
        animate={{ rotate: resolvedTheme === 'dark' ? -180 : 0 }}
        transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
      >
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className="cursor-pointer rounded-full"
        >
          <Sun aria-hidden className="size-5 dark:hidden" />
          <Moon aria-hidden className="hidden size-5 dark:block" />
        </Button>
      </motion.div>
    </motion.div>
  )
}
