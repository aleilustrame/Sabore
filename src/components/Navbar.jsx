import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = ({ cartCount, onOpenCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Saborita */}
          <Link to="/" onClick={closeMenu} className="flex-shrink-0 flex items-center hover:opacity-90 transition-opacity">
            <img src={logo} alt="Logo Saborita" className="h-16 w-auto object-contain" />
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-red-700 font-medium transition-colors">
              Inicio
            </Link>
            <Link to="/productos" className="text-gray-700 hover:text-red-700 font-medium transition-colors">
              Productos
            </Link>
            {/* NUEVO BOTÓN DE MARCAS */}
            <Link to="/#marcas" className="text-gray-700 hover:text-red-700 font-medium transition-colors">
              Marcas
            </Link>
            <Link to="/#marcas" onClick={closeMenu} className="text-gray-700 hover:text-red-700 font-medium transition-colors">
              Puntos de venta
            </Link>
            <Link to="/nosotros" className="text-gray-700 hover:text-red-700 font-medium transition-colors">
              Nosotros
            </Link>
          </div>

          {/* Botones Derecha Desktop */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Botón Portal Mayoristas */}
            <button className="flex items-center bg-gray-900 text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all font-semibold text-sm shadow-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Portal Mayoristas
            </button>
            
            <button onClick={onOpenCart} className="relative p-2 text-gray-700 hover:text-red-700 transition-colors cursor-pointer">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-700 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Menú Móvil (Carrito + Hamburguesa) */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={onOpenCart} className="relative p-2 text-gray-700">
              <ShoppingCart size={26} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-700 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-fadeIn">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <Link to="/" onClick={closeMenu} className="block text-lg font-medium text-gray-700 hover:text-red-700">
              Inicio
            </Link>
            <Link to="/productos" onClick={closeMenu} className="block text-lg font-medium text-gray-700 hover:text-red-700">
              Productos
            </Link>
            {/* NUEVO BOTÓN DE MARCAS MÓVIL */}
            <Link to="/#marcas" onClick={closeMenu} className="block text-lg font-medium text-gray-700 hover:text-red-700">
              Marcas
            </Link>
            <Link to="/#marcas" onClick={closeMenu} className="block text-lg font-medium text-gray-700 hover:text-red-700">
              Puntos de venta
            </Link>
            <Link to="/nosotros" onClick={closeMenu} className="block text-lg font-medium text-gray-700 hover:text-red-700">
              Nosotros
            </Link>
            
            <hr className="my-2 border-gray-100" />
            
            {/* Botón Portal Mayoristas Móvil */}
            <button className="w-full flex justify-center items-center bg-gray-900 text-white px-5 py-3 rounded-xl font-bold shadow-md hover:bg-gray-800 transition-colors">
              Portal Mayoristas
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;