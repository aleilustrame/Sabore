import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Importamos los componentes de ruta
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductExplorer from './components/ProductExplorer';
import { useProducts } from './hooks/useProducts';
import CartModal from './components/CartModal';
import BrandStrip from './components/BrandStrip';
import BrandDetail from './components/BrandDetail'; // Importa el nuevo componente

function App() {
  const { products, loading } = useProducts();
  const [cart, setCart] = useState([]);
  const [showCatalog, setShowCatalog] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // --- LÓGICA DEL CARRITO (Se mantiene igual) ---
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

      <Routes>
        {/* RUTA PRINCIPAL */}
        <Route path="/" element={
          !showCatalog ? (
            /* Usamos el fragmento <> para agrupar Hero y BrandStrip */
            <>
              <Hero onStartShopping={() => setShowCatalog(true)} />
              <BrandStrip />
            </>
          ) : (
            <ProductExplorer 
              products={products} 
              addToCart={addToCart} 
              onBack={() => setShowCatalog(false)} 
            />
          )
        } />

        {/* RUTA DE MARCAS */}
        <Route path="/marca/:brandId" element={<BrandDetail />} />
      </Routes>

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