import type { Metadata, Viewport } from 'next'
import { Caveat, Geist, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import { CustomCursor } from '@/components/cursor'
import { StructuredData } from '@/components/seo/structured-data'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111110',
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

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
})

const redactionSerif = localFont({
  src: [
    {
      path: '../public/fonts/Redaction35-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-redaction-serif',
})

const openRunde = localFont({
  src: [
    {
      path: '../public/fonts/OpenRunde-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/OpenRunde-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/OpenRunde-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/OpenRunde-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-open-runde',
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className="overscroll-none"
    >
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${openRunde.variable} ${redactionSerif.variable} font-open-runde min-h-dvh overscroll-none antialiased`}
        suppressHydrationWarning
      >
        <CustomCursor />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
