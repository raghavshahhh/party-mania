'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SERVICE_CATEGORIES, SERVICE_COLORS } from '@/lib/constants'
import { Icon } from '@/components/ui/Icon'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ArrowRight, BadgeIndianRupee } from 'lucide-react'

export default function Services() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.04] mb-6">
            <span className="text-[10px] sm:text-xs text-[#D4AF37] font-medium tracking-wider uppercase">What We Offer</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Our Decoration <span className="text-gold-gradient">Services</span>
          </h2>
          <p className="text-[#999] max-w-2xl mx-auto text-sm sm:text-base">
            From intimate birthday celebrations to grand functions — we make every event unforgettable.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {SERVICE_CATEGORIES.map((category, i) => {
            const colors = SERVICE_COLORS[category.id] || SERVICE_COLORS.custom
            return (
              <ScrollReveal key={category.id} delay={i * 0.05}>
                <Link
                  href={`/services?category=${category.id}`}
                  className="group relative block p-5 sm:p-6 lg:p-7 rounded-2xl border transition-all duration-500 overflow-hidden h-full hover:-translate-y-2"
                  style={{
                    background: colors.bg,
                    borderColor: colors.border,
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(ellipse at 50% 0%, ${colors.glow}, transparent 70%)` }}
                  />

                  {/* Top shimmer line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${colors.text}40, transparent)` }}
                  />

                  {/* Hover blur glow ring */}
                  <div className="absolute -inset-2 rounded-3xl bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/[0.02] blur-xl transition-all duration-700 -z-10" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4 sm:mb-5">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center group-hover:scale-110 transition-all duration-500"
                        style={{
                          background: `${colors.text}15`,
                          borderColor: `${colors.text}30`,
                        }}
                      >
                        <Icon name={category.icon} className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.text }} />
                      </div>
                      <div className="flex items-center gap-1" style={{ color: colors.text }}>
                        <BadgeIndianRupee className="w-3 h-3" />
                        <span className="text-xs font-semibold">
                          {category.startingPrice.toLocaleString()}+
                        </span>
                      </div>
                    </div>

                    <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
                      {category.label}
                    </h3>

                    <p className="text-xs text-[#737373] leading-relaxed line-clamp-2 mb-4">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div
                        className="flex items-center gap-1 text-xs opacity-50 group-hover:opacity-100 transition-all duration-300"
                        style={{ color: colors.text }}
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.3} className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#D4AF37] border border-[#D4AF37]/25 rounded-full hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-300"
          >
            View All Services & Pricing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
