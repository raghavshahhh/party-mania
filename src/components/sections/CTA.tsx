'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SITE_CONFIG } from '@/lib/constants'
import { TextReveal } from '@/components/ui/TextReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'

export default function CTA() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06] mb-8">
          <span className="text-xs text-[#D4AF37] font-medium">50% Advance &bull; Rest on Event Day</span>
        </div>

        <h2 className="font-bold mb-5 leading-[1.1]" style={{ fontSize: 'var(--text-3xl)' }}>
          <TextReveal>Ready to Make Your</TextReveal>
          <br />
          <TextReveal className="text-gold-gradient" delay={0.2}>
            Event Unforgettable?
          </TextReveal>
        </h2>

        <p className="text-[#b3b3b3] mb-10 max-w-lg mx-auto leading-relaxed text-base">
          Book your decoration now and let us transform your venue into
          something magical. Simple booking, transparent pricing, stunning results.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/booking">
            <MagneticButton className="px-8 py-4 text-base bg-gradient-to-r from-[#B8960C] to-[#D4AF37] text-black font-bold rounded-full hover:shadow-xl hover:shadow-[#D4AF37]/25 transition-all duration-300">
              Book Now
            </MagneticButton>
          </Link>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagneticButton className="px-8 py-4 text-base border border-emerald-500/30 text-emerald-400 font-medium rounded-full hover:bg-emerald-500/10 transition-all duration-300">
              WhatsApp Us
            </MagneticButton>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
