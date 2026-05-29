'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      // Simple active link hash tracking
      const sections = ['challenge', 'solution', 'results', 'contact']
      const scrollPos = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveHash(`#${section}`)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Run initially
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled
            ? 'bg-[#0A0A0B]/80 backdrop-blur-md border-b border-gold/15 py-4'
            : 'bg-transparent border-b border-transparent py-6'
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo Wordmark */}
          <Link href="/" className="group flex items-baseline gap-1.5 select-none">
            <span className="font-display text-2xl font-light tracking-[0.05em] text-[#F5F0E8] group-hover:text-gold transition-colors duration-300">
              LUXE
            </span>
            <span className="font-body text-[0.65rem] font-medium tracking-[0.3em] text-[var(--color-text-secondary)] uppercase">
              COMMERCE
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeHash === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative py-1 text-sm font-normal tracking-[0.04em] text-[var(--color-text-secondary)] hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold origin-center"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button
              variant="secondary"
              size="sm"
              href="#contact"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden p-2 text-[var(--color-text-secondary)] hover:text-[#F5F0E8] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#0A0A0B] pt-28 px-6 flex flex-col justify-between pb-12 md:hidden"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                background:
                  'radial-gradient(circle 400px at 50% 20%, rgba(201,168,76,0.08), transparent)',
              }}
            />

            <motion.nav
              initial="closed"
              animate="open"
              variants={{
                closed: {},
                open: { transition: { staggerChildren: 0.1 } },
              }}
              className="flex flex-col gap-6 relative z-10"
            >
              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.label}
                  variants={{
                    closed: { opacity: 0, x: -20 },
                    open: { opacity: 1, x: 0 },
                  }}
                  transition={{ ease: 'easeOut' }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-4xl italic text-[var(--color-text-primary)] hover:text-gold transition-colors block py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex flex-col gap-6 relative z-10"
            >
              <Button
                variant="primary"
                size="lg"
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                icon={<ArrowRight className="h-5 w-5" />}
                className="w-full"
              >
                Start a Project
              </Button>
              <div className="text-center text-xs font-mono text-[var(--color-text-tertiary)] tracking-widest uppercase">
                LUXE COMMERCE · 2026
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
