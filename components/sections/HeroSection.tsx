'use client'
import { motion } from 'motion/react'

type Props = {
  profileImageUrl?: string
  resumeUrl?: string
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export const HeroSection = ({ profileImageUrl, resumeUrl }: Props) => {
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <div className="flex flex-col items-center gap-4 text-center">
        {profileImageUrl && (
          <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full ring-1 ring-zinc-200 dark:ring-zinc-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={profileImageUrl} alt="Profile" className="h-full w-full object-cover" />
          </div>
        )}
        <h1 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">Hi, I'm Jose</h1>
        <p className="max-w-prose text-zinc-600 dark:text-zinc-400">
          Focused on creating intuitive and performant web experiences.
          Bridging the gap between design and development.
        </p>
        {resumeUrl && (
          <div className="flex items-center gap-3">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <span>View Resume</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        )}
      </div>
    </motion.section>
  )
}


