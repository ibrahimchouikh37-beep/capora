'use client'

import { use, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ShoppingBag,
  Star,
  Sparkles,
  Shield,
  Truck,
  RotateCcw,
  Check,
  Zap,
  Minus,
  Plus,
  Eye,
  Heart,
  Ruler,
} from 'lucide-react'
import { useCart } from '@/app/context/CartContext'
import { allProducts, POP } from '@/app/data/products'

type Params = { slug: string }

export default function ProductDetailPage({
  params,
}: {
  params: Promise<Params>
}) {
  // Next.js 15+ : params est une Promise
  const resolvedParams = use(params)
  const slug = resolvedParams.slug

  const product = useMemo(
    () => allProducts.find((p) => p.slug === slug),
    [slug]
  )

  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<'details' | 'shipping'>('details')
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  // 🔴 Produit introuvable
  if (!product) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-6"
        style={{ backgroundColor: POP.cream }}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-6">
            Produit introuvable
          </h1>
          <p className="text-black/50 mb-8">
            Ce produit n&apos;existe pas ou a été retiré.
          </p>
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 px-6 py-3 border-[3px] border-black bg-white text-xs font-black uppercase tracking-wider shadow-[5px_5px_0_#000] hover:shadow-[8px_8px_0_#000] hover:-translate-y-0.5 transition-all"
          >
            <ArrowLeft size={14} />
            Retour à la collection
          </Link>
        </div>
      </div>
    )
  }

  // Images galerie (ici on répète l'image principale — remplacez par vos vraies images)
  const galleryImages = [
    product.image,
    product.image,
    product.image,
    product.image,
  ]

  // Produits similaires (même sous-catégorie, hors produit courant)
  const similarProducts = allProducts
    .filter((p) => p.subCategory === product.subCategory && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
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
  }

  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: POP.cream }}>
      {/* Halftone pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />

      {/* ===== BREADCRUMB ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 md:pt-32">
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-black/40 mb-6 flex-wrap">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/collection"
            className="hover:text-black transition-colors"
          >
            Collection
          </Link>
          <span>/</span>
          <span className="text-black">{product.subCategory}</span>
        </nav>
      </div>

      {/* ===== MAIN PRODUCT SECTION ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* -------- IMAGE SIDE -------- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              className="relative overflow-hidden border-[3px] border-black bg-white aspect-square"
              style={{ boxShadow: '10px 10px 0 #000' }}
            >
              <Image
                src={galleryImages[selectedImage]}
                alt={product.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <span
                    className="px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-wider shadow-[3px_3px_0_#000]"
                    style={{ background: POP.cyan }}
                  >
                    New
                  </span>
                )}
                {product.discount && product.discount < 0 && (
                  <span
                    className="px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-wider shadow-[3px_3px_0_#000]"
                    style={{ background: product.color }}
                  >
                    -{Math.abs(product.discount)}%
                  </span>
                )}
              </div>

              {/* 3D view badge */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-black shadow-[3px_3px_0_#000]">
                <Zap size={12} />
                <span className="text-[10px] font-black uppercase tracking-wider">
                  3D View
                </span>
              </div>
            </div>

            {/* Thumbnail gallery */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative aspect-square overflow-hidden border-2 bg-white transition-all duration-300 ${
                    selectedImage === i
                      ? 'border-black shadow-[3px_3px_0_#000] -translate-y-0.5'
                      : 'border-black/30 hover:border-black'
                  }`}
                  aria-label={`Image ${i + 1}`}
                >
                  <Image
                    src={img}
                    alt={`${product.title} ${i + 1}`}
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* -------- INFO SIDE -------- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Category badge */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="inline-flex items-center gap-2 px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] shadow-[3px_3px_0_#000]"
                style={{ background: product.color }}
              >
                <Sparkles size={12} />
                {product.subCategory}
              </span>
              {product.isNew && (
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-black/40">
                  New Drop
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="font-['Inter_Tight'] font-black leading-[0.95] tracking-tight text-black text-4xl md:text-5xl lg:text-6xl uppercase mb-4">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating ? 'fill-current' : ''
                    }`}
                    style={{
                      color:
                        i < product.rating ? product.color : 'rgba(0,0,0,0.15)',
                    }}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-black/50">
                ({product.rating}.0) · 24 avis
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 flex-wrap mb-8 pb-8 border-b-2 border-black/10">
              <span className="text-4xl md:text-5xl font-black text-black">
                {product.price.toFixed(2)} Dhs
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-black/30 line-through font-medium">
                    {product.originalPrice.toFixed(2)} Dhs
                  </span>
                  <span
                    className="text-[11px] font-black px-2 py-1 border-2 border-black"
                    style={{ background: product.color }}
                  >
                    -{Math.abs(product.discount!)}%
                  </span>
                </>
              )}
            </div>

            {/* Description courte */}
            <p className="text-black/70 leading-relaxed mb-8">
              Une casquette premium conçue avec passion dans notre atelier.
              Chaque détail compte : du choix du tissu à la dernière couture.
              Portez votre identité avec style.
            </p>

            {/* Quantity + Actions */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-6">
              {/* Quantity selector */}
              <div className="flex items-center border-[3px] border-black bg-white">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-12 h-12 flex items-center justify-center hover:bg-black/5 transition-colors"
                  aria-label="Diminuer la quantité"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-lg font-black">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-black/5 transition-colors"
                  aria-label="Augmenter la quantité"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className="group flex-1 inline-flex items-center justify-center gap-3 px-8 py-3 border-[3px] border-black text-sm font-black uppercase tracking-wider text-black transition-all duration-300 hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5"
                style={{ background: product.color }}
              >
                <ShoppingBag size={18} />
                Add to cart
              </button>

              {/* Wishlist */}
              <button
                onClick={() => setIsWishlisted((w) => !w)}
                className="w-12 h-12 border-[3px] border-black flex items-center justify-center transition-all duration-300 hover:shadow-[4px_4px_0_#000] hover:-translate-y-0.5 bg-white"
                aria-label="Ajouter aux favoris"
              >
                <Heart
                  size={18}
                  className={isWishlisted ? 'fill-current' : ''}
                  style={{ color: isWishlisted ? POP.pink : 'black' }}
                />
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { icon: Truck, label: 'Livraison 24-48h', color: POP.cyan },
                { icon: Shield, label: 'Paiement sécurisé', color: POP.yellow },
                { icon: RotateCcw, label: 'Retour 14 jours', color: POP.pink },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 p-3 bg-white border-2 border-black shadow-[3px_3px_0_#000] text-center"
                >
                  <div
                    className="p-1.5 border-2 border-black"
                    style={{ background: item.color }}
                  >
                    <item.icon size={14} />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-wider leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="border-[3px] border-black bg-white">
              <div className="flex border-b-[3px] border-black">
                <button
                  onClick={() => setActiveTab('details')}
                  className="flex-1 px-4 py-3 text-[11px] font-black uppercase tracking-wider transition-colors"
                  style={{
                    background:
                      activeTab === 'details' ? POP.yellow : 'transparent',
                  }}
                >
                  Détails
                </button>
                <div className="w-[3px] bg-black" />
                <button
                  onClick={() => setActiveTab('shipping')}
                  className="flex-1 px-4 py-3 text-[11px] font-black uppercase tracking-wider transition-colors"
                  style={{
                    background:
                      activeTab === 'shipping' ? POP.yellow : 'transparent',
                  }}
                >
                  Livraison
                </button>
              </div>

              <div className="p-5">
                {activeTab === 'details' ? (
                  <ul className="space-y-2.5">
                    {[
                      'Tissu premium 100% coton',
                      'Broderie personnalisée',
                      'Visière préformée',
                      'Fermeture ajustable',
                      'Fabriqué à la main au Maroc',
                    ].map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-black/70"
                      >
                        <div
                          className="p-0.5 border border-black shrink-0"
                          style={{ background: product.color }}
                        >
                          <Check size={12} strokeWidth={3} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="space-y-2.5 text-sm text-black/70">
                    <li className="flex items-center gap-3">
                      <Truck size={16} className="shrink-0" />
                      Livraison offerte dès 300 Dhs
                    </li>
                    <li className="flex items-center gap-3">
                      <Zap size={16} className="shrink-0" />
                      Expédition sous 24h ouvrées
                    </li>
                    <li className="flex items-center gap-3">
                      <RotateCcw size={16} className="shrink-0" />
                      Retour gratuit sous 14 jours
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SIMILAR PRODUCTS ===== */}
      {similarProducts.length > 0 && (
        <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span
              className="inline-flex items-center gap-2 px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] shadow-[3px_3px_0_#000] mb-4"
              style={{ background: POP.pink, color: '#fff' }}
            >
              <Sparkles size={12} />
              Vous aimerez aussi
            </span>
            <h2 className="font-['Inter_Tight'] font-black text-3xl md:text-5xl uppercase leading-tight">
              SIMILAR{' '}
              <span
                className="italic"
                style={{ color: POP.pink }}
              >
                CAPS.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map((p, index) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative bg-white border-[3px] border-black transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '6px 6px 0 #000' }}
              >
                <Link
                  href={`/produit/${p.slug}`}
                  className="block relative aspect-square overflow-hidden bg-gray-100 border-b-[3px] border-black"
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 bg-white border-2 border-black px-3 py-1.5 text-[10px] font-black uppercase tracking-wider shadow-[3px_3px_0_#000]">
                      <Eye size={12} />
                      Voir détails
                    </span>
                  </div>
                </Link>

                <div className="p-3">
                  <p
                    className="text-[9px] font-black uppercase tracking-[0.25em] mb-1"
                    style={{ color: p.color }}
                  >
                    {p.subCategory}
                  </p>
                  <Link href={`/produit/${p.slug}`}>
                    <h3 className="text-sm font-black text-black hover:underline decoration-2 underline-offset-4 line-clamp-2 leading-snug min-h-[2.5rem]">
                      {p.title}
                    </h3>
                  </Link>
                  <p className="text-base font-black text-black mt-2">
                    {p.price.toFixed(2)} Dhs
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ===== BACK TO COLLECTION ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 mt-20 text-center">
        <Link
          href="/collection"
          className="group inline-flex items-center gap-3 px-8 py-4 border-[3px] border-black bg-black text-white text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-[6px_6px_0_#FF3D7F] hover:shadow-[9px_9px_0_#000] hover:-translate-y-0.5"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-1"
          />
          Retour à la collection
        </Link>
      </div>
    </div>
  )
}