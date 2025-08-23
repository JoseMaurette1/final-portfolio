'use client'
import { useState, useEffect } from 'react'

export const useRefreshAnimation = () => {
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    // Check if this is a page refresh
    const isRefresh = performance.navigation.type === 1 ||
                     (window.performance && window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)?.type === 'reload'

    if (isRefresh) {
      // Increment key to force re-render and re-trigger animations
      setRefreshKey(prev => prev + 1)
    }
  }, [])

  return refreshKey
}
