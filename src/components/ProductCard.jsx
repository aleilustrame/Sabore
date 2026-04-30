// src/components/ProductCard.jsx
import React from 'react';
import { ShoppingCart, Scale } from 'lucide-react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
      {/* Imagen dinámica del Sheet */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="font-black text-gray-900 text-lg leading-tight">{product.name}</h3>
        
        {/* El peso que ahora editas desde el Excel */}
        <div className="flex items-center gap-1 mt-2 text-gray-400">
          <Scale size={14} />
          <span className="text-xs font-bold uppercase">{product.weight}</span>
        </div>

        <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-50">
          <p className="text-xl font-black text-gray-900">${product.price.toLocaleString()}</p>
          <button 
            onClick={() => addToCart(product)}
            className="bg-gray-900 text-white p-3 rounded-xl hover:bg-red-700 transition-all active:scale-90"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;