
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    document.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  if (isMobile) return null

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 hidden md:block"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
          mass: 0.5,
        }}
      >
        <div className="w-10 h-10 rounded-full border border-white/30 backdrop-blur-sm bg-white/5" />
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed pointer-events-none z-50 hidden md:block"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 400,
          mass: 0.3,
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
      </motion.div>
    </>
  )
}