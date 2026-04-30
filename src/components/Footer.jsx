import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = ({ onLogoClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-red-700 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Columna 1: Logo e Info */}
        <div className="space-y-4">
          <Link to="/" onClick={onLogoClick}>
            <img src={logo} alt="Logo Saborita" className="h-30 w-auto brightness-0 invert" />
          </Link>
          <div className="text-sm font-medium">
            <p>Dirección: San Andresito de la 38. Cra. 38 #10a-77, Bogotá, Colombia</p>
          </div>
        </div>

        {/* Columna 2: Navegación */}
        <div>
          <h4 className="text-lg font-bold mb-4">Navegación</h4>
          <ul className="space-y-2 text-sm text-red-100">
            <li><Link to="/" onClick={onLogoClick} className="hover:text-white transition-colors">Inicio</Link></li>
            <li><Link to="/" onClick={onLogoClick} className="hover:text-white transition-colors">Productos</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Nosotros</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Puntos de Venta</Link></li>
          </ul>
        </div>

        {/* Columna 3: Soporte */}
        <div>
          <h4 className="text-lg font-bold mb-4">Soporte</h4>
          <ul className="space-y-2 text-sm text-red-100">
            <li><Link to="#" className="hover:text-white transition-colors">Preguntas Frecuentes (FAQ)</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Términos y Condiciones</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Tratamiento de Datos Personales</Link></li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div>
          <h4 className="text-lg font-bold mb-4">Contacto</h4>
          <p className="text-sm text-red-100 mb-4">¿Tienes dudas técnicas sobre nuestros productos?</p>
          <button className="bg-white text-red-700 px-6 py-2 rounded-full font-bold text-sm hover:bg-red-50 transition-colors">
            Escríbenos
          </button>
        </div>
      </div>

      <div className="border-t border-red-600 mt-12 pt-6 text-center text-xs text-red-200">
        <p>© {currentYear} GI-AVILA SAS. Todos los derechos reservados. Saborita es una marca registrada.</p>
      </div>
    </footer>
  );
};

export default Footer;