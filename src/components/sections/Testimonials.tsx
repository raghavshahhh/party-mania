'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="section-padding bg-[var(--color-bg)] gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Client Love"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it — here's what real clients have to say about their Party Mania experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.slice(0, 3).map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-7 bg-[var(--color-surface-elevated)] rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-500 group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[var(--color-brand)]/10 group-hover:text-[var(--color-brand)]/20 transition-colors duration-500" />

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[var(--color-brand)] text-[var(--color-brand)]" />
                ))}
              </div>

              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6" style={{ fontSize: 'var(--text-sm)' }}>
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-brand)]/15 border border-[var(--color-brand)]/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-[var(--color-brand)]">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{testimonial.name}</p>
                  <p className="text-xs text-[var(--color-text-tertiary)]">
                    {testimonial.event} • {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.slice(3).map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-7 bg-[var(--color-surface-elevated)] rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-500 group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[var(--color-brand)]/10 group-hover:text-[var(--color-brand)]/20 transition-colors duration-500" />

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[var(--color-brand)] text-[var(--color-brand)]" />
                ))}
              </div>

              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6" style={{ fontSize: 'var(--text-sm)' }}>
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-brand)]/15 border border-[var(--color-brand)]/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-[var(--color-brand)]">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{testimonial.name}</p>
                  <p className="text-xs text-[var(--color-text-tertiary)]">
                    {testimonial.event} • {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
