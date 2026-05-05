import React from 'react';
import { useParams } from 'react-router-dom';
import BrandStrip from './BrandStrip';

const BrandDetail = () => {
  const { brandId } = useParams();

  // Datos basados en la trayectoria de ADITECC SAS y Saborita
  const brandInfo = {
    Saborita: {
      title: "Saborita",
      subtitle: "Evolución y Legado",
      history: "Saborita emerge como la evolución estratégica de Sabore, consolidándose como la marca sucesora que hereda una trayectoria impecable de más de 40 años en el sector cárnico. Esta transformación nace de la necesidad de proyectarse hacia el futuro, reinventando nuestra identidad sin comprometer la esencia, la calidad artesanal y la confianza que han definido nuestro legado por décadas.",
      details: "Hoy, combinamos la sabiduría de la tradición con una visión vanguardista, integrando procesos innovadores bajo la normatividad colombiana. Al elegirnos, se vincula a una marca que honra su historia mientras redefine los estándares de innovación y competitividad.",
      products: ["Chorizo Paisa", "Chorizo Parrillero", "Salchichón Elite Premium"],
      theme: "text-red-700"
    },
    Sabore: {
      title: "Sabore",
      subtitle: "Nuestra Esencia",
      history: "La marca que cimentó nuestra reputación en el mercado. Sabore representa el compromiso inicial de ofrecer sabores auténticos y mezclas de alta calidad para la industria.",
      details: "Es la base sobre la cual se construyó la confianza de nuestros clientes actuales, enfocada en el rendimiento y la tradición.",
      products: ["Condimentos Básicos", "Mezclas Tradicionales"],
      theme: "text-gray-700"
    },
    Avileña: {
      title: "Avileña",
      subtitle: "Especialidad en Carnes Frías",
      history: "Línea enfocada en productos cárnicos procesados con altos estándares de selección de materias primas.",
      details: "Garantizamos productos frescos de excelente rendimiento para el crecimiento de tu negocio.",
      products: ["Jamones Tajados", "Mortadelas"],
      theme: "text-amber-700"
    }
  };

  const data = brandInfo[brandId];

  // Si no hay marca seleccionada (URL: /marcas)
  if (!brandId) {
    return (
      <div className="flex flex-col min-h-[60vh]">
        <div className="flex-grow flex items-center justify-center px-6 text-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-black text-gray-300 uppercase italic tracking-tighter">
              Selecciona una de nuestras marcas
            </h2>
            <p className="text-gray-400 mt-2">
              Conoce la historia y el portafolio de las líneas que integran a Saborita.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Si la marca no existe en el objeto
  if (!data) return (
    <div className="flex flex-col">
      <p className="py-20 text-center font-bold text-red-700">Marca no encontrada</p>
    </div>
  );

  return (
    <div className="flex flex-col animate-in fade-in duration-700">
      {/* Selector de marcas siempre visible en esta página */}

      <div className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-12">
        {/* Columna de Título e Historia */}
        <div className="md:col-span-2">
          <span className={`font-black uppercase tracking-widest text-xs ${data.theme}`}>
            {data.subtitle}
          </span>
          <h1 className="text-6xl font-black mb-8 italic tracking-tighter uppercase text-gray-900">
            {data.title}
          </h1>
          
          <section className="prose prose-red">
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase">Nuestra Historia</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              {data.history}
            </p>
            <p className="text-gray-600 leading-relaxed italic">
              {data.details}
            </p>
          </section>
        </div>

        {/* Columna Lateral de Productos */}
        <aside className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-fit">
          <h2 className="text-lg font-black text-gray-900 mb-6 uppercase tracking-tight border-b pb-4">
            Productos Destacados
          </h2>
          <ul className="space-y-4">
            {data.products.map(p => (
              <li key={p} className="flex items-center gap-3 text-gray-700 font-medium">
                <span className="w-2 h-2 bg-red-700 rounded-full"></span>
                {p}
              </li>
            ))}
          </ul>
          
          <button className="w-full mt-8 bg-gray-900 text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-red-700 transition-colors">
            Ver Catálogo Completo
          </button>
        </aside>
      </div>
    </div>
  );
};

export default BrandDetail;