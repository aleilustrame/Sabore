import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Cambiamos a useNavigate
import Navbar from './components/Navbar';
import About from './pages/About';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import ProductExplorer from './components/ProductExplorer';
import { useProducts } from './hooks/useProducts';
import CartModal from './components/CartModal';
import BrandStrip from './components/BrandStrip';
import BrandDetail from './components/BrandDetail'; 
import Footer from './components/Footer';

function App() {
  const { products, loading } = useProducts();
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate(); // Hook para redirigir entre rutas sin recargar

  // --- LÓGICA DEL CARRITO (Se mantiene exactamente igual) ---
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
    <div className="p-20 text-center font-bold tracking-widest animate-pulse text-red-700">
      Sincronizando Catálogo...
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* react router */}
      <Navbar 
        cartCount={cart.reduce((a, b) => a + b.qty, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {/* el Footer */}
      <main className="flex-grow">
        <Routes>
          
          {/* RUTA PRINCIPAL (/) - Hero, Marcas y Contacto */}
          <Route path="/" element={
            <>
              {/* Al hacer clic en el botón del Hero, nos lleva a la ruta de productos */}
              <Hero onStartShopping={() => navigate('/productos')} />
              <BrandStrip />
              <WhyUs />
              <Testimonials />
              <ContactSection />
            </>
          } />

          {/*RUTA DEDICADA PARA EL CATÁLOGO (/productos) */}
          <Route path="/productos" element={
            <ProductExplorer 
              products={products} 
              addToCart={addToCart} 
              onBack={() => navigate('/')} 
            />
          } />

          {/* OTRAS RUTAS */}
          <Route path="/marca/:brandId" element={<BrandDetail />} />
          <Route path="/nosotros" element={<About />} />

        </Routes>
      </main>

      {/* Footer limpio sin dependencias de estado */}
      <Footer />

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