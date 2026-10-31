'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles, ShoppingBag, Star, Zap } from 'lucide-react'
import { useCart } from '@/app/context/CartContext'

const products = [
  {
    id: 1,
    name: 'Street Icon',
    tagline: 'Bold · Urban · Iconic',
    price: 149,
    image: '/images/cas0.jpg',
    color: '#FF3D7F',
    slug: 'street-icon',
  },
  {
    id: 2,
    name: 'Neon Wave',
    tagline: 'Vibrant · Fresh · Loud',
    price: 129,
    image: '/images/cas1.jpg',
    color: '#00E5FF',
    slug: 'neon-wave',
  },
  {
    id: 3,
    name: 'Yellow Pop',
    tagline: 'Sunny · Playful · Unique',
    price: 139,
    image: '/images/cas2.jpg',
    color: '#FFD60A',
    slug: 'yellow-pop',
  },
  {
    id: 4,
    name: 'Violet Hype',
    tagline: 'Electric · Bold · Trendy',
    price: 159,
    image: '/images/cas3.jpg',
    color: '#B026FF',
    slug: 'violet-hype',
  },
]

// Rotation et offset pour l'effet "parade" désaligné
const cardLayout = [
  { rotate: -3, y: 0 },
  { rotate: 2, y: 24 },
  { rotate: -2, y: 8 },
  { rotate: 3, y: 32 },
]

