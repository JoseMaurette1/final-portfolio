import type { Metadata, Viewport } from 'next'
import {
  JetBrains_Mono,
  Source_Sans_3,
  Merriweather,
  DM_Sans,
  Playfair_Display,
} from 'next/font/google'
import './globals.css'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { FloatingElements } from '@/components/ui/floating-elements'
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

// Code font - Best for code snippets, technical content, and developer-focused elements
const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
})

// Body text font - Best for readable content and paragraphs
const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  display: 'swap',
})

// Serif font - Best for quotes, testimonials, and special content sections
const merriweather = Merriweather({
  variable: '--font-merriweather',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
})

// Professional, high-contrast serif for section headings
const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  display: 'swap',
})

// Clean modern sans-serif for body text and UI
const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
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
        className={`${dmSans.variable} ${jetBrainsMono.variable} ${sourceSans.variable} ${merriweather.variable} ${playfairDisplay.variable} overflow-x-hidden bg-white tracking-tight antialiased dark:bg-zinc-950`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          storageKey="theme"
          defaultTheme="dark"
          forcedTheme="dark"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter)]">
            <FloatingElements />
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
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
