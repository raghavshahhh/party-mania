'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p'
}

export function TextReveal({ children, className = '', delay = 0, as = 'span' }: TextRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const words = children.split(' ')

  const Component = motion[as] as typeof motion.span

  return (
    <Component ref={ref} className={`${className} inline`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-visible mr-[0.25em] last:mr-0 relative" style={{ paddingBottom: '0.1em' }}>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: '100%' }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  )
}
