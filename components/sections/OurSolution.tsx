'use client'
import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/motion/FadeIn'
import { SOLUTIONS } from '@/lib/constants'

export function OurSolution() {
  return (
    <section id="solution" className="section-y relative overflow-hidden select-none">
      {/* Background Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            'radial-gradient(circle 800px at 0% 100%, rgba(201,168,76,0.03), transparent)',
        }}
      />

      <div className="container relative z-10 flex flex-col gap-24 lg:gap-40">
        {/* Section Heading */}
        <FadeIn className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <SectionLabel>Our Solution</SectionLabel>
          <h2 className="section-heading mt-2">
            Re-engineered from<br />
            the codebase up.
          </h2>
          <p className="text-[var(--color-text-secondary)] text-base mt-4 max-w-xl">
            A meticulous headless architecture separating commerce logics from premium customer interfaces, achieving instantaneous loading times and lightning-fast express transactions.
          </p>
        </FadeIn>

        {/* Solutions Rows */}
        <div className="flex flex-col gap-32 lg:gap-48">
          {SOLUTIONS.map((sol, idx) => {
            const isEven = idx % 2 === 0

            const textCol = (
              <div className="flex flex-col gap-6 relative justify-center h-full">
                {/* Large Background Index Number */}
                <span className="font-display font-medium text-[7rem] md:text-[9rem] leading-none text-gold/5 absolute -top-16 -left-6 md:-top-20 md:-left-8 select-none pointer-events-none">
                  {sol.number}
                </span>

                <div className="relative z-10 flex flex-col gap-4 mt-6">
                  <h3 className="font-display text-2xl md:text-3xl font-light text-[#F5F0E8] tracking-wide">
                    {sol.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed max-w-lg">
                    {sol.body}
                  </p>
                  
                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2.5 mt-4">
                    {sol.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] tracking-wider uppercase bg-[#18181C] border border-gold/15 text-[var(--color-text-secondary)] px-3 py-1.5 rounded-full select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )

            const visualCol = (
              <div className="flex justify-center items-center relative w-full">
                {/* Ambient backdrop glow */}
                <div className="absolute inset-0 bg-gold/5 blur-[60px] -z-10 rounded-full" />
                
                <div className="relative card rounded-2xl overflow-hidden border border-gold/15 bg-obsidian-2 shadow-2xl w-full max-w-[500px]">
                  {/* browser bar header */}
                  <div className="bg-[#18181C] px-4 py-2 border-b border-gold/10 flex items-center gap-2 select-none">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>

                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={sol.visual}
                      alt={`${sol.title} mockup visual representation`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-w-768px) 100vw, 500px"
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                </div>
              </div>
            )

            return (
              <div key={sol.number} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                {isEven ? (
                  <>
                    <div className="lg:col-span-6 order-1 lg:order-none">
                      <FadeIn direction="right" delay={100}>
                        {textCol}
                      </FadeIn>
                    </div>
                    <div className="lg:col-span-6 order-2 lg:order-none">
                      <FadeIn direction="left" delay={200}>
                        {visualCol}
                      </FadeIn>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Mobile visualCol will display first on mobile, but on desktop it is on left */}
                    <div className="lg:col-span-6 order-2 lg:order-none">
                      <FadeIn direction="right" delay={200}>
                        {visualCol}
                      </FadeIn>
                    </div>
                    <div className="lg:col-span-6 order-1 lg:order-none">
                      <FadeIn direction="left" delay={100}>
                        {textCol}
                      </FadeIn>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
