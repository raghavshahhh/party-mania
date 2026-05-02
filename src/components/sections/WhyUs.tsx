'use client'

import { motion } from 'framer-motion'
import { FEATURES } from '@/lib/constants'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'
import { Check } from 'lucide-react'

export default function WhyUs() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          label="Why Choose Us"
          title="The Party Mania Difference"
          subtitle="We don't just decorate spaces — we create experiences that your guests will remember forever."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0.4, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-7 bg-[#111111] rounded-2xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-500"
              data-hover
            >
              {/* Top shimmer */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Number badge */}
              <div className="absolute top-7 right-7 text-4xl font-black text-[#D4AF37]/[0.04] group-hover:text-[#D4AF37]/[0.08] transition-colors duration-500">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/15 flex items-center justify-center mb-5 group-hover:bg-[#D4AF37]/15 group-hover:scale-110 transition-all duration-500">
                <Icon name={feature.icon as any} className="w-5 h-5 text-[#D4AF37]" />
              </div>

              <h3 className="font-semibold text-white mb-3 text-base">
                {feature.title}
              </h3>
              <p className="text-[#999999] leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Check indicator */}
              <div className="flex items-center gap-2 mt-4 text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors duration-500">
                <Check className="w-3.5 h-3.5" />
                <span className="text-xs font-medium">Included</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
