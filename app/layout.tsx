import type { Metadata, Viewport } from 'next'
import { Space_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { StructuredData } from '@/components/seo/structured-data'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://maurette.vercel.app/'),
  alternates: {
    canonical: 'https://maurette.vercel.app/',
    languages: { 'en-US': 'https://maurette.vercel.app/' },
  },
  title: {
    default:
      'Jose Maurette - Full Stack Developer | React, Next.js, TypeScript',
    template: '%s | Jose Maurette',
  },
  description:
    'Jose Maurette is a Full Stack Developer focused on creating intuitive and performant web experiences. Specializing in React, Next.js, TypeScript, and modern web technologies.',
  keywords: [
    'Jose Maurette',
    'Full Stack Developer',
    'Web Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Portfolio',
    'Miami Developer',
    'FIU Computer Science',
  ],
  authors: [{ name: 'Jose Maurette' }],
  creator: 'Jose Maurette',
  robots: { index: true, follow: true },
  icons: {
    icon: '/background.png',
    shortcut: '/background.png',
    apple: '/background.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maurette.vercel.app/',
    title: 'Jose Maurette - Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, TypeScript.',
    siteName: 'Jose Maurette Portfolio',
    images: [
      {
        url: '/background.png',
        width: 1200,
        height: 630,
        alt: 'Jose Maurette Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jose Maurette - Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, TypeScript.',
    images: ['/background.png'],
    creator: '@JoseMaurette1',
  },
}

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  variable: '--font-space-mono',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${spaceMono.variable} bg-[#0a0a0a] font-[family-name:var(--font-space-mono)] antialiased`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          storageKey="theme"
          defaultTheme="dark"
          forcedTheme="dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
