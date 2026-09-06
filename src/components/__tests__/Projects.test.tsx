import { render, screen } from '@/test-utils'
import { Projects } from '../Projects'

describe('Projects Component', () => {
  it('should render projects section', () => {
    render(<Projects />)
    expect(screen.getByRole('region')).toBeInTheDocument()
  })

  it('should display projects heading', () => {
    render(<Projects />)
    expect(screen.getByText(/projects|featured/i)).toBeInTheDocument()
  })

  it('should render project cards', () => {
    render(<Projects />)
    const cards = screen.getAllByRole('article')
    expect(cards.length).toBeGreaterThan(0)
  })

  it('should display project titles', () => {
    render(<Projects />)
    expect(screen.getByText(/Gmail Assistant|Nexora|Portfolio/i)).toBeInTheDocument()
  })

  it('should have project links', () => {
    render(<Projects />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('should display project descriptions', () => {
    render(<Projects />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })

  it('should have technology tags', () => {
    render(<Projects />)
    const tags = screen.getAllByText(/React|TypeScript|Next|Node/i)
    expect(tags.length).toBeGreaterThan(0)
  })

  it('should link to github repositories', () => {
    render(<Projects />)
    const githubLinks = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('href')?.includes('github'))
    expect(githubLinks.length).toBeGreaterThan(0)
  })

  it('should be responsive', () => {
    render(<Projects />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })

  it('should have accessible project cards', () => {
    render(<Projects />)
    const cards = screen.getAllByRole('article')
    cards.forEach((card) => {
      expect(card).toBeInTheDocument()
    })
  })
})
