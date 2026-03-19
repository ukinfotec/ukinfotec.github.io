import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, state } = useLocation()
  useEffect(() => {
    // Skip if we're navigating with a scrollTo target — HomePage handles that scroll
    if (!(state as { scrollTo?: string } | null)?.scrollTo) {
      window.scrollTo(0, 0)
    }
  }, [pathname, state])
  return null
}
