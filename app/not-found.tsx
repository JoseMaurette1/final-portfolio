'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex h-[50vh] flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="font-[family-name:var(--font-playfair-display)] text-4xl font-medium"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mt-2 text-zinc-500 dark:text-zinc-400"
      >
        page not found
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
        >
          <ArrowLeft size={16} />
          <span>return home</span>
        </Link>
      </motion.div>
    </div>
  )
}
