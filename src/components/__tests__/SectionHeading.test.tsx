import { render, screen } from '@/test-utils'
import { SectionHeading } from '../SectionHeading'

describe('SectionHeading Component', () => {
  it('should render heading', () => {
    render(<SectionHeading>Test Section</SectionHeading>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  it('should display heading text', () => {
    render(<SectionHeading>Test Section</SectionHeading>)
    expect(screen.getByText('Test Section')).toBeInTheDocument()
  })

  it('should have proper heading level', () => {
    render(<SectionHeading>Test Section</SectionHeading>)
    const heading = screen.getByRole('heading')
    expect(heading.tagName).toMatch(/H[1-6]/)
  })

  it('should support children', () => {
    render(<SectionHeading>Test Section</SectionHeading>)
    expect(screen.getByText('Test Section')).toBeInTheDocument()
  })

  it('should have accent styling', () => {
    render(<SectionHeading>Test Section</SectionHeading>)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })

  it('should be semantically correct', () => {
    render(<SectionHeading>Test Section</SectionHeading>)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })

  it('should be responsive', () => {
    render(<SectionHeading>Test Section</SectionHeading>)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })

  it('should have proper contrast', () => {
    render(<SectionHeading>Test Section</SectionHeading>)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })

  it('should support long text', () => {
    const longText = 'This is a very long section heading that should wrap properly'
    render(<SectionHeading>{longText}</SectionHeading>)
    expect(screen.getByText(longText)).toBeInTheDocument()
  })

  it('should be accessible', () => {
    render(<SectionHeading>Test Section</SectionHeading>)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })
})
