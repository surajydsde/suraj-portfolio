'use client'

import { motion } from 'framer-motion'
import { experience } from '../data/experience'

const RECENT = experience.slice(0, 3)
const EARLIER = experience.slice(3)

export function Experience() {
  return (
    <div>
      <h3 className="mb-6 font-mono text-xs font-medium tracking-widest text-(--color-ink-faint) uppercase">
        Experience
      </h3>
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-3 w-px bg-gradient-to-b from-(--color-accent) via-(--color-border) to-transparent" />
        <div className="space-y-8">
          {RECENT.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative pl-8"
            >
              <div
                className={`absolute top-1.5 left-0 flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                  index === 0
                    ? 'border-(--color-accent) bg-(--color-brand-soft)'
                    : 'border-(--color-border) bg-(--color-surface)'
                }`}
              >
                <div
                  className={`h-2 w-2 rounded-full ${
                    index === 0 ? 'bg-(--color-accent)' : 'bg-(--color-border)'
                  }`}
                />
              </div>
              <p className="mb-0.5 font-mono text-xs text-(--color-accent)">{entry.period}</p>
              <p className="text-sm font-semibold text-(--color-ink)">{entry.role}</p>
              <p className="text-xs text-(--color-ink-soft)">{entry.company}</p>
              <p className="mt-1 text-xs leading-relaxed text-(--color-ink-faint)">
                {entry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {EARLIER.length > 0 && (
        <p className="mt-6 text-xs text-(--color-ink-faint)">
          +{EARLIER.length} earlier roles ({EARLIER[EARLIER.length - 1].period.split(' – ')[0]} –{' '}
          {EARLIER[0].period.split(' – ')[1]}): {EARLIER.map((e) => e.role).join(' · ')}
        </p>
      )}
    </div>
  )
}
