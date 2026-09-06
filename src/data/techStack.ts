export interface TechCategory {
  id: string
  title: string
  icon: string
  items: string[]
}

export const techStack: TechCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    icon: '⌨️',
    items: ['JavaScript (ES6+)', 'TypeScript', 'PHP', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    icon: '🧩',
    items: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'Tailwind CSS',
      'Bootstrap',
      'SASS/SCSS',
      'LESS',
      'jQuery',
      'Lit-Element',
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    icon: '☁️',
    items: ['AWS (EC2, S3, RDS, SES)', 'Azure', 'NGINX', 'Git', 'GitHub', 'CI/CD Pipelines'],
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    icon: '🤖',
    items: ['AI Agents', 'AI Engineering', 'GitHub Copilot', 'Claude', 'ChatGPT'],
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    icon: '🗄️',
    items: ['MongoDB', 'MySQL', 'AWS RDS', 'AWS S3'],
  },
  {
    id: 'tools',
    title: 'Tools & Practices',
    icon: '🛠️',
    items: [
      'REST API Design',
      'MFA / RBAC',
      'Mocha · Chai · Sinon',
      'Agile / Scrum',
      'Code Reviews',
      'Performance Optimization',
    ],
  },
]
