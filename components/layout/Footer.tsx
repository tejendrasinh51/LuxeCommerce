import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const workLinks = [
    { label: 'Case Studies', href: '#challenge' },
    { label: 'Services', href: '#solution' },
    { label: 'About', href: '#results' },
    { label: 'Contact', href: '#contact' },
  ]

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Use', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ]

  return (
    <footer className="bg-[#111113] border-t border-gold/15 pt-20 pb-12 relative overflow-hidden select-none">
      {/* Background Subtle Gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 100%, rgba(201,168,76,0.03), transparent)',
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-baseline gap-1.5 w-fit">
              <span className="font-display text-2xl font-light tracking-[0.05em] text-[#F5F0E8]">
                LUXE
              </span>
              <span className="font-body text-[0.65rem] font-medium tracking-[0.3em] text-[var(--color-text-secondary)] uppercase">
                COMMERCE
              </span>
            </Link>
            <p className="text-[var(--color-text-secondary)] text-sm max-w-sm mt-2 leading-relaxed">
              A premium, high-converting enterprise e-commerce case study. Re-engineering performance, layout design, and revenue growth.
            </p>
          </div>

          {/* Nav Links Col */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs tracking-widest text-[#F5F0E8] uppercase relative pb-2 w-fit">
              Work
              <span className="absolute bottom-0 left-0 w-8 h-px bg-gold" />
            </h4>
            <ul className="flex flex-col gap-3 mt-2">
              {workLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-text-secondary)] hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links Col */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs tracking-widest text-[#F5F0E8] uppercase relative pb-2 w-fit">
              Legal
              <span className="absolute bottom-0 left-0 w-8 h-px bg-gold" />
            </h4>
            <ul className="flex flex-col gap-3 mt-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-text-secondary)] hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--color-text-tertiary)] tracking-wider">
          <p>© {currentYear} Luxe Commerce. All rights reserved.</p>
          <p className="hover:text-gold transition-colors duration-200 cursor-default">
            CRAFTED WITH PRECISION
          </p>
        </div>
      </div>
    </footer>
  )
}
