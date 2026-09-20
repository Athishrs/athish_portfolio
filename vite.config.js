import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves this app from /athish_portfolio/, so production
  // builds need that base path. Local dev stays at "/" so `npm run dev`
  // works at the plain http://localhost:5173/ without the prefix.
  base: command === 'build' ? '/athish_portfolio/' : '/',
  plugins: [react(), tailwindcss()],
}))
