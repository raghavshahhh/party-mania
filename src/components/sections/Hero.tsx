'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { TextReveal } from '@/components/ui/TextReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Counter } from '@/components/ui/Counter'
import { STATS, SITE_CONFIG, SERVICE_CATEGORIES } from '@/lib/constants'
import { Sparkles, ArrowRight } from 'lucide-react'

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
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,175,55,0.06),transparent_50%)]" />
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-[#D4AF37]/[0.04] rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[15%] right-[10%] w-[600px] h-[600px] bg-[#D4AF37]/[0.03] rounded-full blur-[150px]" />

        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute top-20 left-[10%] w-2 h-2 bg-[#D4AF37]/40 rounded-full animate-float" />
      <div className="absolute top-32 right-[15%] w-1.5 h-1.5 bg-[#D4AF37]/25 rounded-full animate-float-delayed" />
      <div className="absolute bottom-40 left-[20%] w-1 h-1 bg-[#D4AF37]/30 rounded-full animate-float" />
      <div className="absolute top-[60%] right-[8%] w-2.5 h-2.5 bg-[#D4AF37]/15 rounded-full animate-float-delayed" />
      <div className="absolute bottom-[25%] left-[45%] w-1 h-1 bg-[#F5E6B8]/20 rounded-full animate-float" />

      {/* Decorative corner lines */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-[#D4AF37]/10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-[#D4AF37]/10" />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-24 pb-20">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06] backdrop-blur-sm mb-10"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-xs text-[#D4AF37] font-medium tracking-[0.15em] uppercase">
            #1 Decoration Service in {SITE_CONFIG.city}
          </span>
        </motion.div>

        {/* Main Heading */}
        <h1 className="font-bold mb-8 leading-[1.05] tracking-tight" style={{ fontSize: 'var(--text-5xl)' }}>
          <TextReveal className="text-white" delay={0.3}>
            We
          </TextReveal>{' '}
          <TextReveal className="text-gold-gradient" delay={0.4}>
            Decorate,
          </TextReveal>
          <br className="hidden sm:block" />
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
          className="text-[#b3b3b3] max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontSize: 'var(--text-lg)' }}
        >
          Premium balloon decorations, themed setups & custom event styling for
          birthdays, anniversaries, baby showers & more across {SITE_CONFIG.city}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.1}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link href="/booking">
            <MagneticButton className="group px-9 py-4 text-base bg-gradient-to-r from-[#B8960C] to-[#D4AF37] text-black font-bold rounded-full hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-500">
              Book Your Event
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </Link>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagneticButton className="px-9 py-4 text-base border border-emerald-500/30 text-emerald-400 font-medium rounded-full hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-500">
              💬 WhatsApp Us
            </MagneticButton>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.3}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 sm:divide-x sm:divide-[#D4AF37]/15 max-w-3xl mx-auto"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center px-4">
              <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                <Counter target={stat.value} suffix={stat.suffix} isDecimal={'isDecimal' in stat} />
              </div>
              <div className="text-xs text-[#737373] mt-2 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Quick service tags */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.5}
          className="flex flex-wrap justify-center gap-2 mt-12"
        >
          {SERVICE_CATEGORIES.slice(0, 6).map((cat) => (
            <Link
              key={cat.id}
              href={`/services?category=${cat.id}`}
              className="px-4 py-2 text-xs text-[#999999] border border-[#1a1a1a] rounded-full hover:border-[#D4AF37]/30 hover:text-[#D4AF37] hover:bg-[#D4AF37]/[0.04] transition-all duration-300"
            >
              {cat.label}
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-[#737373] tracking-[0.2em] uppercase">Scroll</span>
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
