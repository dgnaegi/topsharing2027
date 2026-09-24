import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Form, Row, Field, Label, Input, ErrorText, HelpText, StatusText } from './Form.styled'
import { Button } from './Button.styled'
import { SupportChoice } from './SupportChoice'
import { PublicFields } from './PublicFields'
import { submitSupport } from '../api/endpoints'
import { ApiError } from '../api/client'
import { fileToDataUrl } from '../utils/fileToDataUrl'

export interface SupportFormValues {
  firstName: string
  lastName: string
  email: string
  campaign: boolean
  publicSupport: boolean
  role: string
  quote: string
  image: FileList
}

type Status =
  { type: 'idle' } | { type: 'success'; public: boolean } | { type: 'error'; message: string }

export function SupportForm() {
  const methods = useForm<SupportFormValues>()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = methods
  const [status, setStatus] = useState<Status>({ type: 'idle' })
  const isPublic = watch('publicSupport')

  async function onSubmit(v: SupportFormValues) {
    setStatus({ type: 'idle' })
    try {
      const file = v.publicSupport ? v.image?.[0] : undefined
      await submitSupport({
        firstName: v.firstName.trim(),
        lastName: v.lastName.trim(),
        email: v.email.trim(),
        campaign: v.campaign,
        publicSupport: v.publicSupport,
        role: v.publicSupport ? v.role.trim() || undefined : undefined,
        quote: v.publicSupport ? v.quote.trim() || undefined : undefined,
        image: file ? await fileToDataUrl(file) : undefined,
      })
      setStatus({ type: 'success', public: v.publicSupport })
    } catch (err) {
      const message =
        err instanceof ApiError
          ? err.message
          : 'Da ist etwas schiefgelaufen. Versuch es noch einmal.'
      setStatus({ type: 'error', message })
    }
  }

  if (status.type === 'success') {
    return (
      <Form as="div" role="status">
        <StatusText>
          Danke, du bist dabei. Wir melden uns bei dir.
          {status.public && ' Bevor dein Name erscheint, schauen wir kurz drüber.'}
        </StatusText>
      </Form>
    )
  }

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Row>
          <Field>
            <Label htmlFor="firstName">Vorname</Label>
            <Input
              id="firstName"
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
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? 'true' : undefined}
            aria-describedby={errors.email ? 'email-help email-error' : 'email-help'}
            {...register('email', {
              required: true,
              maxLength: 200,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          <HelpText id="email-help">
            Nur für Rückfragen. Sie erscheint nicht auf der Seite.
          </HelpText>
          {errors.email && (
            <ErrorText id="email-error">Bitte gib eine gültige E-Mail an.</ErrorText>
          )}
        </Field>

        <SupportChoice />
        {isPublic && <PublicFields />}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Wird gesendet…' : 'Unterstützung senden'}
        </Button>
        {status.type === 'error' && <StatusText role="alert">{status.message}</StatusText>}
      </Form>
    </FormProvider>
  )
}
