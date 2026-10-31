'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  Crown,
  Heart,
  Shield,
  Star,
  Palette,
  TrendingUp,
  Gem,
  Clock,
  Users,
  Scissors,
  Zap,
  CheckCircle,
  PenTool,
  Layers,
  MapPin,
  Award,
  Coffee,
  MessageCircle,
} from 'lucide-react'

// Palette Pop Parade identique à la page Collection
const POP = {
  pink: '#FF3D7F',
  cyan: '#00E5FF',
  yellow: '#FFD60A',
  purple: '#B026FF',
  cream: '#FDF6E3',
  black: '#000000',
}

// ============ DONNÉES ============

const values = [
  {
    title: 'Unique Design',
    description:
      'Each cap is a work of art, drawn with patterns and colors that reflect your personality.',
    icon: Palette,
    color: POP.pink,
  },
  {
    title: 'Premium Quality',
    description:
      'Noble materials and artisan craftsmanship for exceptional comfort and durability.',
    icon: Shield,
    color: POP.cyan,
  },
  {
    title: 'Trend & Elegance',
    description:
      'Combine urban style and sophistication with creations that define trends.',
    icon: TrendingUp,
    color: POP.yellow,
  },
]

const timeline = [
  {
    year: '2023',
    title: 'The idea',
    description:
      'A sketchbook, an obsession: to create caps that look like no other.',
    icon: PenTool,
    color: POP.cyan,
  },
  {
    year: '2024',
    title: 'The first workshop',
    description:
      'A small space in Casablanca, machines, and the first hand-sewn pieces.',
    icon: Scissors,
    color: POP.pink,
  },
  {
    year: '2025',
    title: 'The community',
    description:
      'Over 5,000 creators join us. Every order becomes a personal story.',
    icon: Users,
    color: POP.yellow,
  },
  {
    year: '2026',
    title: 'Capora MA',
    description:
      'A confident brand, a strong identity, a collection that refuses to follow trends.',
    icon: Crown,
    color: POP.purple,
  },
]

const team = [
  {
    name: 'Yasmine',
    role: 'Founder & Designer',
    icon: Crown,
    color: POP.pink,
  },
  {
    name: 'Omar',
    role: 'Master artisan',
    icon: Scissors,
    color: POP.cyan,
  },
  {
    name: 'Lina',
    role: 'Art direction',
    icon: Palette,
    color: POP.yellow,
  },
  {
    name: 'Mehdi',
    role: 'Customer relations',
    icon: Heart,
    color: POP.purple,
  },
]

const stats = [
  { value: '50+', label: 'Exclusive models', icon: Crown, color: POP.yellow },
  { value: '5000+', label: 'Happy customers', icon: Heart, color: POP.pink },
  { value: '100%', label: 'Handmade', icon: Shield, color: POP.cyan },
  { value: '4.9', label: 'Average rating', icon: Star, color: POP.purple },
]

const highlights = [
  { icon: Layers, label: 'Premium materials', color: POP.pink },
  { icon: PenTool, label: 'Custom embroidery', color: POP.cyan },
  { icon: CheckCircle, label: 'Handmade', color: POP.yellow },
]

