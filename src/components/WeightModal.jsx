import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const WeightModal = ({ isOpen, onClose, product, onConfirm }) => {
  // Estado para la opción seleccionada
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (product?.weights?.length > 0) {
      setSelected(product.weights[0]);
    }
  }, [product]);

  if (!isOpen || !product || !selected) return null;

  const handleAdd = () => {
    const itemToAdd = {
      ...product,
      id: `${product.id}-${selected.label}`, // ID único para el carrito
      name: `${product.name} (${selected.label})`,
      price: selected.price, // Precio directo del product.js
      weight: selected.label
    };
    onConfirm(itemToAdd);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-sm rounded-3xl p-6 shadow-2xl relative animate-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-900">
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <img src={product.image} alt={product.name} className="w-24 h-24 object-cover mx-auto rounded-2xl mb-3" />
          <h3 className="text-xl font-black text-gray-900">{product.name}</h3>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Selecciona presentación</p>
        </div>

        <div className="space-y-2 mb-6">
          {product.weights.map((opt) => (
            <button
              key={opt.label}
              onClick={() => setSelected(opt)}
              className={`w-full flex justify-between items-center p-4 rounded-2xl border-2 transition-all ${
                selected.label === opt.label ? 'border-red-700 bg-red-50' : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <span className={`font-bold ${selected.label === opt.label ? 'text-red-700' : 'text-gray-600'}`}>
                {opt.label}
              </span>
              <span className="font-black text-gray-900">
                ${opt.price.toLocaleString('es-CO')}
              </span>
            </button>
          ))}
        </div>

        <button
          onClick={handleAdd}
          className="cursor-pointer w-full bg-red-700 hover:bg-red-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-transform active:scale-95"
        >
          Agregar al pedido
        </button>
      </div>
    </div>
  );
};

export default WeightModal;