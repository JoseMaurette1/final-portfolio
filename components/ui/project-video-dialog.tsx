'use client'

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { XIcon } from 'lucide-react'

type ProjectVideoDialogProps = {
  src: string
  title: string
  description?: string
  techStack?: string[]
  link?: string
}

export const ProjectVideoDialog = ({ src, title, description, techStack, link }: ProjectVideoDialogProps) => {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative w-[92vw] max-w-screen-md rounded-2xl bg-zinc-50 p-2 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <div className="grid grid-cols-1 gap-3 md:[grid-template-columns:1.7fr_1fr]">
            <div className="relative overflow-hidden rounded-xl">
              <video src={src} autoPlay loop muted className="aspect-video h-full w-full rounded-xl object-cover" />
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-zinc-200 p-3 dark:border-zinc-800">
              <div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Project</p>
                <h4 className="text-base font-medium text-zinc-900 dark:text-zinc-100">{title}</h4>
              </div>
              {description && (
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Description</p>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">{description}</p>
                </div>
              )}
              {techStack && techStack.length > 0 && (
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((name) => (
                      <span
                        key={`project-tech-${name}`}
                        className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {link && (
                <div className="pt-1">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                  >
                    Preview
                    <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3">
                      <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
          <MorphingDialogClose
            className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white/90 p-1 ring-1 ring-zinc-200 backdrop-blur dark:bg-zinc-900/90 dark:ring-zinc-800"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { delay: 0.3, duration: 0.1 } },
              exit: { opacity: 0, transition: { duration: 0 } },
            }}
          >
            <XIcon className="h-5 w-5 text-zinc-700 dark:text-zinc-200" />
          </MorphingDialogClose>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}


