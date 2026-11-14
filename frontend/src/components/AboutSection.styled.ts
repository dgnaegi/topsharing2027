import styled from 'styled-components'
import { media } from '../theme'
import { enter, fadeIn } from '../motion'
import { selectable } from '../selectable'

export const NameList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  ${media.md} {
    gap: ${({ theme }) => theme.spacing.md};
  }
`

export const NameButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: ${({ theme }) => theme.spacing.md};
  border: ${({ theme }) => theme.borderStructural};
  border-radius: ${({ theme }) => theme.radius};
  font-weight: 700;
  font-size: clamp(1.25rem, 2.5vw, 2.25rem);
  line-height: 1;
  letter-spacing: -0.03em;
  text-align: center;
  text-wrap: balance;
  cursor: pointer;
  ${selectable("[aria-pressed='true']")}

  ${media.md} {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`

/** Gemeinsame Spaltenbreite für Lead und Fliesstext, gemessen an der Fliesstextgrösse. */
export const Bio = styled.div`
  max-width: 60ch;
`

/** Wird per key beim Wechsel neu gesetzt und blendet synchron mit dem Foto über. */
export const BioSwap = styled.div`
  ${enter(0, fadeIn)}
  animation-duration: 0.6s;
`

export const BioText = styled.p`
  & + & {
    margin-top: ${({ theme }) => theme.spacing.md};
  }

  &:first-child {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-weight: 500;
    font-size: clamp(1.125rem, 1.6vw, 1.375rem);
    line-height: 1.35;
    text-wrap: pretty;
  }
`

export const ProfileLink = styled.p`
  margin-top: ${({ theme }) => theme.spacing.xl};
  font-weight: 700;
`
