#!/usr/bin/env node
// Erzeugt public/robots.txt und public/sitemap.xml aus site.config.json.
// VITE_SITE_URL als Env-Var überschreibt den Wert (z.B. auf Scalingo), ohne
// site.config.json anzufassen. Läuft automatisch vor `dev` und `build`.
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const scriptDir = import.meta.dirname
const siteConfig = JSON.parse(readFileSync(path.join(scriptDir, '../site.config.json'), 'utf-8'))
const siteUrl = (process.env.VITE_SITE_URL || siteConfig.siteUrl).replace(/\/$/, '')
const publicDir = path.join(scriptDir, '../public')

writeFileSync(
  path.join(publicDir, 'robots.txt'),
  `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Googlebot
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
)

writeFileSync(
  path.join(publicDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image><image:loc>${siteUrl}/melanie-berner-nicole-wyss-4x3.jpg</image:loc></image:image>
    <image:image><image:loc>${siteUrl}/melanie-berner-nicole-wyss-1x1.jpg</image:loc></image:image>
    <image:image><image:loc>${siteUrl}/melanie-berner-nicole-wyss-16x9.jpg</image:loc></image:image>
  </url>
  <url>
    <loc>${siteUrl}/datenschutz</loc>
    <changefreq>yearly</changefreq>
    <priority>0.2</priority>
  </url>
  <url>
    <loc>${siteUrl}/impressum</loc>
    <changefreq>yearly</changefreq>
    <priority>0.2</priority>
  </url>
</urlset>
`,
)

console.log(`[generate-public-seo] siteUrl = ${siteUrl}`)
