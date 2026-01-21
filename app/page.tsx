'use client'
import { motion } from 'motion/react'
import { useRefreshAnimation } from '@/hooks/useRefreshAnimation'
import { PageTransition } from '@/components/ui/page-transition'
import { PAGE_ANIMATIONS } from '@/lib/animations'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  EDUCATION,
  TECH_STACK,
  PROFILE_IMAGE_URL,
} from '@/lib/content'
import { HeroSection } from '@/components/sections/HeroSection'
import { TechStackSection } from '@/components/sections/TechStackSection'
import { WorkExperienceSection } from '@/components/sections/WorkExperienceSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { PersonalStatsSection } from '@/components/sections/PersonalStatsSection'
import { GithubActivitySection } from '@/components/sections/GithubActivitySection'

export default function Personal() {
  const refreshKey = useRefreshAnimation()

  return (
    <PageTransition>
      <motion.main
        className="space-y-12 md:space-y-24"
        variants={PAGE_ANIMATIONS.container}
        initial="hidden"
        animate="visible"
        key={`page-refresh-${refreshKey}`}
      >
        <motion.div variants={PAGE_ANIMATIONS.section}>
          <HeroSection profileImageUrl={PROFILE_IMAGE_URL} />
        </motion.div>

        <motion.div variants={PAGE_ANIMATIONS.section}>
          <TechStackSection techStack={TECH_STACK} />
        </motion.div>

        <motion.div variants={PAGE_ANIMATIONS.section}>
          <WorkExperienceSection jobs={WORK_EXPERIENCE} />
        </motion.div>

        <motion.div variants={PAGE_ANIMATIONS.section}>
          <ProjectsSection projects={PROJECTS} />
        </motion.div>

        <motion.div variants={PAGE_ANIMATIONS.section}>
          <GithubActivitySection />
        </motion.div>

        <motion.div variants={PAGE_ANIMATIONS.section}>
          <EducationSection education={EDUCATION} />
        </motion.div>

        <motion.div variants={PAGE_ANIMATIONS.section}>
          <PersonalStatsSection />
        </motion.div>
      </motion.main>
    </PageTransition>
  )
}
