import styled from 'styled-components'

export const VideoWrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

export const VideoFrame = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;
  border: ${({ theme }) => theme.borderThick};
  background: ${({ theme }) => theme.colors.muted};
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.06) 1px, transparent 1px);
  background-size: 24px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const VideoPlaceholderText = styled.p`
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
`
