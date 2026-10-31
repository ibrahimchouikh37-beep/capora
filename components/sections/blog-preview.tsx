// sections/BlogPreview.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ShoppingBag, Award, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '@/app/context/CartContext';
import toast from 'react-hot-toast';

const bestSellers = [
  {
    id: 5,
    title: 'Casquette NY Gris Noir',
    category: 'Casquettes',
    price: 99.00,
    originalPrice: 124.00,
    discount: -20,
    image: '/images/cas4.jpg',
    slug: 'casquette-ny-gris-noir'
  },
  {
    id: 6,
    title: 'Casquette NY Noir - Logo Noir',
    category: 'Casquettes',
    price: 99.00,
    originalPrice: 124.00,
    discount: -20,
    image: '/images/cas5.jpg',
    slug: 'casquette-ny-noir-logo-noir'
  },
  {
    id: 7,
    title: 'Casquette NY Vert Sapin',
    category: 'Casquettes',
    price: 99.00,
    originalPrice: 124.00,
    discount: -20,
    image: '/images/cas6.jpg',
    slug: 'casquette-ny-vert-sapin'
  },
  {
    id: 8,
    title: 'Casquettes Simple Crème',
    category: 'Casquettes',
    price: 99.00,
    originalPrice: 124.00,
    discount: -20,
    image: '/images/cas7.jpg',
    slug: 'casquettes-simple-creme'
  }
];

export default function BlogPreview() {
  const { addToCart, items, openCart } = useCart();
  const [addedProductId, setAddedProductId] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log('✅ BlogPreview monté');
  }, []);

  const isInCart = (productId: number) => {
    return items.some(item => item.id === productId);
  };

  const handleAddToCart = (product: typeof bestSellers[0]) => {
    console.log('🛒 Ajout:', product.title);
    
    addToCart({
      id: product.id,
      title: product.title,
      category: product.category,
      price: product.price,
      originalPrice: product.originalPrice,
      discount: product.discount,
      image: product.image,
      slug: product.slug,
    }, 1);

    setAddedProductId(product.id);
    openCart();
    toast.success(`${product.title} ajouté au panier !`);

    setTimeout(() => {
      setAddedProductId(null);
    }, 2000);
  };

  const openWhatsAppCart = () => {
    if (typeof window === 'undefined') return;

    try {
      const savedCart = localStorage.getItem('cart');
      let message = '🛒 *Ma commande BrandCap*%0A%0A';
      let total = 0;

      if (savedCart) {
        const cartItems = JSON.parse(savedCart);
        if (Array.isArray(cartItems) && cartItems.length > 0) {
          cartItems.forEach((item: any, index: number) => {
            const quantity = item.quantity || 1;
            const subtotal = item.price * quantity;
            total += subtotal;
            message += `${index + 1}. *${item.title}*%0A`;
            message += `   Quantité: ${quantity}%0A`;
            message += `   Prix: ${item.price.toFixed(2)} Dhs%0A`;
            message += `   Sous-total: ${subtotal.toFixed(2)} Dhs%0A%0A`;
          });
          message += `📦 *Total: ${total.toFixed(2)} Dhs*%0A%0A`;
          message += `🔗 BrandCap - Premium Caps Since 2026`;
        }
      }

      const phoneNumber = '0672993742';
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
    }
  };

  if (!isMounted) {
    return <div className="py-20 text-center">Chargement...</div>;
  }

  return (
    <section className="py-20 bg-[#F8F8F8] overflow-hidden">
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
                Top Ventes
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Inter_Tight'] font-bold text-black">
                Meilleures <span className="text-[#FDB813]">Ventes</span>
              </h2>
            </div>
            <Link
              href="/meilleures-ventes"
              className="group hidden sm:flex items-center gap-2 px-6 py-3 bg-[#FDB813] text-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => {
            const inCart = isInCart(product.id);
            const justAdded = addedProductId === product.id;

            return (
              <div
                key={product.id}
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
                  <span className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Award size={12} />
                    Top
                  </span>
                  {product.discount < 0 && (
                    <span className="absolute top-3 right-3 bg-[#FDB813] text-black text-xs font-bold px-3 py-1 rounded-full">
                      -{Math.abs(product.discount)}%
                    </span>
                  )}
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

                  {/* Bouton Ajouter au panier */}
                  <button
                    onClick={() => {
                      if (inCart) {
                        openWhatsAppCart();
                      } else {
                        handleAddToCart(product);
                      }
                    }}
                    className={`mt-4 w-full py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                      inCart
                        ? justAdded
                          ? 'bg-green-500 hover:bg-green-600 text-white'
                          : 'bg-[#25D366] hover:bg-[#128C7E] text-white'
                        : 'bg-[#FDB813] text-black hover:bg-black hover:text-white'
                    }`}
                  >
                    {inCart ? (
                      justAdded ? (
                        <>
                          <Check size={16} />
                          Ajouté !
                        </>
                      ) : (
                        <>
                          <Check size={16} />
                          Commander
                        </>
                      )
                    ) : (
                      <>
                        <ShoppingBag size={16} />
                        Ajouter au panier
                      </>
                    )}
                  </button>

                  {justAdded && (
                    <p className="text-xs text-green-500 text-center mt-2 font-medium">
                      ✓ Ajouté au panier
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All */}
        <div className="text-center mt-8 sm:hidden">
          <Link
            href="/meilleures-ventes"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FDB813] text-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            Voir tout
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* WhatsApp Floating Button */}
        {items.length > 0 && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={openWhatsAppCart}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center gap-3"
          >
            <ShoppingBag size={20} />
            <span className="text-sm font-medium">
              Commander ({items.reduce((sum, item) => sum + item.quantity, 0)})
            </span>
          </motion.button>
        )}
      </div>
    </section>
  );
}