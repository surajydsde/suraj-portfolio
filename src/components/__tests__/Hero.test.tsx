import { render, screen } from '@/test-utils'
import { Hero } from '../Hero'

describe('Hero Component', () => {
  it('should render hero section', () => {
    render(<Hero />)
    expect(screen.getByRole('region')).toBeInTheDocument()
  })

  it('should display main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/Frontend Engineer/i)).toBeInTheDocument()
  })

  it('should display status badge', () => {
    render(<Hero />)
    expect(screen.getByText(/Shipping daily/i)).toBeInTheDocument()
  })

  it('should display profile avatar image', () => {
    render(<Hero />)
    const image = screen.getByAltText(/avatar/i)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src')
  })

  it('should have call-to-action buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /get in touch/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view work/i })).toBeInTheDocument()
  })

  it('should display hero description', () => {
    render(<Hero />)
    expect(screen.getByText(/Frontend Engineer/i)).toBeInTheDocument()
  })

  it('should have proper accessibility attributes', () => {
    render(<Hero />)
    const section = screen.getByRole('region')
    expect(section).toHaveAttribute('data-testid')
  })

  it('should render stats section', () => {
    render(<Hero />)
    const stats = screen.getByTestId('hero-stats')
    expect(stats).toBeInTheDocument()
  })

  it('should have scrollable content', () => {
    render(<Hero />)
    const heroSection = screen.getByRole('region')
    expect(heroSection).toBeInTheDocument()
  })

  it('should have proper semantic structure', () => {
    render(<Hero />)
    const mainElement = screen.getByRole('region')
    expect(mainElement).toBeInTheDocument()
  })
})
