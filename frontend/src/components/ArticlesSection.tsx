import { Band, BandMeta, Grid, Col } from './Band.styled'
import { ArticlesHeading, ArticleList, Source, Arrow } from './ArticlesSection.styled'
import { ARTICLES } from '../data/articles'

export function ArticlesSection() {
  return (
    <Band $tone="ink" id="pressespiegel">
      <BandMeta>
        <span>06 / Pressespiegel</span>
      </BandMeta>
      <Grid>
        <Col>
          <ArticlesHeading>pressespiegel</ArticlesHeading>
        </Col>
        <Col $from={6}>
          <ArticleList>
            {ARTICLES.map((a) => (
              <li key={a.url}>
                <Source>{a.source}</Source>
                <a href={a.url} target="_blank" rel="noopener noreferrer">
                  {a.title}
                  <Arrow aria-hidden="true">↗</Arrow>
                </a>
              </li>
            ))}
          </ArticleList>
        </Col>
      </Grid>
    </Band>
  )
}
