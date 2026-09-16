import { SectionLabel } from './Layout.styled'
import { VideoWrapper, VideoFrame, VideoPlaceholderText } from './VideoSection.styled'

// Sobald ein Video vorliegt: hier `src="/vorstellung.mp4"` setzen und den
// Platzhaltertext entfernen.
const VIDEO_SRC: string | undefined = undefined

export function VideoSection() {
  return (
    <VideoWrapper>
      <SectionLabel>01. Video</SectionLabel>
      <VideoFrame>
        {VIDEO_SRC ? (
          <video controls poster="/og-image.jpg">
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        ) : (
          <VideoPlaceholderText>Video folgt in Kürze</VideoPlaceholderText>
        )}
      </VideoFrame>
    </VideoWrapper>
  )
}
