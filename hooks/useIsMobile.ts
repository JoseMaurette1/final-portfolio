'use client'

import { useEffect, useState } from 'react'

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if user agent indicates mobile device
    const checkIsMobile = () => {
      const userAgent =
        navigator.userAgent ||
        navigator.vendor ||
        (window as unknown as { opera: string }).opera

      // Check for common mobile indicators in user agent
      const isMobileUserAgent =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent.toLowerCase(),
        )

      // Also check screen width as a fallback (common breakpoint for mobile)
      const isMobileScreen = window.matchMedia('(max-width: 768px)').matches

      setIsMobile(isMobileUserAgent || isMobileScreen)
    }

    checkIsMobile()

    // Listen for window resize to update mobile state
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const handleResize = () => checkIsMobile()

    mediaQuery.addEventListener('change', handleResize)

    return () => {
      mediaQuery.removeEventListener('change', handleResize)
    }
  }, [])

  return isMobile
}
