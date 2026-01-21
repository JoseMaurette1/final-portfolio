'use client'

export const StructuredData = () => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jose Maurette',
    jobTitle: 'Full Stack Developer',
    description:
      'Full Stack Developer focused on creating intuitive and performant web experiences. Specializing in React, Next.js, TypeScript, and modern web technologies.',
    url: 'https://maurette.vercel.app',
    sameAs: [
      'https://github.com/JoseMaurette1',
      'https://www.linkedin.com/in/maurette',
      'https://www.instagram.com/hose_04',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Web Development',
      'Frontend Development',
      'Backend Development',
      'Tailwind CSS',
      'Framer Motion',
      'Supabase',
      'Node.js',
      'Git',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Florida International University',
      url: 'https://www.fiu.edu',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Kontaktsource',
      url: 'https://kontaktsource.com',
    },
    image: 'https://maurette.vercel.app/background.png',
    email: 'josemaurette1234@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Miami',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Jose Maurette Portfolio',
    url: 'https://maurette.vercel.app',
    description:
      'Personal portfolio website of Jose Maurette, a Full Stack Developer specializing in React, Next.js, and TypeScript.',
    author: {
      '@type': 'Person',
      name: 'Jose Maurette',
    },
    publisher: {
      '@type': 'Person',
      name: 'Jose Maurette',
    },
  }

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Jose Maurette Portfolio',
    author: {
      '@type': 'Person',
      name: 'Jose Maurette',
    },
    description: 'Portfolio showcasing web development projects and skills',
    url: 'https://maurette.vercel.app',
    genre: 'Portfolio',
    keywords: 'web development, react, next.js, typescript, portfolio',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema),
        }}
      />
    </>
  )
}
