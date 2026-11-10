import { useEffect } from 'react'

/** Springt nach dem ersten Rendern zum Anker in der URL (z. B. /#spenden von einer Unterseite aus). */
export function useScrollToHash() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])
}
