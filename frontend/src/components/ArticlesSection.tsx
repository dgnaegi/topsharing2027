import { Band, BandMeta, Grid, Col } from './Band.styled'
import { VisuallyHidden } from './VisuallyHidden.styled'
import { NewTabHint } from './NewTabHint'
import { ArticlesHeading, ArticleList, Source, Arrow } from './ArticlesSection.styled'
import { IconArrowUpRight } from './icons/IconArrowUpRight'
import { ARTICLES } from '../data/articles'

export function ArticlesSection() {
  return (
    <Band $tone="ink" id="pressespiegel" aria-labelledby="pressespiegel-titel">
      <BandMeta>
        <span>06 / Pressespiegel</span>
      </BandMeta>
      <Grid>
        <Col>
          <ArticlesHeading id="pressespiegel-titel">
            pressespiegel
            <VisuallyHidden>: Medienberichte zur Top-Sharing-Kandidatur</VisuallyHidden>
          </ArticlesHeading>
        </Col>
        <Col $from={6}>
          <ArticleList role="list">
            {ARTICLES.map((a) => (
              <li key={a.url}>
                <Source>{a.source}</Source>
                <a href={a.url} target="_blank" rel="noopener noreferrer">
                  {a.title}
                  <Arrow aria-hidden="true">
                    <IconArrowUpRight width="0.8em" height="0.8em" />
                  </Arrow>
                  <NewTabHint />
                </a>
              </li>
            ))}
          </ArticleList>
        </Col>
      </Grid>
    </Band>
  )
}
