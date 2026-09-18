import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Form,
  Row,
  Field,
  Label,
  Input,
  TextArea,
  FileInput,
  ErrorText,
  HelpText,
  StatusText,
} from './Form.styled'
import { Button } from './Button.styled'
import { submitTestimonial } from '../api/endpoints'
import { ApiError } from '../api/client'
import { fileToDataUrl, MAX_IMAGE_BYTES, ALLOWED_IMAGE_TYPES } from '../utils/fileToDataUrl'

interface FormValues {
  firstName: string
  lastName: string
  email: string
  title: string
  quote: string
  image: FileList
}

type Status = { type: 'idle' } | { type: 'success' } | { type: 'error'; message: string }

export function SupporterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()
  const [status, setStatus] = useState<Status>({ type: 'idle' })

  async function onSubmit(values: FormValues) {
    setStatus({ type: 'idle' })
    try {
      const file = values.image?.[0]
      const image = file ? await fileToDataUrl(file) : undefined

      await submitTestimonial({
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        email: values.email.trim(),
        title: values.title.trim() || undefined,
        quote: values.quote.trim(),
        image,
      })

      setStatus({ type: 'success' })
      reset()
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
        <StatusText>Zitat gesendet. Danke für deine Unterstützung.</StatusText>
      </Form>
    )
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Row>
        <Field>
          <Label htmlFor="firstName">Vorname</Label>
          <Input
            id="firstName"
            autoComplete="given-name"
            {...register('firstName', { required: true, maxLength: 100 })}
          />
          {errors.firstName && <ErrorText>Bitte Vorname angeben.</ErrorText>}
        </Field>
        <Field>
          <Label htmlFor="lastName">Nachname</Label>
          <Input
            id="lastName"
            autoComplete="family-name"
            {...register('lastName', { required: true, maxLength: 100 })}
          />
          {errors.lastName && <ErrorText>Bitte Nachname angeben.</ErrorText>}
        </Field>
      </Row>

      <Field>
        <Label htmlFor="email">E-Mail</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          {...register('email', {
            required: true,
            maxLength: 200,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />
        <HelpText>Nur für Rückfragen. Sie erscheint nicht auf der Seite.</HelpText>
        {errors.email && <ErrorText>Bitte eine gültige E-Mail angeben.</ErrorText>}
      </Field>

      <Field>
        <Label htmlFor="title">Titel (optional)</Label>
        <Input id="title" {...register('title', { maxLength: 100 })} />
        <HelpText>Zum Beispiel Beruf oder Funktion. Erscheint neben deinem Namen.</HelpText>
        {errors.title && <ErrorText>Der Titel ist zu lang.</ErrorText>}
      </Field>

      <Field>
        <Label htmlFor="quote">Dein Zitat</Label>
        <TextArea
          id="quote"
          placeholder="Warum unterstützt du Melanie Berner und Nicole Wyss?"
          {...register('quote', { required: true, maxLength: 2000 })}
        />
        {errors.quote && <ErrorText>Bitte ein Zitat schreiben.</ErrorText>}
      </Field>

      <Field>
        <Label htmlFor="image">Foto (optional)</Label>
        <FileInput
          id="image"
          type="file"
          accept={ALLOWED_IMAGE_TYPES.join(',')}
          {...register('image', {
            validate: (files) => {
              const file = files?.[0]
              if (!file) return true
              if (!ALLOWED_IMAGE_TYPES.includes(file.type)) return 'Nur JPG, PNG oder WEBP erlaubt.'
              if (file.size > MAX_IMAGE_BYTES) return 'Bild ist zu gross (max. 2 MB).'
              return true
            },
          })}
        />
        <HelpText>JPG, PNG oder WEBP, maximal 2 MB.</HelpText>
        {errors.image && <ErrorText>{errors.image.message}</ErrorText>}
      </Field>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Wird gesendet…' : 'Zitat einreichen'}
      </Button>

      {status.type === 'error' && <StatusText>{status.message}</StatusText>}
    </Form>
  )
}
