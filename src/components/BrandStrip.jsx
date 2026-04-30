import React from 'react';

const BrandStrip = () => {
  const brands = [
    { name: "Saborita", logo: "/assets/brands/saborita.svg" },
    { name: "Sabore", logo: "/assets/brands/sabore.svg" },
    { name: "Avileña", logo: "/assets/brands/avileña.svg", customStyle:{height:'45px'} },
    // Agrega aquí otras marcas o líneas de productos de la empresa
  ];

  return (
    <section className="bg-white border-b border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[25px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
          Nuestras Marcas
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 hover:opacity-100">
          {brands.map((brand) => (
            <img 
              key={brand.name}
              src={brand.logo} 
              alt={`Logo de ${brand.name}`}
              style={brand.customStyle || { height: '70px' }}
              className=" md:h-20 w-auto object-contain hover:scale-120 transition-transform"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStrip;