// components/layout/header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/app/context/CartContext';
import MiniCart from '@/components/cart/MiniCart';

// Palette Pop Parade
const POP = {
  pink: '#FF3D7F',
  cyan: '#00E5FF',
  yellow: '#FFD60A',
  purple: '#B026FF',
  cream: '#FDF6E3',
  black: '#000000',
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { totalItems, openCart } = useCart();

  const navItems = [
    { label: 'Collection', href: '/collection' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // ✅ Ouvre toujours le MiniCart — l'étape WhatsApp se fait depuis le MiniCart
  const handleCartClick = () => {
    openCart();
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: isScrolled ? POP.cream : 'transparent',
          borderBottom: isScrolled ? '2px solid #000' : '2px solid transparent',
          boxShadow: isScrolled ? '0 4px 0 #000' : 'none',
        }}
      >
        {/* Trame halftone visible uniquement quand scrolled */}
        {isScrolled && (
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.25]"
            style={{
              backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
              backgroundSize: '18px 18px',
            }}
          />
        )}

        <nav className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* ========== LOGO IMAGE ========== */}
            <motion.div whileHover={{ scale: 1.03 }} className="flex items-center">
              <Link href="/" className="flex items-center group" aria-label="Capora — Accueil">
                <div
                  className="relative flex items-center justify-center border-2 border-black shadow-[3px_3px_0_#000] group-hover:shadow-[4px_4px_0_#000] group-hover:-translate-y-0.5 transition-all duration-300 px-3 py-1.5"
                  style={{ background: POP.yellow }}
                >
                  <Image
                    src="/images/logocapora55.png"
                    alt="Capora"
                    width={180}
                    height={56}
                    priority
                    className="h-9 w-auto object-contain"
                  />
                </div>
              </Link>
            </motion.div>

            {/* ========== NAVIGATION DESKTOP ========== */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className={`relative text-sm font-['Inter_Tight'] font-bold uppercase tracking-wider transition-colors duration-300 group ${
                      isScrolled
                        ? 'text-black/60 hover:text-black'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {/* Soulignement pop au hover */}
                    <span
                      className="absolute -bottom-1.5 left-0 w-0 h-[3px] transition-all duration-300 group-hover:w-full"
                      style={{ background: isScrolled ? POP.pink : POP.yellow }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* ========== ACTIONS DESKTOP ========== */}
            <div className="hidden md:flex items-center gap-4 lg:gap-5">
              {/* Search */}
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 flex items-center justify-center border-2 transition-all duration-300 ${
                  isScrolled
                    ? 'border-black bg-white text-black hover:shadow-[3px_3px_0_#000]'
                    : 'border-white/30 bg-white/5 backdrop-blur-sm text-white hover:border-white hover:bg-white/10'
                }`}
                aria-label="Rechercher"
              >
                <Search className="w-4 h-4" />
              </motion.button>

              {/* Cart — ✅ ouvre toujours le MiniCart */}
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCartClick}
                className={`relative w-10 h-10 flex items-center justify-center border-2 transition-all duration-300 ${
                  isScrolled
                    ? 'border-black bg-white text-black hover:shadow-[3px_3px_0_#000]'
                    : 'border-white/30 bg-white/5 backdrop-blur-sm text-white hover:border-white hover:bg-white/10'
                }`}
                aria-label="Panier"
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 min-w-[20px] h-[20px] border-2 border-black text-[10px] flex items-center justify-center text-black font-black px-1"
                    style={{ background: POP.pink }}
                  >
                    {totalItems > 9 ? '9+' : totalItems}
                  </motion.span>
                )}
              </motion.button>

              {/* CTA Shop Now — sticker pop */}
              <motion.div
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
              >
                <Link
                  href="/collection"
                  className="relative inline-flex items-center gap-2 px-5 py-2.5 border-2 border-black text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000]"
                  style={{
                    background: isScrolled ? POP.pink : POP.yellow,
                    color: POP.black,
                  }}
                >
                  <span className="relative z-10">Shop Now</span>
                  <motion.span
                    animate={{ x: isHovering ? 4 : 0 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="relative z-10 font-black"
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </div>

            {/* ========== MOBILE MENU BUTTON ========== */}
            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              className={`md:hidden w-10 h-10 flex items-center justify-center border-2 transition-all duration-300 ${
                isScrolled
                  ? 'border-black bg-white text-black'
                  : 'border-white/30 bg-white/5 backdrop-blur-sm text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>

          {/* ========== NAVIGATION MOBILE ========== */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden overflow-hidden"
              >
                <div
                  className="py-6 mt-2 border-2 border-black shadow-[4px_4px_0_#000] px-5 space-y-5"
                  style={{ background: POP.cream }}
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.4 }}
                    >
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between text-base font-['Inter_Tight'] font-black uppercase tracking-wide text-black py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{item.label}</span>
                        <span
                          className="w-6 h-6 border-2 border-black flex items-center justify-center text-[10px] font-black opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ background: POP.yellow }}
                        >
                          →
                        </span>
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.4 }}
                    className="pt-5 border-t-2 border-black/15 flex flex-col gap-4"
                  >
                    {/* CTA Shop Now mobile */}
                    <Link
                      href="/collection"
                      className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-black text-sm font-black uppercase tracking-wider text-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5 transition-all duration-300"
                      style={{ background: POP.pink }}
                      onClick={() => setIsOpen(false)}
                    >
                      Shop Now
                      <span>→</span>
                    </Link>

                    {/* Actions mobile */}
                    <div className="flex items-center justify-center gap-3">
                      <button
                        className="w-11 h-11 flex items-center justify-center border-2 border-black bg-white text-black hover:shadow-[3px_3px_0_#000] transition-all duration-300"
                        aria-label="Rechercher"
                      >
                        <Search className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => {
                          handleCartClick();
                          setIsOpen(false);
                        }}
                        className="relative w-11 h-11 flex items-center justify-center border-2 border-black bg-white text-black hover:shadow-[3px_3px_0_#000] transition-all duration-300"
                        aria-label="Panier"
                      >
                        <ShoppingBag className="w-5 h-5" />
                        {totalItems > 0 && (
                          <span
                            className="absolute -top-2 -right-2 min-w-[20px] h-[20px] border-2 border-black text-[10px] flex items-center justify-center text-black font-black px-1"
                            style={{ background: POP.pink }}
                          >
                            {totalItems > 9 ? '9+' : totalItems}
                          </span>
                        )}
                      </button>
                      <button
                        className="w-11 h-11 flex items-center justify-center border-2 border-black bg-white text-black hover:shadow-[3px_3px_0_#000] transition-all duration-300"
                        aria-label="Compte"
                      >
                        <User className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* ✅ MiniCart préservé */}
      <MiniCart />
    </>
  );
}