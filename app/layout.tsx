import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Willis Brown - Technology Investment & Development Company',
  description: 'Willis Brown is a Delaware-incorporated technology company specializing in SaaS development and digital innovation. Building tomorrow\'s software solutions today.',
  generator: 'Next.js',
  keywords: ['SaaS', 'technology', 'software development', 'Delaware corporation', 'digital innovation'],
  authors: [{ name: 'Willis Brown' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Willis Brown - Technology Investment & Development Company',
    description: 'Delaware-incorporated technology company specializing in SaaS development and digital innovation.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <GoogleAnalytics gaId="G-YMHM7SWWR2" />
      </body>
    </html>
  )
}
