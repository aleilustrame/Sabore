import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import { useProducts } from './hooks/useProducts';
import CartModal from './components/CartModal';

function App() {
  const { products, loading } = useProducts();
  const [cart, setCart] = useState([]);
  const [showCatalog, setShowCatalog] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // --- LÓGICA DEL CARRITO ---

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // NUEVA FUNCIÓN: Maneja el + y - del popup
  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        // Evita que la cantidad sea menor a 1
        return { ...item, qty: newQty < 1 ? 1 : newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  // --- RENDER ---

  if (loading) return <div className="p-20 text-center font-bold tracking-widest animate-pulse">Sincronizando Catálogo...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        cartCount={cart.reduce((a, b) => a + b.qty, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {!showCatalog ? (
        <Hero onStartShopping={() => setShowCatalog(true)} />
      ) : (
        <main className="max-w-7xl mx-auto px-6 py-20 animate-in fade-in duration-700">
          <div className="mb-10 flex justify-between items-center">
            <h2 className="text-3xl font-black italic tracking-tighter text-gray-900">Catálogo Sabore</h2>
            <button 
              onClick={() => setShowCatalog(false)}
              className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-red-700 transition-colors"
            >
              ← Volver al inicio
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                addToCart={addToCart} 
              />
            ))}
          </div>
        </main>
      )}

      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        totalPrice={totalPrice}
      />
    </div>
  );
}

export default App;