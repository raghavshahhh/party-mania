'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { TextReveal } from '@/components/ui/TextReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Counter } from '@/components/ui/Counter'
import { STATS, SITE_CONFIG } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[var(--color-bg)]" />
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-brand)]/[0.03] rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--color-brand)]/[0.02] rounded-full blur-[120px] animate-float-delayed" />
      </div>

      <div className="absolute top-20 left-[10%] w-2 h-2 bg-[var(--color-brand)]/30 rounded-full animate-float" />
      <div className="absolute top-40 right-[15%] w-1.5 h-1.5 bg-[var(--color-brand)]/20 rounded-full animate-float-delayed" />
      <div className="absolute bottom-32 left-[20%] w-1 h-1 bg-[var(--color-brand)]/25 rounded-full animate-float" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/[0.06] mb-8"
        >
          <span className="w-1.5 h-1.5 bg-[var(--color-brand)] rounded-full animate-pulse" />
          <span className="text-xs text-[var(--color-brand)] font-medium tracking-wider uppercase">
            #1 Decoration Service in Delhi NCR
          </span>
        </motion.div>

        <h1 className="font-bold mb-8 leading-[1.05] tracking-tight" style={{ fontSize: 'var(--text-4xl)' }}>
          <TextReveal className="text-white" delay={0.3}>
            We
          </TextReveal>{' '}
          <TextReveal className="text-gold-gradient" delay={0.4}>
            Decorate,
          </TextReveal>
          <br />
          <TextReveal className="text-white" delay={0.55}>
            You
          </TextReveal>{' '}
          <TextReveal className="text-gold-gradient" delay={0.65}>
            Celebrate!
          </TextReveal>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontSize: 'var(--text-lg)' }}
        >
          Premium balloon decorations, themed setups & custom event styling for
          birthdays, anniversaries, baby showers & more across {SITE_CONFIG.city}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-12"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[var(--color-brand)]">
                <Counter target={stat.value} suffix={stat.suffix} isDecimal={'isDecimal' in stat} />
              </div>
              <div className="text-xs text-[var(--color-text-tertiary)] mt-1.5 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/booking">
            <MagneticButton className="px-8 py-4 text-base bg-gradient-to-r from-[var(--color-brand-dark)] to-[var(--color-brand)] text-black font-bold rounded-full hover:shadow-xl hover:shadow-[var(--color-brand)]/25 transition-all duration-300">
              Book Your Event
            </MagneticButton>
          </Link>
          <Link href="/services">
            <MagneticButton className="px-8 py-4 text-base border border-[var(--color-brand)]/30 text-[var(--color-brand)] font-medium rounded-full hover:bg-[var(--color-brand)]/[0.08] transition-all duration-300">
              Explore Services
            </MagneticButton>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-[var(--color-brand)]/30 flex justify-center pt-2"
        >
          <div className="w-0.5 h-2 bg-[var(--color-brand)]/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
