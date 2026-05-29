'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number          // ms, default 0
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number       // px, default 24
  duration?: number       // s, default 0.6
  className?: string
  once?: boolean          // default true
}

export function FadeIn({
  children, delay = 0, direction = 'up',
  distance = 24, duration = 0.6, className, once = true
}: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-10% 0px' })

  const dirMap = {
    up:    { y: distance },
    down:  { y: -distance },
    left:  { x: distance },
    right: { x: -distance },
    none:  {},
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...dirMap[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
