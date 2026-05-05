'use client'

import { motion } from 'framer-motion'
import { useSimpleMotion } from '@/hooks/useReducedMotion'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  blur?: boolean
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  blur = true,
  direction = 'up',
}: ScrollRevealProps) {
  const simple = useSimpleMotion()

  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  }

  const offset = directionOffset[direction]

  // Low-end: skip blur filter, reduce transform distance, faster duration
  const yOffset = simple ? 15 : offset.y
  const xOffset = simple ? offset.x * 0.4 : offset.x
  const shouldBlur = blur && !simple
  const duration = simple ? 0.4 : 0.8

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
        x: xOffset,
        filter: shouldBlur ? 'blur(8px)' : 'blur(0px)',
        scale: simple ? 1 : 0.98,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        filter: 'blur(0px)',
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay: simple ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
        ...(shouldBlur ? { filter: { duration: 0.6, delay: delay + 0.1 } } : {}),
      }}
      className={className}
      style={{ willChange: simple ? 'opacity' : 'opacity, transform, filter' }}
    >
      {children}
    </motion.div>
  )
}
