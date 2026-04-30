import React from 'react';
import ProductGrid from './ProductGrid';
import santarosano from '../assets/santarosano2.png'

const Hero = ({ onStartShopping }) => {
  return (
    <section className="relative w-full overflow-hidden bg-gray-900">
      {/* IMAGEN DE FONDO CON OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img 
          src={santarosano}
          alt="Chorizo santarosano" 
          className="w-auto h-autoo object-cover opacity-100" // Ajusta la opacidad para que el texto resalte
        />
        {/* Gradiente  */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row min-h-[85vh]">
        
        {/* LADO IZQUIERDO*/}
        <div className="relative w-full lg:w-3/5 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 lg:py-0">
          
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-[2px] w-10 bg-red-600"></span>
              <span className="text-white font-bold uppercase tracking-[0.2em] text-xs">
                Estándar Industrial • Sabor y tradición
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
              Fabrica de embutidos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                para todo colombia
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Desde 1982, Salsamentaria Saboré abastece negocios y restaurantes en todo Colombia con embutidos y 
            carnes frías de alta calidad. Confianza, frescura y tradición en cada producto. ¡Cotiza por whatsapp!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-700 text-white px-10 py-4 rounded-full font-bold hover:bg-red-800 transition-all duration-300 shadow-xl shadow-red-900/20 active:scale-95">
                Portal de Mayoristas
              </button>
              <button onClick={onStartShopping} className="group flex items-center justify-center gap-2 border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:border-white hover:bg-white/10 transition-all duration-300">
                Compras retail
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Estadísticas: Ahora en blanco para resaltar sobre el fondo oscuro */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
            <div>
              <p className="text-2xl font-black text-white">100%</p>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Certificado</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">24h</p>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Logística</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">B2B</p>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Soporte</p>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: ProductGrid */}
        <ProductGrid />

      </div>
    </section>
  );
};

export default Hero;