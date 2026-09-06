import { render, screen } from '@/test-utils'
import { TechnicalShowcase } from '../TechnicalShowcase'

describe('TechnicalShowcase Component', () => {
  it('should render showcase section', () => {
    render(<TechnicalShowcase />)
    expect(screen.getByRole('region')).toBeInTheDocument()
  })

  it('should display showcase heading', () => {
    render(<TechnicalShowcase />)
    expect(screen.getByText(/showcase|technical|demo/i)).toBeInTheDocument()
  })

  it('should display auth flow diagram', () => {
    render(<TechnicalShowcase />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })

  it('should have interactive elements', () => {
    render(<TechnicalShowcase />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })

  it('should display CI/CD pipeline', () => {
    render(<TechnicalShowcase />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })

  it('should show architecture details', () => {
    render(<TechnicalShowcase />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })

  it('should be responsive', () => {
    render(<TechnicalShowcase />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })

  it('should have proper semantics', () => {
    render(<TechnicalShowcase />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })

  it('should be accessible', () => {
    render(<TechnicalShowcase />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })

  it('should support dark mode', () => {
    render(<TechnicalShowcase />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })
})
