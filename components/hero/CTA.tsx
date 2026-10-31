import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function HeroCTA() {
  const ctaRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ctaRef.current,
        start: '85% bottom',
        end: '100% bottom',
        onUpdate: (self) => {
          setIsVisible(self.progress > 0.3)
        },
        toggleActions: 'play none none reverse',
      })
    }, ctaRef)

    return () => ctx.revert()
  }, [])

  return (
    <motion.div
      ref={ctaRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed inset-0 pointer-events-none flex items-center justify-center"
      style={{ zIndex: 100 }}
    >
      <div className="bg-white/10 backdrop-blur-xl p-12 rounded-2xl pointer-events-auto border border-white/20 shadow-2xl">
        <h2 className="text-4xl md:text-6xl font-['Inter_Tight'] font-medium mb-6 text-white">
          View Collection
        </h2>
        <button className="group relative bg-white text-black px-12 py-4 rounded-full text-lg font-['Inter_Tight'] transition-all hover:bg-white/90 overflow-hidden">
          <span className="relative z-10">Explore</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </motion.div>
  )
}