import { useParams } from 'react-router-dom';
import BrandStrip from './BrandStrip';

const BrandDetail = () => {
  const { brandId } = useParams();

  // Aquí podrías tener un objeto con la información de ADITECC SAS
  const brandInfo = {
    Saborita: {
      title: "Saborita",
      benefits: "Saborita emerge como la evolución estratégica de Sabore, consolidándose como la marca sucesora que hereda una trayectoria impecable de más de 40 años en el sector cárnico. Esta transformación nace de la necesidad de proyectarse hacia el futuro, reinventando nuestra identidad sin comprometer la esencia, la calidad artesanal y la confianza que han definido nuestro legado por décadas.Hoy, combinamos la sabiduría de la tradición con una visión vanguardista, integrando procesos innovadores y nuevas ideas que nos permiten anticiparnos a las exigencias del mercado contemporáneo. Nuestra propuesta no solo garantiza la excelencia que nuestros clientes ya conocen, sino que introduce un portafolio dinámico diseñado para destacar y liderar, ofreciendo soluciones gastronómicas que fusionan la experiencia de siempre con el impulso de la renovación constante. Al elegirnos, se vincula a una marca que honra su historia mientras redefine los estándares de innovación y competitividad.",
      products: ["Chorizo Paisa", "Chorizo Parrillero", "Salchichon Elite Premium"],
    },
    Sabore: {
      title: "Saborita",
      benefits: "Especialistas en condimentos y sabores para la industria cárnica desde 2013.",
      products: ["Mezclas para Chorizo", "Sabores Líquidos", "Colorantes"],
    },
    Avileña: {
      title: "Saborita",
      benefits: "Especialistas en condimentos y sabores para la industria cárnica desde 2013.",
      products: ["Mezclas para Chorizo", "Sabores Líquidos", "Colorantes"],
    },
    
  };

  const data = brandInfo[brandId];

  if (!data) return <p>Marca no encontrada</p>;

  return (
    
    <div >
      <BrandStrip />
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-5xl font-bold mb-4">{data.title}</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Historia</h2>
        <p className="text-gray-600">{data.benefits}</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Productos Destacados</h2>
        <ul className="list-disc ml-5">
          {data.products.map(p => <li key={p}>{p}</li>)}
        </ul>
      </section>
      </div>
      
    </div>
  );
};

export default BrandDetail;