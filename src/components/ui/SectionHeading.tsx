'use client'

import { motion } from 'framer-motion'
import { TextReveal } from './TextReveal'

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}

export function SectionHeading({ label, title, subtitle, align = 'center' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`${alignClass} mb-16`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-block text-[var(--color-brand)] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
      >
        {label}
      </motion.span>
      <h2 className="font-bold leading-[1.1]" style={{ fontSize: 'var(--text-3xl)' }}>
        <TextReveal>{title}</TextReveal>
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-4 text-[var(--color-text-secondary)] max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}
          style={{ fontSize: 'var(--text-base)' }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
