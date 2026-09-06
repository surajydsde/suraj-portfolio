export interface Proficiency {
  label: string
  percent: number
}

export const proficiencies: Proficiency[] = [
  { label: 'React.js / Next.js / TypeScript', percent: 95 },
  { label: 'Frontend Architecture & Component Design', percent: 90 },
  { label: 'REST API Integration & Auth (MFA/RBAC)', percent: 85 },
  { label: 'Cloud & DevOps (AWS, Azure, Nginx, CI/CD)', percent: 80 },
]
