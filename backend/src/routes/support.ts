import { Router } from 'express'
import { z } from 'zod'
import { validate } from '../middleware/validate'
import { sendMail } from '../services/mail'
import { AppError, ErrorCode } from '../errors'

const router = Router()

const ALLOWED_MIMES: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
}
const MAX_IMAGE_BYTES = 2 * 1024 * 1024 // 2 MB

const supportSchema = z
  .object({
    firstName: z.string().trim().min(1).max(100),
    lastName: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(200),
    campaign: z.boolean(),
    publicSupport: z.boolean(),
    role: z.string().trim().max(100).optional(),
    quote: z.string().trim().max(2000).optional(),
    image: z.string().max(3_000_000).optional(),
  })
  .refine((d) => d.campaign || d.publicSupport)
  .refine((d) => !d.publicSupport || Boolean(d.quote))

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function parseImage(dataUrl: string): { buffer: Buffer; contentType: string; ext: string } {
  const match = dataUrl.match(/^data:([^;]+);base64,(.+)$/)
  if (!match) throw new AppError(ErrorCode.VALIDATION_ERROR, 400, 'Bitte wähl ein gültiges Bild.')

  const [, mime, data] = match
  const ext = ALLOWED_MIMES[mime]
  if (!ext) {
    throw new AppError(
      ErrorCode.VALIDATION_ERROR,
      400,
      'Bitte wähl ein Bild im Format JPG, PNG oder WEBP.',
    )
  }

  const buffer = Buffer.from(data, 'base64')
  if (buffer.byteLength > MAX_IMAGE_BYTES) {
    throw new AppError(ErrorCode.VALIDATION_ERROR, 400, 'Bitte wähl ein Bild unter 2 MB.')
  }

  return { buffer, contentType: mime, ext }
}

router.post('/support', validate(supportSchema), async (req, res, next) => {
  try {
    const { firstName, lastName, email, campaign, publicSupport, role, quote, image } =
      req.body as z.infer<typeof supportSchema>

    const attachments = []
    if (publicSupport && image) {
      const { buffer, contentType, ext } = parseImage(image)
      attachments.push({ filename: `foto.${ext}`, content: buffer, contentType })
    }

    const kinds = [campaign && 'Kampagne mitmachen', publicSupport && 'Öffentlich unterstützen']
      .filter(Boolean)
      .join(' und ')

    const publicPart = publicSupport
      ? `
        <p><strong>Funktion:</strong> ${role ? escapeHtml(role) : 'keine'}</p>
        <p><strong>Zitat:</strong> ${escapeHtml(quote ?? '').replace(/\n/g, '<br>')}</p>
        <p>${image ? 'Foto im Anhang.' : 'Kein Foto eingereicht.'}</p>`
      : ''

    await sendMail({
      to: 'daniel@gnaegi.me',
      subject: `Neue Unterstützung: ${firstName} ${lastName}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Art:</strong> ${kinds}</p>${publicPart}
      `,
      replyTo: email,
      attachments,
    })

    res.json({ ok: true })
  } catch (err) {
    next(err)
  }
})

export default router
