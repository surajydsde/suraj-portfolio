'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiGithub } from 'react-icons/fi'
import { BentoCard } from './BentoCard'
import { TypedText } from './TypedText'

const ROLES = ['Frontend Engineer', 'React.js Developer', 'Full-Stack Developer']

const STATS = [
  { icon: '⚡', value: '7+', label: 'Years Experience' },
  { icon: '🏢', value: '6', label: 'Companies' },
  { icon: '🚀', value: '50%+', label: 'Faster Delivery' },
  { icon: '☁️', value: 'AWS · Azure', label: 'Cloud Platforms' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="grid-bg relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_-10%,var(--color-brand-soft),transparent_55%)]"
      />

      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-(--color-border) bg-(--color-surface-raised) px-4 py-1.5 font-mono text-xs text-(--color-ink-soft)"
            >
              <span className="h-2 w-2 rounded-full bg-(--color-accent)" />
              Available for opportunities
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 h-8 font-mono text-lg font-medium text-(--color-accent) sm:text-xl"
            >
              <TypedText words={ROLES} />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-xl text-base text-(--color-ink-soft) sm:text-lg"
            >
              I design, build, and ship scalable web applications with React.js and Next.js —
              architecting frontends, wiring up auth and APIs, and deploying to production on AWS
              and Azure. Turning requirements into interfaces people actually use.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-(--color-accent) px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                View Projects
                <FiArrowRight />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-(--color-border) px-6 py-3 text-sm font-semibold text-(--color-ink-soft) transition-colors hover:border-(--color-accent) hover:text-(--color-ink)"
              >
                Get in Touch
              </a>
              <a
                href="https://github.com/surajydsde"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-(--color-ink-faint) transition-colors hover:text-(--color-accent)"
              >
                <FiGithub />
                GitHub ↗
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 flex items-center gap-4 text-xs text-(--color-ink-faint)"
            >
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-(--color-accent)" />
                Shipping daily
              </span>
              <a
                href="/resume/Suraj-Yadav-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-(--color-accent)"
              >
                <FiDownload size={12} />
                Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto flex justify-center lg:justify-end"
          >
            <div className="animate-float relative">
              <div className="profile-ring absolute -inset-1.5 rounded-full" />
              <div className="relative flex h-56 w-56 items-center justify-center overflow-hidden rounded-full bg-(--color-bg) p-1.5 sm:h-64 sm:w-64">
                <Image
                  src="/avatar.png"
                  alt="Suraj Yadav"
                  width={256}
                  height={256}
                  className="h-full w-full rounded-full object-cover"
                  priority
                />
              </div>
              <span className="absolute right-2 -bottom-3 rounded-full border border-(--color-border) bg-(--color-surface-raised) px-3 py-1 font-mono text-xs font-medium whitespace-nowrap text-(--color-ink-soft) shadow-sm">
                🎯 Shipping daily
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <BentoCard
              key={stat.label}
              className="glass rounded-2xl p-5 text-center transition-transform hover:-translate-y-1"
            >
              <div className="text-xl">{stat.icon}</div>
              <div className="font-heading mt-2 text-lg font-bold text-(--color-ink)">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-(--color-ink-faint)">{stat.label}</div>
            </BentoCard>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-14 flex flex-col items-center gap-2 transition-opacity hover:opacity-70"
        >
          <span className="font-mono text-xs tracking-widest text-(--color-ink-faint) uppercase">
            Scroll
          </span>
          <span className="flex h-8 w-5 items-start justify-center rounded-full border border-(--color-border) p-1">
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="h-1.5 w-1.5 rounded-full bg-(--color-accent)"
            />
          </span>
        </motion.a>
      </div>
    </section>
  )
}
