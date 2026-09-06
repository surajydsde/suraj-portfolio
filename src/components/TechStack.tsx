'use client'

import { motion } from 'framer-motion'
import { BentoCard } from './BentoCard'
import { techStack } from '../data/techStack'
import { proficiencies } from '../data/proficiencies'
import { SectionHeading } from './SectionHeading'

export function TechStack() {
  return (
    <section id="stack" className="bg-(--color-surface-raised) px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="02 — Tech Stack"
          title="Tools of the trade"
          description="Technologies I use across frontend, backend, cloud, and AI tooling."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="h-full"
            >
              <BentoCard className="h-full rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 transition-all duration-300 hover:border-(--color-accent)/40">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-base font-semibold text-(--color-ink)">{category.title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="skill-badge rounded-lg border border-(--color-border) bg-(--color-surface-raised) px-2.5 py-1 font-mono text-xs text-(--color-ink-soft)"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </BentoCard>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="mb-8 text-center font-mono text-sm font-medium tracking-widest text-(--color-ink-faint) uppercase">
            Core Proficiencies
          </h3>
          <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {proficiencies.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium text-(--color-ink)">{item.label}</span>
                  <span className="font-mono text-(--color-ink-faint)">{item.percent}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-(--color-border)">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percent}%` }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, delay: index * 0.08 }}
                    className="h-full rounded-full bg-(--color-accent)"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
