'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { SERVICE_CATEGORIES, TIME_SLOTS, SITE_CONFIG } from '@/lib/constants'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Check, Calendar, User, MessageSquare, ArrowRight, Shield, Clock } from 'lucide-react'

function BookingForm() {
  const searchParams = useSearchParams()
  const preselectedService = searchParams.get('service') || ''
  const preselectedPackage = searchParams.get('package') || ''

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService,
    package: preselectedPackage,
    date: '',
    timeSlot: '',
    venue: '',
    city: '',
    guests: '',
    budget: '',
    specialRequests: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.phone.trim() || form.phone.length < 10) errs.phone = 'Valid phone number required'
    if (!form.service) errs.service = 'Select a service'
    if (!form.date) errs.date = 'Select event date'
    if (!form.timeSlot) errs.timeSlot = 'Select a time slot'
    if (!form.venue.trim()) errs.venue = 'Venue address required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  const updateField = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }

  const inputBase = "w-full px-3 sm:px-4 py-3 bg-[#111] border rounded-xl text-xs sm:text-sm text-white placeholder-[#444] focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
  const inputError = "border-red-500/50"
  const inputNormal = "border-[#1a1a1a]"

  if (submitted) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md w-full text-center p-8 sm:p-10 bg-[#0d0d0d] rounded-2xl border border-[#D4AF37]/20"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 sm:mb-6">
            <Check className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Booking Request Sent!</h2>
          <p className="text-xs sm:text-sm text-[#999] mb-6">
            We&apos;ve received your booking request. Our team will contact you within 2 hours on WhatsApp to confirm details and pricing.
          </p>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 text-xs sm:text-sm font-medium text-emerald-400 border border-emerald-500/30 rounded-full hover:bg-emerald-500/10 transition-all"
          >
            💬 Chat on WhatsApp
          </a>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-8 sm:pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.1),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.04] mb-5 sm:mb-6">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37]" />
              <span className="text-[10px] sm:text-xs text-[#D4AF37] font-medium tracking-wider uppercase">Book Now</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Book Your <span className="text-gold-gradient">Decoration</span>
            </h1>
            <p className="text-[#999] text-sm sm:text-lg">
              Fill in your event details and we&apos;ll get back to you with a custom quote within 2 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section className="px-4 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Personal Info */}
            <ScrollReveal>
              <div className="p-5 sm:p-7 bg-[#0d0d0d] rounded-2xl border border-[#D4AF37]/10">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-5 sm:mb-6 flex items-center gap-2">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" /> Your Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-[10px] sm:text-xs text-[#737373] mb-1.5 sm:mb-2 font-medium">Full Name *</label>
                    <input type="text" value={form.name} onChange={(e) => updateField('name', e.target.value)} placeholder="Enter your name" className={`${inputBase} ${errors.name ? inputError : inputNormal}`} />
                    {errors.name && <p className="text-[10px] sm:text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-xs text-[#737373] mb-1.5 sm:mb-2 font-medium">Phone Number *</label>
                    <input type="tel" value={form.phone} onChange={(e) => updateField('phone', e.target.value)} placeholder="+91 98765 43210" className={`${inputBase} ${errors.phone ? inputError : inputNormal}`} />
                    {errors.phone && <p className="text-[10px] sm:text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-xs text-[#737373] mb-1.5 sm:mb-2 font-medium">Email (Optional)</label>
                    <input type="email" value={form.email} onChange={(e) => updateField('email', e.target.value)} placeholder="your@email.com" className={`${inputBase} ${inputNormal}`} />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Event Details */}
            <ScrollReveal delay={0.1}>
              <div className="p-5 sm:p-7 bg-[#0d0d0d] rounded-2xl border border-[#D4AF37]/10">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-5 sm:mb-6 flex items-center gap-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" /> Event Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] sm:text-xs text-[#737373] mb-1.5 sm:mb-2 font-medium">Decoration Type *</label>
                    <select value={form.service} onChange={(e) => updateField('service', e.target.value)} className={`${inputBase} appearance-none ${errors.service ? inputError : inputNormal}`}>
                      <option value="">Select decoration type</option>
                      {SERVICE_CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.label} (From ₹{cat.startingPrice.toLocaleString()})</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-[10px] sm:text-xs text-red-400 mt-1">{errors.service}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-xs text-[#737373] mb-1.5 sm:mb-2 font-medium">Event Date *</label>
                    <input type="date" value={form.date} onChange={(e) => updateField('date', e.target.value)} min={new Date().toISOString().split('T')[0]} className={`${inputBase} ${errors.date ? inputError : inputNormal}`} />
                    {errors.date && <p className="text-[10px] sm:text-xs text-red-400 mt-1">{errors.date}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-xs text-[#737373] mb-1.5 sm:mb-2 font-medium">Time Slot *</label>
                    <select value={form.timeSlot} onChange={(e) => updateField('timeSlot', e.target.value)} className={`${inputBase} appearance-none ${errors.timeSlot ? inputError : inputNormal}`}>
                      <option value="">Select time slot</option>
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot.id} value={slot.id}>{slot.label}</option>
                      ))}
                    </select>
                    {errors.timeSlot && <p className="text-[10px] sm:text-xs text-red-400 mt-1">{errors.timeSlot}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] sm:text-xs text-[#737373] mb-1.5 sm:mb-2 font-medium">Venue Address *</label>
                    <input type="text" value={form.venue} onChange={(e) => updateField('venue', e.target.value)} placeholder="Full address with landmark" className={`${inputBase} ${errors.venue ? inputError : inputNormal}`} />
                    {errors.venue && <p className="text-[10px] sm:text-xs text-red-400 mt-1">{errors.venue}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-xs text-[#737373] mb-1.5 sm:mb-2 font-medium">Approx. Guests</label>
                    <input type="text" value={form.guests} onChange={(e) => updateField('guests', e.target.value)} placeholder="e.g., 50" className={`${inputBase} ${inputNormal}`} />
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-xs text-[#737373] mb-1.5 sm:mb-2 font-medium">Budget Range</label>
                    <select value={form.budget} onChange={(e) => updateField('budget', e.target.value)} className={`${inputBase} appearance-none`}>
                      <option value="">Select budget</option>
                      <option value="2k-5k">₹2,000 - ₹5,000</option>
                      <option value="5k-10k">₹5,000 - ₹10,000</option>
                      <option value="10k-20k">₹10,000 - ₹20,000</option>
                      <option value="20k-35k">₹20,000 - ₹35,000</option>
                      <option value="35k+">₹35,000+</option>
                    </select>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Special Requests */}
            <ScrollReveal delay={0.2}>
              <div className="p-5 sm:p-7 bg-[#0d0d0d] rounded-2xl border border-[#D4AF37]/10">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-5 sm:mb-6 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" /> Special Requests
                </h3>
                <textarea
                  value={form.specialRequests}
                  onChange={(e) => updateField('specialRequests', e.target.value)}
                  placeholder="Theme preferences, color palette, Pinterest links, special instructions..."
                  rows={4}
                  className={`${inputBase} resize-none`}
                />
              </div>
            </ScrollReveal>

            {/* Submit */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-[#737373]">
                  <span className="flex items-center gap-1"><Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37]" /> 50% Advance Only</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37]" /> Response in 2 hrs</span>
                </div>
                <button
                  type="submit"
                  className="group w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-[#B8960C] to-[#D4AF37] text-black font-bold rounded-full hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-500"
                >
                  Submit Booking Request
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </ScrollReveal>
          </form>
        </div>
      </section>
    </main>
  )
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <BookingForm />
    </Suspense>
  )
}
