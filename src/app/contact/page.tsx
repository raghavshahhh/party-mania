'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Phone, Mail, MapPin, Clock, MessageCircle, Check, Send, Camera } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputBase = "w-full px-3 sm:px-4 py-3 bg-black border border-[#1a1a1a] rounded-xl text-xs sm:text-sm text-white placeholder-[#444] focus:outline-none focus:border-[#D4AF37]/50 transition-colors"

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-8 sm:pb-12 px-4 relative overflow-hidden">
        {/* Background */}
        <div className="relative max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.04] mb-5 sm:mb-6">
              <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37]" />
              <span className="text-[10px] sm:text-xs text-[#D4AF37] font-medium tracking-wider uppercase">Get In Touch</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Contact <span className="text-gold-gradient">Us</span>
            </h1>
            <p className="text-[#999] text-sm sm:text-lg">
              Have questions? Want to discuss your event? Reach out — we&apos;re here 24/7.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-4 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-5">
              <ScrollReveal>
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-5 sm:p-6 bg-black rounded-2xl border border-emerald-500/15 hover:border-emerald-500/40 transition-all duration-500"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">WhatsApp</h3>
                      <p className="text-[10px] sm:text-xs text-[#999] mb-2">Fastest way to reach us</p>
                      <p className="text-xs sm:text-sm text-emerald-400 font-medium">{SITE_CONFIG.phone}</p>
                    </div>
                  </div>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                {/* Phone */}
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="group block p-5 sm:p-6 bg-black rounded-2xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-500"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">Call Us</h3>
                      <p className="text-[10px] sm:text-xs text-[#999] mb-2">Available 9 AM - 10 PM</p>
                      <p className="text-xs sm:text-sm text-[#D4AF37] font-medium">{SITE_CONFIG.phone}</p>
                    </div>
                  </div>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                {/* Email */}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="group block p-5 sm:p-6 bg-black rounded-2xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-500"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">Email</h3>
                      <p className="text-[10px] sm:text-xs text-[#999] mb-2">For detailed inquiries</p>
                      <p className="text-xs sm:text-sm text-[#D4AF37] font-medium">{SITE_CONFIG.email}</p>
                    </div>
                  </div>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                {/* Instagram */}
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-5 sm:p-6 bg-black rounded-2xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-500"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">Instagram</h3>
                      <p className="text-[10px] sm:text-xs text-[#999] mb-2">Follow us for latest work</p>
                      <p className="text-xs sm:text-sm text-[#D4AF37] font-medium">{SITE_CONFIG.instagram}</p>
                    </div>
                  </div>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                {/* Address & Hours */}
                <div className="p-5 sm:p-6 bg-black rounded-2xl border border-[#D4AF37]/10">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">Location</h3>
                      <p className="text-xs sm:text-sm text-[#999]">{CONTACT_INFO.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">Working Hours</h3>
                      <p className="text-xs sm:text-sm text-[#999]">{CONTACT_INFO.hours}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                {/* Service Areas */}
                <div className="p-5 sm:p-6 bg-black rounded-2xl border border-[#D4AF37]/10">
                  <h3 className="text-xs sm:text-sm font-semibold text-white mb-3">Areas We Serve</h3>
                  <div className="flex flex-wrap gap-2">
                    {CONTACT_INFO.areas.map((area) => (
                      <span key={area} className="px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs text-[#999] bg-black border border-[#1a1a1a] rounded-full">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.1}>
                <div className="p-6 sm:p-8 bg-black rounded-2xl border border-[#D4AF37]/10">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
                      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="text-center py-10 sm:py-12"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 sm:mb-6">
                        <Check className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Message Sent!</h3>
                      <p className="text-xs sm:text-sm text-[#999] mb-6">We&apos;ll get back to you within a few hours.</p>
                      <a
                        href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 text-xs sm:text-sm font-medium text-emerald-400 border border-emerald-500/30 rounded-full hover:bg-emerald-500/10 transition-all"
                      >
                        💬 Chat Faster on WhatsApp
                      </a>
                    </motion.div>
                  ) : (
                    <>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Send Us a Message</h3>
                      <p className="text-xs sm:text-sm text-[#999] mb-6 sm:mb-8">Fill in the form and we&apos;ll respond within a few hours.</p>

                      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                        <div>
                          <label className="block text-[10px] sm:text-xs text-[#737373] mb-1.5 sm:mb-2 font-medium">Your Name *</label>
                          <input type="text" value={form.name} onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))} placeholder="Enter your name" required className={inputBase} />
                        </div>
                        <div>
                          <label className="block text-[10px] sm:text-xs text-[#737373] mb-1.5 sm:mb-2 font-medium">Phone Number *</label>
                          <input type="tel" value={form.phone} onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value }))} placeholder="+91 98765 43210" required className={inputBase} />
                        </div>
                        <div>
                          <label className="block text-[10px] sm:text-xs text-[#737373] mb-1.5 sm:mb-2 font-medium">Your Message *</label>
                          <textarea value={form.message} onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))} placeholder="Tell us about your event, date, theme preference..." rows={5} required className={`${inputBase} resize-none`} />
                        </div>
                        <button
                          type="submit"
                          className="group w-full py-3.5 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-[#B8960C] to-[#D4AF37] text-black font-bold rounded-full hover:shadow-xl hover:shadow-[#D4AF37]/25 transition-all duration-500 flex items-center justify-center gap-2"
                        >
                          <Send className="w-4 h-4" /> Send Message
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
