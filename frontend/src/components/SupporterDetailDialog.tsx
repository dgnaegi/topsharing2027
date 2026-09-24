import { useEffect, useRef } from 'react'
import type { Supporter } from '../data/supporters'
import { Overlay, DialogBox, CloseButton } from './Dialog.styled'
import { DetailImage, DetailName, DetailQuote } from './SupporterDetailDialog.styled'
import { useFocusTrap } from '../hooks/useFocusTrap'

interface Props {
  supporter: Supporter
  onClose: () => void
}

export function SupporterDetailDialog({ supporter, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)
  useFocusTrap(dialogRef, true)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <Overlay onClick={onClose}>
      <DialogBox
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="supporter-dialog-name"
      >
        <CloseButton onClick={onClose} aria-label="Schliessen">
          ×
        </CloseButton>
        {supporter.imageUrl && (
          <DetailImage
            src={supporter.imageUrl}
            alt={`${supporter.firstName} ${supporter.lastName}`}
          />
        )}
        <DetailName id="supporter-dialog-name">
          {supporter.firstName} {supporter.lastName}
        </DetailName>
        <DetailQuote>„{supporter.quote}"</DetailQuote>
      </DialogBox>
    </Overlay>
  )
}
