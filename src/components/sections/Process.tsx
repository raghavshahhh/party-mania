'use client'

import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '@/lib/constants'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function Process() {
  return (
    <section className="section-padding bg-[var(--color-surface)]">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="How It Works"
          title="4 Simple Steps to Your Dream Event"
          subtitle="From your first message to the final celebration — here's how we make magic happen."
        />

        <div className="relative">
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-brand)]/40 via-[var(--color-brand)]/20 to-transparent hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-6 items-start group"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/25 flex items-center justify-center group-hover:bg-[var(--color-brand)]/15 group-hover:border-[var(--color-brand)]/40 transition-all duration-500">
                    <span className="text-sm font-bold text-[var(--color-brand)]">{step.step}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="font-semibold text-white mb-2" style={{ fontSize: 'var(--text-lg)' }}>
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed" style={{ fontSize: 'var(--text-sm)' }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
