import nodemailer from 'nodemailer'

let _transporter: nodemailer.Transporter | null = null

function getTransporter(): nodemailer.Transporter {
  if (!_transporter) {
    _transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_SMTP_USER ?? '',
        pass: process.env.BREVO_SMTP_KEY ?? '',
      },
    })
  }
  return _transporter
}

export interface MailAttachment {
  filename: string
  content: Buffer
  contentType: string
}

export interface MailOptions {
  to: string
  subject: string
  html: string
  replyTo?: string
  attachments?: MailAttachment[]
}

const DEFAULT_FROM = '"Berner & Wyss 2027" <noreply@wyss-berner.ch>'

export async function sendMail({
  to,
  subject,
  html,
  replyTo,
  attachments,
}: MailOptions): Promise<void> {
  await getTransporter().sendMail({
    from: process.env.MAIL_FROM || DEFAULT_FROM,
    to,
    subject,
    html,
    replyTo,
    attachments,
  })
}
