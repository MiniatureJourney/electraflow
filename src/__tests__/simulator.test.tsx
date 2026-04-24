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

test('SimulatorPage handles API response without reply', async () => {
  vi.mocked(global.fetch).mockResolvedValueOnce({
    json: () => Promise.resolve({}), // No reply property
  } as unknown as Response)

  render(<SimulatorPage />)
  
  const input = screen.getByPlaceholderText('Ask about Form 6, VVPAT, etc...')
  fireEvent.change(input, { target: { value: 'Empty Response' } })
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
  
  await waitFor(() => {
    expect(screen.getByText('No response.')).toBeInTheDocument()
  })
})

test('SimulatorPage handles API error', async () => {
  vi.mocked(global.fetch).mockRejectedValueOnce(new Error('Network error'))

  render(<SimulatorPage />)
  
  const input = screen.getByPlaceholderText('Ask about Form 6, VVPAT, etc...')
  fireEvent.change(input, { target: { value: 'Test Error' } })
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
  
  await waitFor(() => {
    expect(screen.getByText('Network error fetching AI response.')).toBeInTheDocument()
  })
})

test('SimulatorPage handleSend with empty query', () => {
  render(<SimulatorPage />)
  const sendBtn = screen.getByLabelText('Send Query')
  fireEvent.click(sendBtn)
  // Should return early and not add to history (only initial message)
  const messages = screen.getAllByText(/Hello! I am Electra/)
  expect(messages.length).toBe(1)
})

test('SimulatorPage voting state flips correctly', () => {
  render(<SimulatorPage />)
  const buttons = screen.getAllByRole('button')
  
  const candidateButton = buttons.find(b => b.className.includes('bg-blue-600'))
  if (candidateButton) {
    fireEvent.click(candidateButton)
  }
  
  expect(screen.getByText('Vote Cast Verification')).toBeInTheDocument()
  
  const resetButton = screen.getByText('Reset Simulator')
  fireEvent.click(resetButton)
  
  expect(screen.getByText('Select a candidate by pressing the blue button next to their symbol.')).toBeInTheDocument()
})
