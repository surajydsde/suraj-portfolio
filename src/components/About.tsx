'use client'

import { motion } from 'framer-motion'
import { BentoCard } from './BentoCard'
import { Experience } from './Experience'

const CATEGORIES = [
  {
    title: 'Frontend Development',
    stack: 'React.js · Next.js · TypeScript · Tailwind CSS · HTML5/CSS3',
  },
  {
    title: 'Backend & APIs',
    stack: 'Node.js · Express.js · PHP · REST APIs',
  },
  {
    title: 'Cloud & DevOps',
    stack: 'AWS (EC2, S3, RDS) · Azure · Nginx · CI/CD · Git',
  },
  {
    title: 'Databases & Testing',
    stack: 'MongoDB · MySQL · Mocha · Chai · Sinon',
  },
]

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="font-mono text-sm font-medium tracking-widest text-(--color-brand) uppercase">
            01 — About
          </span>
          <h2 className="font-heading mt-3 text-3xl font-bold text-(--color-ink) sm:text-4xl">
            Engineering reliable frontends, <span className="text-gradient">end to end</span>
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 text-base text-(--color-ink-soft)"
            >
              <p>
                I&apos;m Suraj Yadav, a Frontend Engineer based in Mumbai, India, with 7+ years of
                experience designing, developing, and delivering scalable web applications with
                React.js, Next.js, and modern JavaScript/TypeScript. I care about frontend
                architecture, component-based development, and building things that hold up in
                production — not just in a demo.
              </p>
              <p>
                Beyond the UI layer, I&apos;ve implemented authentication and authorization (MFA,
                RBAC), integrated REST APIs, configured CI/CD pipelines, and deployed applications
                on Nginx across AWS and Azure. I&apos;ve also built full-stack features end-to-end
                using Node.js, Express.js, and PHP where the job called for it.
              </p>
              <p>
                Currently exploring how AI agents and LLM tooling (GitHub Copilot, Claude, ChatGPT)
                fit into everyday engineering workflows — from automating repetitive testing to
                speeding up development itself.
              </p>
            </motion.div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {CATEGORIES.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="h-full"
                >
                  <BentoCard className="glass h-full rounded-xl p-4">
                    <h3 className="mb-1 text-sm font-semibold text-(--color-ink)">
                      {category.title}
                    </h3>
                    <p className="font-mono text-xs leading-relaxed text-(--color-ink-faint)">
                      {category.stack}
                    </p>
                  </BentoCard>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Experience />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
