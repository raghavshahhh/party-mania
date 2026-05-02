'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SERVICE_CATEGORIES } from '@/lib/constants'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'
import { ArrowRight, BadgeIndianRupee } from 'lucide-react'

export default function Services() {
  return (
    <section className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="What We Offer"
          title="Our Decoration Services"
          subtitle="From intimate birthday celebrations to grand functions — we make every event unforgettable with premium decorations tailored to your vision."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {SERVICE_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0.4, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/services?category=${category.id}`}
                className="group relative block p-6 lg:p-7 bg-[#0d0d0d] rounded-2xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/35 transition-all duration-500 overflow-hidden h-full"
                data-hover
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top shimmer line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D4AF37]/15 transition-all duration-500">
                      <Icon name={category.icon as any} className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div className="flex items-center gap-1 text-[#D4AF37]">
                      <BadgeIndianRupee className="w-3 h-3" />
                      <span className="text-xs font-semibold">
                        {'startingPrice' in category ? `${(category as any).startingPrice.toLocaleString()}+` : ''}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-[#F5E6B8] transition-colors duration-300">
                    {category.label}
                  </h3>

                  <p className="text-xs text-[#737373] leading-relaxed line-clamp-2 mb-4">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors duration-300">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#D4AF37] border border-[#D4AF37]/25 rounded-full hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-300"
            data-hover
          >
            View All Services & Pricing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
