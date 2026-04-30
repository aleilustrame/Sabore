import React from 'react';
import { MessageCircle, Camera, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  // Configuración de datos de Saborita
  const contactInfo = {
    whatsapp: "https://wa.me/573204803886",
    instagram: "https://instagram.com/saborita_gia",
    email: "ventas@sabore.com.co",
    address: "San Andresito de la 38, Carrera 38 #10a - 77 Bogotá, Colombia"
  };

  return (
    <section className="py-16 bg-white" id="contacto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-red-800 mb-4">ENCUÉNTRANOS</h2>
          <p className="text-gray-600">Estamos listos para llevar el mejor sabor a tu negocio o cocina.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          {/* Tarjeta de Información y Botones */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-red-700">Contactanos</h3>
              
              <div className="space-y-4">
                {/* Botón WhatsApp */}
                <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer" 
                   className="flex items-center gap-4 p-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl transition-all font-bold shadow-md">
                  <MessageCircle size={34} />
                  Escríbenos por WhatsApp
                </a>

                {/* Botón Instagram */}
                <a href={contactInfo.instagram} target="_blank" rel="noreferrer" 
                   className="flex items-center gap-4 p-4 bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 hover:opacity-90 text-white rounded-2xl transition-all font-bold shadow-md">
                  <Camera size={34} />
                  Síguenos en Instagram
                </a>

                {/* Info Correo y Dirección */}
                <div className="pt-4 space-y-3 text-gray-700">
                  <div className="flex items-center gap-3">
                    <Mail className="text-red-700" size={20} />
                    <span className="font-medium">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-red-700" size={20} />
                    <span className="font-medium">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa de Google */}
          <div className="h-[365px] w-full rounded-3xl overflow-hidden shadow-inner border border-gray-100">
            <iframe
              title="Ubicación Saborita"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4893.409973345134!2d-74.1011971!3d4.6178707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ea4b0f8f82f%3A0xb91c531b66248bff!2sSalsamentaria%20Sabore!5e1!3m2!1ses!2sco!4v1777586087103!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;