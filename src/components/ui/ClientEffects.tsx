'use client'

import { useEffect, useState } from 'react'
import { CustomCursor } from './CustomCursor'
import { GrainOverlay } from './GrainOverlay'

export function ClientEffects() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <CustomCursor />
      <GrainOverlay />
    </>
  )
}
