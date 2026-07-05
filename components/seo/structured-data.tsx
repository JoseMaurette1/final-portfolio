'use client'

export const StructuredData = () => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jose Maurette',
    jobTitle: 'AI Engineer',
    description:
      'AI Engineer building production multi-agent LLM systems. Specializing in agent orchestration, tool calling, RAG, and Model Context Protocol (MCP) integrations.',
    url: 'https://maurette.vercel.app',
    sameAs: [
      'https://github.com/JoseMaurette1',
      'https://www.linkedin.com/in/maurette',
    ],
    knowsAbout: [
      'Agentic AI',
      'Multi-Agent Systems',
      'Claude API',
      'OpenAI API',
      'Model Context Protocol (MCP)',
      'Retrieval-Augmented Generation (RAG)',
      'Tool Calling',
      'Prompt Engineering',
      'React',
      'Next.js',
      'TypeScript',
      'Python',
      'Node.js',
      'PostgreSQL',
    ],
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
      'Personal portfolio website of Jose Maurette, an AI Engineer specializing in agentic AI and multi-agent LLM systems.',
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
    description:
      'Portfolio showcasing agentic AI and multi-agent LLM system projects',
    url: 'https://maurette.vercel.app',
    genre: 'Portfolio',
    keywords:
      'agentic ai, multi-agent systems, llm engineering, react, next.js, typescript, portfolio',
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
