'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { SERVICE_CATEGORIES, PRICING_PACKAGES, SITE_CONFIG } from '@/lib/constants'
import { Icon, type IconName } from '@/components/ui/Icon'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ArrowRight, Check, BadgeIndianRupee, Sparkles } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

interface PricingPackage {
  name: string
  price: number
  features: string[]
}

function PricingCard({ pkg, category, isPopular }: { pkg: PricingPackage; category: string; isPopular: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`relative p-5 sm:p-7 rounded-2xl border transition-all duration-500 ${
        isPopular
          ? 'bg-[#111] border-[#D4AF37]/40 scale-[1.02] shadow-lg shadow-[#D4AF37]/10'
          : 'bg-[#0d0d0d] border-[#D4AF37]/10 hover:border-[#D4AF37]/25'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 bg-gradient-to-r from-[#B8960C] to-[#D4AF37] text-black text-[10px] sm:text-xs font-bold rounded-full">
          Most Popular
        </div>
      )}

      <h3 className="text-base sm:text-lg font-bold text-white mb-2">{pkg.name}</h3>

      <div className="flex items-baseline gap-1 mb-5 sm:mb-6">
        <BadgeIndianRupee className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37]" />
        <span className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">{pkg.price.toLocaleString()}</span>
        <span className="text-[10px] sm:text-xs text-[#737373]">onwards</span>
      </div>

      <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
        {pkg.features.map((feature: string, i: number) => (
          <div key={i} className="flex items-start gap-2 sm:gap-3">
            <Check className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
            <span className="text-xs sm:text-sm text-[#d4d4d4]">{feature}</span>
          </div>
        ))}
      </div>

      <Link href={`/booking?service=${category}&package=${pkg.name.toLowerCase()}`} className="block">
        <button
          className={`w-full py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
            isPopular
              ? 'bg-gradient-to-r from-[#B8960C] to-[#D4AF37] text-black hover:shadow-lg hover:shadow-[#D4AF37]/25'
              : 'border border-[#D4AF37]/25 text-[#D4AF37] hover:bg-[#D4AF37]/10'
          }`}
        >
          Select Package
        </button>
      </Link>
    </motion.div>
  )
}

function ServicesContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') || 'birthday'
  const [activeCategory, setActiveCategory] = useState(initialCategory)

  type ServiceItem = {
    id: string
    label: string
    description: string
    icon: IconName
    startingPrice: number
    image: string
    features: readonly string[]
    longDescription: string
  }
  const activeService: ServiceItem = (SERVICE_CATEGORIES.find(s => s.id === activeCategory) ?? SERVICE_CATEGORIES[0]) as ServiceItem
  const activePricing = (PRICING_PACKAGES as unknown as Record<string, PricingPackage[]>)[activeCategory]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-10 sm:pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.04] mb-5 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37]" />
              <span className="text-[10px] sm:text-xs text-[#D4AF37] font-medium tracking-wider uppercase">Our Services</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Decoration <span className="text-gold-gradient">Packages</span>
            </h1>
            <p className="text-[#999] max-w-2xl mx-auto text-sm sm:text-lg">
              Choose from our wide range of premium decoration services. Every package includes setup, cleanup, and our satisfaction guarantee.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-4 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37]'
                    : 'border border-[#1a1a1a] text-[#737373] hover:border-[#D4AF37]/20 hover:text-[#999]'
                }`}
              >
                <Icon name={cat.icon} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail + Pricing */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activeCategory}
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="px-4 pb-16 sm:pb-20"
        >
          <div className="max-w-7xl mx-auto">
            {/* Service info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
              <div className="lg:col-span-1 p-5 sm:p-7 bg-[#0d0d0d] rounded-2xl border border-[#D4AF37]/10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-4 sm:mb-5">
                  <Icon name={activeService.icon} className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{activeService.label}</h2>
                <p className="text-xs sm:text-sm text-[#999] leading-relaxed mb-5 sm:mb-6">
                  {activeService.longDescription || activeService.description}
                </p>
                <div className="space-y-2">
                  <p className="text-[10px] sm:text-xs text-[#737373] uppercase tracking-wider font-semibold mb-2">Includes</p>
                  {activeService.features.map((f: string, i: number) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37]" />
                      <span className="text-xs sm:text-sm text-[#d4d4d4]">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 sm:mt-6 pt-4 border-t border-[#1a1a1a]">
                  <p className="text-[10px] sm:text-xs text-[#737373]">Starting from</p>
                  <p className="text-xl sm:text-2xl font-bold text-[#D4AF37]">₹{activeService.startingPrice.toLocaleString()}</p>
                </div>
              </div>

              {/* Pricing cards */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                {activePricing?.map((pkg, i) => (
                  <PricingCard key={pkg.name} pkg={pkg} category={activeCategory} isPopular={i === 1} />
                ))}
              </div>
            </div>

            {/* CTA */}
            <ScrollReveal>
              <div className="text-center p-8 sm:p-10 bg-[#0a0a0a] rounded-2xl border border-[#D4AF37]/10">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Need a Custom Package?</h3>
                <p className="text-xs sm:text-sm text-[#999] mb-6 max-w-md mx-auto">
                  Every event is unique. Tell us your vision and budget — we&apos;ll create a custom decoration plan just for you.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <Link href="/booking" className="block w-full sm:w-auto">
                    <MagneticButton className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm bg-gradient-to-r from-[#B8960C] to-[#D4AF37] text-black font-bold rounded-full hover:shadow-xl hover:shadow-[#D4AF37]/25 transition-all duration-300">
                      Get Custom Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </MagneticButton>
                  </Link>
                  <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
                    <MagneticButton className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm border border-emerald-500/30 text-emerald-400 font-medium rounded-full hover:bg-emerald-500/10 transition-all duration-300">
                      💬 WhatsApp Us
                    </MagneticButton>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </motion.section>
      </AnimatePresence>
    </main>
  )
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <ServicesContent />
    </Suspense>
  )
}
