'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'
import { Star, Quote, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[number] }) {
  return (
    <div className="group relative p-5 sm:p-7 bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#D4AF37]/25 transition-all duration-500 w-[280px] sm:w-[340px] md:min-w-[380px] flex-shrink-0">
      {/* Top shimmer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <Quote className="absolute top-5 right-5 sm:top-6 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37]/[0.06] group-hover:text-[#D4AF37]/15 transition-colors duration-500" />

      {/* Stars */}
      <div className="flex gap-0.5 mb-3 sm:mb-4">
        {Array.from({ length: testimonial.rating }).map((_, j) => (
          <Star key={j} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#D4AF37] text-[#D4AF37]" />
        ))}
        {testimonial.rating < 5 && Array.from({ length: 5 - testimonial.rating }).map((_, j) => (
          <Star key={`e${j}`} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#333]" />
        ))}
      </div>

      {/* Review text */}
      <p className="text-[#d4d4d4] leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm line-clamp-4">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-white/5">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
          <span className="text-xs sm:text-sm font-bold text-[#D4AF37]">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div className="min-w-0">
          <p className="text-xs sm:text-sm font-medium text-white truncate">{testimonial.name}</p>
          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-[#737373]">
            <span className="truncate">{testimonial.event}</span>
            <span className="text-[#D4AF37]/30">&bull;</span>
            <span className="flex items-center gap-0.5 flex-shrink-0">
              <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              {testimonial.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', checkScroll, { passive: true })
    checkScroll()
    return () => el.removeEventListener('scroll', checkScroll)
  }, [])

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const amount = window.innerWidth < 640 ? 280 : 400
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(212,175,55,0.04),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <div>
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.04] mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs text-[#D4AF37] font-medium tracking-wider uppercase">Client Love</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              What Our Clients <span className="text-gold-gradient">Say</span>
            </h2>
          </div>

          {/* Scroll buttons — hidden on mobile (swipe instead) */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all disabled:opacity-20 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 text-[#D4AF37]" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all disabled:opacity-20 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
            <motion.div
              key={`${testimonial.name}-${i}`}
              initial={{ opacity: 0.4, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="snap-start"
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
