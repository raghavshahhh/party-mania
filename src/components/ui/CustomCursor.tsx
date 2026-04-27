'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  const mousePos = useRef({ x: -100, y: -100 })
  const smoothPos = useRef({ x: -100, y: -100 })
  const dotPos = useRef({ x: -100, y: -100 })
  const rafId = useRef<number>(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor

    const animate = () => {
      smoothPos.current.x = lerp(smoothPos.current.x, mousePos.current.x, 0.12)
      smoothPos.current.y = lerp(smoothPos.current.y, mousePos.current.y, 0.12)
      dotPos.current.x = lerp(dotPos.current.x, mousePos.current.x, 0.8)
      dotPos.current.y = lerp(dotPos.current.y, mousePos.current.y, 0.8)

      if (cursorRef.current) {
        const size = isHovering ? 56 : 32
        const offset = size / 2
        cursorRef.current.style.transform = `translate3d(${smoothPos.current.x - offset}px, ${smoothPos.current.y - offset}px, 0)`
        cursorRef.current.style.width = `${size}px`
        cursorRef.current.style.height = `${size}px`
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x - 3}px, ${dotPos.current.y - 3}px, 0)`
      }

      rafId.current = requestAnimationFrame(animate)
    }

    const addHoverListeners = () => {
      const interactables = document.querySelectorAll('a, button, [data-hover]')
      interactables.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }

    addHoverListeners()
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.body.addEventListener('mouseleave', () => setIsVisible(false))
    document.body.addEventListener('mouseenter', () => setIsVisible(true))

    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [isMobile, isVisible, isHovering])

  if (isMobile) return null

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[var(--color-brand)]/40 mix-blend-difference"
        style={{
          willChange: 'transform, width, height',
          transition: 'width 0.3s cubic-bezier(0.19,1,0.22,1), height 0.3s cubic-bezier(0.19,1,0.22,1)',
          opacity: isVisible ? 1 : 0,
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 pointer-events-none z-[9999] rounded-full bg-[var(--color-brand)]"
        style={{
          willChange: 'transform',
          opacity: isVisible ? 1 : 0,
        }}
      />
      <style jsx global>{`
        @media (min-width: 768px) {
          body { cursor: none !important; }
          a, button, [data-hover], input, textarea, select { cursor: none !important; }
        }
      `}</style>
    </>
  )
}
