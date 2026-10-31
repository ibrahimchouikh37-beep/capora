    // sections/TestCart.tsx
'use client';

import { useCart } from '@/app/context/CartContext';
import { ShoppingBag } from 'lucide-react';

export default function TestCart() {
  const { addToCart, items, openCart, totalItems } = useCart();

  console.log('🧪 TestCart - items:', items);
  console.log('🧪 TestCart - totalItems:', totalItems);

  const testProduct = {
    id: 999,
    title: 'Produit Test',
    category: 'Test',
    price: 99.00,
    image: '/images/cas4.jpg',
    slug: 'produit-test'
  };

  const handleTestClick = () => {
    console.log('🧪 === BOUTON TEST CLICKÉ ===');
    console.log('🧪 addToCart existe:', typeof addToCart);
    console.log('🧪 Produit test:', testProduct);
    
    try {
      addToCart(testProduct, 1);
      console.log('🧪 addToCart exécuté avec succès');
      openCart();
      alert('✅ Produit test ajouté ! Vérifiez le panier.');
    } catch (error) {
      console.error('🧪 Erreur:', error);
      alert('❌ Erreur: ' + error);
    }
  };

  return (
    <div className="p-8 bg-white rounded-xl shadow-lg max-w-md mx-auto my-20">
      <h2 className="text-2xl font-bold mb-4">🧪 Test du Panier</h2>
      <p className="text-gray-600 mb-4">
        Articles dans le panier: <strong>{items.length}</strong>
        <br />
        Total articles: <strong>{totalItems}</strong>
      </p>
      <button
        onClick={handleTestClick}
        className="w-full py-3 bg-[#FDB813] text-black rounded-full font-bold hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2"
      >
        <ShoppingBag size={20} />
        🧪 Ajouter un produit test
      </button>
      <button
        onClick={() => openCart()}
        className="w-full mt-2 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition-all"
      >
        Ouvrir le panier
      </button>
      {items.length > 0 && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-700">✅ Le panier fonctionne !</p>
          <ul className="mt-2 text-sm">
            {items.map((item, index) => (
              <li key={index} className="text-gray-600">
                {index + 1}. {item.title} x{item.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}