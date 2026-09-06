'use client'

import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { BentoCard } from './BentoCard'
import { projects } from '../data/projects'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03 — Projects"
          title="Things I've built"
          description="A mix of full-stack apps, cloud deployments, and AI experiments."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <BentoCard className="flex h-full flex-col rounded-2xl border border-(--color-border) bg-(--color-surface-raised) p-6 transition-all duration-300 hover:border-(--color-accent)/40">
                <div className="mb-4 flex items-start justify-between gap-2">
                  <div>
                    {project.featured && (
                      <span className="mb-2 inline-block rounded-full bg-(--color-brand-soft) px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wide text-(--color-accent) uppercase">
                        Featured
                      </span>
                    )}
                    <h3 className="font-heading text-xl font-bold text-(--color-ink)">
                      {project.title}
                    </h3>
                    <p className="mt-0.5 font-mono text-xs text-(--color-ink-faint)">
                      {project.subtitle}
                    </p>
                  </div>
                  {project.placeholder && (
                    <span className="shrink-0 rounded-full bg-(--color-bg-soft) px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide text-(--color-ink-faint) uppercase">
                      Sample
                    </span>
                  )}
                </div>

                <p className="flex-1 text-sm text-(--color-ink-soft)">{project.description}</p>

                <p className="mt-3 text-xs font-medium text-(--color-accent)">
                  {project.achievement}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="skill-badge rounded-lg border border-(--color-border) bg-(--color-surface) px-2.5 py-1 font-mono text-xs text-(--color-ink-soft)"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-4 border-t border-(--color-border) pt-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-(--color-ink-soft) transition-colors hover:text-(--color-accent)"
                    >
                      <FiGithub /> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-(--color-ink-soft) transition-colors hover:text-(--color-accent)"
                    >
                      <FiExternalLink /> Live
                    </a>
                  )}
                </div>
              </BentoCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/surajydsde?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-(--color-accent) hover:underline"
          >
            View all on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
