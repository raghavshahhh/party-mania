'use client'

import { motion } from 'framer-motion'

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
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  }

  const offset = directionOffset[direction]

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...offset,
        filter: blur ? 'blur(8px)' : 'blur(0px)',
        scale: 0.98,
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
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
        filter: { duration: 0.6, delay: delay + 0.1 },
      }}
      className={className}
      style={{ willChange: 'opacity, transform, filter' }}
    >
      {children}
    </motion.div>
  )
}
