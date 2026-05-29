'use client'
import { ArrowRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/motion/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function CallToAction() {
  return (
    <section id="contact" className="section-y relative overflow-hidden border-t border-gold/15 bg-obsidian-2 select-none">
      {/* Background Radial Gold Glow from Bottom-Center */}
      <div
        className="absolute inset-x-0 bottom-0 h-full pointer-events-none opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(201,168,76,0.08), transparent)',
        }}
      />

      <div className="container relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <FadeIn className="flex flex-col items-center gap-6">
          <SectionLabel>Collaborations</SectionLabel>

          <h2 className="display-heading text-[#F5F0E8] mt-2 tracking-wide leading-tight">
            Ready to transform<br />
            your commerce?
          </h2>

          <p className="text-[var(--color-text-secondary)] text-base md:text-lg max-w-xl mt-4 leading-relaxed">
            Let&apos;s build a performant, custom-tailored storefront that elevates your customer engagement and triples conversion rates.
          </p>

          {/* Action Trigger Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="mailto:hello@luxecommerce.io"
              icon={<Mail className="h-5 w-5" />}
            >
              Start Your Project
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href="#challenge"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              View Case Details
            </Button>
          </div>

          {/* Contact Details Email */}
          <div className="mt-12 group flex flex-col items-center gap-1">
            <span className="font-mono text-[10px] tracking-widest text-[var(--color-text-tertiary)] uppercase select-none">
              Direct Inquiries
            </span>
            <a
              href="mailto:hello@luxecommerce.io"
              className="font-display italic text-xl md:text-2xl text-gold hover:text-gold-light transition-colors relative duration-300 py-1"
            >
              hello@luxecommerce.io
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold-light group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
