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
const MAX_IMAGE_BYTES = 10 * 1024 * 1024 // 10 MB

const MAGIC_BYTES: Record<string, (buffer: Buffer) => boolean> = {
  'image/jpeg': (b) => b.length >= 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff,
  'image/png': (b) =>
    b.length >= 8 &&
    [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a].every((byte, i) => b[i] === byte),
  'image/webp': (b) =>
    b.length >= 12 && b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP',
}

const supportSchema = z
  .object({
    firstName: z.string().trim().min(1).max(100),
    lastName: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(200),
    campaign: z.boolean(),
    publicSupport: z.boolean(),
    role: z.string().trim().max(100).optional(),
    quote: z.string().trim().max(2000).optional(),
    image: z.string().max(14_000_000).optional(),
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
    throw new AppError(ErrorCode.VALIDATION_ERROR, 400, 'Bitte wähl ein Bild unter 10 MB.')
  }

  if (!MAGIC_BYTES[mime](buffer)) {
    throw new AppError(ErrorCode.VALIDATION_ERROR, 400, 'Bitte wähl ein gültiges Bild.')
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
