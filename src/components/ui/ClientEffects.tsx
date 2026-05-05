'use client'

import { GrainOverlay } from './GrainOverlay'

export function ClientEffects() {
  return (
    <div className="opacity-0 animate-[fadeIn_0.01ms_forwards]">
      <GrainOverlay />
    </div>
  )
}
