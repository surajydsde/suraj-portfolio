export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  achievement: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  accent: string
  featured?: boolean
  placeholder?: boolean
}

export const projects: Project[] = [
  {
    id: 'gmail-assistant',
    title: 'Gmail Assistant',
    subtitle: 'Executive Dashboard with AI Analysis',
    description:
      'A production-ready full-stack executive assistant dashboard that integrates with the Gmail API, analyzes emails every 3 hours, scores urgency, and prioritizes action items with an interactive dashboard.',
    achievement: '✓ Real-time email analysis & prioritization',
    tags: ['Node.js', 'Gmail API', 'Dashboard', 'AI Analysis'],
    githubUrl: 'https://github.com/surajydsde/gmail-assistant',
    accent: '#6d5efc',
    featured: true,
  },
  {
    id: 'rag-ai-agent',
    title: 'NorthStar AI Agent',
    subtitle: 'Agentic Workflow with Semantic Memory',
    description:
      'A personal AI agent project combining Retrieval-Augmented Generation (RAG) with a LangGraph-based agentic workflow and semantic memory, powered by Gemini LLM, enabling natural-language analysis of uploaded structured data (e.g., CSV datasets).',
    achievement: '✓ Agentic RAG workflow with semantic memory',
    tags: ['Gemini LLM', 'LangGraph', 'RAG', 'Semantic Memory'],
    githubUrl: 'https://github.com/surajydsde/northstar-ai',
    accent: '#22c55e',
    featured: true,
  },
  {
    id: 'suraj-portfolio',
    title: 'Personal Portfolio',
    subtitle: 'Modern Portfolio Website',
    description:
      'A professional portfolio website built with React, TypeScript, and Tailwind CSS featuring smooth animations, dark mode, and a responsive design showcasing projects and experience.',
    achievement: '✓ SEO-optimized & production-ready',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    githubUrl: 'https://github.com/surajydsde/suraj-portfolio',
    accent: '#17c3b2',
  },
]
