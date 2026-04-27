import Link from 'next/link'
import { SITE_CONFIG, NAV_LINKS, SERVICE_CATEGORIES } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-gold-gradient mb-4">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-sm text-[var(--color-text-tertiary)] leading-relaxed mb-6">
              {SITE_CONFIG.tagline}
              <br />
              Premium decoration services for all your special occasions in {SITE_CONFIG.city}.
            </p>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-emerald-400 border border-emerald-500/25 rounded-full hover:bg-emerald-500/10 transition-colors"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">Navigation</h4>
            <div className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-brand)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">Services</h4>
            <div className="space-y-2.5">
              {SERVICE_CATEGORIES.slice(0, 6).map((category) => (
                <Link
                  key={category.id}
                  href={`/services?category=${category.id}`}
                  className="block text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-brand)] transition-colors"
                >
                  {category.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-[var(--color-text-tertiary)]">
              <a href={`tel:${SITE_CONFIG.phone}`} className="block hover:text-[var(--color-brand)] transition-colors">
                {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="block hover:text-[var(--color-brand)] transition-colors">
                {SITE_CONFIG.email}
              </a>
              <p>{SITE_CONFIG.city}</p>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[var(--color-brand)] transition-colors"
              >
                {SITE_CONFIG.instagram}
              </a>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--color-text-tertiary)]">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-tertiary)]">
            Built by{' '}
            <a
              href="https://ragspro.com"
              className="text-[var(--color-brand)]/50 hover:text-[var(--color-brand)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              RAGSPRO
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
