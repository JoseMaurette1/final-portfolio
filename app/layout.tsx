import type { Metadata, Viewport } from 'next'
import { Geist, Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { StructuredData } from '@/components/seo/structured-data'
import { Navbar } from '@/components/ui/navbar'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://maurette.vercel.app/'),
  alternates: {
    canonical: 'https://maurette.vercel.app/',
    languages: {
      'en-US': 'https://maurette.vercel.app/',
    },
  },
  title: {
    default:
      'Jose Maurette - Full Stack Developer | React, Next.js, TypeScript',
    template: '%s | Jose Maurette',
  },
  description:
    'Jose Maurette is a Full Stack Developer focused on creating intuitive and performant web experiences. Specializing in React, Next.js, TypeScript, and modern web technologies. View portfolio, projects, and work experience.',
  keywords: [
    'Jose Maurette',
    'Full Stack Developer',
    'Web Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript Developer',
    'Web Development',
    'Software Engineer',
    'Portfolio',
    'Miami Developer',
    'Florida Developer',
    'FIU Computer Science',
    'React Portfolio',
    'Next.js Portfolio',
    'Modern Web Development',
  ],
  authors: [{ name: 'Jose Maurette' }],
  creator: 'Jose Maurette',
  publisher: 'Jose Maurette',
  category: 'Technology',
  classification: 'Portfolio',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/background.png',
    shortcut: '/background.png',
    apple: '/background.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maurette.vercel.app/',
    title: 'Jose Maurette - Full Stack Developer | React, Next.js, TypeScript',
    description:
      'Jose Maurette is a Full Stack Developer focused on creating intuitive and performant web experiences. Specializing in React, Next.js, TypeScript, and modern web technologies.',
    siteName: 'Jose Maurette Portfolio',
    images: [
      {
        url: '/background.png',
        width: 1200,
        height: 630,
        alt: 'Jose Maurette - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jose Maurette - Full Stack Developer',
    description:
      'Jose Maurette is a Full Stack Developer focused on creating intuitive and performant web experiences. Specializing in React, Next.js, TypeScript, and modern web technologies.',
    images: ['/background.png'],
    creator: '@JoseMaurette1',
    site: '@JoseMaurette1',
  },
}

// Sans-serif font - Clean modern look for the entire site
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

// Display sans-serif for headings
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${spaceGrotesk.variable} ${inter.variable} overflow-x-hidden bg-white font-[family-name:var(--font-geist-sans)] tracking-tight antialiased dark:bg-zinc-950`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          fontFamily:
            "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Monaco, 'Courier New', monospace",
        }}
      >
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          storageKey="theme"
          defaultTheme="dark"
          forcedTheme="dark"
        >
          <div className="relative flex min-h-screen w-full flex-col">
            {/* Left vertical line */}
            <div className="absolute top-0 left-1/2 h-full w-px -translate-x-[28rem] border-l border-neutral-800" />

            {/* Right vertical line */}
            <div className="absolute top-0 left-1/2 h-full w-px translate-x-[28rem] border-l border-neutral-800" />

            <div className="relative z-10 mx-auto w-full max-w-3xl flex-1 px-6 pt-8">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
