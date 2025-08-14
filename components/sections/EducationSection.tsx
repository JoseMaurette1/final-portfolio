'use client'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'

type Education = {
  institution: string
  degree: string
  start: string
  end: string
  id: string
}

type Props = { education: ReadonlyArray<Education> }

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export const EducationSection = ({ education }: Props) => {
  if (!education || education.length === 0) return null

  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <h3 className="mb-5 text-lg font-medium">Education</h3>
      <div className="flex flex-col space-y-2">
        {education.map((edu) => (
          <div className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30" key={edu.id}>
            <Spotlight className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50" size={64} />
            <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
              <div className="relative flex w-full flex-row justify-between">
                <div>
                  <h4 className="font-normal dark:text-zinc-100">{edu.degree}</h4>
                  <p className="text-zinc-500 dark:text-zinc-400">{edu.institution}</p>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">{edu.start} - {edu.end}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}


