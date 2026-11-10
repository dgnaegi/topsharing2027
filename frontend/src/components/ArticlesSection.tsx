import { Band, BandMeta, Grid, Col } from './Band.styled'
import { ArticlesHeading, ArticleList, Source } from './ArticlesSection.styled'
import { ARTICLES } from '../data/articles'

export function ArticlesSection() {
  return (
    <Band $tone="ink" id="artikel">
      <BandMeta>
        <span>06 / Artikel und Links</span>
        <span>Berner &amp; Wyss 2027</span>
      </BandMeta>
      <Grid>
        <Col>
          <ArticlesHeading>in den medien</ArticlesHeading>
        </Col>
        <Col $from={6}>
          <ArticleList>
            {ARTICLES.map((a) => (
              <li key={a.url}>
                <Source>{a.source}</Source>
                <a href={a.url} target="_blank" rel="noopener noreferrer">
                  {a.title}
                </a>
              </li>
            ))}
          </ArticleList>
        </Col>
      </Grid>
    </Band>
  )
}
