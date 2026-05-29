'use client'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/motion/FadeIn'
import { TECH_STACK } from '@/lib/constants'

const TECH_ICONS: Record<string, React.JSX.Element> = {
  'Next.js 14': (
    <svg className="h-4 w-4 fill-current text-[#F5F0E8]" viewBox="0 0 24 24">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 18l-3.2-4.8h1.6l2.4 3.6 2.4-3.6h1.6l-3.2 4.8v4.8h-1.6v-4.8zm6.4-4.8c.884 0 1.6.716 1.6 1.6v6.4c0 .884-.716 1.6-1.6 1.6h-3.2c-.884 0-1.6-.716-1.6-1.6v-6.4c0-.884.716-1.6 1.6-1.6h3.2zm-.8 1.6h-1.6v4.8h1.6v-4.8z" />
    </svg>
  ),
  'TypeScript': (
    <svg className="h-4 w-4 fill-current text-[#3178C6]" viewBox="0 0 24 24">
      <path d="M0 0v24h24V0H0zm22.234 19.344c-.1.353-.298.7-.59 1.042-.3.34-.69.605-1.168.793a4.78 4.78 0 0 1-1.748.337c-.82 0-1.505-.183-2.05-.545-.544-.365-.92-.857-1.127-1.474-.207-.617-.29-1.298-.246-2.04h2.247c-.015.52.06 1.002.227 1.443.167.442.435.795.803 1.06.368.267.87.4 1.505.4.63 0 1.135-.14 1.516-.423.38-.284.572-.734.572-1.35 0-.496-.135-.88-.403-1.156-.268-.277-.66-.525-1.173-.746l-.995-.436c-.958-.42-1.69-.948-2.193-1.583-.503-.637-.756-1.442-.756-2.417 0-.965.253-1.768.756-2.41a4.26 4.26 0 0 1 2.112-1.46c.905-.285 1.905-.333 2.998-.146.994.17 1.8.536 2.42 1.096.618.56.994 1.306 1.127 2.237h-2.292c-.08-.526-.264-.992-.55-1.396-.287-.404-.7-.714-1.24-.928a4.1 4.1 0 0 0-1.647-.215c-.628 0-1.136.142-1.52.424-.386.284-.578.7-.578 1.25 0 .42.106.758.32 1.012.215.255.58.486 1.095.696l1.242.525c1.01.428 1.765.98 2.268 1.654.502.673.754 1.536.754 2.59 0 1.042-.252 1.942-.756 2.7z" />
    </svg>
  ),
  'Tailwind CSS': (
    <svg className="h-4 w-4 fill-current text-[#38BDF8]" viewBox="0 0 24 24">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  'Stripe': (
    <svg className="h-4 w-4 fill-current text-[#635BFF]" viewBox="0 0 24 24">
      <path d="M13.962 8.885c0-1.355-1.112-1.852-2.594-1.852-2.254 0-4.086 1.002-4.086 1.002l-.746-2.688s2.007-.98 4.962-.98c3.96 0 6.643 1.83 6.643 5.482 0 4.195-3.667 5.17-5.748 5.86-2.128.706-2.525.992-2.525 1.57 0 .688.62 1.042 1.706 1.042 2.628 0 4.673-1.262 4.673-1.262l.808 2.705s-2.023 1.296-5.64 1.296c-3.87 0-6.102-1.815-6.102-5.01 0-4.14 3.738-5.112 5.922-5.834 1.954-.648 2.727-.927 2.727-1.333z" />
    </svg>
  ),
  'Sanity': (
    <svg className="h-4 w-4 fill-current text-[#F03E2F]" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S17.627 0 12 0zm0 18c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6z" />
    </svg>
  ),
  'Vercel': (
    <svg className="h-4 w-4 fill-current text-[#F5F0E8]" viewBox="0 0 24 24">
      <path d="M24 22.525H0L12 1.732l12 20.793z" />
    </svg>
  ),
  'Framer Motion': (
    <svg className="h-4 w-4 fill-current text-[#00c5ff]" viewBox="0 0 24 24">
      <path d="M0 0h12v12H0V0zm12 12h12v12H12V12zM0 12h12v12H0V12z" />
    </svg>
  ),
  'PostgreSQL': (
    <svg className="h-4 w-4 fill-current text-[#336791]" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 1.8-.6 3.47-1.6 4.82z" />
    </svg>
  ),
}

export function TechStack() {
  return (
    <section id="techstack" className="section-y relative overflow-hidden select-none">
      {/* Background radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            'radial-gradient(circle 500px at 50% 0%, rgba(201,168,76,0.03), transparent)',
        }}
      />

      <div className="container relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <FadeIn className="text-center max-w-2xl flex flex-col items-center mb-16">
          <SectionLabel>Technology Stack</SectionLabel>
          <h2 className="section-heading mt-2">
            The architect&apos;s suite.
          </h2>
          <p className="text-[var(--color-text-secondary)] text-sm md:text-base mt-4 max-w-lg leading-relaxed">
            Every layer of the application is optimized for modularity, strict type-safety, rapid deployment pipelines, and maximum page speeds.
          </p>
        </FadeIn>

        {/* Tech Badges wrap flex */}
        <FadeIn delay={100} className="w-full">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {TECH_STACK.map((tech) => {
              const icon = TECH_ICONS[tech.name] || (
                <span className="w-4 h-4 rounded-full bg-gold/30 flex items-center justify-center font-mono text-[9px] text-gold font-bold">
                  T
                </span>
              )

              return (
                <div
                  key={tech.name}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-obsidian-3 border border-gold/15 hover:border-gold hover:shadow-[0_0_25px_rgba(201,168,76,0.1)] transition-all duration-300 cursor-default select-none group"
                >
                  <span className="transition-transform duration-300 group-hover:scale-115">
                    {icon}
                  </span>
                  <span className="font-body font-medium text-sm text-[var(--color-text-secondary)] group-hover:text-[#F5F0E8] transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              )
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
