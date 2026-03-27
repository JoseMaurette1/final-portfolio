'use client'
import { motion } from 'motion/react'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  EDUCATION,
  TECH_STACK,
  SOCIAL_LINKS,
  EMAIL,
  RESUME_URL,
} from '@/lib/content'
import { GithubActivitySection } from '@/components/sections/GithubActivitySection'
import { PersonalStatsSection } from '@/components/sections/PersonalStatsSection'

const FADE = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

export default function Personal() {
  return (
    <motion.div
      className="mx-auto min-h-screen max-w-[1100px] border-x border-[#1e1e1e]"
      initial="hidden"
      animate="visible"
      variants={STAGGER}
    >
      {/* ── Top header bar ─────────────────────────────── */}
      <motion.div
        variants={FADE}
        className="flex items-center justify-between border-b border-[#1e1e1e] px-8 py-5"
      >
        <span className="text-sm font-bold tracking-[0.25em] text-[#e8e4df] uppercase">
          Jose Maurette
        </span>
        <div className="flex items-center gap-8">
          <Link
            href="/projects"
            className="text-sm text-[#555] transition-colors hover:text-[#e8e4df]"
          >
            projects
          </Link>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#555] transition-colors hover:text-[#e8e4df]"
          >
            resume
          </a>
        </div>
      </motion.div>

      {/* ── Two-column layout ──────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
        {/* ── Left sidebar ──────────────────────────────── */}
        <motion.div
          variants={FADE}
          className="flex flex-col gap-10 border-b border-[#1e1e1e] p-8 md:sticky md:top-0 md:h-screen md:self-start md:overflow-y-auto md:border-r md:border-b-0"
        >
          {/* Identity */}
          <div>
            <p className="text-base font-bold text-[#e8e4df]">
              Full Stack Developer
            </p>
          </div>

          {/* Social links */}
          <div className="space-y-3">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[#444] transition-colors hover:text-[#e8e4df]"
              >
                {s.label === 'Github' && <Github size={14} />}
                {s.label === 'LinkedIn' && <Linkedin size={14} />}
                {s.label.toLowerCase()}
              </a>
            ))}
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2.5 text-sm text-[#444] transition-colors hover:text-[#e8e4df]"
            >
              <Mail size={14} />
              email
            </a>
          </div>

          {/* Tech stack */}
          <div className="border-t border-[#1e1e1e] pt-7">
            <p className="mb-4 text-xs tracking-[0.2em] text-[#333] uppercase">
              stack
            </p>
            <div className="space-y-2.5">
              {TECH_STACK.map((t) => (
                <p key={t.name} className="text-sm text-[#444]">
                  {t.name.toLowerCase()}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Right content area ─────────────────────────── */}
        <div>
          {/* Experience — first */}
          <motion.div variants={FADE} className="border-b border-[#1e1e1e] p-8">
            <p className="mb-7 text-xs tracking-[0.2em] text-[#444] uppercase">
              Experience
            </p>
            {WORK_EXPERIENCE.map((job) => (
              <div key={job.id}>
                <div className="flex items-baseline justify-between gap-4">
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-base font-bold text-[#e8e4df] transition-colors hover:text-white"
                  >
                    {job.company}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-opacity group-hover:opacity-60"
                    />
                  </a>
                  <span className="shrink-0 text-sm text-[#444]">
                    {job.start} — {job.end}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-[#555]">
                  {job.title}
                  {job.location && ` · ${job.location}`}
                </p>
                {job.description && (
                  <p className="mt-5 text-sm leading-relaxed text-[#666]">
                    {job.description}
                  </p>
                )}
                {job.techStack && job.techStack.length > 0 && (
                  <p className="mt-4 text-xs text-[#3a3a3a]">
                    {job.techStack.join(' · ')}
                  </p>
                )}
              </div>
            ))}
          </motion.div>

          {/* Projects 2×2 grid */}
          <motion.div
            variants={STAGGER}
            className="grid grid-cols-1 sm:grid-cols-2"
          >
            {PROJECTS.slice(0, 4).map((project, i) => (
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
                  <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-[#666] transition-colors group-hover:text-[#888]">
                    {project.description}
                  </p>
                </div>
                <p className="mt-auto text-xs text-[#3a3a3a] transition-colors group-hover:text-[#4a4a4a]">
                  {project.techStack?.slice(0, 4).join(' · ')}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* View all projects */}
          <motion.div
            variants={FADE}
            className="border-b border-[#1e1e1e] px-8 py-5"
          >
            <Link
              href="/projects"
              className="text-sm text-[#444] transition-colors hover:text-[#e8e4df]"
            >
              view all {PROJECTS.length} projects →
            </Link>
          </motion.div>

          {/* Education + Stats — two columns */}
          <motion.div
            variants={STAGGER}
            className="grid grid-cols-1 border-b border-[#1e1e1e] sm:grid-cols-2"
          >
            <motion.div
              variants={FADE}
              className="border-b border-[#1e1e1e] p-8 sm:border-r sm:border-b-0"
            >
              <p className="mb-7 text-xs tracking-[0.2em] text-[#444] uppercase">
                Education
              </p>
              <div className="space-y-7">
                {EDUCATION.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-base font-bold text-[#e8e4df]">
                      {edu.institution}
                    </p>
                    <p className="mt-1.5 text-sm text-[#666]">{edu.degree}</p>
                    <p className="mt-1 text-sm text-[#3a3a3a]">
                      {edu.start}
                      {edu.end && ` — ${edu.end}`}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={FADE} className="p-8">
              <PersonalStatsSection />
            </motion.div>
          </motion.div>

          {/* GitHub Activity */}
          <motion.div variants={FADE} className="p-8">
            <GithubActivitySection />
          </motion.div>
        </div>
      </div>

      {/* ── Footer bar ─────────────────────────────────── */}
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
