'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Star, Quote } from 'lucide-react'

function TestimonialCard({ testimonial, delay }: { testimonial: typeof TESTIMONIALS[number]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0.4, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative p-7 bg-[#111111] rounded-2xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/25 transition-all duration-500 group"
    >
      <Quote className="absolute top-6 right-6 w-8 h-8 text-[#D4AF37]/10 group-hover:text-[#D4AF37]/20 transition-colors duration-500" />

      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, j) => (
          <Star key={j} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
        ))}
      </div>

      <p className="text-[#b3b3b3] leading-relaxed mb-6 text-sm">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/20 flex items-center justify-center">
          <span className="text-sm font-semibold text-[#D4AF37]">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-sm font-medium text-white">{testimonial.name}</p>
          <p className="text-xs text-[#737373]">
            {testimonial.event} &bull; {testimonial.location}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Client Love"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it — here's what real clients say about their Party Mania experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.slice(0, 3).map((testimonial, i) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} delay={i * 0.08} />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.slice(3).map((testimonial, i) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
