import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Form, Row, Field, Label, ErrorText, HelpText, StatusText, Intro } from './Form.styled'
import { Input } from './FormControls.styled'
import { Button } from './Button.styled'
import { SupportSuccess } from './SupportSuccess'
import { PublicFields } from './PublicFields'
import { submitSupport } from '../api/endpoints'
import { ApiError } from '../api/client'
import { fileToDataUrl } from '../utils/fileToDataUrl'

export interface SupportFormValues {
  firstName: string
  lastName: string
  email: string
  role: string
  quote: string
  image: FileList
}

type Status =
  { type: 'idle' } | { type: 'success'; public: boolean } | { type: 'error'; message: string }

interface Props {
  /** Kommt vom gewählten Tab: mithelfen oder öffentlich unterstützen. */
  mode: 'help' | 'quote'
}

const INTRO = {
  help: 'Wir melden uns bei dir, sobald es etwas zu tun gibt.',
  quote:
    'Dein Name und dein Zitat erscheinen auf dieser Website. Funktion und Foto sind freiwillig.',
}

const SUBMIT = { help: 'Ich bin dabei', quote: 'Zitat senden' }

export function SupportForm({ mode }: Props) {
  const methods = useForm<SupportFormValues>()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods
  const [status, setStatus] = useState<Status>({ type: 'idle' })
  const isPublic = mode === 'quote'

  async function onSubmit(v: SupportFormValues) {
    setStatus({ type: 'idle' })
    try {
      const file = isPublic ? v.image?.[0] : undefined
      await submitSupport({
        firstName: v.firstName.trim(),
        lastName: v.lastName.trim(),
        email: v.email.trim(),
        campaign: !isPublic,
        publicSupport: isPublic,
        role: isPublic ? v.role.trim() || undefined : undefined,
        quote: isPublic ? v.quote.trim() || undefined : undefined,
        image: file ? await fileToDataUrl(file) : undefined,
      })
      setStatus({ type: 'success', public: isPublic })
    } catch (err) {
      const message =
        err instanceof ApiError
          ? err.message
          : 'Da ist etwas schiefgelaufen. Versuch es noch einmal.'
      setStatus({ type: 'error', message })
    }
  }

  if (status.type === 'success') return <SupportSuccess isPublic={status.public} />

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Intro>{INTRO[mode]}</Intro>
        <Row>
          <Field>
            <Label htmlFor="firstName">Vorname</Label>
            <Input
              id="firstName"
              aria-required="true"
              autoComplete="given-name"
              aria-invalid={errors.firstName ? 'true' : undefined}
              aria-describedby={errors.firstName ? 'firstName-error' : undefined}
              {...register('firstName', { required: true, maxLength: 100 })}
            />
            {errors.firstName && (
              <ErrorText id="firstName-error">Bitte gib deinen Vornamen an.</ErrorText>
            )}
          </Field>
          <Field>
            <Label htmlFor="lastName">Nachname</Label>
            <Input
              id="lastName"
              aria-required="true"
              autoComplete="family-name"
              aria-invalid={errors.lastName ? 'true' : undefined}
              aria-describedby={errors.lastName ? 'lastName-error' : undefined}
              {...register('lastName', { required: true, maxLength: 100 })}
            />
            {errors.lastName && (
              <ErrorText id="lastName-error">Bitte gib deinen Nachnamen an.</ErrorText>
            )}
          </Field>
        </Row>
        <Field>
          <Label htmlFor="email">E-Mail</Label>
          <Input
            id="email"
            aria-required="true"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? 'true' : undefined}
            aria-describedby={
              [isPublic && 'email-help', errors.email && 'email-error'].filter(Boolean).join(' ') ||
              undefined
            }
            {...register('email', {
              required: true,
              maxLength: 200,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          {/* Nur beim Zitat nötig: dort erscheinen Name und Zitat öffentlich, die E-Mail nicht. */}
          {isPublic && (
            <HelpText id="email-help">
              Nur für Rückfragen. Sie erscheint nicht auf der Seite.
            </HelpText>
          )}
          {errors.email && (
            <ErrorText id="email-error">Bitte gib eine gültige E-Mail an.</ErrorText>
          )}
        </Field>

        {isPublic && <PublicFields />}

        <Button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? 'Wird gesendet…' : SUBMIT[mode]}
        </Button>
        {status.type === 'error' && <StatusText role="alert">{status.message}</StatusText>}
      </Form>
    </FormProvider>
  )
}
