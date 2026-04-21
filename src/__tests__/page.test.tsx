import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import LandingPage from '@/app/page'

test('LandingPage renders hero content correctly', () => {
  render(<LandingPage />)
  expect(screen.getByText(/ElectraFlow is the smart, AI-powered platform/i)).toBeInTheDocument()
  expect(screen.getByText('Participate with Confidence.')).toBeInTheDocument()
  expect(screen.getByText('Start Your Voter Journey')).toBeInTheDocument()
})
