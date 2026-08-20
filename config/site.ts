import { EMAIL, RESUME_URL, SOCIAL_LINKS } from '@/lib/content'

function getSocialLink(label: string) {
  return SOCIAL_LINKS.find((item) => item.label === label)?.link ?? '/'
}

export const siteConfig = {
  name: 'Jose',
  title: 'Agentic AI & Platforms Engineer',
  email: EMAIL,
  description:
    'Jose Maurette is an AI Engineer building production multi-agent LLM systems, from agent orchestration to tool-calling and RAG.',
  links: {
    github: getSocialLink('Github'),
    linkedin: getSocialLink('LinkedIn'),
    resume: RESUME_URL,
  },
}
