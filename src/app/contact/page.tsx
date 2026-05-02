'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Phone, Mail, MapPin, Clock, MessageCircle, Check, ArrowRight, Send, Camera } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.1),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.04] mb-6">
            <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs text-[#D4AF37] font-medium tracking-wider uppercase">Get In Touch</span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Contact <span className="text-gold-gradient">Us</span>
          </h1>
          <p className="text-[#999] text-lg">
            Have questions? Want to discuss your event? Reach out — we&apos;re here 24/7.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-2 space-y-5">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-[#0d0d0d] rounded-2xl border border-emerald-500/15 hover:border-emerald-500/40 transition-all duration-500"
                data-hover
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">WhatsApp</h3>
                    <p className="text-xs text-[#999] mb-2">Fastest way to reach us</p>
                    <p className="text-sm text-emerald-400 font-medium">{SITE_CONFIG.phone}</p>
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="group block p-6 bg-[#0d0d0d] rounded-2xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-500"
                data-hover
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Phone className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">Call Us</h3>
                    <p className="text-xs text-[#999] mb-2">Available 9 AM - 10 PM</p>
                    <p className="text-sm text-[#D4AF37] font-medium">{SITE_CONFIG.phone}</p>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="group block p-6 bg-[#0d0d0d] rounded-2xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-500"
                data-hover
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Mail className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">Email</h3>
                    <p className="text-xs text-[#999] mb-2">For detailed inquiries</p>
                    <p className="text-sm text-[#D4AF37] font-medium">{SITE_CONFIG.email}</p>
                  </div>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-[#0d0d0d] rounded-2xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-500"
                data-hover
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Camera className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">Instagram</h3>
                    <p className="text-xs text-[#999] mb-2">Follow us for latest work</p>
                    <p className="text-sm text-[#D4AF37] font-medium">{SITE_CONFIG.instagram}</p>
                  </div>
                </div>
              </a>

              {/* Address & Hours */}
              <div className="p-6 bg-[#0d0d0d] rounded-2xl border border-[#D4AF37]/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">Location</h3>
                    <p className="text-sm text-[#999]">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">Working Hours</h3>
                    <p className="text-sm text-[#999]">{CONTACT_INFO.hours}</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="p-6 bg-[#0d0d0d] rounded-2xl border border-[#D4AF37]/10">
                <h3 className="text-sm font-semibold text-white mb-3">Areas We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  {CONTACT_INFO.areas.map((area) => (
                    <span key={area} className="px-3 py-1 text-xs text-[#999] bg-[#111] border border-[#1a1a1a] rounded-full">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-8 bg-[#0d0d0d] rounded-2xl border border-[#D4AF37]/10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                      <Check className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-sm text-[#999] mb-6">We&apos;ll get back to you within a few hours.</p>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-emerald-400 border border-emerald-500/30 rounded-full hover:bg-emerald-500/10 transition-all"
                    >
                      💬 Chat Faster on WhatsApp
                    </a>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-white mb-2">Send Us a Message</h3>
                    <p className="text-sm text-[#999] mb-8">Fill in the form and we&apos;ll respond within a few hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-xs text-[#737373] mb-2 font-medium">Your Name *</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Enter your name"
                          required
                          className="w-full px-4 py-3 bg-[#111] border border-[#1a1a1a] rounded-xl text-sm text-white placeholder-[#444] focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#737373] mb-2 font-medium">Phone Number *</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="+91 98765 43210"
                          required
                          className="w-full px-4 py-3 bg-[#111] border border-[#1a1a1a] rounded-xl text-sm text-white placeholder-[#444] focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#737373] mb-2 font-medium">Your Message *</label>
                        <textarea
                          value={form.message}
                          onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                          placeholder="Tell us about your event, date, theme preference..."
                          rows={5}
                          required
                          className="w-full px-4 py-3 bg-[#111] border border-[#1a1a1a] rounded-xl text-sm text-white placeholder-[#444] focus:outline-none focus:border-[#D4AF37]/50 transition-colors resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="group w-full py-4 text-base bg-gradient-to-r from-[#B8960C] to-[#D4AF37] text-black font-bold rounded-full hover:shadow-xl hover:shadow-[#D4AF37]/25 transition-all duration-500 flex items-center justify-center gap-2"
                        data-hover
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
