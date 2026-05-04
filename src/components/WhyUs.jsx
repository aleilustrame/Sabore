import React from "react"
 const WhyUs = () => {
  return (
    <section className=" bg-gray-40 max-w-8xl mx-auto py-50 px-50 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl font-bold text-red-800 mb-6">En Saborita transformamos la tradición en confianza y sabor para tu mesa y tu negocio</h2>
          <p className="text-xl text-justify text-gray-800 leading-snug mb-4">
            Con materias primas seleccionadas y procesos bajo la normatividad colombiana, 
            garantizamos embutidos frescos, rentables y de excelente rendimiento. 
            Más que un proveedor de carnes frías, somos el aliado estratégico de tu negocio:
            te ofrecemos precios competitivos de fábrica, despachos oportunos y un portafolio a tu medida.
            Elegirnos es llevar el respaldo de una marca comprometida con la excelencia y el sabor que fideliza a tus clientes.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img src="Equipo-Saborita.png" alt="Equipo Saborita" className="w-full h-100 object-cover" />
        </div>
      </section>
  );
 };

 export default WhyUs;