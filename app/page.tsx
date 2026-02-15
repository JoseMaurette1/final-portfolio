'use client'
import { motion } from 'motion/react'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  EDUCATION,
  TECH_STACK,
  PROFILE_IMAGE_URL,
  SOCIAL_LINKS,
  EMAIL,
} from '@/lib/content'
import { GithubActivitySection } from '@/components/sections/GithubActivitySection'
import { PersonalStatsSection } from '@/components/sections/PersonalStatsSection'

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

export default function Personal() {
  return (
    <motion.main
      className="mx-auto max-w-3xl space-y-12 pb-12"
      initial="hidden"
      animate="visible"
      variants={STAGGER}
    >
      {/* Hero Section */}
      <motion.section variants={FADE_UP} className="space-y-8">
        <div className="flex items-start gap-6">
          {PROFILE_IMAGE_URL && (
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-zinc-200 dark:ring-zinc-800">
              <img
                src={PROFILE_IMAGE_URL}
                alt="Jose Maurette"
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Jose Maurette
            </h1>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              Full Stack Developer
            </p>
          </div>
        </div>

        <div className="space-y-3 text-base leading-relaxed text-neutral-400">
          <p>
            based in{' '}
            <span className="font-medium text-neutral-50 underline underline-offset-4 transition-colors hover:text-neutral-200">
              miami, fl
            </span>
          </p>
          <p>
            building web applications with{' '}
            <span className="font-medium text-neutral-50 underline underline-offset-4 transition-colors hover:text-neutral-200">
              react
            </span>
            ,{' '}
            <span className="font-medium text-neutral-50 underline underline-offset-4 transition-colors hover:text-neutral-200">
              typescript
            </span>
            ,{' '}
            <span className="font-medium text-neutral-50 underline underline-offset-4 transition-colors hover:text-neutral-200">
              next.js
            </span>
            , and{' '}
            <span className="font-medium text-neutral-50 underline underline-offset-4 transition-colors hover:text-neutral-200">
              postgresql
            </span>
          </p>
          <p>
            in my free time i learn about{' '}
            <span className="font-medium text-neutral-50 underline underline-offset-4 transition-colors hover:text-neutral-200">
              ai
            </span>
            , play games, and go to the{' '}
            <span className="font-medium text-neutral-50 underline underline-offset-4 transition-colors hover:text-neutral-200">
              gym
            </span>
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-900 hover:decoration-zinc-500 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:text-zinc-100 dark:hover:decoration-zinc-500"
            >
              {social.label === 'Github' && <Github size={16} />}
              {social.label === 'LinkedIn' && <Linkedin size={16} />}
              {social.label}
            </a>
          ))}
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-900 hover:decoration-zinc-500 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:text-zinc-100 dark:hover:decoration-zinc-500"
          >
            <Mail size={16} />
            Email
          </a>
        </div>
      </motion.section>

      {/* Separator */}
      <div className="border-t border-neutral-800" />

      {/* Tech Stack */}
      <motion.section variants={FADE_UP} className="space-y-4">
        <h2 className="text-xs font-medium tracking-wider text-neutral-500 uppercase">
          technologies
        </h2>
        <div className="flex flex-wrap gap-2">
          {TECH_STACK.map((tech) => (
            <span
              key={tech.name}
              className="rounded-full border border-neutral-800 bg-neutral-900/30 px-3 py-1.5 text-sm text-neutral-400 transition-colors hover:border-neutral-700 hover:bg-neutral-900/50 hover:text-neutral-300"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Separator */}
      <div className="border-t border-neutral-800" />

      {/* Work Experience */}
      <motion.section variants={FADE_UP} className="space-y-6">
        <h2 className="text-xs font-medium tracking-wider text-neutral-500 uppercase">
          experience
        </h2>
        <div className="space-y-6">
          {WORK_EXPERIENCE.map((job) => (
            <a
              key={job.id}
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block space-y-2 border-l-2 border-zinc-200 pl-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                  {job.company}
                </h3>
                <span className="shrink-0 text-sm text-zinc-500 dark:text-zinc-500">
                  {job.start} — {job.end}
                </span>
              </div>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {job.title}
              </p>
              {job.location && (
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  {job.location}
                </p>
              )}
              {job.description && (
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {job.description}
                </p>
              )}
              {job.techStack && job.techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {job.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-neutral-800 bg-neutral-900/30 px-2.5 py-1 text-xs text-neutral-400 transition-colors hover:border-neutral-700 hover:bg-neutral-900/50 hover:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      </motion.section>

      {/* Separator */}
      <div className="border-t border-neutral-800" />

      {/* Projects */}
      <motion.section variants={FADE_UP} className="space-y-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs font-medium tracking-wider text-neutral-500 uppercase">
            selected projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-900 hover:decoration-zinc-500 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:text-zinc-100 dark:hover:decoration-zinc-500"
          >
            View all
          </Link>
        </div>
        <div className="space-y-8">
          {PROJECTS.slice(0, 3).map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block space-y-3"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-zinc-400 dark:text-zinc-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                      {project.name}
                    </h3>
                    <ExternalLink
                      size={14}
                      className="text-zinc-400 opacity-0 transition-opacity group-hover:opacity-100 dark:text-zinc-600"
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-neutral-800 bg-neutral-900/30 px-2.5 py-1 text-xs text-neutral-400 transition-colors hover:border-neutral-700 hover:bg-neutral-900/50 hover:text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      {/* Separator */}
      <div className="border-t border-neutral-800" />

      {/* Education */}
      <motion.section variants={FADE_UP} className="space-y-6">
        <h2 className="text-xs font-medium tracking-wider text-neutral-500 uppercase">
          education
        </h2>
        <div className="space-y-6">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="space-y-1 border-l-2 border-zinc-200 pl-4 dark:border-zinc-800"
            >
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {edu.institution}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {edu.degree}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                {edu.start}
                {edu.end && ` — ${edu.end}`}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Separator */}
      <div className="border-t border-neutral-800" />

      {/* GitHub Activity */}
      <motion.section variants={FADE_UP}>
        <GithubActivitySection />
      </motion.section>

      {/* Separator */}
      <div className="border-t border-neutral-800" />

      {/* Random Facts */}
      <motion.section variants={FADE_UP}>
        <PersonalStatsSection />
      </motion.section>
    </motion.main>
  )
}
