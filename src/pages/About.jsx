import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white">
      {/* Banner Principal */}
      <section className="relative py-20 bg-red-700 text-white text-center">
        <h1 className="text-5xl font-black mb-4">NOSOTROS</h1>
        <p className="text-xl max-w-2xl mx-auto px-6 opacity-90">
          Llevando calidad y tradición a cada hogar colombiano.
        </p>
      </section>

      {/* Sección Quiénes Somos */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Quiénes somos?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Somos una empresa familiar con más de 40 años de experiencia en la producción y comercialización de productos cárnicos, embutidos y fiambres de alta calidad. Nacimos en 1982 como Salsamentaria Sabore ., siendo una de las primeras empresas del sector en Bogotá en la produccion de embutidos carnicos y consolidándonos como líderes en el mercado gracias a una tradición basada en el sabor, la confianza y la excelencia.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Hoy, como Grupo Industrial Avila S.A.S., representamos una nueva generación que mantiene intactas nuestras recetas y esencia, adaptándonos a las necesidades del mercado con procesos modernos y eficientes.
            Trabajamos con un firme compromiso hacia nuestros clientes, el bienestar de nuestro equipo humano y el desarrollo sostenible, ofreciendo productos que combinan tradición, calidad y respaldo
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img src="Equipo-Saborita.png" alt="Equipo Saborita" className="w-full h-80 object-cover" />
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-red-700">
            <h3 className="text-2xl font-bold mb-4 text-red-700">Misión</h3>
            <p className="text-gray-600 italic">
              Brindar a colombia un producto accesible para el consumo en el hogar con un sabor tradicional, mantener en nuestra cadena de trabajo la  comercializacion y trabajando de la mano con los colaboradores para generar empleo ser parte de la cadena de abastecimiendo fabricar con proposito y crear un buen ambiente laborar que se vea reflejado en la calidad de los productos. 
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-red-700">
            <h3 className="text-2xl font-bold mb-4 text-red-700">Visión</h3>
            <p className="text-gray-600 italic">
              Proyectamos una organización altamente competitiva, rentable y sostenible, impulsada por la innovación, el desarrollo de nuestro talento humano y una cultura empresarial basada en la disciplina, el compromiso y la mejora continua.
              Nos posicionamos como la primera opción en la mente de los consumidores y aliados comerciales, liderando la participación en el mercado a través de una operación eficiente y en constante crecimiento.
              A partir de esta solidez, buscamos consolidarnos como la empresa líder en Colombia en la industria de productos cárnicos, con proyección de expansión internacional, reconocida por la excelencia operativa, la calidad superior de nuestros productos y la fortaleza de nuestras marcas, llevando nuestra propuesta a cada vez más hogares dentro y fuera del país.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">¿Listo para probar el sabor real?</h2>
        <Link to="/" className="bg-red-700 text-white px-10 py-4 rounded-full font-bold hover:bg-red-800 transition-all">
          Ir a la Tienda
        </Link>
      </section>
    </div>
  );
};

export default About;