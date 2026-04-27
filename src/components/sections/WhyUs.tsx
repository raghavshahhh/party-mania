'use client'

import { motion } from 'framer-motion'
import { FEATURES } from '@/lib/constants'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'

export default function WhyUs() {
  return (
    <section className="section-padding bg-[var(--color-bg)] gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Why Choose Us"
          title="The Party Mania Difference"
          subtitle="We don't just decorate spaces — we create experiences that your guests will remember forever."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-7 bg-[var(--color-surface-elevated)] rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-500"
              data-hover
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-11 h-11 rounded-lg bg-[var(--color-brand)]/8 border border-[var(--color-brand)]/15 flex items-center justify-center mb-5 group-hover:bg-[var(--color-brand)]/12 transition-colors duration-500">
                <Icon name={feature.icon as any} className="w-5 h-5 text-[var(--color-brand)]" />
              </div>

              <h3 className="font-semibold text-white mb-2.5" style={{ fontSize: 'var(--text-base)' }}>
                {feature.title}
              </h3>
              <p className="text-[var(--color-text-tertiary)] leading-relaxed" style={{ fontSize: 'var(--text-sm)' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
