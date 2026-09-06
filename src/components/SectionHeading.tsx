'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <span className="font-mono text-sm font-medium tracking-widest text-(--color-brand) uppercase">
        {eyebrow}
      </span>
      <h2 className="font-heading mt-3 text-3xl font-bold text-(--color-ink) sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base text-(--color-ink-soft)">{description}</p>}
    </motion.div>
  )
}
