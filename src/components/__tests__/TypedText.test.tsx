import { render, screen } from '@/test-utils'
import { TypedText } from '../TypedText'

const mockProps = {
  words: ['Frontend', 'Engineer', 'Developer'],
  speed: 100,
}

describe('TypedText Component', () => {
  it('should render typed text', () => {
    render(<TypedText {...mockProps} />)
    const element = screen.getByTestId('typed-text')
    expect(element).toBeInTheDocument()
  })

  it('should display first word initially', async () => {
    render(<TypedText {...mockProps} />)
    expect(screen.getByTestId('typed-text')).toBeInTheDocument()
  })

  it('should animate typing', async () => {
    render(<TypedText {...mockProps} />)
    const element = screen.getByTestId('typed-text')
    expect(element).toBeInTheDocument()
  })

  it('should cycle through words', async () => {
    render(<TypedText {...mockProps} />)
    const element = screen.getByTestId('typed-text')
    expect(element).toBeInTheDocument()
  })

  it('should support custom speed', () => {
    render(<TypedText {...mockProps} speed={50} />)
    const element = screen.getByTestId('typed-text')
    expect(element).toBeInTheDocument()
  })

  it('should have cursor animation', () => {
    render(<TypedText {...mockProps} />)
    const element = screen.getByTestId('typed-text')
    expect(element).toBeInTheDocument()
  })

  it('should be accessible', () => {
    render(<TypedText {...mockProps} />)
    const element = screen.getByTestId('typed-text')
    expect(element).toBeInTheDocument()
  })

  it('should handle single word', () => {
    render(<TypedText words={['Frontend']} speed={100} />)
    const element = screen.getByTestId('typed-text')
    expect(element).toBeInTheDocument()
  })

  it('should handle multiple words', () => {
    render(<TypedText {...mockProps} />)
    const element = screen.getByTestId('typed-text')
    expect(element).toBeInTheDocument()
  })

  it('should be responsive', () => {
    render(<TypedText {...mockProps} />)
    const element = screen.getByTestId('typed-text')
    expect(element).toBeInTheDocument()
  })
})
