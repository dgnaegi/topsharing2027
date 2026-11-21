import { forwardRef } from 'react'
import { Figure, Content, Photo, Quote, Caption, Name, Role } from './SupporterQuote.styled'
import {
  SUPPORTER_PHOTO_HEIGHT,
  SUPPORTER_PHOTO_WIDTH,
  supporterPhoto,
  type Supporter,
} from '../data/supporters'

interface Props {
  id: string
  supporter: Supporter
}

export const SupporterQuote = forwardRef<HTMLElement, Props>(function SupporterQuote(
  { id, supporter },
  ref,
) {
  const name = `${supporter.firstName} ${supporter.lastName}`

  return (
    <Figure ref={ref} id={id} aria-live="polite">
      <Content key={supporter.slug}>
        <Photo
          src={supporterPhoto(supporter.slug)}
          alt={name}
          width={SUPPORTER_PHOTO_WIDTH}
          height={SUPPORTER_PHOTO_HEIGHT}
          decoding="async"
        />
        <div>
          <Quote>„{supporter.quote}“</Quote>
          <Caption>
            <Name>{name}</Name>
            {supporter.role && <Role>{supporter.role}</Role>}
          </Caption>
        </div>
      </Content>
    </Figure>
  )
})
