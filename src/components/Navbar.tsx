'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi'
import { ThemeToggle } from './ThemeToggle'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#contact', label: 'Contact' },
]

const SOCIAL_LINKS = [
  { href: 'https://github.com/surajydsde', label: 'GitHub', icon: FiGithub },
  { href: 'https://www.linkedin.com/in/surajyadavsde', label: 'LinkedIn', icon: FiLinkedin },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        isScrolled
          ? 'border-(--color-border) bg-(--color-bg)/80 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center transition-opacity hover:opacity-80"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/avatar.png"
            alt="Suraj Yadav"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
            priority
          />
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="animated-underline text-sm font-medium text-(--color-ink-soft) transition-colors hover:text-(--color-ink)"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-1 md:flex">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="p-2 text-(--color-ink-faint) transition-colors hover:text-(--color-accent)"
            >
              <Icon size={16} />
            </a>
          ))}
          <span className="mx-1 h-5 w-px bg-(--color-border)" />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) text-(--color-ink)"
          >
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-(--color-border) bg-(--color-bg) px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-(--color-ink-soft) hover:text-(--color-accent)"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 border-t border-(--color-border) pt-4">
              {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-xl border border-(--color-border) p-2.5 text-(--color-ink-faint) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
