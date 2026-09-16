import { useEffect } from 'react'

const DEFAULT_TITLE = 'Melanie Berner & Nicole Wyss: Regierungsratswahl Zürich 2027'

export function usePageMeta(title: string, description?: string): void {
  useEffect(() => {
    document.title = title || DEFAULT_TITLE

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (description) {
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }
      meta.content = description
    }
  }, [title, description])
}
