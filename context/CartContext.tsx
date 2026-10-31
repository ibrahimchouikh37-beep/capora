// app/context/CartContext.tsx
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import toast from 'react-hot-toast';

export interface CartItem {
  id: number;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  slug: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  subtotal: number;
  isOpen: boolean;
  toggleCart: () => void;
  closeCart: () => void;
  openCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart:', e);
      }
    }
    setIsInitialized(true);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('cart', JSON.stringify(items));
    }
  }, [items, isInitialized]);

  const addToCart = (product: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        const updatedItems = prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        toast.success(`${product.title} - Quantité mise à jour`, {
          icon: '🔄',
        });
        return updatedItems;
      } else {
        const newItem: CartItem = {
          ...product,
          quantity: quantity,
        };
        toast.success(`${product.title} ajouté au panier`, {
          icon: '🛒',
        });
        return [...prevItems, newItem];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setItems(prevItems => {
      const item = prevItems.find(i => i.id === id);
      if (item) {
        toast.success(`${item.title} retiré du panier`, {
          icon: '🗑️',
        });
      }
      return prevItems.filter(item => item.id !== id);
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast.success('Panier vidé', {
      icon: '🧹',
    });
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalPrice = subtotal;

  const toggleCart = () => setIsOpen(!isOpen);
  const closeCart = () => setIsOpen(false);
  const openCart = () => setIsOpen(true);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        subtotal,
        isOpen,
        toggleCart,
        closeCart,
        openCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}