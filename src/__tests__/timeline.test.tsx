import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import TimelinePage from '@/app/timeline/page'

test('TimelinePage renders all election steps', () => {
  render(<TimelinePage />)
  expect(screen.getByText('Election Timeline')).toBeInTheDocument()
  expect(screen.getByText('Election Announcement')).toBeInTheDocument()
  expect(screen.getByText('Campaigning')).toBeInTheDocument()
  expect(screen.getByText('Counting & Results')).toBeInTheDocument()
})
