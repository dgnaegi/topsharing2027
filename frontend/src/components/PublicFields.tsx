import { useFormContext } from 'react-hook-form'
import {
  Fieldset,
  Legend,
  Field,
  Label,
  Input,
  TextArea,
  FileInput,
  HelpText,
  ErrorText,
} from './Form.styled'
import { MAX_IMAGE_BYTES, ALLOWED_IMAGE_TYPES } from '../utils/fileToDataUrl'
import type { SupportFormValues } from './SupportForm'

export function PublicFields() {
  const {
    register,
    formState: { errors },
  } = useFormContext<SupportFormValues>()

  return (
    <Fieldset>
      <Legend>Für die Website</Legend>
      <Field>
        <Label htmlFor="role">Funktion (optional)</Label>
        <Input
          id="role"
          aria-invalid={errors.role ? 'true' : undefined}
          aria-describedby={errors.role ? 'role-help role-error' : 'role-help'}
          {...register('role', { maxLength: 100 })}
        />
        <HelpText id="role-help">
          Zum Beispiel dein Beruf oder deine Rolle. Erscheint neben deinem Namen.
        </HelpText>
        {errors.role && (
          <ErrorText id="role-error">
            Bitte kürze deine Funktion auf höchstens 100 Zeichen.
          </ErrorText>
        )}
      </Field>
      <Field>
        <Label htmlFor="quote">Dein Zitat</Label>
        <TextArea
          id="quote"
          placeholder="Warum unterstützt du Melanie Berner und Nicole Wyss?"
          aria-invalid={errors.quote ? 'true' : undefined}
          aria-describedby={errors.quote ? 'quote-error' : undefined}
          {...register('quote', { required: true, maxLength: 2000 })}
        />
        {errors.quote && (
          <ErrorText id="quote-error">
            {errors.quote.type === 'required'
              ? 'Bitte schreib dein Zitat.'
              : 'Bitte kürze dein Zitat auf höchstens 2000 Zeichen.'}
          </ErrorText>
        )}
      </Field>
      <Field>
        <Label htmlFor="image">Foto (optional)</Label>
        <FileInput
          id="image"
          type="file"
          accept={ALLOWED_IMAGE_TYPES.join(',')}
          aria-invalid={errors.image ? 'true' : undefined}
          aria-describedby={errors.image ? 'image-help image-error' : 'image-help'}
          {...register('image', {
            validate: (files) => {
              const file = files?.[0]
              if (!file) return true
              if (!ALLOWED_IMAGE_TYPES.includes(file.type))
                return 'Bitte wähl ein Bild im Format JPG, PNG oder WEBP.'
              if (file.size > MAX_IMAGE_BYTES) return 'Bitte wähl ein Bild unter 2 MB.'
              return true
            },
          })}
        />
        <HelpText id="image-help">JPG, PNG oder WEBP, maximal 2 MB.</HelpText>
        {errors.image && <ErrorText id="image-error">{errors.image.message}</ErrorText>}
      </Field>
    </Fieldset>
  )
}
