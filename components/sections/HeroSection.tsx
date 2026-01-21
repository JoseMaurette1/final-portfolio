'use client'
import { motion } from 'motion/react'
import { Github, Linkedin, Mail, BadgeCheck } from 'lucide-react'
import { SOCIAL_LINKS, EMAIL } from '@/lib/content'

type Props = {
  profileImageUrl?: string
}

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

export const HeroSection = ({ profileImageUrl }: Props) => {
  return (
    <motion.section
      variants={STAGGER_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-start gap-4 text-left">
        {profileImageUrl && (
          <motion.div
            className="h-32 w-32 shrink-0 overflow-hidden rounded-full ring-1 ring-zinc-200 dark:ring-zinc-800"
            variants={ITEM_VARIANTS}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profileImageUrl}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </motion.div>
        )}
        <motion.div
          variants={ITEM_VARIANTS}
          className="flex items-center gap-2"
        >
          <h1 className="font-[family-name:var(--font-playfair-display)] text-xl font-medium text-zinc-900 dark:text-zinc-100">
            jose maurette
          </h1>
          <BadgeCheck
            className="h-6 w-6 text-blue-500"
            fill="currentColor"
            color="white"
          />
        </motion.div>
        <motion.p
          className="max-w-prose font-[family-name:var(--font-dm-sans)] text-zinc-600 dark:text-zinc-400"
          variants={ITEM_VARIANTS}
        >
          i&apos;m a{' '}
          <span className="font-bold text-zinc-900 dark:text-zinc-100">
            full stack developer
          </span>{' '}
          based in{' '}
          <span className="font-bold text-zinc-900 dark:text-zinc-100">
            miami, fl
          </span>
          .
          <br />i build web apps with{' '}
          <span className="font-bold text-zinc-900 dark:text-zinc-100">
            React, Typescript, Next.js
          </span>{' '}
          and{' '}
          <span className="font-bold text-zinc-900 dark:text-zinc-100">
            postgresql
          </span>
          . in my free time i learn about{' '}
          <span className="font-bold text-zinc-900 dark:text-zinc-100">ai</span>
          , play games, and go to the{' '}
          <span className="font-bold text-zinc-900 dark:text-zinc-100">
            gym
          </span>
          .
        </motion.p>

        <motion.div
          className="flex flex-col gap-4 pt-2"
          variants={ITEM_VARIANTS}
        >
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {SOCIAL_LINKS.map((social) => (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 transition-colors ${
                  social.label === 'Github'
                    ? 'hover:text-black dark:hover:text-white'
                    : social.label === 'LinkedIn'
                      ? 'hover:text-[#0A66C2]'
                      : 'hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.label === 'Github' && <Github size={16} />}
                {social.label === 'LinkedIn' && <Linkedin size={16} />}
                <span>{social.label.toLowerCase()}</span>
              </motion.a>
            ))}
            <motion.a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-1 transition-colors hover:text-[#EA4335]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={16} />
              <span>email</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
