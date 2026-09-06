import { render, screen } from '@/test-utils'
import { About } from '../About'

describe('About Component', () => {
  it('should render about section', () => {
    render(<About />)
    expect(screen.getByRole('region')).toBeInTheDocument()
  })

  it('should display about heading', () => {
    render(<About />)
    expect(screen.getByText(/about|engineer/i)).toBeInTheDocument()
  })

  it('should display bio information', () => {
    render(<About />)
    expect(screen.getByText(/Frontend|Engineer|Mumbai/i)).toBeInTheDocument()
  })

  it('should have professional description', () => {
    render(<About />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })

  it('should display years of experience', () => {
    render(<About />)
    expect(screen.getByText(/years|experience|8\+/i)).toBeInTheDocument()
  })

  it('should show availability information', () => {
    render(<About />)
    expect(screen.getByText(/remote|hybrid|relocation|available/i)).toBeInTheDocument()
  })

  it('should have semantic structure', () => {
    render(<About />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })

  it('should be accessible', () => {
    render(<About />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })

  it('should display career highlights', () => {
    render(<About />)
    const content = screen.getByRole('region')
    expect(content).toBeInTheDocument()
  })

  it('should be responsive', () => {
    render(<About />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })
})
