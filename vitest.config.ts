import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.ts'],
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/components/dashboard/**/*.tsx', 'src/app/(dashboard|simulator|timeline|onboarding|page)/**/*.tsx', 'src/app/page.tsx'],
      exclude: ['src/components/ui/**', 'src/app/layout.tsx', 'src/components/theme-provider.tsx'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
