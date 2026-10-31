'use client'

import { memo, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { VIDEO_ASSETS } from './constants'
import { ArrowRight, Sparkles, Zap } from 'lucide-react'

// Palette Pop Parade
const POP = {
  pink: '#FF3D7F',
  cyan: '#00E5FF',
  yellow: '#FFD60A',
  purple: '#B026FF',
  black: '#000000',
}

export const Hero = memo(function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])

  const textVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        delay: i * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  }

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#0A0A0A]"
    >
      {/* ===== Vidéo Background (préservée) ===== */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <div className="relative w-full h-full flex">
          {/* Left Video */}
          <div className="relative w-1/2 h-full overflow-hidden bg-[#0A0A0A]">
            <video
              src={VIDEO_ASSETS.LEFT}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute w-full h-full"
              style={{
                objectFit: 'cover',
                objectPosition: 'center 30%',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-[#0A0A0A]/20 to-transparent" />
          </div>

          {/* Right Video */}
          <div className="relative w-1/2 h-full overflow-hidden bg-[#0A0A0A]">
            <video
              src={VIDEO_ASSETS.RIGHT}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute w-full h-full"
              style={{
                objectFit: 'cover',
                objectPosition: 'center 30%',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#0A0A0A]/70 via-[#0A0A0A]/20 to-transparent" />
          </div>

          {/* Elegant Divider */}
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent -translate-x-1/2 z-10" />

          {/* Animated light reflection */}
          <motion.div
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12 blur-2xl z-10"
          />
        </div>
      </motion.div>

      {/* ===== Trame halftone Pop ===== */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />

      {/* ===== Content Overlay ===== */}
      <motion.div
        style={{ opacity, y }}
        className="absolute inset-0 z-20 flex items-center justify-center pt-24 lg:pt-32"
      >
        <div className="text-center max-w-6xl mx-auto px-6 relative">

          {/* ===== Main Title — typographie éditoriale ===== */}
          <motion.h1
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="font-['Inter_Tight'] font-black text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter leading-[0.85] uppercase"
          >
            WE DON'T
          </motion.h1>

          <motion.h1
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="font-['Inter_Tight'] font-black text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter leading-[0.85] uppercase mt-1"
            style={{
              WebkitTextStroke: '3px #fff',
              color: 'transparent',
            }}
          >
            FOLLOW
          </motion.h1>

          <motion.h1
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="font-['Inter_Tight'] font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter leading-[0.85] uppercase mt-1"
            style={{ color: POP.pink }}
          >
            TRENDS.
          </motion.h1>

          {/* ===== Subtitle ===== */}
          <motion.p
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-white/50 text-xs sm:text-sm tracking-[0.3em] uppercase mt-8 font-black"
          >
            Crafted Identity · Urban Elegance
          </motion.p>

          {/* ===== CTA ===== */}
          <motion.div
            custom={4}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 flex justify-center"
          >
            <motion.button
              whileHover={{ x: -3, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-3 px-10 py-4 border-[3px] border-white text-black text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-[6px_6px_0_rgba(255,255,255,0.2)] hover:shadow-[9px_9px_0_rgba(255,255,255,0.2)]"
              style={{ background: POP.yellow }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Discover Collection</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* ===== Scroll Indicator ===== */}
          <motion.div
            custom={5}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="absolute -bottom-32 lg:-bottom-40 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-white/40 text-[10px] font-black tracking-[0.3em] uppercase">
                Scroll
              </span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="relative"
              >
                <div className="w-10 h-10 border-2 border-white/30 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white/60 rotate-90" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
})