'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  Check,
  Download,
  Github,
  GripHorizontal,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  FolderKanban,
  Terminal,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu } from '@base-ui/react/menu'
import { Button } from '@/components/ui/button'
import { GithubActivity } from '@/components/github-activity'
import { ThemeToggle } from '@/components/theme-toggle'
import { siteConfig } from '@/config/site'
import { EDUCATION, EXPERIENCE, PROJECTS, SKILLS } from '@/lib/content'

const heroIcons = [Terminal, Rocket]

const featuredProjects = PROJECTS.filter((project) =>
  ['Jump', 'Macrotrue', 'Spotbuds'].includes(project.name),
)

function groupExperienceByCompany(items: typeof EXPERIENCE) {
  const groups: {
    company: string
    link?: string
    roles: { role: string; period: string }[]
  }[] = []

  for (const item of items) {
    const currentGroup = groups[groups.length - 1]
    if (currentGroup && currentGroup.company === item.company) {
      currentGroup.roles.push({ role: item.role, period: item.period })
    } else {
      groups.push({
        company: item.company,
        link: item.link,
        roles: [{ role: item.role, period: item.period }],
      })
    }
  }

  return groups
}

function ProjectTextLink({
  href,
  children,
}: {
  href: string
  children: string
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="text-primary underline underline-offset-2"
    >
      {children}
    </Link>
  )
}

