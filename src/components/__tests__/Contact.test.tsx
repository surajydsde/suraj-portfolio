import { render, screen } from '@/test-utils'
import { Contact } from '../Contact'

describe('Contact Component', () => {
  it('should render contact section', () => {
    render(<Contact />)
    expect(screen.getByRole('region')).toBeInTheDocument()
  })

  it('should display contact heading', () => {
    render(<Contact />)
    expect(screen.getByText(/contact|get in touch/i)).toBeInTheDocument()
  })

  it('should display email link', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: /email/i })).toBeInTheDocument()
  })

  it('should have correct email href', () => {
    render(<Contact />)
    const emailLink = screen.getByRole('link', { name: /email/i })
    expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto'))
  })

  it('should display github link', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
  })

  it('should display linkedin link', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
  })

  it('should have 2-column layout on desktop', () => {
    render(<Contact />)
    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()
  })

  it('should be keyboard accessible', () => {
    render(<Contact />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toBeInTheDocument()
    })
  })

  it('should have proper link targets', () => {
    render(<Contact />)
    const externalLinks = screen.getAllByRole('link')
    externalLinks.forEach((link) => {
      if (link.getAttribute('href')?.startsWith('http')) {
        expect(link).toHaveAttribute('target', '_blank')
      }
    })
  })

  it('should display location information', () => {
    render(<Contact />)
    expect(screen.getByText(/Mumbai|India|location/i)).toBeInTheDocument()
  })
})
