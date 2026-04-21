import { render, screen } from '@testing-library/react'
import { expect, test, describe } from 'vitest'
import DashboardPage from '@/app/dashboard/page'
import { WelcomeSection } from '@/components/dashboard/WelcomeSection'
import { InsightsPanel } from '@/components/dashboard/InsightsPanel'
import { ReadinessScore } from '@/components/dashboard/ReadinessScore'

describe('Dashboard Component Suite', () => {
  test('DashboardPage renders parent layout accurately', () => {
    render(<DashboardPage />)
    expect(screen.getByText(/Welcome back, Aditya/i)).toBeInTheDocument()
    expect(screen.getByText('14 days')).toBeInTheDocument()
  })

  test('WelcomeSection assigns DOM classes properly', () => {
    render(<WelcomeSection userName="Tester" electionPhase="Voting" daysLeft={5} />)
    expect(screen.getByText('Welcome back, Tester')).toBeInTheDocument()
    expect(screen.getByText('Voting')).toBeInTheDocument()
    expect(screen.getByText('5 days')).toBeInTheDocument()
  })

  test('InsightsPanel maps timelines without error', () => {
    render(<InsightsPanel />)
    expect(screen.getByText('Constituency Timeline')).toBeInTheDocument()
    expect(screen.getByText('Elections Announced')).toBeInTheDocument()
    expect(screen.getByText('April 10')).toBeInTheDocument()
  })

  test('ReadinessScore handles variable data', () => {
    render(<ReadinessScore learningScore={85} />)
    expect(screen.getByText('85%')).toBeInTheDocument()
  })
})
