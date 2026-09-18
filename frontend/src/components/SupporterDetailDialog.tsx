import { useEffect } from 'react'
import type { Supporter } from '../data/supporters'
import { Overlay, DialogBox, CloseButton } from './Dialog.styled'
import { DetailImage, DetailName, DetailQuote } from './SupporterDetailDialog.styled'

interface Props {
  supporter: Supporter
  onClose: () => void
}

export function SupporterDetailDialog({ supporter, onClose }: Props) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <Overlay onClick={onClose}>
      <DialogBox onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <CloseButton onClick={onClose} aria-label="Schliessen">
          ×
        </CloseButton>
        {supporter.imageUrl && (
          <DetailImage
            src={supporter.imageUrl}
            alt={`${supporter.firstName} ${supporter.lastName}`}
          />
        )}
        <DetailName>
          {supporter.firstName} {supporter.lastName}
        </DetailName>
        <DetailQuote>„{supporter.quote}"</DetailQuote>
      </DialogBox>
    </Overlay>
  )
}
