'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Star, ShoppingBag } from 'lucide-react';

// Données des produits populaires
const popularProducts = [
  {
    id: 1,
    title: 'Casquette Catch of the day',
    category: 'Casquettes',
    price: 119.00,
    originalPrice: 199.00,
    discount: -40,
    image: '/public/images/cas0.jpg',
    slug: 'casquette-catch-of-the-day'
  },
  {
    id: 2,
    title: 'Casquette NY Noir-NB',
    category: 'Casquettes',
    price: 99.00,
    originalPrice: 124.00,
    discount: -20,
    image: '/public/images/cas1.jpg',
    slug: 'casquette-ny-noir-nb'
  },
  {
    id: 3,
    title: 'Casquette Canadiens',
    category: 'Casquettes',
    price: 75.00,
    originalPrice: 125.00,
    discount: -40,
    image: '/public/images/cas2.jpg',
    slug: 'casquette-canadiens'
  },
  {
    id: 4,
    title: 'Casquette NY beige',
    category: 'Casquettes',
    price: 99.00,
    originalPrice: 124.00,
    discount: -20,
    image: '/public/images/cas3.jpg',
    slug: 'casquette-ny-beige'
  }
];

export default function PortfolioPreview() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#FDB813] mb-2 flex items-center gap-2">
                <span className="w-8 h-px bg-[#FDB813]" />
                Collection
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Inter_Tight'] font-bold text-black">
                Produits <span className="text-[#FDB813]">Populaires</span>
              </h2>
            </div>
            <Link
              href="/collection"
              className="group hidden sm:flex items-center gap-2 px-6 py-3 border border-black/10 rounded-full text-black hover:bg-[#FDB813] hover:border-[#FDB813] transition-all duration-300"
            >
              <span className="text-sm font-medium">Voir tout</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-gradient-to-r from-[#FDB813] to-transparent mt-4"
          />
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
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {popularProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:border-[#FDB813]/30"
            >
              {/* Image */}
              <Link href={`/produit/${product.slug}`} className="block relative overflow-hidden aspect-square bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Badge Promotion */}
                {product.discount < 0 && (
                  <span className="absolute top-3 right-3 bg-[#FDB813] text-black text-xs font-bold px-3 py-1 rounded-full">
                    -{Math.abs(product.discount)}%
                  </span>
                )}
                {/* Quick View */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#FDB813] transition-colors duration-300">
                    Aperçu rapide
                  </button>
                </div>
              </Link>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs text-black/40 font-medium uppercase tracking-wider mb-1">
                  {product.category}
                </p>
                <Link href={`/produit/${product.slug}`}>
                  <h3 className="text-sm font-semibold text-black hover:text-[#FDB813] transition-colors duration-300 line-clamp-2">
                    {product.title}
                  </h3>
                </Link>
                
                {/* Price */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-lg font-bold text-black">
                    {product.price.toFixed(2)} Dhs
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-sm text-black/30 line-through">
                        {product.originalPrice.toFixed(2)} Dhs
                      </span>
                      <span className="text-xs font-semibold text-[#FDB813]">
                        -{Math.abs(product.discount)}%
                      </span>
                    </>
                  )}
                </div>

                {/* Add to Cart */}
                <button className="mt-4 w-full py-2.5 bg-[#FDB813] text-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <ShoppingBag size={16} />
                  Ajouter au panier
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All */}
        <div className="text-center mt-8 sm:hidden">
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FDB813] text-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            Voir tout
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}