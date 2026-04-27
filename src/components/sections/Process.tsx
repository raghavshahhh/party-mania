'use client'

import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '@/lib/constants'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function Process() {
  return (
    <section className="section-padding bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="How It Works"
          title="4 Simple Steps to Your Dream Event"
          subtitle="From your first message to the final celebration — here's how we make magic happen."
        />

        <div className="relative">
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-[#D4AF37]/40 via-[#D4AF37]/20 to-transparent hidden sm:block" />

          <div className="space-y-8 sm:space-y-10">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0.5, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-6 items-start group"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center group-hover:bg-[#D4AF37]/15 group-hover:border-[#D4AF37]/40 transition-all duration-500">
                    <span className="text-sm font-bold text-[#D4AF37]">{step.step}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-[#999999] leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
