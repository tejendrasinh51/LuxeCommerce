import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/motion/FadeIn'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 select-none">
      {/* Background Radial Gold Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 0% 0%, rgba(201,168,76,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Animated subtle noise overlay to add a high-end textured look */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('data:image/svg+xml;utf8,<svg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/></svg>')] bg-repeat" />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center py-20 lg:py-32">
        {/* Left Col: Copy & Actions */}
        <div className="flex flex-col gap-8 lg:col-span-6">
          <FadeIn delay={100}>
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-gold border border-gold/25 rounded-full px-5 py-2.5 bg-obsidian-3/80 backdrop-blur-md w-fit">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Case Study · Retail Startup
            </span>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="display-heading">
              A premium<br />
              <em className="font-display italic text-gold-light">e-commerce</em><br />
              experience.
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-lg">
              Delivering a <strong className="text-gold font-medium">+40% conversion lift</strong> through a custom headless rebuild — replacing a legacy sluggish Shopify theme with a high-fidelity Next.js storefront.
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="#contact">
                View Live Project
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#challenge"
                icon={<ArrowDown className="h-4 w-4 animate-bounce" />}
              >
                Read Case Study
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Right Col: Animated Float Mockup */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
          {/* Back light glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
          
          <FadeIn delay={300} direction="none" className="w-full max-w-[560px] lg:max-w-none">
            <div className="relative hero-mockup animate-float transition-transform duration-300">
              <Image
                src="/images/hero-mockup.png"
                alt="Luxe Commerce storefront on MacBook Pro device preview"
                width={1200}
                height={750}
                priority
                quality={85}
                className="w-full h-auto object-contain rounded-lg"
                style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.75))' }}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
