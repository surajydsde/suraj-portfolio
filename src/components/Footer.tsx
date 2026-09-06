import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#contact', label: 'Contact' },
]

const CONTACT_EMAIL = 'surajyadav.sde@gmail.com'

const SOCIAL_LINKS = [
  { href: 'https://github.com/surajydsde', label: 'GitHub', icon: FiGithub },
  { href: 'https://www.linkedin.com/in/surajyadavsde', label: 'LinkedIn', icon: FiLinkedin },
  { href: `mailto:${CONTACT_EMAIL}`, label: 'Email', icon: FiMail },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-(--color-border) bg-(--color-surface-raised)">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <p className="font-heading text-2xl font-bold text-(--color-ink)">Suraj Yadav</p>
            <p className="mt-1 text-sm text-(--color-ink-faint)">Frontend Engineer</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noreferrer'}
                aria-label={label}
                title={label}
                className="rounded-xl border border-(--color-border) bg-(--color-surface) p-2.5 text-(--color-ink-faint) transition-all duration-200 hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="animated-underline text-sm text-(--color-ink-faint) transition-colors hover:text-(--color-accent)"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="w-full border-t border-(--color-border) pt-6 text-center">
            <p className="text-xs text-(--color-ink-faint)">© {year} Suraj Yadav.</p>
            <p className="mt-1 text-xs text-(--color-ink-faint)">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="transition-colors hover:text-(--color-accent)"
              >
                Turning requirements into shipped products
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
