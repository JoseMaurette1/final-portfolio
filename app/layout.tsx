import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Source_Sans_3, Merriweather } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { FloatingElements } from '@/components/ui/floating-elements'
import { StructuredData } from '@/components/seo/structured-data'

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
    default: 'Jose Maurette - Full Stack Developer | React, Next.js, TypeScript',
    template: '%s | Jose Maurette'
  },
  description: 'Jose Maurette is a Full Stack Developer focused on creating intuitive and performant web experiences. Specializing in React, Next.js, TypeScript, and modern web technologies. View portfolio, projects, and work experience.',
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
    'Modern Web Development'
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
    description: 'Jose Maurette is a Full Stack Developer focused on creating intuitive and performant web experiences. Specializing in React, Next.js, TypeScript, and modern web technologies.',
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
    description: 'Jose Maurette is a Full Stack Developer focused on creating intuitive and performant web experiences. Specializing in React, Next.js, TypeScript, and modern web technologies.',
    images: ['/background.png'],
    creator: '@JoseMaurette1',
    site: '@JoseMaurette1',
  },
};

// Primary UI font - Best for headings, navigation, and UI elements
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

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
        className={`${inter.variable} ${jetBrainsMono.variable} ${sourceSans.variable} ${merriweather.variable} bg-white tracking-tight antialiased dark:bg-zinc-950 overflow-x-hidden`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter)]">
            <ScrollProgress className="fixed z-50 bg-zinc-900 dark:bg-zinc-100" />
            <FloatingElements />
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
