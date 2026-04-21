import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import OnboardingPage from '@/app/onboarding/page'

// mock next router
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}))

test('OnboardingPage navigates through steps', () => {
  render(<OnboardingPage />)
  expect(screen.getByText('Personalize Your Journey')).toBeInTheDocument()
  
  // Step 1: Personal Details
  expect(screen.getByText('Personal Details')).toBeInTheDocument()
  const nameInput = screen.getByPlaceholderText('E.g. Aditya Sharma')
  fireEvent.change(nameInput, { target: { value: 'Test User' } })
  const ageInput = screen.getByPlaceholderText('18')
  fireEvent.change(ageInput, { target: { value: '25' } })

  // click continue
  const continueBtn = screen.getByText('Continue')
  fireEvent.click(continueBtn)
  
  // Step 2: Location Info
  expect(screen.getByText('Location Info')).toBeInTheDocument()
  const constituencyInput = screen.getByPlaceholderText('E.g. Mumbai South')
  fireEvent.change(constituencyInput, { target: { value: 'Pune' } })
  
  // click back once to cover handleBack logic
  const backBtn = screen.getByText('Back')
  fireEvent.click(backBtn)
  expect(screen.getByText('Personal Details')).toBeInTheDocument()
  fireEvent.click(continueBtn) // go to step 2 again
  fireEvent.click(continueBtn) // go to step 3

  // Step 3
  expect(screen.getByText('Voter Readiness')).toBeInTheDocument()
  const switchEls = screen.getAllByRole('switch')
  fireEvent.click(switchEls[0])
  
  fireEvent.click(continueBtn) // go to step 4
  
  // Step 4
  expect(screen.getByText('Preferences')).toBeInTheDocument()
  const switchElsFinal = screen.getAllByRole('switch')
  fireEvent.click(switchElsFinal[0])
  
  const finishBtn = screen.getByText('Complete Profile')
  fireEvent.click(finishBtn) // triggers router.push
})
