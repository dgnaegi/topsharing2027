import { useFormContext } from 'react-hook-form'
import { Fieldset, Legend, ErrorText } from './Form.styled'
import { Card, CardTitle, CardHelp } from './SupportChoice.styled'
import type { SupportFormValues } from './SupportForm'

export function SupportChoice() {
  const {
    register,
    getValues,
    trigger,
    formState: { errors, isSubmitted },
  } = useFormContext<SupportFormValues>()

  const revalidate = () => {
    if (isSubmitted) void trigger('campaign')
  }

  return (
    <Fieldset>
      <Legend>Wie möchtest du unterstützen?</Legend>
      <Card>
        <input
          type="checkbox"
          {...register('campaign', {
            validate: () =>
              getValues('campaign') ||
              getValues('publicSupport') ||
              'Bitte wähl mindestens eine Möglichkeit aus.',
            onChange: revalidate,
          })}
        />
        <span>
          <CardTitle>Ich helfe bei der Kampagne mit</CardTitle>
          <CardHelp>Wir melden uns bei dir, sobald es etwas zu tun gibt.</CardHelp>
        </span>
      </Card>
      <Card>
        <input type="checkbox" {...register('publicSupport', { onChange: revalidate })} />
        <span>
          <CardTitle>Ich unterstütze öffentlich</CardTitle>
          <CardHelp>
            Dein Name und dein Zitat erscheinen auf dieser Website. Funktion und Foto sind
            freiwillig.
          </CardHelp>
        </span>
      </Card>
      {errors.campaign && <ErrorText>{errors.campaign.message}</ErrorText>}
    </Fieldset>
  )
}
