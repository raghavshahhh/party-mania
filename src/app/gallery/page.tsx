'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GALLERY_ITEMS, GALLERY_CATEGORIES, SERVICE_CATEGORIES } from '@/lib/constants'
import { Icon } from '@/components/ui/Icon'
import { Sparkles, X, ExternalLink } from 'lucide-react'
import Link from 'next/link'

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
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.04] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs text-[#D4AF37] font-medium tracking-wider uppercase">Our Work</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Event <span className="text-gold-gradient">Gallery</span>
          </h1>
          <p className="text-[#999] max-w-2xl mx-auto text-lg">
            Browse our collection of beautifully decorated events. Every setup is crafted with love and attention to detail.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37]'
                    : 'border border-[#1a1a1a] text-[#737373] hover:border-[#D4AF37]/20 hover:text-[#999]'
                }`}
                data-hover
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredItems.map((item, i) => {
                const catInfo = SERVICE_CATEGORIES.find(c => c.id === item.category)
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    onClick={() => setSelectedItem(item.id)}
                    className="group relative cursor-pointer rounded-2xl overflow-hidden border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-500"
                    data-hover
                  >
                    {/* Placeholder image area */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#0d0d0d] to-[#111] relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_60%)]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/15 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
                            {catInfo && <Icon name={catInfo.icon as any} className="w-7 h-7 text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors duration-500" />}
                          </div>
                          <p className="text-xs text-[#737373] group-hover:text-[#999] transition-colors">Photo Coming Soon</p>
                        </div>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <span className="text-sm text-[#D4AF37] font-medium">View Details →</span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5 bg-[#0d0d0d]">
                      <div className="flex items-center gap-2 mb-2">
                        {catInfo && (
                          <span className="px-2.5 py-1 text-[10px] font-medium text-[#D4AF37] bg-[#D4AF37]/10 rounded-full">
                            {catInfo.label}
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-[#F5E6B8] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#737373]">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <div className="text-center mt-16 p-10 bg-[#0a0a0a] rounded-2xl border border-[#D4AF37]/10">
            <h3 className="text-xl font-bold text-white mb-3">Want Something Like This?</h3>
            <p className="text-sm text-[#999] mb-6 max-w-md mx-auto">
              Every decoration is customized to your preferences. Book now and let us create your dream setup.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold bg-gradient-to-r from-[#B8960C] to-[#D4AF37] text-black rounded-full hover:shadow-xl hover:shadow-[#D4AF37]/25 transition-all duration-300"
              data-hover
            >
              Book Your Event
            </Link>
          </div>
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-lg bg-[#111] rounded-2xl border border-[#D4AF37]/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gradient-to-br from-[#0d0d0d] to-[#111] flex items-center justify-center relative">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/15 flex items-center justify-center mb-3">
                    {(() => {
                      const catInfo = SERVICE_CATEGORIES.find(c => c.id === selectedGallery.category)
                      return catInfo && <Icon name={catInfo.icon as any} className="w-9 h-9 text-[#D4AF37]/40" />
                    })()}
                  </div>
                  <p className="text-sm text-[#737373]">Photo Coming Soon</p>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 border border-[#D4AF37]/20 flex items-center justify-center hover:bg-black/80 transition-colors"
                  data-hover
                >
                  <X className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{selectedGallery.title}</h3>
                <p className="text-sm text-[#999] mb-4">{selectedGallery.description}</p>
                <Link
                  href={`/services?category=${selectedGallery.category}`}
                  className="inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:text-[#F5E6B8] transition-colors"
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
