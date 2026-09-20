import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Netlify serves this app from the root domain, so base stays "/"
  // for both local dev and production builds.
  base: '/',
  plugins: [react(), tailwindcss()],
})
