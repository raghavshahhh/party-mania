'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Star, Quote, MapPin } from 'lucide-react'

function TestimonialCard({ testimonial, delay }: { testimonial: typeof TESTIMONIALS[number]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0.4, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-7 bg-[#111111] rounded-2xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/25 transition-all duration-500"
      data-hover
    >
      {/* Top shimmer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <Quote className="absolute top-6 right-6 w-8 h-8 text-[#D4AF37]/[0.06] group-hover:text-[#D4AF37]/15 transition-colors duration-500" />

      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, j) => (
          <Star key={j} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
        ))}
        {testimonial.rating < 5 && Array.from({ length: 5 - testimonial.rating }).map((_, j) => (
          <Star key={`e${j}`} className="w-4 h-4 text-[#333]" />
        ))}
      </div>

      {/* Review text */}
      <p className="text-[#b3b3b3] leading-relaxed mb-6 text-sm">
        {testimonial.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#1a1a1a]">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/20 flex items-center justify-center">
          <span className="text-sm font-bold text-[#D4AF37]">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-sm font-medium text-white">{testimonial.name}</p>
          <div className="flex items-center gap-2 text-xs text-[#737373]">
            <span>{testimonial.event}</span>
            <span className="text-[#D4AF37]/30">•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {testimonial.location}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(212,175,55,0.04),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          label="Client Love"
          title="What Our Clients Say"
          subtitle="Real feedback from real celebrations — here's what our clients have to say about their Party Mania experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.slice(0, 3).map((testimonial, i) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} delay={i * 0.08} />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.slice(3).map((testimonial, i) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
