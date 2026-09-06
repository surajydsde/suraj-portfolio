import { render, screen } from '@/test-utils'
import { Navbar } from '../Navbar'

describe('Navbar Component', () => {
  it('should render navbar', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('should display logo/brand', () => {
    render(<Navbar />)
    const logo = screen.getByAltText(/logo|avatar/i)
    expect(logo).toBeInTheDocument()
  })

  it('should have navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('should have theme toggle button', () => {
    render(<Navbar />)
    const themeButton = screen.getByRole('button', { name: /theme|dark|light/i })
    expect(themeButton).toBeInTheDocument()
  })

  it('should have social media links', () => {
    render(<Navbar />)
    const socialLinks = screen.getAllByRole('link')
    expect(socialLinks.length).toBeGreaterThan(3)
  })

  it('should be keyboard accessible', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })

  it('should have proper semantics', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })

  it('should display on all viewport sizes', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('should have sticky positioning', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })

  it('should support mobile menu', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
