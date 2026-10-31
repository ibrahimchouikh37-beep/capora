// components/cart/MiniCart.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/app/context/CartContext'
import {
  X,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Zap,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Palette Pop Parade
const POP = {
  pink: '#FF3D7F',
  cyan: '#00E5FF',
  yellow: '#FFD60A',
  purple: '#B026FF',
  cream: '#FDF6E3',
  black: '#000000',
}

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
  } = useCart()

  const deliveryFee = subtotal > 500 ? 0 : 25
  const grandTotal = subtotal + deliveryFee

  // Fonction pour ouvrir WhatsApp avec le panier
  const openWhatsAppCart = () => {
    let message = '🛒 *Ma commande Capora MA*%0A%0A'
    let total = 0

    if (items.length > 0) {
      items.forEach((item: any, index: number) => {
        const itemSubtotal = item.price * item.quantity
        total += itemSubtotal
        message += `${index + 1}. *${item.title}*%0A`
        message += `   Quantité: ${item.quantity}%0A`
        message += `   Prix: ${item.price.toFixed(2)} Dhs%0A`
        message += `   Sous-total: ${itemSubtotal.toFixed(2)} Dhs%0A%0A`
      })
      message += `📦 *Total: ${total.toFixed(2)} Dhs*%0A%0A`
      message += `🔗 Capora MA · Crafted in Morocco 🇲🇦`
    } else {
      message =
        '🛒 *Panier Capora MA*%0A%0AVotre panier est vide. Découvrez notre collection !%0A🔗 https://capora.ma/collection'
    }

    const phoneNumber = '212672993742'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
    closeCart()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay sombre */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-[2px]"
          />

          {/* Cart Panel Néo-brutaliste */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[460px] z-[101] flex flex-col border-l-[3px] border-black"
            style={{ backgroundColor: POP.cream }}
          >
            {/* Trame halftone Pop */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.25]"
              style={{
                backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between p-5 sm:p-6 bg-white border-b-[3px] border-black">
              <div className="flex items-center gap-3">
                <span
                  className="w-10 h-10 border-2 border-black flex items-center justify-center text-black shadow-[2px_2px_0_#000]"
                  style={{ background: POP.yellow }}
                >
                  <ShoppingBag className="w-5 h-5" />
                </span>
                <div>
                  <h2 className="text-lg sm:text-xl font-['Inter_Tight'] font-black uppercase text-black tracking-tight leading-none">
                    Ton Panier
                  </h2>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/50 mt-1">
                    {totalItems} pièce{totalItems > 1 ? 's' : ''} sélectionnée{totalItems > 1 ? 's' : ''}
                  </p>
                </div>
              </div>

              <button
                onClick={closeCart}
                className="w-9 h-9 border-2 border-black bg-white flex items-center justify-center text-black shadow-[2px_2px_0_#000] hover:shadow-[4px_4px_0_#000] hover:-translate-y-0.5 transition-all"
                aria-label="Fermer le panier"
              >
                <X className="w-5 h-5" strokeWidth={2.5} />
              </button>
            </div>

            {/* Content */}
            {items.length === 0 ? (
              <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div
                  className="w-20 h-20 border-[3px] border-black flex items-center justify-center mb-6 shadow-[5px_5px_0_#000]"
                  style={{ background: POP.cyan }}
                >
                  <ShoppingBag className="w-9 h-9 text-black" />
                </div>
                <h3 className="text-xl font-['Inter_Tight'] font-black uppercase text-black mb-2">
                  Ton panier est vide
                </h3>
                <p className="text-black/60 text-xs sm:text-sm font-medium max-w-xs mb-8 leading-relaxed">
                  Aucune casquette pour le moment. Fais un tour dans la collection et trouve ta pièce unique.
                </p>
                <Link
                  href="/collection"
                  onClick={closeCart}
                  className="inline-flex items-center gap-2 px-6 py-3.5 border-[3px] border-black text-xs font-black uppercase tracking-wider text-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5 transition-all"
                  style={{ background: POP.pink }}
                >
                  <Sparkles className="w-4 h-4" />
                  Explorer la collection
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <>
                {/* Liste des items */}
                <div className="relative z-10 flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="relative flex gap-3 sm:gap-4 bg-white border-2 border-black p-3.5 shadow-[4px_4px_0_#000] transition-all"
                    >
                      {/* Numéro éditorial */}
                      <span
                        className="absolute -top-2.5 -left-2.5 z-10 w-6 h-6 border-2 border-black text-[9px] font-black flex items-center justify-center"
                        style={{ background: POP.yellow }}
                      >
                        0{index + 1}
                      </span>

                      {/* Image de la casquette */}
                      <div className="relative w-20 h-20 border-2 border-black overflow-hidden flex-shrink-0 bg-gray-100">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Détails */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="text-xs sm:text-sm font-black uppercase text-black truncate tracking-tight">
                              {item.title}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-1 hover:bg-black/5 rounded transition-colors text-black/40 hover:text-red-500"
                              aria-label="Retirer du panier"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-[9px] font-black uppercase tracking-wider text-black/40 mt-0.5">
                            {item.category}
                          </p>
                        </div>

                        {/* Compteur quantité & Prix */}
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-black/10">
                          {/* Contrôles Néo-brutalistes */}
                          <div className="flex items-center border-2 border-black bg-white shadow-[2px_2px_0_#000]">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-6 h-6 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                              aria-label="Diminuer la quantité"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-7 text-center text-xs font-black">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-6 h-6 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                              aria-label="Augmenter la quantité"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="font-black text-sm text-black">
                            {(item.price * item.quantity).toFixed(2)} Dhs
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer / Récapitulatif */}
                <div className="relative z-10 border-t-[3px] border-black p-5 sm:p-6 bg-white space-y-4">
                  {/* Détails du sous-total & livraison */}
                  <div className="space-y-2 text-xs font-bold uppercase">
                    <div className="flex justify-between text-black/60">
                      <span>Sous-total</span>
                      <span className="text-black font-black">
                        {subtotal.toFixed(2)} Dhs
                      </span>
                    </div>

                    <div className="flex justify-between text-black/60">
                      <span>Livraison</span>
                      <span>
                        {deliveryFee === 0 ? (
                          <span
                            className="px-1.5 py-0.5 border border-black text-[10px] font-black"
                            style={{ background: POP.cyan }}
                          >
                            Gratuite
                          </span>
                        ) : (
                          `${deliveryFee.toFixed(2)} Dhs`
                        )}
                      </span>
                    </div>

                    {deliveryFee > 0 && (
                      <div className="flex items-center gap-1.5 text-[10px] text-black font-black bg-yellow-100 p-2 border border-black">
                        <Zap className="w-3 h-3 shrink-0 text-black" />
                        <span>
                          Plus que {(500 - subtotal).toFixed(2)} Dhs pour la
                          livraison gratuite !
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between text-base sm:text-lg font-black text-black pt-3 border-t-2 border-black">
                      <span>Total TTC</span>
                      <span style={{ color: POP.pink }}>
                        {grandTotal.toFixed(2)} Dhs
                      </span>
                    </div>
                  </div>

                  {/* Boutons d'action */}
                  <div className="space-y-2.5 pt-1">
                    <button
                      onClick={openWhatsAppCart}
                      className="w-full py-3.5 border-[3px] border-black text-xs sm:text-sm font-black uppercase tracking-wider text-black flex items-center justify-center gap-2 shadow-[5px_5px_0_#000] hover:shadow-[7px_7px_0_#000] hover:-translate-y-0.5 transition-all"
                      style={{ background: POP.yellow }}
                    >
                      <ShoppingBag size={16} />
                      Commander via WhatsApp
                    </button>

                    <button
                      onClick={clearCart}
                      className="w-full py-1.5 text-[10px] font-black uppercase tracking-wider text-black/40 hover:text-red-600 transition-colors"
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
  )
}