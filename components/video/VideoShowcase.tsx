'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Film, Zap } from 'lucide-react'

// Palette Pop Parade
const POP = {
  pink: '#FF3D7F',
  cyan: '#00E5FF',
  yellow: '#FFD60A',
  purple: '#B026FF',
  cream: '#FDF6E3',
  black: '#000000',
}

// ============ VIDÉOS DATA ============
const videos = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/dxgyir4hi/video/upload/v1793905029/capver_uivgvi.mp4',
    title: 'The Vintage Look',
    subtitle: 'TIMELESS STYLE. MODERN ATTITUDE.',
    width: 234,
    height: 416,
    color: POP.pink,
    rotate: -2,
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/dxgyir4hi/video/upload/v1793904369/capzaw_jv9r3q.mp4',
    title: 'Own Your Identity',
    subtitle: 'YOUR STYLE. YOUR RULES.',
    width: 720,
    height: 1280,
    color: POP.cyan,
    rotate: 1.5,
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/dxgyir4hi/video/upload/v1793904323/capbo_lewfkr.mp4',
    title: 'The Art of Caps',
    subtitle: 'DETAILS THAT MAKE THE DIFFERENCE.',
    width: 720,
    height: 1280,
    color: POP.yellow,
    rotate: -1.5,
  },
]

// ============ VIDEO CARD ============
function VideoCard({
  video,
  index,
}: {
  video: (typeof videos)[number]
  index: number
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: video.rotate - 4 }}
      whileInView={{ opacity: 1, y: 0, rotate: video.rotate }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -10, rotate: 0, scale: 1.02 }}
      className="group relative"
    >
      {/* Cadre coloré décalé */}
      <div
        className="absolute inset-0 border-[3px] border-black translate-x-2 translate-y-2 -z-0 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"
        style={{ background: video.color }}
      />

      {/* Conteneur vidéo — ratio préservé + hauteur plafonnée */}
      <div
        className="relative overflow-hidden border-[3px] border-black bg-black shadow-[6px_6px_0_#000] mx-auto
                   max-h-[360px] sm:max-h-[440px] lg:max-h-[500px]"
        style={{
          aspectRatio: `${video.width} / ${video.height}`,
          width: '100%',
        }}
      >
        <video
          ref={videoRef}
          src={video.src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          aria-label={video.title}
        />

        {/* Overlay dégradé pour lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

        {/* Badge numéro */}
        <span
          className="absolute top-3 left-3 z-10 w-8 h-8 flex items-center justify-center border-2 border-black text-[11px] font-black shadow-[3px_3px_0_#000]"
          style={{ background: video.color }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Badge "Live" */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2 py-1 bg-black/80 border-2 border-white/30 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[9px] font-black uppercase tracking-wider text-white">
            Live
          </span>
        </div>

        {/* Infos en bas */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <p className="text-[9px] font-black uppercase tracking-[0.25em] text-white/70 mb-1">
            {video.subtitle}
          </p>
          <h3 className="text-lg font-['Inter_Tight'] font-black uppercase text-white leading-tight">
            {video.title}
          </h3>
        </div>
      </div>
    </motion.div>
  )
}

// ============ SECTION VIDÉOS ============
export default function VideoShowcase() {
  return (
    <section
      id="video-showcase"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: POP.cream }}
    >
      {/* Trame halftone Pop Art */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />

      {/* Formes géométriques décoratives */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full border-[6px] border-black"
        style={{ background: POP.cyan, opacity: 0.15 }}
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 -right-10 w-20 h-20 border-[4px] border-black"
        style={{ background: POP.purple, rotate: 25, opacity: 0.5 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header éditorial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-white text-[10px] font-bold tracking-[0.3em] uppercase">
              <Film className="w-3 h-3" />
              Video Showcase
            </span>
            <span className="text-black/40 text-[10px] tracking-[0.25em] uppercase">
              Behind the Scenes · 2026
            </span>
          </div>

          <h2 className="font-['Inter_Tight'] font-black leading-[0.85] tracking-tighter text-black">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase">
              WATCH THE
            </span>
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase italic"
              style={{ WebkitTextStroke: '2px #000', color: 'transparent' }}
            >
              CAP CRAFT.
            </span>
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase"
              style={{ color: POP.pink }}
            >
              IN MOTION.
            </span>
          </h2>

          <div className="flex items-center gap-4 mt-6">
            <span className="h-px w-16 bg-black" />
            <p className="text-black/50 text-xs sm:text-sm tracking-[0.25em] uppercase font-medium">
              Atelier · Studio · Street
            </p>
          </div>
        </motion.div>

        {/* Grid vidéos — 3 colonnes, ratios natifs préservés */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start justify-items-center">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>

        {/* CTA bas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border-[3px] border-black shadow-[5px_5px_0_#000]">
            <Zap className="w-4 h-4" style={{ color: POP.pink }} />
            <span className="text-[11px] font-black uppercase tracking-widest text-black">
              3 Exclusive Clips · New Drops Weekly
            </span>
            <Sparkles className="w-4 h-4" style={{ color: POP.yellow }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}