'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useSimpleMotion } from '@/hooks/useReducedMotion'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  strength?: number
}

export function MagneticButton({ children, className = '', onClick, strength = 0.3 }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const simple = useSimpleMotion()

  // Low-end: disable magnetic effect entirely, just render a normal button
  if (simple) {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={className}
        data-hover
      >
        <span className="inline-flex items-center gap-2">
          {children}
        </span>
      </button>
    )
  }

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()
    const x = (clientX - left - width / 2) * strength
    const y = (clientY - top - height / 2) * strength
    setPosition({ x, y })
  }

  const reset = () => setPosition({ x: 0, y: 0 })

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
      className={className}
      data-hover
    >
      <motion.span
        className="inline-flex items-center gap-2"
        animate={{ x: position.x * 0.4, y: position.y * 0.4 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
      >
        {children}
      </motion.span>
    </motion.button>
  )
}