export function Hero() {
  const [isCopied, setIsCopied] = useState(false)
  const [iconIndex, setIconIndex] = useState(0)
  const [activeSkillGroup, setActiveSkillGroup] = useState(0)
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setIconIndex(Math.floor(Math.random() * heroIcons.length))
  }, [])

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current)
      }
    }
  }, [])

  const RandomIcon = heroIcons[iconIndex]

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(siteConfig.email)

    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current)
    }

    setIsCopied(true)
    copyTimeoutRef.current = setTimeout(() => setIsCopied(false), 2000)
  }, [])

  return (
    <div className="flex flex-col gap-4 pb-10">
      <motion.div
        className="text-muted-foreground flex items-center gap-1 text-sm"
        initial={{ opacity: 0, filter: 'blur(5px)', y: 8 }}
        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        transition={{ ease: 'easeOut', duration: 0.8, bounce: 0 }}
      >
        <MapPin className="size-4" />
        Miami, FL
      </motion.div>

      <h1 className="flex items-center gap-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-4">
        <span className="font-medium">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, filter: 'blur(5px)', y: 8 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ ease: 'easeOut', duration: 0.8, bounce: 0 }}
          >
            {siteConfig.name},&nbsp;
          </motion.span>
          <motion.span
            className="text-accent-foreground/75 inline-block"
            initial={{ opacity: 0, filter: 'blur(5px)', y: 8 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ ease: 'easeOut', duration: 0.8, bounce: 0 }}
          >
            {siteConfig.title}
          </motion.span>
        </span>

        <motion.div
          className="font-medium"
          initial={{ opacity: 0, filter: 'blur(5px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ type: 'spring', duration: 1, bounce: 0, delay: 0.8 }}
        >
          <RandomIcon className="text-blue-500" />
        </motion.div>

        <motion.div
          className="ml-auto"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 0.8, bounce: 0 }}
        >
          <Menu.Root>
            <Menu.Trigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Links"
                  className="flex cursor-pointer items-center gap-1.5 rounded-full transition-transform duration-150 ease-out will-change-transform active:scale-[0.97]"
                >
                  <GripHorizontal aria-hidden />
                </Button>
              }
            />
            <Menu.Portal>
              <Menu.Positioner sideOffset={8} align="end">
                <Menu.Popup className="menu-popup bg-popover text-popover-foreground z-50 min-w-40 overflow-hidden rounded-xl border p-1 shadow-md">
                  <Menu.Item
                    render={
                      <Link href={siteConfig.links.github} target="_blank" />
                    }
                    className="hover:bg-muted focus:bg-muted flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm font-medium outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                  >
                    <Github aria-hidden /> GitHub
                  </Menu.Item>
                  <Menu.Item
                    render={
                      <Link href={siteConfig.links.linkedin} target="_blank" />
                    }
                    className="hover:bg-muted focus:bg-muted flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm font-medium outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                  >
                    <Linkedin aria-hidden /> LinkedIn
                  </Menu.Item>
                </Menu.Popup>
              </Menu.Positioner>
            </Menu.Portal>
          </Menu.Root>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 0.8, bounce: 0 }}
        >
          <ThemeToggle />
        </motion.div>
      </h1>

      <div className="flex flex-col gap-1">
        <motion.p
          initial={{ opacity: 0, filter: 'blur(5px)', y: 8 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ ease: 'easeOut', duration: 0.8, bounce: 0, delay: 0.1 }}
          className="text-muted-foreground font-medium"
        >
          I build production <span className="text-primary">AI Systems</span>{' '}
          with <span className="text-primary">LLM Integration</span>.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, filter: 'blur(5px)', y: 8 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ ease: 'easeOut', duration: 0.8, bounce: 0, delay: 0.2 }}
          className="text-muted-foreground font-medium"
        >
          I build and run the AI and data infrastructure behind{' '}
          <ProjectTextLink href="https://zensah.com">Zensah</ProjectTextLink>
          &apos;s Amazon and Shopify growth operations, from the multi-agent
          AI platform to the data pipelines syncing APIs and the custom tools
          the agents use.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, filter: 'blur(5px)', y: 8 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{
            ease: 'easeOut',
            duration: 0.8,
            bounce: 0,
            delay: 0.25,
          }}
          className="text-muted-foreground font-medium"
        >
          Also built{' '}
          <ProjectTextLink href={featuredProjects[2].link}>
            Macrotrue
          </ProjectTextLink>
          ,{' '}
          <ProjectTextLink href={featuredProjects[0].link}>
            Jump
          </ProjectTextLink>
          , and{' '}
          <ProjectTextLink href={featuredProjects[1].link}>
            SpotBuds
          </ProjectTextLink>
          .{' '}
          <Link
            href="/projects"
            className="text-primary pt-2 inline-flex items-baseline gap-1 align-baseline underline underline-offset-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-4"
          >
            <FolderKanban aria-hidden className="my-auto" />
           Check out more projects
          </Link>{' '}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, filter: 'blur(5px)', y: 8 }}
        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        transition={{ ease: 'easeOut', duration: 0.8, bounce: 0, delay: 0.3 }}
        className="flex items-center justify-start gap-2"
      >
        <Button
          variant="default"
          aria-label="Download resume"
          className="shimmer-hover flex cursor-pointer items-center gap-1.5 rounded-full pr-3 text-[15px] transition-transform duration-150 ease-out will-change-transform active:scale-[0.97]"
          asChild
        >
          <Link href={siteConfig.links.resume} target="_blank" download>
            <Download aria-hidden />
            <span className="shimmer-text font-medium">View Resume</span>
          </Link>
        </Button>
        <Button
          variant="secondary"
          aria-label="Copy email address"
          onClick={handleCopy}
          className="flex cursor-pointer items-center gap-1.5 rounded-full pr-3 text-[15px] transition-transform duration-150 ease-out will-change-transform active:scale-[0.97]"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={isCopied ? 'check' : 'mail'}
              initial={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
              transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
            >
              {isCopied ? <Check aria-hidden /> : <Mail aria-hidden />}
            </motion.div>
          </AnimatePresence>
          <span className="font-medium">Copy Email</span>
        </Button>
      </motion.div>

      <div className="my-2 h-px bg-border" />
      <motion.div
        initial={{ opacity: 0, filter: 'blur(5px)', y: 8 }}
        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        transition={{ ease: 'easeOut', duration: 0.8, bounce: 0, delay: 0.35 }}
        className="flex flex-col gap-2"
      >
        <span className="text-muted-foreground text-xs font-medium uppercase tracking-widest">
          Experience
        </span>
        <div className="flex flex-col gap-3">
          {groupExperienceByCompany(EXPERIENCE).map((group) => (
            <div key={group.company} className="flex flex-col gap-1">
              {group.link ? (
                <Link
                  href={group.link}
                  target="_blank"
                  className="text-primary font-medium underline underline-offset-2"
                >
                  {group.company}
                </Link>
              ) : (
                <span className="text-primary font-medium">{group.company}</span>
              )}
              <div className="flex flex-col gap-1">
                {group.roles.map((role, index) => (
                  <div
                    key={role.role + role.period}
                    className={`flex items-baseline justify-between gap-2 ${
                      index > 0 ? 'border-border ml-1 border-l pl-2' : ''
                    }`}
                  >
                    <span
                      className={
                        index > 0
                          ? 'text-muted-foreground/70 text-xs'
                          : 'text-muted-foreground text-sm'
                      }
                    >
                      {role.role}
                    </span>
                    <span
                      className={`shrink-0 tabular-nums ${
                        index > 0
                          ? 'text-muted-foreground/70 text-xs'
                          : 'text-muted-foreground text-sm'
                      }`}
                    >
                      {role.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="my-2 h-px bg-border" />

      <motion.div
        initial={{ opacity: 0, filter: 'blur(5px)', y: 8 }}
        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        transition={{ ease: 'easeOut', duration: 0.8, bounce: 0, delay: 0.4 }}
        className="flex flex-col gap-2"
      >
        <span className="text-muted-foreground text-xs font-medium uppercase tracking-widest">
          Skills
        </span>
        <div className="flex gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SKILLS.map((group, index) => (
            <button
              key={group.label}
              type="button"
              onClick={() => setActiveSkillGroup(index)}
              className={`shrink-0 cursor-pointer rounded-full border px-3 py-1 text-xs font-medium whitespace-nowrap transition-colors ${
                activeSkillGroup === index
                  ? 'border-transparent bg-primary text-primary-foreground'
                  : 'border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSkillGroup}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ ease: 'easeOut', duration: 0.2 }}
            className="flex flex-wrap gap-1.5"
          >
            {SKILLS[activeSkillGroup].items.map((item) => (
              <span
                key={item}
                className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="my-2 h-px bg-border" />

      <motion.div
        initial={{ opacity: 0, filter: 'blur(5px)', y: 8 }}
        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        transition={{ ease: 'easeOut', duration: 0.8, bounce: 0, delay: 0.45 }}
        className="flex flex-col gap-2"
      >
        <span className="text-muted-foreground text-xs font-medium uppercase tracking-widest">
          Education
        </span>
        <div className="flex flex-col gap-2">
          {EDUCATION.map((edu) => (
            <div key={edu.institution + edu.period} className="flex items-baseline justify-between gap-2">
              <div className="flex flex-col">
                <span className="text-primary font-medium">{edu.institution}</span>
                <span className="text-muted-foreground text-sm">{edu.degree}</span>
              </div>
              <span className="text-muted-foreground shrink-0 text-sm tabular-nums">
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="my-2 h-px bg-border" />

      <motion.div
        initial={{ opacity: 0, filter: 'blur(5px)', y: 8 }}
        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        transition={{ ease: 'easeOut', duration: 0.8, bounce: 0, delay: 0.5 }}
        className="flex flex-col gap-2"
      >
        <span className="text-muted-foreground text-xs font-medium uppercase tracking-widest">
          GitHub Activity
        </span>
        <GithubActivity />
      </motion.div>
    </div>
  )
}
