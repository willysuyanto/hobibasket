import { useEffect, useState } from 'react'

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null)
  const [isScrollDirectionChanged, setIsScrollDirectionChanged] = useState(false)

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? 'down' : 'up'
      const isScrolled = scrollY - lastScrollY > 1 || scrollY - lastScrollY < -1

      if (direction !== scrollDirection && isScrolled) {
        setScrollDirection(direction)
      }
      setIsScrollDirectionChanged(isScrolled)
      lastScrollY = scrollY > 0 ? scrollY : 0
    }

    window.addEventListener('scroll', updateScrollDirection)
    return () => {
      window.removeEventListener('scroll', updateScrollDirection)
    }
  }, [scrollDirection])

  return {
    scrollDirection,
    isScrollDirectionChanged,
  }
}
