'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Award, Clock, Star } from 'lucide-react'

// Palette Pop Parade
const POP = {
  pink: '#FF3D7F',
  cyan: '#00E5FF',
  yellow: '#FFD60A',
  purple: '#B026FF',
  cream: '#FDF6E3',
  black: '#000000',
}

export function CTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const badgeVariants = {
    hidden: { scale: 0, rotate: -10 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        duration: 0.6,
      },
    },
  }

  const features = [
    { icon: Clock, label: 'Reply within 24h', color: POP.cyan },
    { icon: Sparkles, label: 'Custom creations', color: POP.yellow },
    { icon: Award, label: '100% personalized', color: POP.purple },
  ]

  return (
    <section
      id="collaboration"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: POP.cream }}
    >
      {/* Trame halftone */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />

      {/* Formes géométriques nettes */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full border-[6px] border-black"
        style={{ background: POP.pink, opacity: 0.15 }}
      />
      <motion.div
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 65, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full border-[6px] border-black"
        style={{ background: POP.yellow, opacity: 0.15 }}
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-[12%] w-16 h-16 border-[4px] border-black"
        style={{ background: POP.cyan, rotate: 25, opacity: 0.55 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center"
        >
          {/* Badge — sticker rotatif */}
          <motion.div variants={badgeVariants} className="inline-block mb-10">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-black text-[10px] font-black uppercase tracking-[0.25em] shadow-[4px_4px_0_#000]"
              style={{ background: POP.pink, color: '#fff' }}
            >
              <Sparkles className="w-3 h-3" />
              Let's collaborate
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </span>
          </motion.div>

          {/* Titre principal — typographie éditoriale */}
          <motion.h2
            variants={itemVariants}
            className="font-['Inter_Tight'] font-black leading-[0.85] tracking-tighter text-black mb-8"
          >
            <span className="block text-4xl sm:text-5xl lg:text-6xl uppercase">
              READY TO BRING
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl uppercase">
              YOUR
            </span>
            <span
              className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl uppercase italic"
              style={{
                WebkitTextStroke: `2px ${POP.black}`,
                color: 'transparent',
              }}
            >
              CREATIVE VISION TO LIFE.
            </span>
          </motion.h2>

          {/* Séparateur */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-black mx-auto mt-2"
          />

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-black/60 text-base md:text-lg max-w-2xl mx-auto mt-10 leading-relaxed"
          >
            Whether you have a specific project in mind or want to explore the
            possibilities, we are here to turn your ideas into exceptional
            creations.
          </motion.p>

          {/* Boutons CTA — rectangulaires bordés */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            {/* CTA principal */}
            <motion.div
              whileHover={{ x: -3, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-10 py-4 border-[3px] border-black text-black text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-[6px_6px_0_#000] hover:shadow-[9px_9px_0_#000]"
                style={{ background: POP.pink }}
              >
                <span>Start a project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* CTA secondaire */}
            <motion.div
              whileHover={{ x: -3, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <a
                href="mailto:contact@casacap.ma"
                className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-white border-[3px] border-black text-black text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-[6px_6px_0_#000] hover:shadow-[9px_9px_0_#000]"
              >
                Contact us
                <Sparkles className="w-4 h-4 transition-transform duration-500 group-hover:rotate-12" />
              </a>
            </motion.div>
          </motion.div>

          {/* Features — stickers horizontaux */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="flex items-center gap-3 px-4 py-2.5 bg-white border-2 border-black shadow-[3px_3px_0_#000] hover:shadow-[5px_5px_0_#000] transition-all duration-300 cursor-default"
              >
                <div
                  className="p-1.5 border-2 border-black shrink-0"
                  style={{ background: feature.color }}
                >
                  <feature.icon className="w-3.5 h-3.5 text-black" />
                </div>
                <span className="text-[11px] font-black text-black uppercase tracking-wider">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Bandeau de confiance — bloc noir avec ombre rose */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-black border-[3px] border-black px-6 sm:px-8 py-4 sm:py-5"
            style={{ boxShadow: `8px 8px 0 ${POP.pink}` }}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-current"
                  style={{ color: POP.yellow }}
                />
              ))}
            </div>
            <div className="w-px h-6 bg-white/20 hidden sm:block" />
            <span className="text-[11px] text-white font-black uppercase tracking-[0.2em]">
              +500 happy customers
            </span>
            <div
              className="w-2 h-2 rounded-full border border-white animate-pulse"
              style={{ background: POP.yellow }}
            />
          </motion.div>

          {/* Ligne décorative finale */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 160 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="h-1 bg-black mx-auto mt-16"
          />
        </motion.div>
      </div>
    </section>
  )
}