import { EMAIL, RESUME_URL, SOCIAL_LINKS } from '@/lib/content'

function getSocialLink(label: string) {
  return SOCIAL_LINKS.find((item) => item.label === label)?.link ?? '/'
}

export const siteConfig = {
  name: 'Jose',
  title: 'AI Engineer',
  email: EMAIL,
  description:
    'Jose Maurette is a AI Engineer focused on creating intuitive and performant web experiences.',
  links: {
    github: getSocialLink('Github'),
    linkedin: getSocialLink('LinkedIn'),
    resume: RESUME_URL,
  },
}
