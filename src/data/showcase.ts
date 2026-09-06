export interface ShowcaseStep {
  icon: string
  title: string
  description: string
  tags: string[]
}

export const showcaseSteps: ShowcaseStep[] = [
  {
    icon: '🔐',
    title: 'Sign-In Request',
    description:
      'The user submits credentials from the React SPA; the app calls the auth API over HTTPS.',
    tags: ['React.js', 'REST API', 'HTTPS'],
  },
  {
    icon: '🧾',
    title: 'Multi-Factor Challenge',
    description:
      'The backend issues an MFA challenge. On success, a token carrying the session and role claims is returned.',
    tags: ['MFA', 'JWT', 'Session Management'],
  },
  {
    icon: '🛡️',
    title: 'Role-Based Access Control',
    description:
      'Frontend route guards and API middleware both check the token’s role claims before rendering or serving protected views.',
    tags: ['RBAC', 'Route Guards', 'Middleware'],
  },
  {
    icon: '⚙️',
    title: 'CI/CD Build & Test',
    description:
      'A push to main triggers the pipeline: install, lint, test, and build stages run before an artifact is produced.',
    tags: ['CI/CD', 'Git', 'Automated Testing'],
  },
  {
    icon: '🚀',
    title: 'Nginx Deployment',
    description:
      'Build artifacts are synced to the target environment and served through Nginx with a zero-downtime reload.',
    tags: ['Nginx', 'AWS EC2', 'Azure'],
  },
]

export const showcaseHighlights = [
  {
    icon: '⚡',
    title: 'Zero-downtime deploys',
    description: 'Nginx reload strategy keeps the app serving traffic through every release.',
  },
  {
    icon: '🛡️',
    title: 'Role-aware UI',
    description: 'MFA + RBAC decide what a user can see before a single component renders.',
  },
  {
    icon: '🔁',
    title: 'Ship on every push',
    description: 'CI/CD pipeline runs lint, test, and build on every merge to main.',
  },
]
