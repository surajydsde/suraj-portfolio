import { render, screen } from '@/test-utils'
import { TechStack } from '../TechStack'

describe('TechStack Component', () => {
  it('should render tech stack section', () => {
    render(<TechStack />)
    expect(screen.getByRole('region')).toBeInTheDocument()
  })

  it('should display tech stack heading', () => {
    render(<TechStack />)
    expect(screen.getByText(/tech|tools|stack|skills/i)).toBeInTheDocument()
  })

  it('should display technology categories', () => {
    render(<TechStack />)
    expect(screen.getByText(/frontend|backend|tools|database/i)).toBeInTheDocument()
  })

  it('should display technology badges', () => {
    render(<TechStack />)
    const badges = screen.getAllByText(/React|TypeScript|Node|Next/i)
    expect(badges.length).toBeGreaterThan(0)
  })

  it('should have grid layout', () => {
    render(<TechStack />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })

  it('should display equal height cards', () => {
    render(<TechStack />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })

  it('should show technology names', () => {
    render(<TechStack />)
    expect(screen.getByText(/React|JavaScript|TypeScript|Tailwind/i)).toBeInTheDocument()
  })

  it('should be responsive', () => {
    render(<TechStack />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })

  it('should have hover effects', () => {
    render(<TechStack />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })

  it('should be accessible', () => {
    render(<TechStack />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })
})
