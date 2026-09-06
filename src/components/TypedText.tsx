'use client'

import { useEffect, useState } from 'react'

interface TypedTextProps {
  words: string[]
  typingSpeedMs?: number
  deletingSpeedMs?: number
  pauseMs?: number
  className?: string
}

export function TypedText({
  words,
  typingSpeedMs = 70,
  deletingSpeedMs = 40,
  pauseMs = 1800,
  className,
}: TypedTextProps) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]

    if (!isDeleting && text === currentWord) {
      const pause = setTimeout(() => setIsDeleting(true), pauseMs)
      return () => clearTimeout(pause)
    }

    if (isDeleting && text === '') {
      const advance = setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }, typingSpeedMs)
      return () => clearTimeout(advance)
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          isDeleting ? currentWord.slice(0, prev.length - 1) : currentWord.slice(0, prev.length + 1)
        )
      },
      isDeleting ? deletingSpeedMs : typingSpeedMs
    )
    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeedMs, deletingSpeedMs, pauseMs])

  return (
    <span className={className}>
      {text}
      <span className="cursor-blink ml-0.5 inline-block text-(--color-brand)">|</span>
    </span>
  )
}
