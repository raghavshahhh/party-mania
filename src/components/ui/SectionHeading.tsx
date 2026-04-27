'use client'

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}

export function SectionHeading({ label, title, subtitle, align = 'center' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`${alignClass} mb-16`}>
      <span className="inline-block text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
        {label}
      </span>
      <h2 className="font-bold text-white leading-[1.1]" style={{ fontSize: 'var(--text-3xl)' }}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-[#999999] max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}
          style={{ fontSize: 'var(--text-base)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
