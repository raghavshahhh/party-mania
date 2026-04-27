'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CounterProps {
  target: number
  duration?: number
  suffix?: string
  prefix?: string
  isDecimal?: boolean
}

export function Counter({ target, duration = 2.5, suffix = '', prefix = '', isDecimal = false }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = easeOutQuart * target

      if (isDecimal) {
        setCount(Math.round(current * 10) / 10)
      } else {
        setCount(Math.floor(current))
      }

      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, target, duration, isDecimal])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {isDecimal ? count.toFixed(1) : count.toLocaleString()}
      {suffix}
    </span>
  )
}
