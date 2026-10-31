'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ShoppingBag,
  Star,
  Sparkles,
  SlidersHorizontal,
  X,
  Grid3x3,
  LayoutGrid,
} from 'lucide-react'
import { useCart } from '@/app/context/CartContext'

// Palette Pop Parade
const POP = {
  pink: '#FF3D7F',
  cyan: '#00E5FF',
  yellow: '#FFD60A',
  purple: '#B026FF',
  cream: '#FDF6E3',
  black: '#000000',
}

// Types
type Product = {
  id: number
  title: string
  category: string
  subCategory: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  slug: string
  color: string
  isNew?: boolean
  rating: number
}

// ============ PRODUCT DATA ============
// (To be replaced later by an API / CMS fetch)
const allProducts: Product[] = [
  {
    id: 1,
    title: 'Catch of the Day Cap',
    category: 'Caps',
    subCategory: 'Classics',
    price: 119.0,
    originalPrice: 199.0,
    discount: -40,
    image: '/images/cas0.jpg',
    slug: 'casquette-catch-of-the-day',
    color: POP.pink,
    isNew: true,
    rating: 5,
  },
  {
    id: 2,
    title: 'NY Black-NB Cap',
    category: 'Caps',
    subCategory: 'NY',
    price: 99.0,
    originalPrice: 124.0,
    discount: -20,
    image: '/images/cas1.jpg',
    slug: 'casquette-ny-noir-nb',
    color: POP.cyan,
    rating: 4,
  },
  {
    id: 3,
    title: 'Canadiens Cap',
    category: 'Caps',
    subCategory: 'Classics',
    price: 75.0,
    originalPrice: 125.0,
    discount: -40,
    image: '/images/cas2.jpg',
    slug: 'casquette-canadiens',
    color: POP.yellow,
    rating: 5,
  },
  {
    id: 4,
    title: 'NY Beige Cap',
    category: 'Caps',
    subCategory: 'NY',
    price: 99.0,
    originalPrice: 124.0,
    discount: -20,
    image: '/images/cas3.jpg',
    slug: 'casquette-ny-beige',
    color: POP.purple,
    rating: 4,
  },
  {
    id: 5,
    title: 'NY Grey Black Cap',
    category: 'Caps',
    subCategory: 'NY',
    price: 99.0,
    originalPrice: 124.0,
    discount: -20,
    image: '/images/cas4.jpg',
    slug: 'casquette-ny-gris-noir',
    color: POP.pink,
    isNew: true,
    rating: 4,
  },
  {
    id: 6,
    title: 'NY Black Cap - Black Logo',
    category: 'Caps',
    subCategory: 'NY',
    price: 99.0,
    originalPrice: 124.0,
    discount: -20,
    image: '/images/cas5.jpg',
    slug: 'casquette-ny-noir-logo-noir',
    color: POP.cyan,
    rating: 5,
  },
  {
    id: 7,
    title: 'NY Fir Green Cap',
    category: 'Caps',
    subCategory: 'NY',
    price: 99.0,
    originalPrice: 124.0,
    discount: -20,
    image: '/images/cas6.jpg',
    slug: 'casquette-ny-vert-sapin',
    color: POP.yellow,
    rating: 4,
  },
  {
    id: 8,
    title: 'Simple Cream Cap',
    category: 'Caps',
    subCategory: 'Classics',
    price: 99.0,
    originalPrice: 124.0,
    discount: -20,
    image: '/images/cas7.jpg',
    slug: 'casquettes-simple-creme',
    color: POP.purple,
    rating: 5,
  },
  {
    id: 9,
    title: 'Street Icon',
    category: 'Caps',
    subCategory: 'Limited Edition',
    price: 149.0,
    image: '/images/cas0.jpg',
    slug: 'street-icon',
    color: POP.pink,
    isNew: true,
    rating: 5,
  },
  {
    id: 10,
    title: 'Neon Wave',
    category: 'Caps',
    subCategory: 'Limited Edition',
    price: 129.0,
    image: '/images/cas1.jpg',
    slug: 'neon-wave',
    color: POP.cyan,
    isNew: true,
    rating: 5,
  },
  {
    id: 11,
    title: 'Yellow Pop',
    category: 'Caps',
    subCategory: 'Limited Edition',
    price: 139.0,
    image: '/images/cas2.jpg',
    slug: 'yellow-pop',
    color: POP.yellow,
    rating: 4,
  },
  {
    id: 12,
    title: 'Violet Hype',
    category: 'Caps',
    subCategory: 'Limited Edition',
    price: 159.0,
    image: '/images/cas3.jpg',
    slug: 'violet-hype',
    color: POP.purple,
    isNew: true,
    rating: 5,
  },
]

