import React, { useState } from 'react';
import { ShoppingCart, Scale } from 'lucide-react';
import WeightModal from './WeightModal';

const ProductCard = ({ product, addToCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialPrice = product.weights?.[0]?.price || 0;
  const initialWeight = product.weights?.[0]?.label || "N/A";

  return (
    <>
      <div className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
        {/* Imagen dinámica */}
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={product.image}
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Badge de Categoría opcional */}
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-red-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
              {product.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-black text-gray-900 text-lg leading-tight group-hover:text-red-700 transition-colors">
            {product.name}
          </h3>
          
          {/* Muestra el peso inicial o un rango */}
          <div className="flex items-center gap-1 mt-2 text-gray-400">
            <Scale size={14} />
            <span className="text-xs font-bold uppercase">
              {product.weights?.length > 1 ? `Varias presentaciones` : initialWeight}
            </span>
          </div>

          <p className="text-xs text-gray-500 mt-2 line-clamp-2 min-h-[2rem]">
            {product.description}
          </p>

          <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-50">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter leading-none">Desde</p>
              <p className="text-xl font-black text-gray-900">
                ${initialPrice.toLocaleString('es-CO')}
              </p>
            </div>
            
            {/* El botón abre el popup de Pesos */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer bg-gray-900 text-white p-3 rounded-xl hover:bg-red-700 transition-all active:scale-90 shadow-lg shadow-gray-200 hover:shadow-red-900/20"
            >
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Renderizamos el modal y le pasamos la función addToCart */}
      <WeightModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        product={product} 
        onConfirm={addToCart} 
      />
    </>
  );
};

export default ProductCard;