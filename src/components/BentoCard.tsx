'use client'

import { useRef, type MouseEvent, type ReactNode } from 'react'

interface BentoCardProps {
  children: ReactNode
  className?: string
}

export function BentoCard({ children, className = '' }: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--mouse-x', `${x}%`)
    el.style.setProperty('--mouse-y', `${y}%`)
  }

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className={`bento-card ${className}`}>
      {children}
    </div>
  )
}
