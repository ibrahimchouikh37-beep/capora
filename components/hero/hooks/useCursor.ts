import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  useEffect(() => {
    if (!isDesktop || !cursorRef.current) return

    const cursor = cursorRef.current

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isDesktop])

  return { cursorRef, isDesktop }
}