import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Carlos Mendoza",
      role: "Propietario de Restaurante",
      content: "La mejor salsamentaria que he visitado hasta el momento, con productos de alta calidad, además en sus instalaciones ofrecen comida rápida, para deleitarnos, en general es un excelente sitio",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      id: 2,
      name: "Ana María Restrepo",
      role: "Cliente Hogar",
      content: "Excelentes productos y gran precio, mi familia se enamoró del pavo tan rico.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      id: 3,
      name: "Jorge Eliecer Silva",
      role: "Comerciante",
      content: "Excelente servicio. Buen surtido de productos. Los precios increíbles. Y las instalaciones super cómodas y limpias. Super recomendado.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Funciones de navegación del carrusel
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === reviews.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Movimiento automático cada 5 segundos
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <section className="py-25 bg-white overflow-hidden" id="testimonios">
      <div className="max-w-4xl mx-auto px-6 relative">
        
        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="text-red-700 font-bold tracking-wider text-sm uppercase">Experiencias Saborita</span>
          <h2 className="text-4xl font-black text-gray-900 mt-2 mb-4">LO QUE DICEN NUESTROS CLIENTES</h2>
          <p className="text-gray-600">La confianza de nuestros compradores es nuestro mayor orgullo</p>
        </div>

        {/* Contenedor del Carrusel */}
        <div className="relative min-h-[340px] md:min-h-[280px] flex items-center justify-center">
          
          {/* Botón Izquierda */}
          <button 
            onClick={prevSlide}
            className="absolute left-[-20px] md:left-[-60px] z-10 p-3 rounded-full bg-white border border-gray-100 shadow-lg text-gray-700 hover:text-red-700 hover:scale-110 transition-all focus:outline-none"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Tarjeta de Reseña Activa con animación de desvanecimiento suave */}
          <div className="w-full bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm relative group flex flex-col justify-between transition-all duration-500 ease-in-out transform select-none">
            
            {/* Icono de Comillas Gigante decorativo */}
            <div className="absolute top-6 right-8 text-red-50 opacity-10 group-hover:opacity-20 transition-opacity">
              <Quote size={64} />
            </div>

            <div>
              {/* Estrellas */}
              <div className="flex gap-1 mb-6">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Contenido de la reseña */}
              <p className="text-gray-700 text-lg italic leading-relaxed mb-8">
                "{reviews[currentIndex].content}"
              </p>
            </div>

            {/* Info del Cliente */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
              <img 
                src={reviews[currentIndex].image} 
                alt={reviews[currentIndex].name} 
                className="w-14 h-14 rounded-full object-cover border-2 border-red-100 shadow-sm"
              />
              <div>
                <h4 className="font-bold text-gray-900 text-base leading-tight">
                  {reviews[currentIndex].name}
                </h4>
                <p className="text-xs text-red-600 font-medium mt-0.5">
                  {reviews[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Botón Derecha */}
          <button 
            onClick={nextSlide}
            className="absolute right-[-20px] md:right-[-60px] z-10 p-3 rounded-full bg-white border border-gray-100 shadow-lg text-gray-700 hover:text-red-700 hover:scale-110 transition-all focus:outline-none"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Puntos de navegación (Dots) abajo */}
        <div className="flex justify-center gap-2.5 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-red-700' 
                  : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;