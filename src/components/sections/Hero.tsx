'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { TextReveal } from '@/components/ui/TextReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Counter } from '@/components/ui/Counter'
import { STATS, SITE_CONFIG } from '@/lib/constants'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#D4AF37]/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Floating dots */}
      <div className="absolute top-24 left-[12%] w-2 h-2 bg-[#D4AF37]/30 rounded-full animate-float" />
      <div className="absolute top-44 right-[18%] w-1.5 h-1.5 bg-[#D4AF37]/20 rounded-full animate-float-delayed" />
      <div className="absolute bottom-36 left-[22%] w-1 h-1 bg-[#D4AF37]/25 rounded-full animate-float" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.08] mb-8"
        >
          <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse" />
          <span className="text-xs text-[#D4AF37] font-medium tracking-wider uppercase">
            #1 Decoration Service in Delhi NCR
          </span>
        </motion.div>

        {/* Main Heading */}
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

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.9}
          className="text-[#b3b3b3] max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontSize: 'var(--text-lg)' }}
        >
          Premium balloon decorations, themed setups & custom event styling for
          birthdays, anniversaries, baby showers & more across {SITE_CONFIG.city}
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.1}
          className="flex flex-wrap justify-center gap-8 sm:gap-14 mb-12"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                <Counter target={stat.value} suffix={stat.suffix} isDecimal={'isDecimal' in stat} />
              </div>
              <div className="text-xs text-[#737373] mt-1.5 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.3}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/booking">
            <MagneticButton className="px-8 py-4 text-base bg-gradient-to-r from-[#B8960C] to-[#D4AF37] text-black font-bold rounded-full hover:shadow-xl hover:shadow-[#D4AF37]/25 transition-all duration-300">
              Book Your Event
            </MagneticButton>
          </Link>
          <Link href="/services">
            <MagneticButton className="px-8 py-4 text-base border border-[#D4AF37]/30 text-[#D4AF37] font-medium rounded-full hover:bg-[#D4AF37]/10 transition-all duration-300">
              Explore Services
            </MagneticButton>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-[#D4AF37]/30 flex justify-center pt-2"
        >
          <div className="w-0.5 h-2 bg-[#D4AF37]/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
