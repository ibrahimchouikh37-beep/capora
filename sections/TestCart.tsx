// sections/TestCart.tsx
'use client';

import { useCart } from '@/app/context/CartContext';

export default function TestCart() {
  const { addToCart, items, openCart } = useCart();

  console.log('🧪 TestCart rendu');
  console.log('🧪 items:', items);
  console.log('🧪 addToCart existe:', typeof addToCart);

  const handleClick = () => {
    console.log('🔴🔴🔴 CLICK DÉTECTÉ !!! 🔴🔴🔴');
    alert('✅ Le bouton fonctionne !');
    
    try {
      addToCart({
        id: 999,
        title: 'TEST',
        category: 'Test',
        price: 99,
        image: '/images/cas4.jpg',
        slug: 'test'
      }, 1);
      
      console.log('✅ addToCart exécuté');
      openCart();
      alert('✅ Produit ajouté !');
    } catch (e) {
      console.error('❌ Erreur:', e);
      alert('❌ Erreur: ' + e);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto my-20 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">🧪 Test</h2>
      <p className="text-gray-600 mb-4">Items: {items.length}</p>
      
      <button
        onClick={handleClick}
        className="w-full py-3 bg-red-500 text-white rounded-full font-bold text-xl"
      >
        🔴 CLIQUEZ ICI
      </button>
      
      <button
        onClick={() => openCart()}
        className="w-full mt-2 py-2 bg-gray-200 rounded-full"
      >
        📖 Ouvrir le panier
      </button>
    </div>
  );
}