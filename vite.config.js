import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/art-culture/',  // GitHub Pages requires repo name as base
  server: {
    port: 3010
  }
})
