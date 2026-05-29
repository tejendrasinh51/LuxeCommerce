'use client'
import { Star } from 'lucide-react'
import { FadeIn } from '@/components/motion/FadeIn'
import { TESTIMONIAL } from '@/lib/constants'

export function Testimonial() {
  return (
    <section id="testimonial" className="section-y relative overflow-hidden select-none">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            'radial-gradient(circle 600px at 50% 50%, rgba(201,168,76,0.03), transparent)',
        }}
      />

      <div className="container relative z-10 max-w-4xl mx-auto text-center px-6">
        <FadeIn className="flex flex-col items-center gap-6">
          {/* Elegant Huge Quote Icon */}
          <span className="font-display text-[6rem] text-gold leading-none select-none h-12 flex items-center justify-center">
            ❝
          </span>

          {/* Quote Body */}
          <blockquote className="font-display italic text-2xl lg:text-3xl text-[#F5F0E8] leading-relaxed max-w-3xl mt-4">
            &ldquo;{TESTIMONIAL.quote}&rdquo;
          </blockquote>

          {/* Gold Star Ratings */}
          <div className="flex items-center gap-1.5 mt-4 select-none">
            {Array.from({ length: TESTIMONIAL.rating }).map((_, idx) => (
              <Star
                key={idx}
                className="h-4 w-4 fill-gold text-gold transition-transform duration-300 hover:scale-120"
              />
            ))}
          </div>

          {/* Attribution details */}
          <cite className="not-italic mt-2 flex flex-col items-center gap-1">
            <span className="font-body font-semibold text-sm tracking-wider text-[#F5F0E8] uppercase">
              {TESTIMONIAL.author}
            </span>
            <span className="font-body text-xs text-[var(--color-text-secondary)] tracking-wide">
              {TESTIMONIAL.title}
            </span>
          </cite>
        </FadeIn>
      </div>
    </section>
  )
}
