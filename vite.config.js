
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sunny-star-landscapingwebsite/',
  plugins: [react()],
  server: {
    port: 5173,
  },
})
