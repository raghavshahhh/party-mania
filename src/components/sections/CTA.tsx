'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SITE_CONFIG } from '@/lib/constants'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ArrowRight, Phone, Shield } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" />

      <ScrollReveal blur className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.04]">
            <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] sm:text-xs text-[#D4AF37] font-medium">50% Advance Only</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-emerald-500/15 bg-emerald-500/[0.04]">
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
            <span className="text-[10px] sm:text-xs text-emerald-400 font-medium">24/7 Support</span>
          </div>
        </div>

        <h2 className="font-bold mb-4 sm:mb-5 leading-[1.1]" style={{ fontSize: 'var(--text-3xl)' }}>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Ready to Make Your
          </motion.span>
          <motion.span
            className="block mt-1 sm:mt-2 text-gold-gradient"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Event Unforgettable?
          </motion.span>
        </h2>

        <p className="text-[#d4d4d4] mb-8 sm:mb-10 max-w-lg mx-auto leading-relaxed text-sm sm:text-base">
          Book your decoration now and let us transform your venue into
          something magical. Simple booking, transparent pricing, stunning results.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Link href="/booking" className="block w-full sm:w-auto">
            <MagneticButton className="group w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-[#B8960C] to-[#D4AF37] text-black font-bold rounded-full hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-500">
              Book Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </Link>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full sm:w-auto"
          >
            <MagneticButton className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base border border-emerald-500/30 text-emerald-400 font-medium rounded-full hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-500">
              💬 WhatsApp Us
            </MagneticButton>
          </a>
        </div>

        {/* Bottom reassurance */}
        <p className="text-[10px] sm:text-xs text-[#737373]">
          No hidden charges • Free cancellation up to 48 hours • Serving all of {SITE_CONFIG.city}
        </p>
      </ScrollReveal>
    </section>
  )
}
