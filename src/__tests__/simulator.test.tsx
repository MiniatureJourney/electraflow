import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { expect, test, vi, beforeEach } from 'vitest'
import SimulatorPage from '@/app/simulator/page'

// Mock fetch globally
global.fetch = vi.fn()

beforeEach(() => {
  vi.clearAllMocks()
})

test('SimulatorPage API chat binds properly', async () => {
  vi.mocked(global.fetch).mockResolvedValueOnce({
    json: () => Promise.resolve({ reply: "Mocked AI reply" }),
  } as unknown as Response)

  render(<SimulatorPage />)
  expect(screen.getByText('Simulator & Query Agent')).toBeInTheDocument()
  
  const input = screen.getByPlaceholderText('Ask about Form 6, VVPAT, etc...')
  fireEvent.change(input, { target: { value: 'What is VVPAT?' } })
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
  
  expect(screen.getByText('Electra is thinking...')).toBeInTheDocument()
  
  await waitFor(() => {
    expect(screen.getByText('Mocked AI reply')).toBeInTheDocument()
  })
})

test('SimulatorPage voting state flips correctly', () => {
  render(<SimulatorPage />)
  const buttons = screen.getAllByRole('button')
  
  // The first 3 or 4 buttons are nav/etc, target a blue vote button.
  // Using generic click on the third button (should be Candidate A's vote button)
  const candidateButton = buttons.find(b => b.className.includes('bg-blue-600'))
  if (candidateButton) {
    fireEvent.click(candidateButton)
  }
  
  expect(screen.getByText('Vote Cast Verification')).toBeInTheDocument()
  
  const resetButton = screen.getByText('Reset Simulator')
  fireEvent.click(resetButton)
  
  expect(screen.getByText('Select a candidate by pressing the blue button next to their symbol.')).toBeInTheDocument()
})
