import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const DEFAULT_TITLE = 'Melanie Berner & Nicole Wyss: Regierungsratswahl Zürich 2027'

function upsertHead(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

function metaByName(name: string, content: string) {
  upsertHead(
    `meta[name="${name}"]`,
    () => Object.assign(document.createElement('meta'), { name }),
    'content',
    content,
  )
}

function metaByProperty(property: string, content: string) {
  const create = () => {
    const meta = document.createElement('meta')
    meta.setAttribute('property', property)
    return meta
  }
  upsertHead(`meta[property="${property}"]`, create, 'content', content)
}

export function usePageMeta(title: string, description?: string): void {
  const { pathname } = useLocation()

  useEffect(() => {
    const pageTitle = title || DEFAULT_TITLE
    document.title = pageTitle

    // Die Basis-URL kommt aus dem beim Build injizierten Canonical von index.html.
    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const origin = canonical ? new URL(canonical.href).origin : window.location.origin
    const url = pathname === '/' ? `${origin}/` : `${origin}${pathname.replace(/\/$/, '')}`

    upsertHead(
      'link[rel="canonical"]',
      () => Object.assign(document.createElement('link'), { rel: 'canonical' }),
      'href',
      url,
    )
    metaByProperty('og:url', url)
    metaByProperty('og:title', pageTitle)
    metaByName('twitter:title', pageTitle)

    if (description) {
      metaByName('description', description)
      metaByProperty('og:description', description)
      metaByName('twitter:description', description)
    }
  }, [title, description, pathname])
}
