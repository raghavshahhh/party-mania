'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[calc(100%-24px)] sm:w-[calc(100%-48px)] lg:max-w-5xl ${
          scrolled
            ? 'bg-black/70 border border-[#D4AF37]/15 rounded-2xl shadow-xl shadow-black/40'
            : 'bg-transparent'
        }`}
        style={{
          ...(scrolled ? { WebkitBackdropFilter: 'blur(24px)', backdropFilter: 'blur(24px)' } : {}),
        }}
      >
        <div className="px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-[68px] sm:h-[76px] lg:h-[80px]">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="text-2xl sm:text-[28px] font-bold text-gold-gradient tracking-tight">
                {SITE_CONFIG.name}
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[16px] text-[#b3b3b3] hover:text-white transition-colors duration-300 group font-medium"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-[15px] font-medium text-[#D4AF37] border border-[#D4AF37]/30 rounded-full hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                WhatsApp
              </a>
              <Link
                href="/booking"
                className="px-7 py-2.5 text-[15px] font-semibold text-black bg-gradient-to-r from-[#B8960C] to-[#D4AF37] rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-all duration-300"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-12 h-12 flex flex-col items-center justify-center gap-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                className="block w-7 h-0.5 bg-[#D4AF37] origin-center"
              />
              <motion.span
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="block w-7 h-0.5 bg-[#D4AF37]"
              />
              <motion.span
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                className="block w-7 h-0.5 bg-[#D4AF37] origin-center"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mx-3 sm:mx-5 mt-[84px] bg-black/95 backdrop-blur-2xl rounded-2xl border border-[#D4AF37]/15 overflow-hidden"
              style={{ WebkitBackdropFilter: 'blur(24px)', backdropFilter: 'blur(24px)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 sm:px-8 py-6 sm:py-8 space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 text-xl font-medium text-[#b3b3b3] hover:text-[#D4AF37] transition-colors active:scale-[0.98]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-5 space-y-3"
                >
                  <Link
                    href="/booking"
                    onClick={() => setIsOpen(false)}
                    className="block text-center px-6 py-4 text-lg bg-gradient-to-r from-[#B8960C] to-[#D4AF37] text-black font-bold rounded-full active:scale-[0.98]"
                  >
                    Book Now
                  </Link>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block text-center px-6 py-4 text-lg border border-emerald-500/30 text-emerald-400 font-semibold rounded-full"
                  >
                    WhatsApp Us
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
