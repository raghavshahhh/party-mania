import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ClientEffects } from '@/components/ui/ClientEffects'
import { SmoothScroll } from '@/components/ui/SmoothScroll'
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
  themeColor: '#D4AF37',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://partymania.in'),
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
    'haldi ceremony decoration',
    'mehendi setup',
    'engagement decoration Delhi',
  ],
  openGraph: {
    title: 'Party Mania | We Decorate, You Celebrate!',
    description: 'Premium birthday & event decoration services in Delhi NCR',
    type: 'website',
    locale: 'en_IN',
    url: 'https://partymania.in',
    siteName: 'Party Mania',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Party Mania | We Decorate, You Celebrate!',
    description: 'Premium birthday & event decoration services in Delhi NCR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">
        <ClientEffects />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
