import { useFormContext } from 'react-hook-form'
import { Row, Field, Label, ErrorText, HelpText } from './Form.styled'
import { Input } from './FormControls.styled'
import type { SupportFormValues } from '../data/supportForm'

interface Props {
  isPublic: boolean
}

export function ContactFields({ isPublic }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<SupportFormValues>()

  return (
    <>
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
        {isPublic && (
          <HelpText id="email-help">
            Nur für Rückfragen. Sie erscheint nicht auf der Seite.
          </HelpText>
        )}
        {errors.email && <ErrorText id="email-error">Bitte gib eine gültige E-Mail an.</ErrorText>}
      </Field>
    </>
  )
}
