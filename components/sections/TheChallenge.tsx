'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/motion/FadeIn'
import { PAIN_POINTS } from '@/lib/constants'
import { HelpCircle, AlertCircle, Info } from 'lucide-react'

const PINS = [
  {
    id: 1,
    x: '25%',
    y: '22%',
    title: 'Core Web Vitals',
    desc: '3.8s LCP — Google speed rating: POOR',
    icon: <AlertCircle className="h-4 w-4 text-[#FF4D4D]" />,
  },
  {
    id: 2,
    x: '75%',
    y: '48%',
    title: 'Layout Shifts',
    desc: 'Mobile CLS 0.34 — Layout shifts on scroll',
    icon: <HelpCircle className="h-4 w-4 text-gold" />,
  },
  {
    id: 3,
    x: '42%',
    y: '78%',
    title: 'Asset Loading',
    desc: 'No progressive image loading or compression',
    icon: <Info className="h-4 w-4 text-gold" />,
  },
]

export function TheChallenge() {
  const [activePin, setActivePin] = useState<number | null>(null)

  return (
    <section id="challenge" className="section-y relative overflow-hidden select-none">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            'radial-gradient(circle 600px at 100% 50%, rgba(201,168,76,0.04), transparent)',
        }}
      />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Copy and Pain Points */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <FadeIn>
            <SectionLabel>The Challenge</SectionLabel>
            <h2 className="section-heading mt-2">
              Legacy boundaries, <br />
              sluggish growth.
            </h2>
            <p className="text-[var(--color-text-secondary)] text-base leading-relaxed mt-4 max-w-lg">
              The legacy Shopify theme suffered from critical mobile UX issues, massive checkout funnel drop-offs, and abysmal loading speeds. This created friction that severely bottlenecked overall sales revenue.
            </p>
          </FadeIn>

          {/* Pain Points Grid */}
          <div className="flex flex-col gap-4 mt-6">
            {PAIN_POINTS.map((item, idx) => (
              <FadeIn key={item.label} delay={idx * 100}>
                <div className="group flex gap-4 p-5 rounded-2xl border border-transparent hover:border-gold/15 hover:bg-[#18181C] transition-all duration-300">
                  <span className="text-2xl mt-1 select-none">{item.icon}</span>
                  <div>
                    <h4 className="font-body font-medium text-[#F5F0E8] group-hover:text-gold transition-colors">
                      {item.label}
                    </h4>
                    <p className="text-[var(--color-text-secondary)] text-sm mt-1 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Right Side: Annotated Image Mockup */}
        <div className="lg:col-span-6 flex justify-center items-center relative w-full">
          <FadeIn delay={200} direction="left" className="w-full relative max-w-[500px]">
            {/* Ambient gold background shadow */}
            <div className="absolute inset-0 bg-gold/5 blur-[50px] -z-10 rounded-3xl" />

            <div className="relative card rounded-2xl overflow-hidden border border-gold/15 bg-obsidian-2 shadow-2xl">
              {/* Header mockup style */}
              <div className="bg-[#18181C] px-4 py-2 border-b border-gold/10 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] ml-2 select-none">
                  legacy-storefront.shopify.com
                </span>
              </div>

              {/* Main "Before" Image */}
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/challenge-before.png"
                  alt="Legacy Shopify theme before redesign mobile screenshot visual"
                  fill
                  className="object-cover opacity-90 transition-all duration-500 hover:scale-105"
                  sizes="(max-w-768px) 100vw, 500px"
                  loading="lazy"
                  quality={85}
                />

                {/* Overlaid Annotation Pins */}
                {PINS.map((pin) => (
                  <div
                    key={pin.id}
                    className="absolute"
                    style={{ top: pin.y, left: pin.x }}
                  >
                    {/* Pulsing Dot */}
                    <button
                      onClick={() => setActivePin(activePin === pin.id ? null : pin.id)}
                      onMouseEnter={() => setActivePin(pin.id)}
                      onMouseLeave={() => setActivePin(null)}
                      className="relative flex items-center justify-center h-6 w-6 rounded-full bg-obsidian-2 border border-gold shadow-lg cursor-pointer z-20 group hover:scale-110 transition-transform focus:outline-none"
                    >
                      <span className="absolute inline-flex h-full w-full rounded-full bg-gold/30 animate-ping opacity-75" />
                      <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                    </button>

                    {/* Tooltip Card */}
                    <AnimatePresence>
                      {activePin === pin.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="absolute z-30 bottom-8 -left-32 w-64 bg-obsidian-3/95 backdrop-blur-md border border-gold/20 rounded-xl p-4 shadow-2xl select-none"
                        >
                          <div className="flex items-center gap-2 mb-1.5 border-b border-gold/10 pb-1.5">
                            {pin.icon}
                            <span className="font-body font-semibold text-xs tracking-wider text-[#F5F0E8] uppercase">
                              {pin.title}
                            </span>
                          </div>
                          <p className="text-[var(--color-text-secondary)] text-xs leading-relaxed font-body">
                            {pin.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
