import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import './globals.css'

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dmsans',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://luxecommerce.io'),
  title: {
    default: 'Luxe Commerce Platform — Premium E-Commerce Experiences',
    template: '%s · Luxe Commerce',
  },
  description:
    'Case study: how we delivered a 40% conversion lift and 2.1s LCP improvement for a retail startup through a custom Next.js headless storefront.',
  keywords: ['e-commerce', 'Next.js', 'headless commerce', 'Shopify alternative', 'conversion rate optimisation'],
  authors: [{ name: 'Luxe Commerce Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luxecommerce.io',
    siteName: 'Luxe Commerce Platform',
    title: 'Luxe Commerce Platform — +40% Conversion Lift Case Study',
    description: 'Custom Next.js storefront replacing legacy Shopify theme. 2.1s LCP improvement. 28% lower bounce rate.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Luxe Commerce Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxe Commerce Platform — +40% Conversion Lift',
    description: 'How we rebuilt a retail startup\'s storefront with Next.js and tripled conversion.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased bg-[#0A0A0B] text-[#F5F0E8] font-body selection:bg-gold/30 selection:text-[#F5F0E8] overflow-x-hidden`}
      >
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
