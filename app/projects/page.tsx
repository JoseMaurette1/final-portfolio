'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS, RESUME_URL } from '@/lib/content'

const FADE = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
}

export default function ProjectsPage() {
  return (
    <motion.div
      className="mx-auto min-h-screen max-w-[1100px] border-x border-[#1e1e1e]"
      initial="hidden"
      animate="visible"
      variants={STAGGER}
    >
      {/* Top bar */}
      <motion.div
        variants={FADE}
        className="flex items-center justify-between border-b border-[#1e1e1e] px-8 py-5"
      >
        <Link
          href="/"
          className="text-sm text-[#555] transition-colors hover:text-[#e8e4df]"
        >
          ← Jose Maurette
        </Link>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#555] transition-colors hover:text-[#e8e4df]"
        >
          resume
        </a>
      </motion.div>

      {/* Section header */}
      <motion.div
        variants={FADE}
        className="border-b border-[#1e1e1e] px-8 py-5"
      >
        <p className="text-xs tracking-[0.2em] text-[#444] uppercase">
          All Projects
        </p>
      </motion.div>

      {/* Projects grid */}
      <motion.div
        variants={STAGGER}
        className="grid grid-cols-1 sm:grid-cols-2"
      >
        {PROJECTS.map((project, i) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={FADE}
            className={[
              'group flex flex-col gap-5 border-b border-[#1e1e1e] p-8',
              'transition-all duration-150',
              'hover:bg-[#0f0f0f] hover:shadow-[inset_0_0_0_1px_#2d2d2d]',
              i % 2 === 0 ? 'sm:border-r' : '',
            ].join(' ')}
          >
            <div className="flex items-start justify-between">
              <span className="text-sm text-[#333] transition-colors group-hover:text-[#555]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <ArrowUpRight
                size={15}
                className="text-[#444] opacity-0 transition-opacity group-hover:opacity-100"
              />
            </div>
            <div>
              <p className="text-base font-bold text-[#e8e4df]">
                {project.name}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-[#666] transition-colors group-hover:text-[#888]">
                {project.description}
              </p>
            </div>
            <p className="mt-auto text-xs text-[#3a3a3a] transition-colors group-hover:text-[#4a4a4a]">
              {project.techStack?.join(' · ')}
            </p>
          </motion.a>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.div
        variants={FADE}
        className="flex items-center justify-between border-t border-[#1e1e1e] px-8 py-5"
      >
        <span className="text-xs text-[#2e2e2e]">
          © {new Date().getFullYear()} Jose Maurette
        </span>
        <span className="text-xs text-[#2e2e2e]">Built with Next.js</span>
      </motion.div>
    </motion.div>
  )
}
