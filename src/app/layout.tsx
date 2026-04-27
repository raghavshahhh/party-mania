import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { SmoothScroll } from '@/components/ui/SmoothScroll'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { GrainOverlay } from '@/components/ui/GrainOverlay'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Party Mania | Premium Decoration Services in Delhi NCR',
  description:
    'Premium birthday & event decoration services in Delhi NCR. Stunning balloon decorations, themed setups, and custom event styling for birthdays, anniversaries, baby showers & more.',
  keywords: [
    'birthday decoration Delhi',
    'party decoration NCR',
    'event decoration Delhi NCR',
    'balloon decoration Delhi',
    'anniversary decoration',
    'baby shower decoration Delhi',
    'theme party decoration',
    'premium decoration services',
  ],
  openGraph: {
    title: 'Party Mania | We Decorate, You Celebrate!',
    description: 'Premium birthday & event decoration services in Delhi NCR',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-[var(--color-bg)] text-white font-sans antialiased overflow-x-hidden">
        <SmoothScroll>
          <CustomCursor />
          <GrainOverlay />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
