import 'dotenv/config'
import path from 'path'
import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import testimonialsRouter from './routes/testimonials'
import { errorHandler } from './middleware/errorHandler'

const app = express()
const port = process.env.PORT || 3001

app.set('trust proxy', 1)
app.disable('x-powered-by')
app.use(compression())

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        // styled-components injiziert Styles inline, daher unsafe-inline.
        styleSrc: ["'self'", "'unsafe-inline'"],
        fontSrc: ["'self'"],
        // blob: braucht die Bildvorschau beim Formular-Upload (createObjectURL).
        imgSrc: ["'self'", 'data:', 'blob:'],
        connectSrc: ["'self'"],
        frameAncestors: ["'none'"],
      },
    },
  }),
)

const WINDOW_MS = 15 * 60 * 1000
const globalLimiter = rateLimit({ windowMs: WINDOW_MS, max: 200 })
// Eigenes, engeres Limit fürs Formular: verhindert Mail-Spam über den einzigen
// Endpunkt, ohne normale Nutzung einzuschränken.
const testimonialLimiter = rateLimit({ windowMs: WINDOW_MS, max: 10 })

app.use(express.json({ limit: '3mb' }))
app.use('/api/', globalLimiter)
app.use('/api/v1/testimonials', testimonialLimiter)

app.use('/api/v1', testimonialsRouter)

if (process.env.NODE_ENV === 'production') {
  const staticDir = path.resolve(__dirname, '../../frontend/dist')
  app.use(express.static(staticDir))
  app.get('*', (_req, res) => {
    res.sendFile(path.join(staticDir, 'index.html'))
  })
}

app.use(errorHandler)

const server = app.listen(port, () => {
  console.log(`berner-wyss2027 API running on port ${port}`)
})

const shutdown = () => {
  server.close(() => process.exit(0))
}

process.on('SIGTERM', shutdown)
process.on('SIGINT', shutdown)
