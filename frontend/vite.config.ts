import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const siteConfig = JSON.parse(
  readFileSync(fileURLToPath(new URL('./site.config.json', import.meta.url)), 'utf-8'),
)
const siteUrl = (process.env.VITE_SITE_URL || siteConfig.siteUrl).replace(/\/$/, '')

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inject-site-url',
      transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl),
    },
  ],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
