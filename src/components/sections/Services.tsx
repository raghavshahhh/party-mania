'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SERVICE_CATEGORIES } from '@/lib/constants'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'
import { ArrowRight } from 'lucide-react'

export default function Services() {
  return (
    <section className="section-padding bg-[#0a0a0a]">
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#D4AF37]/15 transition-all duration-500">
                    <Icon name={category.icon as any} className="w-5 h-5 text-[#D4AF37]" />
                  </div>

                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-[#F5E6B8] transition-colors duration-300">
                    {category.label}
                  </h3>

                  <p className="text-xs text-[#737373] leading-relaxed line-clamp-2 mb-4">
                    {category.description}
                  </p>

                  <div className="flex items-center gap-1 text-xs text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors duration-300">
                    <span>View</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