export default function Products3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState<number | null>(null)
  const { addToCart } = useCart()

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: '#FDF6E3' }}
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
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full border-[6px] border-black"
        style={{ background: '#FF3D7F', opacity: 0.15 }}
      />
      <motion.div
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full border-[6px] border-black"
        style={{ background: '#00E5FF', opacity: 0.12 }}
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-[15%] w-16 h-16 border-[4px] border-black"
        style={{ background: '#FFD60A', rotate: 45 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header éditorial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          {/* Badges du haut */}
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-white text-[10px] font-bold tracking-[0.3em] uppercase">
              <Sparkles className="w-3 h-3" />
              3D Collection
            </span>
            <span className="text-black/40 text-[10px] tracking-[0.2em] uppercase font-bold">
              Pop Prad · 2026
            </span>
          </div>

          {/* Container Titre + Image (Desktop) */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Titre THE GOAT CAPORA */}
            <div>
              <h2 className="font-['Inter_Tight'] font-black text-black leading-[0.85] tracking-tighter">
                <span className="block text-[14vw] sm:text-[10vw] lg:text-[7vw] xl:text-[8vw] uppercase">
                  THE
                </span>
                <span
                  className="block text-[18vw] sm:text-[13vw] lg:text-[9.5vw] xl:text-[11vw] uppercase italic"
                  style={{
                    WebkitTextStroke: '3px #000',
                    color: 'transparent',
                  }}
                >
                  GOAT
                </span>
                <span
                  className="block text-[14vw] sm:text-[10vw] lg:text-[7vw] xl:text-[8vw] uppercase"
                  style={{ color: '#FF3D7F' }}
                >
                  CAPORA.
                </span>
              </h2>
            </div>

            {/* ✅ IMAGE DESKTOP UNIQUEMENT — Alignée à droite de THE / GOAT */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 3 }}
              whileInView={{ opacity: 1, x: 0, rotate: -2 }}
              whileHover={{ rotate: 1, scale: 1.03 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="hidden lg:flex relative flex-col items-center justify-center p-6 bg-white border-[3px] border-black shadow-[8px_8px_0_#FF3D7F] self-center -mt-6 mr-4 xl:mr-10 transition-all duration-300"
            >
              {/* Badge sticker décalé */}
              <span
                className="absolute -top-3.5 -right-3 z-10 px-2.5 py-1 border-2 border-black text-[9px] font-black uppercase tracking-wider shadow-[2px_2px_0_#000]"
                style={{ background: '#FFD60A' }}
              >
                Signature MA
              </span>

              {/* Conteneur de l'image */}
              <div className="relative w-64 xl:w-80 h-32 xl:h-40">
                <Image
                  src="/images/capora01.png"
                  alt="Capora MA"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Ligne sous-titre */}
          <div className="flex items-center gap-4 mt-8">
            <span className="h-px flex-1 bg-black/20 max-w-[200px]" />
            <p className="text-black/50 text-xs sm:text-sm tracking-[0.25em] uppercase font-medium">
              Bold Colors · 3D Experience · Limited Drop
            </p>
          </div>
        </motion.div>

        {/* Grille produits — composition décalée */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 perspective-[2000px]">
          {products.map((product, index) => {
            const layout = cardLayout[index]
            const isHovered = hovered === index

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 80, rotate: layout.rotate - 5 }}
                whileInView={{
                  opacity: 1,
                  y: layout.y,
                  rotate: layout.rotate,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: '-50px' }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="relative group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  animate={{
                    y: isHovered ? -12 : 0,
                    rotate: isHovered ? 0 : layout.rotate,
                    scale: isHovered ? 1.02 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="relative bg-white border-[3px] border-black overflow-hidden"
                  style={{
                    boxShadow: isHovered
                      ? '12px 12px 0 #000'
                      : '6px 6px 0 #000',
                    transition: 'box-shadow 0.3s ease',
                  }}
                >
                  {/* Image produit */}
                  <div className="relative aspect-square overflow-hidden bg-gray-100 border-b-[3px] border-black">
                    <motion.div
                      animate={{ scale: isHovered ? 1.12 : 1 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full h-full"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </motion.div>

                    {/* Sticker 3D rotatif */}
                    <motion.div
                      animate={{ rotate: isHovered ? -8 : -3 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="absolute top-3 left-3 px-2.5 py-1 border-2 border-black text-[9px] font-black uppercase tracking-wider shadow-[3px_3px_0_#000]"
                      style={{ background: product.color }}
                    >
                      <span className="flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        3D View
                      </span>
                    </motion.div>

                    {/* Prix sticker */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-white border-2 border-black text-[11px] font-black shadow-[3px_3px_0_#000]">
                      {product.price} Dhs
                    </div>

                    {/* Rating en bas */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/90 border-2 border-black px-2 py-0.5 shadow-[2px_2px_0_#000]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-current"
                          style={{ color: product.color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Infos */}
                  <div className="p-5 bg-white">
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.25em] mb-2"
                      style={{ color: product.color }}
                    >
                      {product.tagline}
                    </p>
                    <h3 className="text-2xl font-['Inter_Tight'] font-black text-black mb-1 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-black/40 text-[11px] mb-5 font-medium">
                      Customize in 3D · Live Preview
                    </p>

                    {/* ✅ Add to cart activé */}
                    <button
                      onClick={() =>
                        addToCart({
                          id: product.id,
                          title: product.name,
                          category: 'Caps',
                          price: product.price,
                          image: product.image,
                          slug: product.slug,
                        })
                      }
                      className="group/btn inline-flex items-center justify-between w-full px-4 py-3 border-[3px] border-black text-sm font-black uppercase tracking-wide text-black transition-all duration-300 hover:shadow-[5px_5px_0_#000] hover:-translate-y-0.5"
                      style={{ background: product.color }}
                    >
                      <span className="flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4" />
                        Add to cart
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </motion.div>

                {/* Numéro d'ordre éditorial */}
                <span className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center bg-black text-white text-[11px] font-black rounded-full border-2 border-white z-10">
                  0{index + 1}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* CTA bas — style affiche */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center"
        >
          <Link
            href="/collection"
            className="group inline-flex items-center gap-4 px-10 py-4 bg-black text-white border-[3px] border-black text-sm font-black uppercase tracking-widest hover:bg-[#FF3D7F] hover:text-black transition-all duration-300 shadow-[6px_6px_0_#FF3D7F] hover:shadow-[6px_6px_0_#000]"
          >
            <Sparkles className="w-4 h-4" />
            Explore the collection
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}