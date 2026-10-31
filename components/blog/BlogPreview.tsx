'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ShoppingBag, Award, Star, Flame } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';

// Données des meilleures ventes
const bestSellers = [
  {
    id: 5,
    title: 'NY Grey Black Cap',
    category: 'Caps',
    price: 99.00,
    originalPrice: 124.00,
    discount: -20,
    image: '/images/cas4.jpg',
    slug: 'casquette-ny-gris-noir',
    color: '#B026FF', // Pop Purple
  },
  {
    id: 6,
    title: 'NY Black Cap - Black Logo',
    category: 'Caps',
    price: 99.00,
    originalPrice: 124.00,
    discount: -20,
    image: '/images/cas5.jpg',
    slug: 'casquette-ny-noir-logo-noir',
    color: '#FF3D7F', // Pop Pink
  },
  {
    id: 7,
    title: 'NY Fir Green Cap',
    category: 'Caps',
    price: 99.00,
    originalPrice: 124.00,
    discount: -20,
    image: '/images/cas6.jpg',
    slug: 'casquette-ny-vert-sapin',
    color: '#00E5FF', // Pop Cyan
  },
  {
    id: 8,
    title: 'Simple Cream Cap',
    category: 'Caps',
    price: 99.00,
    originalPrice: 124.00,
    discount: -20,
    image: '/images/cas7.jpg',
    slug: 'casquettes-simple-creme',
    color: '#FFD60A', // Pop Yellow
  },
];

export default function BlogPreview() {
  const { addToCart } = useCart();

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
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
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full border-[6px] border-black"
        style={{ background: '#B026FF', opacity: 0.15 }}
      />
      <motion.div
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 -right-10 w-20 h-20 border-[4px] border-black"
        style={{ background: '#FFD60A', rotate: -20, opacity: 0.65 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header éditorial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-black text-[10px] font-black tracking-[0.3em] uppercase shadow-[3px_3px_0_#000]"
                  style={{ background: '#B026FF', color: '#fff' }}
                >
                  <Flame className="w-3 h-3" />
                  Top Sellers
                </span>
                <span className="text-black/40 text-[10px] tracking-[0.25em] uppercase">
                  Best of 2026
                </span>
              </div>

              <h2 className="font-['Inter_Tight'] font-black leading-[0.85] tracking-tighter text-black">
                <span className="block text-4xl sm:text-5xl lg:text-6xl uppercase">
                  BEST
                </span>
                <span
                  className="block text-4xl sm:text-5xl lg:text-6xl uppercase italic"
                  style={{ WebkitTextStroke: '2px #000', color: 'transparent' }}
                >
                  SELLERS.
                </span>
              </h2>
            </div>

            <Link
              href="/meilleures-ventes"
              className="group hidden sm:inline-flex items-center gap-3 px-6 py-3 border-[3px] border-black text-xs font-black uppercase tracking-wider text-black transition-all duration-300 shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5"
              style={{ background: '#FFD60A' }}
            >
              <span>View all</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <span className="h-px w-16 bg-black" />
            <p className="text-black/50 text-[10px] sm:text-xs tracking-[0.25em] uppercase font-medium">
              Selected by Community · Highest Rated
            </p>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 40, rotate: 2 },
                visible: { opacity: 1, y: 0, rotate: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative bg-white border-[3px] border-black transition-all duration-300"
              style={{ boxShadow: '6px 6px 0 #000' }}
            >
              {/* Numéro éditorial */}
              <span
                className="absolute -top-3 -right-3 z-20 w-8 h-8 flex items-center justify-center border-2 border-black text-[11px] font-black"
                style={{ background: product.color }}
              >
                0{index + 1}
              </span>

              {/* Image */}
              <Link
                href={`/produit/${product.slug}`}
                className="block relative overflow-hidden aspect-square bg-gray-100 border-b-[3px] border-black"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Badge "Top" — sticker noir */}
                <motion.span
                  initial={{ rotate: -6 }}
                  whileHover={{ rotate: -10, scale: 1.05 }}
                  className="absolute top-3 left-3 z-10 bg-black text-white text-[10px] font-black px-2.5 py-1 border-2 border-black shadow-[3px_3px_0_#FF3D7F] flex items-center gap-1 uppercase tracking-wider"
                >
                  <Award size={11} />
                  Top
                </motion.span>

                {/* Badge Promotion — sticker coloré rotatif */}
                {product.discount < 0 && (
                  <motion.span
                    initial={{ rotate: 8 }}
                    whileHover={{ rotate: 12, scale: 1.05 }}
                    className="absolute top-3 right-3 z-10 border-2 border-black px-2.5 py-1 text-[11px] font-black shadow-[3px_3px_0_#000]"
                    style={{ background: product.color }}
                  >
                    -{Math.abs(product.discount)}%
                  </motion.span>
                )}

                {/* Quick View — overlay au hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white border-2 border-black px-4 py-2 text-[11px] font-black uppercase tracking-wider shadow-[3px_3px_0_#000] hover:shadow-[5px_5px_0_#000] hover:-translate-y-0.5 transition-all duration-300">
                    Quick view
                  </button>
                </div>
              </Link>

              {/* Content */}
              <div className="p-4">
                <p
                  className="text-[9px] font-black uppercase tracking-[0.25em] mb-1.5"
                  style={{ color: product.color }}
                >
                  {product.category}
                </p>
                <Link href={`/produit/${product.slug}`}>
                  <h3 className="text-sm font-black text-black hover:underline decoration-2 underline-offset-4 transition-all duration-300 line-clamp-2 leading-snug">
                    {product.title}
                  </h3>
                </Link>

                {/* Rating mini */}
                <div className="flex items-center gap-0.5 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-2.5 h-2.5 fill-current"
                      style={{ color: product.color }}
                    />
                  ))}
                </div>

                {/* Price */}
                <div className="mt-3 flex items-baseline gap-2 flex-wrap">
                  <span className="text-lg font-black text-black">
                    {product.price.toFixed(2)} Dhs
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xs text-black/30 line-through font-medium">
                        {product.originalPrice.toFixed(2)} Dhs
                      </span>
                      <span
                        className="text-[10px] font-black px-1.5 py-0.5 border border-black"
                        style={{ background: product.color }}
                      >
                        -{Math.abs(product.discount)}%
                      </span>
                    </>
                  )}
                </div>

                {/* Add to Cart — ✅ activé */}
                <button
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      title: product.title,
                      category: product.category,
                      price: product.price,
                      originalPrice: product.originalPrice,
                      discount: product.discount,
                      image: product.image,
                      slug: product.slug,
                    })
                  }
                  className="mt-4 w-full py-2.5 border-2 border-black text-[11px] font-black uppercase tracking-wider text-black transition-all duration-300 hover:shadow-[4px_4px_0_#000] hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  style={{ background: product.color }}
                >
                  <ShoppingBag size={14} />
                  Add to cart
                </button>
              </div>

              {/* Ligne décorative colorée */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{
                  background: `linear-gradient(90deg, transparent, ${product.color}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All */}
        <div className="text-center mt-10 sm:hidden">
          <Link
            href="/meilleures-ventes"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white border-[3px] border-black text-xs font-black uppercase tracking-wider shadow-[4px_4px_0_#FFD60A] hover:shadow-[6px_6px_0_#FFD60A] hover:-translate-y-0.5 transition-all duration-300"
          >
            View all
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}