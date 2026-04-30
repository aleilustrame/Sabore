import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Search } from 'lucide-react';

const ProductExplorer = ({ products = [], addToCart, onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("Todos");

  // Categorías basadas en ADITECC SAS
  const categories = ["Todos", "Chorizos", "Salchichas", "Salchichones", "Tajados", "Linea monaco", "Economico"];

  const filteredProducts = products?.filter(product => {
    const matchesSearch = product.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "Todos" || product.category === category;
    return matchesSearch && matchesCategory;
  }) || [];

  return (
    <main className="max-w-7xl mx-auto px-6 py-20 animate-in fade-in duration-700">
      <div className="mb-12 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-4xl font-black italic tracking-tighter text-gray-900 uppercase">
            Catálogo Sabore
          </h2>
          <button 
            onClick={onBack} 
            className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-red-700 transition-colors"
          >
            ← Volver al inicio
          </button>
        </div>

        {/* Barra de Búsqueda y Filtros */}
        <div className="flex flex-col gap-6">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="¿Buscas condimentos o carnes frías?"
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white border border-gray-200 shadow-sm focus:ring-2 focus:ring-red-700 outline-none transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  category === cat 
                  ? "bg-red-700 text-white shadow-lg shadow-red-900/20" 
                  : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid de Productos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-gray-400 font-bold italic text-xl">
              No encontramos lo que buscas en nuestro inventario.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductExplorer;