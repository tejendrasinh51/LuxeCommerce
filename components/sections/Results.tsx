'use client'
import { motion } from 'framer-motion'
import { FadeIn } from '@/components/motion/FadeIn'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { STATS } from '@/lib/constants'

export function Results() {
  const cwvData = [
    {
      metric: 'LCP',
      name: 'Largest Contentful Paint',
      value: '0.9s',
      percent: '90%',
      desc: 'Sub-second structural load speed',
    },
    {
      metric: 'INP',
      name: 'Interaction to Next Paint',
      value: '45ms',
      percent: '85%',
      desc: 'Ultra-responsive click interactions',
    },
    {
      metric: 'CLS',
      name: 'Cumulative Layout Shift',
      value: '0.02',
      percent: '98%',
      desc: 'Flawless structural layout stability',
    },
  ]

  return (
    <section id="results" className="section-y relative overflow-hidden select-none">
      {/* Background Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,168,76,0.06), transparent)',
        }}
      />

      <div className="container relative z-10">
        {/* Section Heading */}
        <FadeIn className="text-center max-w-3xl mx-auto flex flex-col items-center mb-16">
          <SectionLabel>The Results</SectionLabel>
          <h2 className="section-heading mt-2">
            Numbers that drive growth.
          </h2>
          <p className="text-[var(--color-text-secondary)] text-base mt-4 max-w-xl">
            A conversion rate optimization (CRO) strategy and hyper-performant stack achieved immediate, tangible uplifts across every core business metric.
          </p>
        </FadeIn>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {STATS.map((stat, idx) => (
            <FadeIn key={stat.label} delay={idx * 100}>
              <div
                className="card p-8 lg:p-10 animate-glow"
                style={{ animationDelay: `${idx}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[50px] pointer-events-none" />
                
                <p className="font-display font-semibold text-5xl lg:text-7xl leading-none text-gold tracking-tighter">
                  <AnimatedCounter
                    target={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2}
                  />
                </p>
                <h4 className="mt-6 text-[#F5F0E8] font-medium text-lg tracking-wide">
                  {stat.label}
                </h4>
                <p className="mt-2 text-[var(--color-text-tertiary)] text-xs leading-relaxed font-body">
                  {stat.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Core Web Vitals Panel */}
        <FadeIn delay={300}>
          <div className="card p-8 lg:p-12 border border-gold/15 bg-obsidian-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold/3 blur-[120px] pointer-events-none" />
            
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gold/10 pb-6 gap-2">
                <h3 className="font-display text-xl md:text-2xl text-[#F5F0E8] font-light tracking-wide">
                  Core Web Vitals — <em className="font-display italic text-gold-light">Post-Launch</em>
                </h3>
                <span className="font-mono text-[10px] tracking-widest text-emerald-400 uppercase flex items-center gap-1.5 bg-[#18181C] border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  All Passing (Good)
                </span>
              </div>

              {/* CWV Bars */}
              <div className="flex flex-col gap-8 mt-2">
                {cwvData.map((cwv) => (
                  <div key={cwv.metric} className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                    {/* Metric Label */}
                    <div className="md:col-span-3 flex items-baseline gap-2">
                      <span className="font-mono text-sm font-semibold text-gold tracking-wide">
                        {cwv.metric}
                      </span>
                      <span className="text-xs text-[var(--color-text-secondary)] font-body">
                        ({cwv.name})
                      </span>
                    </div>

                    {/* Animated Bar Graph */}
                    <div className="md:col-span-6">
                      <div className="w-full h-2.5 bg-obsidian-3 border border-gold/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: cwv.percent }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-gold-dim to-gold rounded-full"
                        />
                      </div>
                    </div>

                    {/* Metric Value & Grade */}
                    <div className="md:col-span-3 flex items-center justify-between">
                      <span className="font-mono text-sm font-semibold text-[#F5F0E8]">
                        {cwv.value}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-emerald-400" />
                        Good
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
