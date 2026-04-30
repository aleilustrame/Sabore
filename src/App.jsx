import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductExplorer from './components/ProductExplorer'; // Importamos el nuevo nombre
import { useProducts } from './hooks/useProducts';
import CartModal from './components/CartModal';
import BrandStrip from './components/BrandStrip';

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

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
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

  if (loading) return (
    <div className="p-20 text-center font-bold tracking-widest animate-pulse">
      Sincronizando Catálogo...
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        cartCount={cart.reduce((a, b) => a + b.qty, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {!showCatalog ? (
        <Hero onStartShopping={() => setShowCatalog(true)} />
      ) : (
        /* 
           Sustituimos todo el <main> anterior por el nuevo componente.
           Esto mantiene tu App.jsx limpio y organizado.
        */
        <ProductExplorer 
          products={products} 
          addToCart={addToCart} 
          onBack={() => setShowCatalog(false)} 
        />
      )}
      <BrandStrip />

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