// ============ PAGE ABOUT ============

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div className="min-h-screen" style={{ backgroundColor: POP.cream }}>
      {/* ============================================ */}
      {/* ========== HERO ABOUT ========== */}
      {/* ============================================ */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-black"
      >
        {/* Trame halftone */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />

        {/* Formes décoratives animées */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-[8px] border-white/10"
          style={{ background: POP.pink, opacity: 0.3 }}
        />
        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full border-[8px] border-white/10"
          style={{ background: POP.cyan, opacity: 0.25 }}
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-[15%] w-24 h-24 border-[5px] border-white/30"
          style={{ background: POP.yellow, rotate: 25, opacity: 0.6 }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-white text-black text-[10px] font-black uppercase tracking-[0.3em] shadow-[4px_4px_0_rgba(255,255,255,0.2)]"
              style={{ background: POP.yellow }}
            >
              <Sparkles className="w-3 h-3" />
              About · Capora MA
            </span>
            <span className="text-white/40 text-[10px] tracking-[0.25em] uppercase font-bold">
              Est. 2026 · Casablanca
            </span>
          </div>

          <h1 className="font-['Inter_Tight'] font-black leading-[0.85] tracking-tighter text-white max-w-5xl">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase">
              WE DON'T
            </span>
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase italic"
              style={{ WebkitTextStroke: '2px #fff', color: 'transparent' }}
            >
              FOLLOW
            </span>
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase"
              style={{ color: POP.pink }}
            >
              TRENDS.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/60 text-base md:text-lg max-w-2xl mt-8 leading-relaxed font-medium"
          >
            Capora MA was born from an obsession: to create caps that look like
            no other. Each piece is designed, drawn, and hand-sewn in Morocco to
            assert uncompromising freedom.
          </motion.p>

          {/* Stats inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-2.5 p-3.5 border-2 border-white/20 bg-white/5 backdrop-blur-sm"
              >
                <div
                  className="p-1.5 border-2 border-white/40 shrink-0"
                  style={{ background: s.color }}
                >
                  <s.icon className="w-3.5 h-3.5 text-black" />
                </div>
                <div>
                  <p className="text-white font-black text-sm leading-none">
                    {s.value}
                  </p>
                  <p className="text-white/40 text-[8px] uppercase tracking-[0.15em] mt-1 leading-none font-bold">
                    {s.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* ========== MANIFESTE ========== */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Trame halftone */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-black text-[10px] font-black uppercase tracking-[0.25em] mb-8 shadow-[3px_3px_0_#000]"
              style={{ background: POP.cyan }}
            >
              <Zap className="w-3 h-3" />
              Manifesto
            </span>

            <p className="font-['Inter_Tight'] font-black text-2xl sm:text-3xl md:text-4xl text-black leading-tight max-w-3xl mx-auto">
              « We don't just sell caps.{' '}
              <span
                className="px-2 py-0.5 border-b-4 border-black"
                style={{ background: POP.pink, color: '#fff' }}
              >
                We help you assert who you are
              </span>
              . Every detail matters: from the choice of thread to the final
              stitch. »
            </p>

            <div className="flex items-center justify-center gap-3 mt-10">
              <div className="w-12 h-[2px] bg-black" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-black/60">
                Yasmine · Founder
              </span>
              <div className="w-12 h-[2px] bg-black" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ========== HISTOIRE (TIMELINE) ========== */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-black">
        {/* Trame halftone */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full border-[6px] border-white/10"
          style={{ background: POP.purple, opacity: 0.2 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-white text-black text-[10px] font-black uppercase tracking-[0.3em] shadow-[4px_4px_0_rgba(255,255,255,0.2)]"
                style={{ background: POP.yellow }}
              >
                <Clock className="w-3 h-3" />
                Our journey
              </span>
            </div>
            <h2 className="font-['Inter_Tight'] font-black leading-[0.85] tracking-tighter text-white">
              <span className="block text-4xl sm:text-5xl md:text-6xl uppercase">
                FROM A SKETCH
              </span>
              <span
                className="block text-4xl sm:text-5xl md:text-6xl uppercase italic"
                style={{ WebkitTextStroke: '2px #fff', color: 'transparent' }}
              >
                TO A BRAND.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="group relative bg-white border-[3px] border-black p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: `6px 6px 0 ${item.color}` }}
              >
                {/* Badge année néo-brutaliste */}
                <span
                  className="absolute -top-3.5 -right-3 z-10 px-2.5 py-1 border-2 border-black text-[10px] font-black shadow-[3px_3px_0_#000]"
                  style={{ background: item.color }}
                >
                  {item.year}
                </span>

                <div
                  className="w-12 h-12 border-2 border-black flex items-center justify-center mb-5 shadow-[3px_3px_0_#000]"
                  style={{ background: item.color }}
                >
                  <item.icon className="w-6 h-6 text-black" />
                </div>

                <h3 className="text-lg font-black text-black uppercase tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-black/70 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Connecteur desktop */}
                {i < timeline.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[3px] border-y border-black"
                    style={{ background: item.color }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ========== ATELIER / SAVOIR-FAIRE ========== */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image avec cadre décalé Pop */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 border-[3px] border-black"
                style={{ background: POP.yellow }}
              />

              <div className="relative h-[400px] md:h-[480px] border-[3px] border-black overflow-hidden bg-gray-100">
                <Image
                  src="/images/aboutcapora.png"
                  alt="Atelier Capora MA"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Stickers superposés */}
                <motion.div
                  initial={{ rotate: -6 }}
                  whileHover={{ rotate: -10 }}
                  className="absolute bottom-4 left-4 px-3 py-1.5 border-2 border-black text-[10px] font-black uppercase tracking-wider text-black shadow-[3px_3px_0_#000] flex items-center gap-1.5"
                  style={{ background: POP.cyan }}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Casablanca, MA
                </motion.div>

                <motion.div
                  initial={{ rotate: 5 }}
                  whileHover={{ rotate: 8 }}
                  className="absolute top-4 right-4 px-3 py-1.5 border-2 border-black text-[10px] font-black uppercase tracking-wider text-white shadow-[3px_3px_0_#000] flex items-center gap-1.5"
                  style={{ background: POP.purple }}
                >
                  <Scissors className="w-3.5 h-3.5" />
                  Handmade
                </motion.div>
              </div>
            </motion.div>

            {/* Texte atelier */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-[0.25em] mb-6 shadow-[3px_3px_0_#000]"
                style={{ background: POP.yellow }}
              >
                <Gem className="w-3 h-3" />
                The workshop
              </span>

              <h2 className="font-['Inter_Tight'] font-black leading-[0.9] tracking-tight text-black mb-6">
                <span className="block text-3xl md:text-5xl uppercase">
                  EVERY STITCH
                </span>
                <span
                  className="block text-3xl md:text-5xl uppercase italic"
                  style={{ WebkitTextStroke: '2px #000', color: 'transparent' }}
                >
                  IS THOUGHT OUT.
                </span>
              </h2>

              <p className="text-black/80 text-base leading-relaxed mb-6 font-medium">
                Our workshop is a laboratory of expression where each cap passes
                through several pairs of expert hands. We select thick fabrics,
                calibrate every embroidery, and adjust every curve.
              </p>

              {/* Points forts */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                {highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2.5 p-3 bg-white border-2 border-black shadow-[3px_3px_0_#000] hover:shadow-[5px_5px_0_#000] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div
                      className="p-1.5 border-2 border-black shrink-0"
                      style={{ background: h.color }}
                    >
                      <h.icon className="w-3.5 h-3.5 text-black" />
                    </div>
                    <span className="text-[11px] font-black text-black leading-tight uppercase">
                      {h.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Boutons d'action */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/collection"
                  className="group inline-flex items-center gap-2 px-6 py-3 border-[3px] border-black text-black text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-[5px_5px_0_#000] hover:shadow-[7px_7px_0_#000] hover:-translate-y-0.5"
                  style={{ background: POP.pink }}
                >
                  View the collection
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-white border-[3px] border-black text-black text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-[5px_5px_0_#000] hover:shadow-[7px_7px_0_#000] hover:-translate-y-0.5"
                >
                  Contact us
                  <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ========== VALEURS ========== */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span
              className="inline-flex items-center gap-2 px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-[0.25em] mb-6 shadow-[3px_3px_0_#000]"
              style={{ background: POP.purple, color: '#fff' }}
            >
              <Gem className="w-3 h-3" />
              Our pillars
            </span>
            <h2 className="font-['Inter_Tight'] font-black leading-[0.9] tracking-tight text-black">
              <span className="block text-3xl sm:text-4xl md:text-5xl uppercase">
                EXCELLENCE IN
              </span>
              <span
                className="block text-3xl sm:text-4xl md:text-5xl uppercase italic"
                style={{ WebkitTextStroke: '2px #000', color: 'transparent' }}
              >
                EVERY STITCH.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative bg-white border-[3px] border-black p-8 transition-all duration-300"
                style={{ boxShadow: '6px 6px 0 #000' }}
              >
                {/* Numéro éditorial */}
                <span
                  className="absolute -top-3.5 -right-3.5 w-9 h-9 flex items-center justify-center border-2 border-black text-xs font-black shadow-[2px_2px_0_#000]"
                  style={{ background: value.color }}
                >
                  0{i + 1}
                </span>

                <motion.div
                  whileHover={{ rotate: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-14 h-14 border-2 border-black flex items-center justify-center mb-6 shadow-[3px_3px_0_#000]"
                  style={{ background: value.color }}
                >
                  <value.icon className="w-7 h-7 text-black" />
                </motion.div>

                <h3 className="text-xl font-black text-black mb-3 uppercase tracking-tight">
                  {value.title}
                </h3>
                <p className="text-black/70 text-sm leading-relaxed font-medium">
                  {value.description}
                </p>

                <div
                  className="h-1.5 w-12 mt-6 transition-all duration-300 group-hover:w-20"
                  style={{ background: value.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ========== ÉQUIPE ========== */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-black">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-white text-black text-[10px] font-black uppercase tracking-[0.3em] shadow-[4px_4px_0_rgba(255,255,255,0.2)]"
              style={{ background: POP.cyan }}
            >
              <Users className="w-3 h-3" />
              The team
            </span>
            <h2 className="font-['Inter_Tight'] font-black leading-[0.9] tracking-tight text-white mt-6">
              <span className="block text-3xl sm:text-4xl md:text-5xl uppercase">
                THE PEOPLE
              </span>
              <span
                className="block text-3xl sm:text-4xl md:text-5xl uppercase italic"
                style={{ WebkitTextStroke: '2px #fff', color: 'transparent' }}
              >
                BEHIND CAPORA.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="relative bg-white border-[3px] border-black p-6 transition-all duration-300"
                style={{ boxShadow: `6px 6px 0 ${member.color}` }}
              >
                <div
                  className="w-12 h-12 md:w-14 md:h-14 border-2 border-black flex items-center justify-center mb-4 shadow-[3px_3px_0_#000]"
                  style={{ background: member.color }}
                >
                  <member.icon className="w-6 h-6 md:w-7 md:h-7 text-black" />
                </div>

                <h3 className="text-base md:text-lg font-black text-black uppercase tracking-tight">
                  {member.name}
                </h3>
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] text-black/50 mt-1">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 flex items-center gap-3 justify-center"
          >
            <Coffee className="w-4 h-4 text-white/30" />
            <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.25em]">
              Crafted in Morocco with coffee & passion
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ========== CTA FINAL ========== */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-black text-white text-[10px] font-black uppercase tracking-[0.3em] shadow-[4px_4px_0_#000] mb-8"
              style={{ background: POP.pink }}
            >
              <Award className="w-3.5 h-3.5" />
              Ready to stand out?
            </span>

            <h2 className="font-['Inter_Tight'] font-black leading-[0.9] tracking-tight text-black mb-8">
              <span className="block text-4xl sm:text-5xl md:text-6xl uppercase">
                YOUR STYLE.
              </span>
              <span
                className="block text-4xl sm:text-5xl md:text-6xl uppercase italic"
                style={{ WebkitTextStroke: '2px #000', color: 'transparent' }}
              >
                YOUR CAP.
              </span>
            </h2>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              <Link
                href="/collection"
                className="group inline-flex items-center gap-3 px-8 py-4 border-[3px] border-black text-black text-xs md:text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-[6px_6px_0_#000] hover:shadow-[9px_9px_0_#000] hover:-translate-y-0.5"
                style={{ background: POP.pink }}
              >
                Discover the collection
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white border-[3px] border-black text-black text-xs md:text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-[6px_6px_0_#000] hover:shadow-[9px_9px_0_#000] hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                Write to us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}