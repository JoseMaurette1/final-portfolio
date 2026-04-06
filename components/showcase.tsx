'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { projects } from '@/config/projects'

export function ProjectShowcase() {
  return (
    <div className="columns-1 gap-4 px-6 sm:columns-2 sm:px-10 md:px-16 lg:columns-3 lg:px-20">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, filter: 'blur(5px)', y: 8 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{
            ease: 'easeOut',
            duration: 0.8,
            bounce: 0,
            delay: 0.4 + index * 0.1,
          }}
          className="mb-4 break-inside-avoid overflow-hidden rounded-xl border"
        >
          <div
            className="relative overflow-hidden"
            style={{
              aspectRatio: `${project.ratio} / 1`,
              transform: 'translateZ(0)',
            }}
          >
            {project.type === 'video' ? (
              <>
                <div
                  aria-hidden
                  className="absolute inset-0 size-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${project.placeholderSrc}')`,
                    filter: 'blur(20px)',
                  }}
                />
                <video
                  src={`${project.src}#t=0.01`}
                  aria-label={project.alt}
                  loop
                  muted
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 size-full object-cover"
                />
              </>
            ) : (
              <Image
                src={project.src}
                alt={project.alt}
                width={1600}
                height={Math.round(1600 / project.ratio)}
                className="relative size-full object-cover"
                unoptimized
              />
            )}
          </div>

          <div className="flex items-center justify-between border-t px-3.5 py-2.5 text-sm">
            <Link
              href={project.href}
              target="_blank"
              className="text-primary inline-flex items-baseline gap-1.5 align-baseline font-medium underline underline-offset-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-3.5"
            >
              {project.title}
              <ArrowUpRight aria-hidden className="text-muted-foreground" />
            </Link>
            <span className="text-muted-foreground">{project.date}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
