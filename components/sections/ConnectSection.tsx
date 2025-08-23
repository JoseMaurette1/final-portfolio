'use client'
import { motion } from 'motion/react'
import { Magnetic } from '@/components/ui/magnetic'

type SocialLink = { label: string; link: string }

type Props = {
  email: string
  socials: ReadonlyArray<SocialLink>
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
    }
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

const MagneticSocialLink = ({ children, link }: { children: React.ReactNode; link: string }) => (
  <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <motion.svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3"
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
      >
        <path
          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </motion.svg>
    </motion.a>
  </Magnetic>
)

export const ConnectSection = ({ email, socials }: Props) => {
  if (!email && (!socials || socials.length === 0)) return null

  return (
    <motion.section
      variants={STAGGER_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.h3
        className="mb-5 text-lg font-medium"
        variants={ITEM_VARIANTS}
      >
        Connect
      </motion.h3>
      {email && (
        <motion.p
          className="mb-5 text-zinc-600 dark:text-zinc-400"
          variants={ITEM_VARIANTS}
        >
          Feel free to contact me at{' '}
          <motion.a
            className="underline dark:text-zinc-300"
            href={`mailto:${email}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {email}
          </motion.a>
        </motion.p>
      )}
      <motion.div
        className="flex items-center justify-start space-x-3"
        variants={STAGGER_CONTAINER}
      >
        {socials.map((link, index) => (
          <motion.div
            key={link.label}
            variants={ITEM_VARIANTS}
            custom={index}
          >
            <MagneticSocialLink link={link.link}>
              {link.label}
            </MagneticSocialLink>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}


