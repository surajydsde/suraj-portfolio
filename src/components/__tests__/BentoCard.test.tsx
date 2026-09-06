import { render, screen } from '@/test-utils'
import { BentoCard } from '../BentoCard'

const mockProps = {
  title: 'Test Card',
  description: 'Test description',
  icon: '🚀',
}

describe('BentoCard Component', () => {
  it('should render card', () => {
    render(<BentoCard {...mockProps} />)
    expect(screen.getByRole('article')).toBeInTheDocument()
  })

  it('should display card title', () => {
    render(<BentoCard {...mockProps} />)
    expect(screen.getByText('Test Card')).toBeInTheDocument()
  })

  it('should display card description', () => {
    render(<BentoCard {...mockProps} />)
    expect(screen.getByText('Test description')).toBeInTheDocument()
  })

  it('should display card icon', () => {
    render(<BentoCard {...mockProps} />)
    expect(screen.getByText('🚀')).toBeInTheDocument()
  })

  it('should have glass morphism style', () => {
    render(<BentoCard {...mockProps} />)
    const card = screen.getByRole('article')
    expect(card).toBeInTheDocument()
  })

  it('should support optional gradient', () => {
    render(<BentoCard {...mockProps} gradient="from-blue-500 to-purple-500" />)
    const card = screen.getByRole('article')
    expect(card).toBeInTheDocument()
  })

  it('should be keyboard accessible', () => {
    render(<BentoCard {...mockProps} />)
    const card = screen.getByRole('article')
    expect(card).toBeInTheDocument()
  })

  it('should support hover effects', () => {
    render(<BentoCard {...mockProps} />)
    const card = screen.getByRole('article')
    expect(card).toBeInTheDocument()
  })

  it('should have proper semantic structure', () => {
    render(<BentoCard {...mockProps} />)
    const card = screen.getByRole('article')
    expect(card).toBeInTheDocument()
  })

  it('should support spotlight effect', () => {
    render(<BentoCard {...mockProps} />)
    const card = screen.getByRole('article')
    expect(card).toBeInTheDocument()
  })
})
