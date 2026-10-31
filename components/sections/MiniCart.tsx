// components/cart/MiniCart.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/app/context/CartContext';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MiniCart() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
    isOpen,
    closeCart,
  } = useCart();

  const deliveryFee = subtotal > 500 ? 0 : 25;
  const grandTotal = subtotal + deliveryFee;

  // Fonction pour ouvrir WhatsApp avec le panier
  const openWhatsAppCart = () => {
    let message = '🛒 *Ma commande BrandCap*%0A%0A';
    let total = 0;

    if (items.length > 0) {
      items.forEach((item: any, index: number) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        message += `${index + 1}. *${item.title}*%0A`;
        message += `   Quantité: ${item.quantity}%0A`;
        message += `   Prix: ${item.price.toFixed(2)} Dhs%0A`;
        message += `   Sous-total: ${subtotal.toFixed(2)} Dhs%0A%0A`;
      });
      message += `📦 *Total: ${total.toFixed(2)} Dhs*%0A%0A`;
      message += `🔗 BrandCap - Premium Caps Since 2026`;
    } else {
      message = '🛒 *Panier BrandCap*%0A%0AVotre panier est vide. Découvrez notre collection !%0A🔗 https://brandcap.ma/collection';
    }

    const phoneNumber = '0672993742';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    closeCart();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-white z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h2 className="text-xl font-['Inter_Tight'] font-bold text-black">
                  Panier
                </h2>
                <p className="text-sm text-black/40">
                  {totalItems} article{totalItems > 1 ? 's' : ''}
                </p>
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Fermer le panier"
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </div>

            {/* Content */}
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8">
                <div className="w-24 h-24 bg-[#F8F8F8] rounded-full flex items-center justify-center mb-6">
                  <ShoppingBag className="w-10 h-10 text-black/20" />
                </div>
                <h3 className="text-xl font-['Inter_Tight'] font-semibold text-black mb-2">
                  Votre panier est vide
                </h3>
                <p className="text-black/40 text-center text-sm mb-6">
                  Découvrez notre collection et trouvez votre style
                </p>
                <Link
                  href="/collection"
                  onClick={closeCart}
                  className="px-8 py-3 bg-[#FDB813] text-black rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300"
                >
                  Découvrir
                </Link>
              </div>
            ) : (
              <>
                {/* Items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4 bg-[#F8F8F8] rounded-xl p-3"
                    >
                      {/* Image */}
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-white">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-2">
                          <div className="min-w-0">
                            <h4 className="text-sm font-semibold text-black truncate">
                              {item.title}
                            </h4>
                            <p className="text-xs text-black/40">{item.category}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 hover:bg-white rounded-full transition-colors flex-shrink-0"
                            aria-label="Retirer du panier"
                          >
                            <Trash2 className="w-4 h-4 text-black/30 hover:text-red-500 transition-colors" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 rounded-full border border-gray-200 hover:border-[#FDB813] flex items-center justify-center transition-colors"
                              aria-label="Diminuer la quantité"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 rounded-full border border-gray-200 hover:border-[#FDB813] flex items-center justify-center transition-colors"
                              aria-label="Augmenter la quantité"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-bold text-sm">
                            {(item.price * item.quantity).toFixed(2)} Dhs
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 p-6 space-y-4 bg-white">
                  {/* Summary */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-black/60">Sous-total</span>
                      <span className="text-black font-medium">{subtotal.toFixed(2)} Dhs</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-black/60">Livraison</span>
                      <span className="text-black font-medium">
                        {deliveryFee === 0 ? (
                          <span className="text-green-500">Gratuite</span>
                        ) : (
                          `${deliveryFee.toFixed(2)} Dhs`
                        )}
                      </span>
                    </div>
                    {deliveryFee > 0 && (
                      <p className="text-xs text-[#FDB813]">
                        Plus que {(500 - subtotal).toFixed(2)} Dhs pour la livraison gratuite
                      </p>
                    )}
                    <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-100">
                      <span>Total</span>
                      <span>{grandTotal.toFixed(2)} Dhs</span>
                    </div>
                  </div>

                  {/* Actions - WhatsApp */}
                  <div className="space-y-3">
                    <button
                      onClick={openWhatsAppCart}
                      className="w-full py-3.5 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ShoppingBag size={18} />
                      Commander via WhatsApp
                    </button>
                    <button
                      onClick={clearCart}
                      className="w-full py-2 text-sm text-black/40 hover:text-red-500 transition-colors"
                    >
                      Vider le panier
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}