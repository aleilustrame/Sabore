import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom'; // <--- IMPORTANTE
import logo from '../assets/logo.png';

const Navbar = ({ cartCount, onOpenCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para cerrar el menú móvil al hacer clic en un link
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-25">
          
          {/* Logo Sabore con Link al Inicio */}
              <Link 
              to="/" 
              onClick={() => {
                onLogoClick(); // Esto apaga el catálogo y vuelve al Hero
                setIsOpen(false); // Cierra el menú móvil si estaba abierto
              }}
              className="flex-shrink-0 flex items-center cursor-pointer"
            >
              <img src={logo} alt="Logo Sabore" className="h-20 w-auto" />
            </Link>

          {/* Menú Desktop (Cambiados a Link) */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-red-700 font-medium border-b-2 border-transparent hover:border-red-700 transition-all">Inicio</Link>
            <Link to="/" className="text-gray-700 hover:text-red-700 font-medium transition-colors">Productos</Link>
            <Link to="#" className="text-gray-700 hover:text-red-700 font-medium transition-colors">Nosotros</Link>
            <Link to="#" className="text-gray-700 hover:text-red-700 font-medium transition-colors">Puntos de Venta</Link>
          </div>

          {/* Botones Derecha Desktop */}
          <div className="hidden md:flex items-center space-x-5">
            <button className="flex items-center bg-gray-900 text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all font-semibold">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Portal Mayoristas
            </button>
            
            <button onClick={onOpenCart} className="relative p-2 text-gray-700 hover:text-red-700 transition-colors">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-700 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* SECCIÓN MÓVIL */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={onOpenCart} className="relative p-2 text-gray-700">
              <ShoppingCart size={28} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-700 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil (Cambiados a Link) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-4 pb-6 space-y-3 shadow-inner">
            <Link to="/" onClick={closeMenu} className="block text-lg font-medium text-red-700">Inicio</Link>
            <Link to="/" onClick={closeMenu} className="block text-lg font-medium text-gray-700">Productos</Link>
            <Link to="#" onClick={closeMenu} className="block text-lg font-medium text-gray-700">Nosotros</Link>
            <Link to="#" onClick={closeMenu} className="block text-lg font-medium text-gray-700">Puntos de Venta</Link>
            <hr className="my-2" />
            <button className="w-full flex justify-center items-center bg-gray-900 text-white px-5 py-3 rounded-xl font-bold">
              Portal Mayoristas
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;