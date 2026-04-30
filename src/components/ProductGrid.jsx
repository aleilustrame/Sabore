import React from 'react';
import { ShieldCheck, Truck, Users, ArrowRight, FileText } from 'lucide-react';
import santarosano from '../assets/santarosano2.png'

const ProductGrid = () => {
  const benefits = [
    { title: "Calidad", icon: <ShieldCheck className="w-12 h-12 text-red-700" /> },
    { title: "Logística", icon: <Truck className="w-12 h-12 text-red-700" /> },
    { title: "B2B", icon: <Users className="w-12 h-12 text-red-700" /> }
  ];

  // Lista ampliada a 6 productos
  const categories = [
    { name: "Chorizos", img: santarosano, tag: "Top" },
    { name: "Salchichas", img: santarosano, tag: "Tradición" },
    { name: "Salchichones", img: santarosano, tag: "Artesanal" },
    { name: "Línea Monaco", img: santarosano, tag: "Especial" },
    { name: "Tajados", img: santarosano, tag: "Popular" },
    { name: "Economico", img: santarosano, tag: "Nuevo" }
  ];

  return (
    <div className="w-full lg:w-2/5 bg-white p-6 lg:p-10 border-l border-gray-100 shadow-2xl z-20 h-auto lg:h-[85vh] overflow-y-auto no-scrollbar">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
          <span className="w-1.5 h-8 bg-red-700 rounded-full"></span>
          Nuestros beneficios y productos
        </h2>

        {/* Beneficios */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col items-center p-2 rounded-xl bg-gray-50 border border-gray-100">
              {b.icon}
              <h3 className="text-[15px] font-bold text-gray-800 uppercase mt-1 tracking-tighter">{b.title}</h3>
            </div>
          ))}
        </div>

        {/* Grid de 6 productos (2 columnas) */}
        <div className="grid grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-[1.5rem] bg-gray-100 border border-gray-100 shadow-sm">
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute top-2 left-2">
                <span className="bg-white/90 backdrop-blur-md text-[8px] font-black uppercase px-2 py-0.5 rounded-full text-gray-800 border border-gray-100">
                  {cat.tag}
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-white font-bold text-sm leading-tight">{cat.name}</h4>
                <p className="text-red-400 text-[8px] font-bold uppercase tracking-widest mt-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver Detalles <ArrowRight className="w-2.5 h-2.5" />
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-8 flex items-center justify-center gap-2 border-2 border-gray-900 py-3 rounded-xl font-bold text-xs hover:bg-gray-900 hover:text-white transition-all duration-300">
          <FileText className="w-4 h-4" />
          Descargar Portafolio Completo
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;