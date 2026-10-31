// app/providers.tsx
'use client';

import { CartProvider } from './context/CartContext';
import { GrainOverlay } from '@/components/ui/GrainOverlay';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <GrainOverlay />
      {children}
    </CartProvider>
  );
}