'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import {
  Sparkles, Heart, Crown, Shield, Star,
  Palette, TrendingUp, ArrowRight, Award,
  Gem, Clock, Users, Scissors, Zap,
  CheckCircle, PenTool, Layers
} from 'lucide-react'

// Palette Pop Parade
const POP = {
  pink: '#FF3D7F',
  cyan: '#00E5FF',
  yellow: '#FFD60A',
  purple: '#B026FF',
  cream: '#FDF6E3',
  black: '#000000',
}

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [80, 0, 0, -80])

  const values = [
    {
      title: 'Unique Design',
      description: 'Each cap is a work of art, designed with patterns and colors that reflect your personality.',
      icon: Palette,
      color: POP.pink,
    },
    {
      title: 'Premium Quality',
      description: 'Noble materials and artisanal craftsmanship for exceptional comfort and durability.',
      icon: Shield,
      color: POP.cyan,
    },
    {
      title: 'Trend & Elegance',
      description: 'Combine urban style and sophistication with creations that define trends.',
      icon: TrendingUp,
      color: POP.yellow,
    },
  ]

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-32 md:py-40 overflow-hidden"
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

      {/* Formes géométriques nettes */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full border-[6px] border-black"
        style={{ background: POP.yellow, opacity: 0.18 }}
      />
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 -left-10 w-20 h-20 border-[4px] border-black"
        style={{ background: POP.pink, rotate: 25, opacity: 0.7 }}
      />
      <motion.div
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 right-[5%] w-16 h-16 rounded-full border-[4px] border-black"
        style={{ background: POP.cyan, opacity: 0.6 }}
      />

      <motion.div
        style={{ opacity, y }}
        className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10"
      >
        {/* Header éditorial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-white text-[10px] font-bold tracking-[0.3em] uppercase">
              <Sparkles className="w-3 h-3" />
              Craftsmanship
            </span>
            <span className="text-black/40 text-[10px] tracking-[0.25em] uppercase">
              Since 2026
            </span>
          </div>

          <h2 className="font-['Inter_Tight'] font-black leading-[0.85] tracking-tighter text-black">
            <span className="block text-5xl md:text-7xl lg:text-8xl uppercase">
              BECOME
            </span>
            <span
              className="block text-5xl md:text-7xl lg:text-8xl uppercase italic"
              style={{ WebkitTextStroke: '2px #000', color: 'transparent' }}
            >
              MASTER
            </span>
            <span
              className="block text-5xl md:text-7xl lg:text-8xl uppercase"
              style={{ color: POP.pink }}
            >
              OF YOUR STYLE.
            </span>
          </h2>

          <div className="flex items-center gap-4 mt-8">
            <span className="h-px w-16 bg-black" />
            <p className="text-black/50 text-xs sm:text-sm tracking-[0.25em] uppercase font-medium">
              Premium Caps · Crafted Identity
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Cadre noir décalé derrière l'image */}
            <div
              className="absolute inset-0 border-[3px] border-black translate-x-3 translate-y-3 -z-0"
              style={{ background: POP.yellow }}
            />

            <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden border-[3px] border-black bg-gray-100">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full"
              >
                <Image
                  src="/images/xsgbv.png"
                  alt="Brand Cap Craftsmanship"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Sticker "Atelier" rotatif */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
                transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 bg-white border-2 border-black px-4 py-3 shadow-[4px_4px_0_#000]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="p-1.5 border-2 border-black"
                    style={{ background: POP.yellow }}
                  >
                    <Scissors className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <p className="text-[9px] text-black/50 tracking-[0.2em] uppercase font-bold">
                      Atelier
                    </p>
                    <p className="text-sm font-black text-black">
                      Custom Workshop
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Sticker "Made to Order" */}
              <motion.div
                initial={{ opacity: 0, x: -30, rotate: 8 }}
                whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute top-6 right-6 border-2 border-black px-3 py-2 shadow-[3px_3px_0_#000]"
                style={{ background: POP.pink }}
              >
                <div className="flex items-center gap-2">
                  <PenTool className="w-3.5 h-3.5 text-black" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-black">
                    Made to Order
                  </span>
                </div>
              </motion.div>

              {/* Badge "Personalize" */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute bottom-6 right-6"
              >
                <span
                  className="px-3 py-1.5 border-2 border-black text-[9px] font-black uppercase tracking-wider shadow-[3px_3px_0_#000] inline-flex items-center gap-1.5"
                  style={{ background: POP.cyan }}
                >
                  <Zap className="w-3 h-3 text-black" />
                  Personalize
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span
                className="inline-flex items-center gap-2 px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] shadow-[3px_3px_0_#000]"
                style={{ background: POP.yellow }}
              >
                <Sparkles className="w-3 h-3 text-black" />
                Create Your Identity
              </span>
            </div>

            <h3 className="font-['Inter_Tight'] font-black leading-[0.95] tracking-tight text-black mb-6">
              <span className="block text-4xl md:text-5xl uppercase">
                DESIGN YOUR
              </span>
              <span
                className="block text-4xl md:text-5xl uppercase italic"
                style={{ WebkitTextStroke: '2px #000', color: 'transparent' }}
              >
                CUSTOM CAP.
              </span>
            </h3>

            <div className="space-y-4 mb-8">
              <p className="text-black/70 text-base md:text-lg leading-relaxed">
                From design to creation, our atelier brings your vision to life.{' '}
                <span
                  className="font-bold px-1.5 py-0.5 border-b-2"
                  style={{ borderColor: POP.pink, background: `${POP.pink}20` }}
                >
                  Every detail matters
                </span>{' '}
                — from fabric selection to the final stitch.
              </p>

              <p className="text-black/60 leading-relaxed">
                Choose your colors, add your embroidery, select your materials.
                Your cap, your story, your identity.
              </p>
            </div>

            {/* Points forts en stickers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
              {[
                { icon: Layers, label: 'Premium Materials', color: POP.pink },
                { icon: PenTool, label: 'Custom Embroidery', color: POP.cyan },
                { icon: CheckCircle, label: 'Handcrafted', color: POP.yellow },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2.5 p-3 bg-white border-2 border-black shadow-[3px_3px_0_#000] hover:shadow-[5px_5px_0_#000] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div
                    className="p-1.5 border-2 border-black shrink-0"
                    style={{ background: item.color }}
                  >
                    <item.icon className="w-3.5 h-3.5 text-black" />
                  </div>
                  <span className="text-[11px] font-bold text-black leading-tight">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.button
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 px-7 py-3.5 border-[3px] border-black text-black text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-[5px_5px_0_#000] hover:shadow-[8px_8px_0_#000]"
                style={{ background: POP.pink }}
              >
                <span>Start Customizing</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-white border-[3px] border-black text-black text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-[5px_5px_0_#000] hover:shadow-[8px_8px_0_#000]"
              >
                <span>Explore Collection</span>
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Workshop Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 bg-white border-2 border-black shadow-[4px_4px_0_#000]"
            >
              <div
                className="p-2 border-2 border-black"
                style={{ background: POP.cyan }}
              >
                <Clock className="w-4 h-4 text-black" />
              </div>
              <div>
                <p className="text-[9px] text-black/50 tracking-[0.2em] uppercase font-bold">
                  Workshop Hours
                </p>
                <p className="text-sm font-black text-black">
                  Mon - Fri: 9am - 7pm
                </p>
              </div>
              <div className="w-px h-8 bg-black/20" />
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full border border-black animate-pulse"
                  style={{ background: POP.pink }}
                />
                <span className="text-[11px] font-bold text-black">
                  Available now
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mt-32 md:mt-40"
        >
          <div className="mb-16">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-black text-[10px] font-black uppercase tracking-[0.25em] shadow-[3px_3px_0_#000] mb-6"
              style={{ background: POP.purple, color: '#fff' }}
            >
              <Gem className="w-3 h-3" />
              Why Brand Cap
            </span>
            <h3 className="font-['Inter_Tight'] font-black leading-[0.9] tracking-tight text-black">
              <span className="block text-4xl md:text-6xl uppercase">
                EXCELLENCE IN
              </span>
              <span
                className="block text-4xl md:text-6xl uppercase italic"
                style={{ WebkitTextStroke: '2px #000', color: 'transparent' }}
              >
                EVERY STITCH.
              </span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 + 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative bg-white border-[3px] border-black p-8 transition-all duration-300"
                style={{ boxShadow: '6px 6px 0 #000' }}
              >
                {/* Numéro éditorial */}
                <span
                  className="absolute -top-3 -right-3 w-9 h-9 flex items-center justify-center border-2 border-black text-xs font-black"
                  style={{ background: value.color }}
                >
                  0{index + 1}
                </span>

                <motion.div
                  whileHover={{ rotate: -8, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-14 h-14 border-2 border-black flex items-center justify-center mb-6"
                  style={{ background: value.color }}
                >
                  <value.icon className="w-7 h-7 text-black" />
                </motion.div>

                <h4 className="text-xl font-black text-black mb-3 uppercase tracking-tight">
                  {value.title}
                </h4>
                <p className="text-black/60 text-sm leading-relaxed">
                  {value.description}
                </p>

                <div
                  className="h-1 w-12 mt-6 transition-all duration-500 group-hover:w-20"
                  style={{ background: value.color }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof — bandeau affiche */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-28 bg-black border-[3px] border-black p-8 md:p-12"
          style={{ boxShadow: '10px 10px 0 #FF3D7F' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div
                className="p-3 border-2 border-white"
                style={{ background: POP.yellow }}
              >
                <Star className="w-7 h-7 text-black fill-current" />
              </div>
              <div>
                <p className="text-[10px] text-white/50 tracking-[0.25em] uppercase font-bold">
                  Rating
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-black text-white">4.9</span>
                  <div className="flex" style={{ color: POP.yellow }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-white/15 pt-6 md:pt-0 md:pl-8">
              <div
                className="p-3 border-2 border-white"
                style={{ background: POP.cyan }}
              >
                <Users className="w-7 h-7 text-black" />
              </div>
              <div>
                <p className="text-[10px] text-white/50 tracking-[0.25em] uppercase font-bold">
                  Community
                </p>
                <p className="text-3xl font-black text-white">5000+</p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-white/15 pt-6 md:pt-0 md:pl-8">
              <div
                className="p-3 border-2 border-white"
                style={{ background: POP.purple }}
              >
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-[10px] text-white/50 tracking-[0.25em] uppercase font-bold">
                  Guarantee
                </p>
                <p className="text-3xl font-black text-white">100%</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ligne décorative */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 160 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-1 bg-black mx-auto mt-20"
        />
      </motion.div>
    </section>
  )
}