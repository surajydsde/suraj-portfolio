'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { showcaseHighlights, showcaseSteps } from '../data/showcase'

const CODE_SNIPPET = `# .github/workflows/deploy.yml (simplified)
name: build-and-deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    steps:
      - run: npm ci
      - run: npm run lint
      - run: npm test -- --ci
      - run: npm run build

      # RBAC-protected routes are guarded client-side
      # and re-checked by API middleware on every request.

      - name: Sync build to server
        run: rsync -az ./build/ $DEPLOY_HOST:/var/www/app

      - name: Reload Nginx (zero downtime)
        run: ssh $DEPLOY_HOST 'sudo nginx -s reload'`

export function TechnicalShowcase() {
  return (
    <section id="showcase" className="bg-(--color-bg-soft) px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="04 — Technical Showcase"
          title="How I ship: auth to production"
          description="A frontend authentication flow (MFA + RBAC) paired with a CI/CD pipeline that deploys straight to Nginx — the kind of system I've built and maintained at TCS and eClerx."
        />

        <div className="space-y-8">
          {showcaseSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--color-brand-soft) text-lg">
                  {step.icon}
                </span>
                {index < showcaseSteps.length - 1 && (
                  <span className="mt-1 w-px flex-1 bg-(--color-border)" />
                )}
              </div>
              <div className="pb-2">
                <span className="font-mono text-xs text-(--color-ink-faint)">0{index + 1}</span>
                <h3 className="text-base font-semibold text-(--color-ink)">{step.title}</h3>
                <p className="mt-1 max-w-xl text-sm text-(--color-ink-soft)">{step.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-(--color-surface) px-2.5 py-1 text-xs text-(--color-ink-soft)"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-10 overflow-hidden rounded-2xl border border-(--color-border) bg-[#0d0e14]"
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-3 font-mono text-xs text-white/40">deploy.yml</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-white/80">
            <code>{CODE_SNIPPET}</code>
          </pre>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {showcaseHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-5"
            >
              <div className="text-xl">{item.icon}</div>
              <h4 className="mt-2 text-sm font-semibold text-(--color-ink)">{item.title}</h4>
              <p className="mt-1 text-xs text-(--color-ink-soft)">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
