'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Counter } from '@/components/ui/Counter'
import { STATS, SITE_CONFIG, SERVICE_CATEGORIES } from '@/lib/constants'
import { useSimpleMotion } from '@/hooks/useReducedMotion'
import { Sparkles, ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

const fadeUpSimple = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function Hero() {
  const simple = useSimpleMotion()
  const variants = simple ? fadeUpSimple : fadeUp

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background effects — hidden on low-end */}
      {!simple && (
        <>
          <div className="absolute top-[10%] left-[15%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#D4AF37]/[0.04] rounded-full blur-[80px] sm:blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-[15%] right-[10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#D4AF37]/[0.03] rounded-full blur-[100px] sm:blur-[150px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} />
          <div className="absolute top-20 left-[10%] w-2 h-2 bg-[#D4AF37]/40 rounded-full animate-float" />
          <div className="absolute top-32 right-[15%] w-1.5 h-1.5 bg-[#D4AF37]/25 rounded-full animate-float-delayed" />
          <div className="absolute bottom-40 left-[20%] w-1 h-1 bg-[#D4AF37]/30 rounded-full animate-float" />
        </>
      )}

      {/* Decorative corner lines — desktop only */}
      <div className="hidden sm:block absolute top-0 left-0 w-32 h-32 border-t border-l border-[#D4AF37]/10" />
      <div className="hidden sm:block absolute bottom-0 right-0 w-32 h-32 border-b border-r border-[#D4AF37]/10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left — Text */}
          <div>
            {/* Badge */}
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06] backdrop-blur-sm mb-6 sm:mb-8"
            >
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37]" />
              <span className="text-[10px] sm:text-xs text-[#D4AF37] font-medium tracking-[0.15em] uppercase">
                #1 Decoration Service in {SITE_CONFIG.city}
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="font-bold mb-4 sm:mb-6 leading-[1.1] tracking-tight" style={{ fontSize: 'var(--text-5xl)' }}>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: simple ? 10 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: simple ? 0.3 : 0.8, delay: simple ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <span className="text-white">We </span>
                <span className="text-gold-gradient">Decorate,</span>
              </motion.span>
              <motion.span
                className="block mt-1 sm:mt-2"
                initial={{ opacity: 0, y: simple ? 10 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: simple ? 0.3 : 0.8, delay: simple ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <span className="text-white">You </span>
                <span className="text-gold-gradient">Celebrate!</span>
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p
              variants={variants}
              initial="hidden"
              animate="visible"
              custom={0.9}
              className="text-[#d4d4d4] max-w-xl mb-8 sm:mb-10 leading-relaxed"
              style={{ fontSize: 'var(--text-lg)' }}
            >
              Premium balloon decorations, themed setups & custom event styling for birthdays, anniversaries, baby showers & more across {SITE_CONFIG.city}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              custom={1.1}
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 mb-10 sm:mb-12"
            >
              <Link href="/booking" className="block">
                <MagneticButton className="group w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-[#B8960C] to-[#D4AF37] text-black font-bold rounded-full hover:shadow-2xl hover:shadow-[#D4AF37]/40 transition-all duration-500 shadow-lg shadow-[#D4AF37]/20">
                  Book Your Event
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </Link>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <MagneticButton className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base border border-emerald-500/40 text-emerald-400 font-medium rounded-full hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-500">
                  💬 WhatsApp Us
                </MagneticButton>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              custom={1.3}
              className="flex flex-wrap items-center justify-start gap-x-6 gap-y-3 sm:gap-x-0 sm:gap-y-0 max-w-3xl"
            >
              {STATS.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-4 sm:gap-6">
                  <div className="text-center sm:text-left">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#D4AF37] tabular-nums">
                      <Counter target={stat.value} suffix={stat.suffix} isDecimal={'isDecimal' in stat} />
                    </div>
                    <div className="text-[9px] sm:text-[10px] md:text-xs text-[#999999] mt-0.5 tracking-wider uppercase">
                      {stat.label}
                    </div>
                  </div>
                  {i < STATS.length - 1 && (
                    <div className="hidden sm:block w-px h-8 bg-[#D4AF37]/15" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image (desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: simple ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: simple ? 0.3 : 1, delay: simple ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#D4AF37]/15">
              <Image
                src="/images/gallery/g1.jpg"
                alt="Premium birthday decoration by Party Mania"
                fill
                className="object-cover"
                sizes="50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/60 backdrop-blur-md rounded-2xl border border-[#D4AF37]/20">
                <p className="text-sm font-semibold text-white mb-1">Starting from ₹2,999</p>
                <p className="text-xs text-[#999]">8+ decoration categories available</p>
              </div>
            </div>
            {!simple && (
              <div className="absolute -inset-4 bg-[#D4AF37]/[0.06] rounded-3xl blur-2xl -z-10" />
            )}
          </motion.div>
        </div>

        {/* Quick service tags */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          custom={1.5}
          className="flex flex-wrap justify-center lg:justify-start gap-2 mt-10 sm:mt-14"
        >
          {SERVICE_CATEGORIES.slice(0, 6).map((cat) => (
            <Link
              key={cat.id}
              href={`/services?category=${cat.id}`}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs text-[#999999] border border-[#1a1a1a] rounded-full hover:border-[#D4AF37]/30 hover:text-[#D4AF37] hover:bg-[#D4AF37]/[0.04] transition-all duration-300"
            >
              {cat.label}
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator — desktop only, hidden on low-end */}
      {!simple && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
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
      )}
    </section>
  )
}
