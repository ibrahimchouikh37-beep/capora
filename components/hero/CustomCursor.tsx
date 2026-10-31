import { memo } from 'react'
import { useCursor } from './hooks/useCursor'

const CustomCursor = memo(function CustomCursor() {
  const { cursorRef, isDesktop } = useCursor()

  if (!isDesktop) return null

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 hidden lg:block"
      style={{
        transform: 'translate(-50%, -50%)',
        mixBlendMode: 'exclusion',
        willChange: 'transform',
      }}
    >
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22.75" stroke="white" strokeWidth="2.5" />
        <path
          d="M20 16 L24 20 L28 16 L32 20 L28 24 L32 28 L28 32 L24 28 L20 32 L16 28 L20 24 L16 20 Z"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  )
})

export default CustomCursor