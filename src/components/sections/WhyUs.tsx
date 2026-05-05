'use client'

import { motion } from 'framer-motion'
import { FEATURES } from '@/lib/constants'
import { Icon } from '@/components/ui/Icon'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Check } from 'lucide-react'

const featureColors = ['#EC4899', '#D4AF37', '#10B981', '#3B82F6', '#F59E0B', '#8B5CF6']

export default function WhyUs() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">

      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.04] mb-6">
            <span className="text-[10px] sm:text-xs text-[#D4AF37] font-medium tracking-wider uppercase">Why Choose Us</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            The Party Mania <span className="text-gold-gradient">Difference</span>
          </h2>
          <p className="text-[#999] max-w-2xl mx-auto text-sm sm:text-base">
            We don&apos;t just decorate spaces — we create experiences your guests will remember forever.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {FEATURES.map((feature, i) => {
            const accent = featureColors[i % featureColors.length]
            return (
              <ScrollReveal key={feature.title} delay={i * 0.06}>
                <div
                  className="group relative p-5 sm:p-7 rounded-2xl border transition-all duration-500 hover:-translate-y-2"
                  style={{
                    background: `${accent}0A`,
                    borderColor: `${accent}25`,
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  {/* Top shimmer */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${accent}40, transparent)` }}
                  />

                  {/* Hover glow ring */}
                  <div
                    className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 -z-10"
                    style={{ background: `${accent}08` }}
                  />

                  {/* Number badge */}
                  <div
                    className="absolute top-5 sm:top-7 right-5 sm:right-7 text-3xl sm:text-4xl font-black opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500"
                    style={{ color: accent }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-all duration-500"
                    style={{
                      background: `${accent}15`,
                      borderColor: `${accent}25`,
                    }}
                  >
                    <Icon name={feature.icon} className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: accent }} />
                  </div>

                  <h3 className="font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-[#999999] leading-relaxed text-xs sm:text-sm">
                    {feature.description}
                  </p>

                  {/* Check indicator */}
                  <div className="flex items-center gap-2 mt-3 sm:mt-4 opacity-40 group-hover:opacity-100 transition-opacity duration-500" style={{ color: accent }}>
                    <Check className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">Included</span>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
