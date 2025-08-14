import {
  PROJECTS,
  WORK_EXPERIENCE,
  EMAIL,
  SOCIAL_LINKS,
  EDUCATION,
  TECH_STACK,
  RESUME_URL,
  PROFILE_IMAGE_URL,
} from '@/lib/content'
import { HeroSection } from '@/components/sections/HeroSection'
import { TechStackSection } from '@/components/sections/TechStackSection'
import { WorkExperienceSection } from '@/components/sections/WorkExperienceSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { ConnectSection } from '@/components/sections/ConnectSection'

export default function Personal() {
  return (
    <main className="space-y-24">
      <HeroSection profileImageUrl={PROFILE_IMAGE_URL} resumeUrl={RESUME_URL} />
      <TechStackSection techStack={TECH_STACK} />
      <WorkExperienceSection jobs={WORK_EXPERIENCE} />
      <ProjectsSection projects={PROJECTS} />
      <EducationSection education={EDUCATION} />
      <ConnectSection email={EMAIL} socials={SOCIAL_LINKS} />
    </main>
  )
}
