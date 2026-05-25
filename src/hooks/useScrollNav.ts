import { useEffect, RefObject } from 'react'

export function useScrollNav(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handler = () => el.classList.toggle('scrolled', window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [ref])
}
