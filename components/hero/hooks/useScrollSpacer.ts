import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useScrollSpacer() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const spacer = containerRef.current
      if (!spacer) return

      const vh = window.innerHeight
      const scrollHeight = spacer.scrollHeight
      
      gsap.set(spacer, {
        height: vh + scrollHeight,
      })

      ScrollTrigger.refresh()
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}