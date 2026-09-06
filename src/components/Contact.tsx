'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SectionHeading } from './SectionHeading'

const CONTACT_EMAIL = 'surajyadav.sde@gmail.com'

const SOCIAL_LINKS = [
  {
    label: 'Email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: FiMail,
  },
  {
    label: 'GitHub',
    value: 'github.com/surajydsde',
    href: 'https://github.com/surajydsde',
    icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/surajyadavsde',
    href: 'https://www.linkedin.com/in/surajyadavsde',
    icon: FiLinkedin,
  },
]

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading
          eyebrow="05 — Contact"
          title="Let's build something remarkable"
          description="Whether you're looking to hire a frontend engineer, collaborate on a project, or just want to talk shop about React and web performance — my inbox is always open."
        />

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center gap-3 rounded-2xl bg-(--color-accent) px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl hover:shadow-blue-500/25"
        >
          <FiMail />
          Send me an email
        </motion.a>

        <p className="mt-4 text-sm text-(--color-ink-faint)">
          Based in Mumbai, India · Open to remote, hybrid &amp; relocation
        </p>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {SOCIAL_LINKS.map(({ label, value, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noreferrer'}
                className="flex items-center gap-4 rounded-2xl border border-(--color-border) bg-(--color-surface) p-4 text-left transition-colors hover:border-(--color-brand) text-wrap"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--color-brand-soft) text-(--color-brand)">
                  <Icon size={18} />
                </span>
                <span>
                  <span className="block font-mono text-xs font-medium tracking-wide text-(--color-ink-faint) uppercase">
                    {label}
                  </span>
                  <span className="block text-sm font-medium text-(--color-ink)">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
