'use client'

import Link from 'next/link'
import { SITE_CONFIG, NAV_LINKS, SERVICE_CATEGORIES } from '@/lib/constants'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export default function Footer() {
  return (
    <footer className="px-3 sm:px-4 lg:px-8 pb-4 sm:pb-6 pt-8 sm:pt-12">
      <div className="max-w-7xl mx-auto bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-[#D4AF37]/10 overflow-hidden"
        style={{ WebkitBackdropFilter: 'blur(20px)', backdropFilter: 'blur(20px)' }}
      >
        <div className="px-5 sm:px-8 lg:px-12">
          <div className="py-10 sm:py-14 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            {/* Brand */}
            <ScrollReveal className="col-span-2 lg:col-span-1">
              <h3 className="text-base sm:text-lg font-bold text-gold-gradient mb-3 sm:mb-4">
                {SITE_CONFIG.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#737373] leading-relaxed mb-4 sm:mb-6">
                {SITE_CONFIG.tagline}
                <br />
                Premium decoration services for all your special occasions in {SITE_CONFIG.city}.
              </p>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-medium text-emerald-400 border border-emerald-500/25 rounded-full hover:bg-emerald-500/10 transition-colors"
              >
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Chat on WhatsApp
              </a>
            </ScrollReveal>

            {/* Navigation */}
            <ScrollReveal delay={0.05}>
              <div>
                <h4 className="text-[10px] sm:text-xs font-semibold text-white tracking-wider uppercase mb-3 sm:mb-4">Navigation</h4>
                <div className="space-y-2 sm:space-y-2.5">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-xs sm:text-sm text-[#737373] hover:text-[#D4AF37] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Services */}
            <ScrollReveal delay={0.1}>
              <div>
                <h4 className="text-[10px] sm:text-xs font-semibold text-white tracking-wider uppercase mb-3 sm:mb-4">Services</h4>
                <div className="space-y-2 sm:space-y-2.5">
                  {SERVICE_CATEGORIES.slice(0, 6).map((category) => (
                    <Link
                      key={category.id}
                      href={`/services?category=${category.id}`}
                      className="block text-xs sm:text-sm text-[#737373] hover:text-[#D4AF37] transition-colors"
                    >
                      {category.label}
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Contact */}
            <ScrollReveal delay={0.15}>
              <div>
                <h4 className="text-[10px] sm:text-xs font-semibold text-white tracking-wider uppercase mb-3 sm:mb-4">Contact</h4>
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#737373]">
                  <a href={`tel:${SITE_CONFIG.phone}`} className="block hover:text-[#D4AF37] transition-colors">
                    {SITE_CONFIG.phone}
                  </a>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="block hover:text-[#D4AF37] transition-colors">
                    {SITE_CONFIG.email}
                  </a>
                  <p>{SITE_CONFIG.city}</p>
                  <a
                    href={SITE_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-[#D4AF37] transition-colors"
                  >
                    {SITE_CONFIG.instagram}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom bar */}
          <div className="py-4 sm:py-5 border-t border-[#D4AF37]/10 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
            <p className="text-[10px] sm:text-xs text-[#737373]">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <p className="text-[10px] sm:text-xs text-[#737373]">
              Built by{' '}
              <a
                href="https://ragspro.com"
                className="text-[#D4AF37]/50 hover:text-[#D4AF37] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                RAGSPRO
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
