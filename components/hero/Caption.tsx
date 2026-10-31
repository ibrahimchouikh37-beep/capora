import { memo, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Caption = memo(function Caption() {
  const [shouldHide, setShouldHide] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const checkSections = () => {
      const contactSection = document.getElementById('contact')
      const footer = document.querySelector('footer')
      
      let hide = false

      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        const isContactVisible = rect.top < window.innerHeight && rect.bottom > 0
        if (isContactVisible) hide = true
      }

      if (footer && !hide) {
        const rect = footer.getBoundingClientRect()
        const isFooterVisible = rect.top < window.innerHeight && rect.bottom > 0
        if (isFooterVisible) hide = true
      }

      setShouldHide(hide)
    }

    checkSections()
    window.addEventListener('scroll', checkSections, { passive: true })
    window.addEventListener('resize', checkSections)

    return () => {
      window.removeEventListener('scroll', checkSections)
      window.removeEventListener('resize', checkSections)
    }
  }, [isMounted])

  // Ne pas rendre pendant l'hydratation
  if (!isMounted) return null
  if (shouldHide) return null

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2,
      }
    }
  }

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.4,
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed pointer-events-none z-20 flex items-center justify-center"
      style={{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="relative flex flex-col items-center justify-center px-4">
        {/* Ligne décorative supérieure */}
        <motion.div
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:block w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8"
        />

        {/* Texte principal */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <p className="font-['Inter_Tight'] font-light text-white md:text-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-wider leading-tight">
            YOUR
            <br />
            <span className="font-bold bg-gradient-to-r from-white to-white/70 md:from-black md:to-black/70 bg-clip-text text-transparent">
              STYLE
            </span>
          </p>
          
          {/* Séparateur avec icône */}
          <div className="flex items-center justify-center gap-4 my-4 md:my-6">
            <div className="flex-1 max-w-12 h-px bg-gradient-to-r from-transparent via-white/30 md:via-black/30 to-transparent" />
            <span className="text-white/50 md:text-black/50 text-xs tracking-[0.3em]">
              ✦
            </span>
            <div className="flex-1 max-w-12 h-px bg-gradient-to-r from-transparent via-white/30 md:via-black/30 to-transparent" />
          </div>

          <p className="font-['Inter_Tight'] font-light text-white md:text-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-wider leading-tight">
            YOUR
            <br />
            <span className="font-bold bg-gradient-to-r from-white to-white/70 md:from-black md:to-black/70 bg-clip-text text-transparent">
              CAP
            </span>
          </p>
        </motion.div>

        {/* Ligne décorative inférieure */}
        <motion.div
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:block w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mt-8"
        />
      </div>
    </motion.div>
  )
})

export default Caption