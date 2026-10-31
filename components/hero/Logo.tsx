import { memo } from 'react'
import { motion } from 'framer-motion'

const Logo = memo(function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0,
      }}
      className="fixed pointer-events-none z-20 mix-blend-exclusion"
      style={{
        top: 16,
        left: 16,
        width: 124,
      }}
    >
      <svg viewBox="0 0 355 110" fill="white">
        <text
          x="0"
          y="70"
          fontFamily="'Inter Tight', sans-serif"
          fontSize="72"
          fontWeight="500"
          letterSpacing="4"
        >
          prmpt
        </text>
        <circle cx="330" cy="20" r="10" stroke="white" strokeWidth="2" fill="none" />
        <text x="327" y="25" fontFamily="'Inter Tight', sans-serif" fontSize="12">
          R
        </text>
      </svg>
    </motion.div>
  )
})

export default Logo