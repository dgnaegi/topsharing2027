import { useEffect, useState, type MutableRefObject } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Form, StatusText, Intro } from './Form.styled'
import { Button } from './Button.styled'
import { SupportSuccess } from './SupportSuccess'
import { ContactFields } from './ContactFields'
import { PublicFields } from './PublicFields'
import { submitSupport } from '../api/endpoints'
import { ApiError } from '../api/client'
import { fileToDataUrl } from '../utils/fileToDataUrl'
import {
  FORM_INTRO,
  FORM_SUBMIT,
  type FormMode,
  type SupportDraft,
  type SupportFormValues,
} from '../data/supportForm'

type Status =
  { type: 'idle' } | { type: 'success'; public: boolean } | { type: 'error'; message: string }

interface Props {
  /** Kommt vom gewählten Tab: mithelfen oder öffentlich unterstützen. */
  mode: FormMode
  draft: MutableRefObject<SupportDraft>
}

export function SupportForm({ mode, draft }: Props) {
  const methods = useForm<SupportFormValues>({ defaultValues: draft.current })
  const {
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = methods
  const [status, setStatus] = useState<Status>({ type: 'idle' })
  const isPublic = mode === 'quote'

  useEffect(() => {
    const subscription = watch((v) => {
      draft.current = {
        firstName: v.firstName ?? '',
        lastName: v.lastName ?? '',
        email: v.email ?? '',
        role: v.role ?? '',
        quote: v.quote ?? '',
      }
    })
    return () => subscription.unsubscribe()
  }, [watch, draft])

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
      if (isPublic) draft.current = { ...draft.current, role: '', quote: '' }
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
        <Intro>{FORM_INTRO[mode]}</Intro>
        <ContactFields isPublic={isPublic} />
        {isPublic && <PublicFields />}
        <Button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? 'Wird gesendet…' : FORM_SUBMIT[mode]}
        </Button>
        {status.type === 'error' && <StatusText role="alert">{status.message}</StatusText>}
      </Form>
    </FormProvider>
  )
}
