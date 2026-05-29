'use client'
import { useInView, useMotionValue, useTransform, animate, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
  duration = 2,
}: {
  target: number
  prefix?: string
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const count = useMotionValue(0)
  
  const isDecimal = target % 1 !== 0

  const rounded = useTransform(count, (v) => {
    if (isDecimal) {
      return v.toFixed(1)
    }
    return Math.round(v).toString()
  })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(count, target, { duration, ease: 'easeOut' })
    return controls.stop
  }, [isInView, count, target, duration])

  return (
    <span ref={ref} className="inline-flex select-none">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}
