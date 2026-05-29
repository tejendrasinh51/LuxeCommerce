import { Hero }         from '@/components/sections/Hero'
import { TheChallenge } from '@/components/sections/TheChallenge'
import { OurSolution }  from '@/components/sections/OurSolution'
import { Results }      from '@/components/sections/Results'
import { TechStack }    from '@/components/sections/TechStack'
import { Testimonial }  from '@/components/sections/Testimonial'
import { CallToAction } from '@/components/sections/CallToAction'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Luxe Commerce Platform Case Study',
    description: 'Premium e-commerce experience with 40% conversion lift.',
    url: 'https://luxecommerce.io',
    author: {
      '@type': 'Organization',
      name: 'Luxe Commerce',
      url: 'https://luxecommerce.io',
    },
    mainEntity: {
      '@type': 'CreativeWork',
      name: 'Luxe Commerce Platform Redesign',
      description: 'Headless Next.js storefront replacing legacy Shopify theme',
      keywords: 'Next.js, Stripe, Sanity, Vercel, headless commerce',
    },
  }

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative min-h-screen bg-[#0A0A0B]">
        <Hero />
        <TheChallenge />
        <OurSolution />
        <Results />
        <TechStack />
        <Testimonial />
        <CallToAction />
      </main>
    </>
  )
}