const CATEGORIES = ['All', 'NY', 'Classics', 'Limited Edition'] as const
const SORTS = [
  { label: 'Newest', value: 'new' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
] as const

type Category = (typeof CATEGORIES)[number]
type SortKey = (typeof SORTS)[number]['value']

// ============ PRODUCT CARD ============
function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addToCart } = useCart()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative bg-white border-[3px] border-black transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: '6px 6px 0 #000' }}
    >
      {/* Editorial number */}
      <span
        className="absolute -top-3 -left-3 z-20 w-8 h-8 flex items-center justify-center border-2 border-black text-[11px] font-black"
        style={{ background: product.color }}
      >
        {String(product.id).padStart(2, '0')}
      </span>

      {/* "NEW" badge */}
      {product.isNew && (
        <motion.span
          initial={{ rotate: -8 }}
          whileHover={{ rotate: -12 }}
          className="absolute -top-3 -right-3 z-20 px-2.5 py-1 border-2 border-black text-[9px] font-black uppercase tracking-wider shadow-[3px_3px_0_#000]"
          style={{ background: POP.cyan }}
        >
          New
        </motion.span>
      )}

      {/* Image */}
      <Link
        href={`/produit/${product.slug}`}
        className="block relative overflow-hidden aspect-square bg-gray-100 border-b-[3px] border-black"
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Discount badge */}
        {product.discount && product.discount < 0 && (
          <span
            className="absolute top-3 right-3 z-10 px-2.5 py-1 border-2 border-black text-[11px] font-black shadow-[3px_3px_0_#000]"
            style={{ background: product.color }}
          >
            -{Math.abs(product.discount)}%
          </span>
        )}

        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white border-2 border-black px-4 py-2 text-[11px] font-black uppercase tracking-wider shadow-[3px_3px_0_#000] hover:shadow-[5px_5px_0_#000] hover:-translate-y-0.5 transition-all duration-300">
            Quick view
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-1.5">
          <p
            className="text-[9px] font-black uppercase tracking-[0.25em]"
            style={{ color: product.color }}
          >
            {product.subCategory}
          </p>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-2.5 h-2.5 ${
                  i < product.rating ? 'fill-current' : ''
                }`}
                style={{
                  color:
                    i < product.rating ? product.color : 'rgba(0,0,0,0.15)',
                }}
              />
            ))}
          </div>
        </div>

        <Link href={`/produit/${product.slug}`}>
          <h3 className="text-sm font-black text-black hover:underline decoration-2 underline-offset-4 transition-all duration-300 line-clamp-2 leading-snug min-h-[2.5rem]">
            {product.title}
          </h3>
        </Link>

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
                -{Math.abs(product.discount!)}%
              </span>
            </>
          )}
        </div>

        {/* Add to cart — ✅ activated */}
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

      {/* Decorative line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background: `linear-gradient(90deg, transparent, ${product.color}, transparent)`,
        }}
      />
    </motion.div>
  )
}

// ============ COLLECTION PAGE ============
export default function CollectionPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [sortBy, setSortBy] = useState<SortKey>('new')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [gridView, setGridView] = useState<'grid-3' | 'grid-4'>('grid-3')

  // Filter + sort
  const filteredProducts = useMemo(() => {
    let result =
      activeCategory === 'All'
        ? [...allProducts]
        : allProducts.filter((p) => p.subCategory === activeCategory)

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'new':
      default:
        result.sort((a, b) => Number(b.isNew ?? false) - Number(a.isNew ?? false))
        break
    }

    return result
  }, [activeCategory, sortBy])

  return (
    <div className="min-h-screen" style={{ backgroundColor: POP.cream }}>
      {/* ===== COLLECTION HERO ===== */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-black">
        {/* Halftone pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />

        {/* Decorative shapes */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full border-[8px] border-white/10"
          style={{ background: POP.pink, opacity: 0.3 }}
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-[10%] w-20 h-20 border-[4px] border-white/30"
          style={{ background: POP.yellow, rotate: 25, opacity: 0.5 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-white text-black text-[10px] font-black uppercase tracking-[0.3em] shadow-[4px_4px_0_rgba(255,255,255,0.2)]"
                style={{ background: POP.yellow }}
              >
                <Sparkles className="w-3 h-3" />
                Collection
              </span>
              <span className="text-white/40 text-[10px] tracking-[0.25em] uppercase">
                2026 · Caps
              </span>
            </div>

            <h1 className="font-['Inter_Tight'] font-black leading-[0.85] tracking-tighter text-white">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase">
                THE FULL
              </span>
              <span
                className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase italic"
                style={{ WebkitTextStroke: '2px #fff', color: 'transparent' }}
              >
                COLLECTION.
              </span>
            </h1>

            <p className="text-white/50 text-sm sm:text-base tracking-[0.2em] uppercase mt-6 font-medium max-w-xl">
              {filteredProducts.length} cap{filteredProducts.length > 1 ? 's' : ''} · Handcrafted · Made in Morocco
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== FILTER BAR ===== */}
      <section className="relative z-20 -mt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border-[3px] border-black p-4 md:p-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4"
            style={{ boxShadow: '8px 8px 0 #000' }}
          >
            {/* Categories */}
            <div className="flex items-center gap-2 flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-3 py-1.5 border-2 border-black text-[10px] font-black uppercase tracking-wider transition-all duration-300 hover:shadow-[3px_3px_0_#000] hover:-translate-y-0.5"
                  style={{
                    background:
                      activeCategory === cat ? POP.pink : 'transparent',
                    color: activeCategory === cat ? '#fff' : POP.black,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort + view + mobile filters */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* Sort (desktop) */}
              <div className="relative hidden sm:block">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortKey)}
                  className="appearance-none pl-3 pr-8 py-1.5 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider cursor-pointer focus:outline-none focus:shadow-[3px_3px_0_#000] transition-all"
                >
                  {SORTS.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <SlidersHorizontal
                  size={12}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>

              {/* Grid toggle */}
              <div className="hidden md:flex items-center border-2 border-black">
                <button
                  onClick={() => setGridView('grid-3')}
                  aria-label="3-column view"
                  className="w-8 h-8 flex items-center justify-center transition-colors"
                  style={{
                    background: gridView === 'grid-3' ? POP.yellow : '#fff',
                  }}
                >
                  <LayoutGrid size={14} />
                </button>
                <div className="w-px h-8 bg-black" />
                <button
                  onClick={() => setGridView('grid-4')}
                  aria-label="4-column view"
                  className="w-8 h-8 flex items-center justify-center transition-colors"
                  style={{
                    background: gridView === 'grid-4' ? POP.yellow : '#fff',
                  }}
                >
                  <Grid3x3 size={14} />
                </button>
              </div>

              {/* Mobile filter button */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="sm:hidden px-3 py-1.5 border-2 border-black bg-black text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5"
              >
                <SlidersHorizontal size={12} />
                Sort
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== PRODUCT GRID ===== */}
      <section className="relative py-12 md:py-16">
        {/* Halftone pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Counter + active category */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-black/50">
                {filteredProducts.length} result
                {filteredProducts.length > 1 ? 's' : ''}
              </span>
              {activeCategory !== 'All' && (
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 border-2 border-black text-[9px] font-black uppercase tracking-wider"
                  style={{ background: POP.cyan }}
                >
                  {activeCategory}
                  <button
                    onClick={() => setActiveCategory('All')}
                    className="ml-1 hover:rotate-90 transition-transform"
                    aria-label="Remove filter"
                  >
                    <X size={10} strokeWidth={3} />
                  </button>
                </span>
              )}
            </div>

            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-black/50 hover:text-black transition-colors"
            >
              <span>Back</span>
              <ArrowRight size={12} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-black/40 text-lg font-black uppercase tracking-wider mb-4">
                No products found
              </p>
              <button
                onClick={() => setActiveCategory('All')}
                className="px-6 py-3 border-2 border-black bg-black text-white text-[11px] font-black uppercase tracking-wider hover:shadow-[4px_4px_0_#FF3D7F] transition-all"
              >
                View all
              </button>
            </div>
          ) : (
            <motion.div
              layout
              className={`grid gap-6 ${
                gridView === 'grid-4'
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 border-[3px] border-black bg-white text-black text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-[6px_6px_0_#000] hover:shadow-[9px_9px_0_#000] hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              Got a question? Contact us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MOBILE FILTER DRAWER ===== */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 sm:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-[3px] border-black p-6 sm:hidden"
              style={{ maxHeight: '80vh' }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-black uppercase">Sort by</h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-8 h-8 border-2 border-black flex items-center justify-center"
                  aria-label="Close"
                >
                  <X size={14} strokeWidth={3} />
                </button>
              </div>

              <div className="space-y-2">
                {SORTS.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => {
                      setSortBy(s.value)
                      setIsFilterOpen(false)
                    }}
                    className="w-full px-4 py-3 border-2 border-black text-left text-xs font-black uppercase tracking-wider transition-all"
                    style={{
                      background: sortBy === s.value ? POP.yellow : '#fff',
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}