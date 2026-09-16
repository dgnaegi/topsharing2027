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
  attachments?: MailAttachment[]
}

export async function sendMail({ to, subject, html, attachments }: MailOptions): Promise<void> {
  await getTransporter().sendMail({
    from: '"Berner & Wyss 2027" <noreply@berner-wyss2027.ch>',
    to,
    subject,
    html,
    attachments,
  })
}
