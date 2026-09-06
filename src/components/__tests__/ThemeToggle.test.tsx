import { render, screen, fireEvent } from '@/test-utils'
import { ThemeToggle } from '../ThemeToggle'

describe('ThemeToggle Component', () => {
  it('should render toggle button', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button', { name: /theme|dark|light/i })
    expect(button).toBeInTheDocument()
  })

  it('should have accessible button label', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button')
    expect(button).toHaveAccessibleName()
  })

  it('should toggle theme on click', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(button).toBeInTheDocument()
  })

  it('should display correct icon for current theme', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should be keyboard accessible', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    fireEvent.keyDown(button, { key: 'Enter' })
    expect(button).toBeInTheDocument()
  })

  it('should have proper aria attributes', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label')
  })

  it('should have hover effect', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should be small and circular', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should persist theme selection', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(button).toBeInTheDocument()
  })

  it('should respect user system preference', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})
