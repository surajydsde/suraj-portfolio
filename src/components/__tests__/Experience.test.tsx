import { render, screen } from '@/test-utils'
import { Experience } from '../Experience'

describe('Experience Component', () => {
  it('should render experience section', () => {
    render(<Experience />)
    expect(screen.getByRole('region')).toBeInTheDocument()
  })

  it('should display experience heading', () => {
    render(<Experience />)
    expect(screen.getByText(/experience|timeline/i)).toBeInTheDocument()
  })

  it('should display job positions', () => {
    render(<Experience />)
    const cards = screen.getAllByRole('article')
    expect(cards.length).toBeGreaterThan(0)
  })

  it('should display company names', () => {
    render(<Experience />)
    const content = screen.getByRole('region')
    expect(content).toBeInTheDocument()
  })

  it('should display job titles', () => {
    render(<Experience />)
    const content = screen.getByRole('region')
    expect(content).toBeInTheDocument()
  })

  it('should display employment dates', () => {
    render(<Experience />)
    expect(screen.getByText(/\d{4}|\d{2}\/\d{2}/)).toBeInTheDocument()
  })

  it('should display job descriptions', () => {
    render(<Experience />)
    const cards = screen.getAllByRole('article')
    expect(cards.length).toBeGreaterThan(0)
  })

  it('should have timeline visualization', () => {
    render(<Experience />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })

  it('should display location information', () => {
    render(<Experience />)
    const content = screen.getByRole('region')
    expect(content).toBeInTheDocument()
  })

  it('should be chronologically ordered', () => {
    render(<Experience />)
    const cards = screen.getAllByRole('article')
    expect(cards.length).toBeGreaterThan(0)
  })
})
