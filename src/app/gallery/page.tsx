'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GALLERY_ITEMS, GALLERY_CATEGORIES, SERVICE_CATEGORIES } from '@/lib/constants'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Sparkles, X, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory)

  const selectedGallery = GALLERY_ITEMS.find(item => item.id === selectedItem)

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-10 sm:pb-16 px-4 relative overflow-hidden">
        {/* Background */}
        <div className="relative max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.04] mb-5 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37]" />
              <span className="text-[10px] sm:text-xs text-[#D4AF37] font-medium tracking-wider uppercase">Our Work</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Event <span className="text-gold-gradient">Gallery</span>
            </h1>
            <p className="text-[#999] max-w-2xl mx-auto text-sm sm:text-lg">
              Browse our collection of beautifully decorated events. Every setup is crafted with love and attention to detail.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37]'
                    : 'border border-[#1a1a1a] text-[#737373] hover:border-[#D4AF37]/20 hover:text-[#999]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
            >
              {filteredItems.map((item, i) => {
                const catInfo = SERVICE_CATEGORIES.find(c => c.id === item.category)
                return (
                  <ScrollReveal key={item.id} delay={i * 0.04}>
                    <div
                      onClick={() => setSelectedItem(item.id)}
                      className="group relative cursor-pointer rounded-2xl overflow-hidden border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-500"
                    >
                      {/* Image */}
                      <div className="aspect-[4/3] relative overflow-hidden bg-black">
                        <Image
                          src={`/images/gallery/${item.id}.jpg`}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />

                        {/* Hover overlay with blur */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <span className="text-xs sm:text-sm text-[#D4AF37] font-medium">View Details →</span>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-4 sm:p-5 bg-black">
                        <div className="flex items-center gap-2 mb-2">
                          {catInfo && (
                            <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-medium text-[#D4AF37] bg-[#D4AF37]/10 rounded-full">
                              {catInfo.label}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold text-white mb-1 group-hover:text-[#F5E6B8] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-[#737373] line-clamp-2">{item.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <ScrollReveal delay={0.3} className="text-center mt-12 sm:mt-16">
            <div className="p-8 sm:p-10 bg-black rounded-2xl border border-[#D4AF37]/10">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Want Something Like This?</h3>
              <p className="text-xs sm:text-sm text-[#999] mb-6 max-w-md mx-auto">
                Every decoration is customized to your preferences. Book now and let us create your dream setup.
              </p>
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#B8960C] to-[#D4AF37] text-black rounded-full hover:shadow-xl hover:shadow-[#D4AF37]/25 transition-all duration-300"
              >
                Book Your Event
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && selectedGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, filter: 'blur(8px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              exit={{ scale: 0.9, opacity: 0, filter: 'blur(8px)' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-lg bg-[#111] rounded-2xl border border-[#D4AF37]/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video relative bg-black">
                <Image
                  src={`/images/gallery/${selectedGallery.id}.jpg`}
                  alt={selectedGallery.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 512px) 100vw, 512px"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-black/50 border border-[#D4AF37]/20 flex items-center justify-center hover:bg-black/80 transition-colors"
                >
                  <X className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{selectedGallery.title}</h3>
                <p className="text-xs sm:text-sm text-[#999] mb-4">{selectedGallery.description}</p>
                <Link
                  href={`/services?category=${selectedGallery.category}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#D4AF37] hover:text-[#F5E6B8] transition-colors"
                >
                  View Similar Packages
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
