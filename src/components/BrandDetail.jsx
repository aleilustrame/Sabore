import { useParams } from 'react-router-dom';

const BrandDetail = () => {
  const { brandId } = useParams();

  // Aquí podrías tener un objeto con la información de ADITECC SAS
  const brandInfo = {
    Saborita: {
      title: "Saborita",
      benefits: "Especialistas en condimentos y sabores para la industria cárnica desde 2013.",
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
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Beneficios</h2>
        <p className="text-gray-600">{data.benefits}</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Productos Destacados</h2>
        <ul className="list-disc ml-5">
          {data.products.map(p => <li key={p}>{p}</li>)}
        </ul>
      </section>
    </div>
  );
};

export default BrandDetail;