'use client'

import { useState, useEffect } from 'react'
import { useReducedMotion as framerUseReducedMotion } from 'framer-motion'

/**
 * Detects if we should simplify animations:
 * 1. OS-level prefers-reduced-motion
 * 2. Low-end mobile (<=4 CPU cores)
 * Returns true = simplify animations, false = full animations
 */
export function useSimpleMotion(): boolean {
  const osReduced = framerUseReducedMotion()
  const [isLowEnd, setIsLowEnd] = useState(false)

  useEffect(() => {
    // Check hardware concurrency (low-end phones typically have 2-4 cores)
    const cores = navigator.hardwareConcurrency || 8
    setIsLowEnd(cores <= 4)

    // Also check device memory if available (low-end = <4GB)
    const nav = navigator as Navigator & { deviceMemory?: number }
    if (nav.deviceMemory && nav.deviceMemory < 4) {
      setIsLowEnd(true)
    }
  }, [])

  return osReduced || isLowEnd
}
