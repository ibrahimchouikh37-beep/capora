import { memo, useEffect, useState } from 'react'
import { VIDEO_ASSETS } from './constants'

const VideoBackground = memo(function VideoBackground() {
  const [shouldHideVideo, setShouldHideVideo] = useState(false)
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
      const footerSection = document.querySelector('footer')
      
      let hide = false

      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        const isContactVisible = rect.top < window.innerHeight && rect.bottom > 0
        if (isContactVisible) hide = true
      }

      if (footerSection && !hide) {
        const rect = footerSection.getBoundingClientRect()
        const isFooterVisible = rect.top < window.innerHeight && rect.bottom > 0
        if (isFooterVisible) hide = true
      }

      setShouldHideVideo(hide)
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
  if (shouldHideVideo) return null

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      <div className="relative w-full h-full">
        {/* Version Desktop: 2 vidéos côte à côte */}
        <div className="hidden md:flex w-full h-full">
          <div key="video-left" className="relative w-1/2 h-full overflow-hidden">
            <video
              src={VIDEO_ASSETS.LEFT}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover md:object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/5" />
          </div>
          <div key="video-right" className="relative w-1/2 h-full overflow-hidden">
            <video
              src={VIDEO_ASSETS.RIGHT}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover md:object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-black/5" />
          </div>
        </div>

        {/* Version Mobile: 1 vidéo avec effet de fondu */}
        <div className="md:hidden w-full h-full relative">
          <video
            src={VIDEO_ASSETS.LEFT}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        </div>

        {/* Séparateur élégant au centre */}
        <div className="hidden md:block absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />
      </div>

      {/* Gradient global */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
    </div>
  )
})

export default VideoBackground