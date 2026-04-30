import React, { useState } from 'react';
import { Trash2, Plus, Minus, Truck, HelpCircle } from 'lucide-react';

const Cart = () => {
  // Estado inicial con productos de ejemplo para Sabore
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Chorizo Santarrosano', sku: 'SANT-001', price: 12000, qty: 4, img: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=150' },
    { id: 2, name: 'Butifarra Soledeña', sku: 'BUTI-024', price: 10500, qty: 2, img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=150' },
    { id: 3, name: 'Jamón Serrano Colombiano', sku: 'SERR-005', price: 25000, qty: 1, img: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?w=150' },
  ]);

  // Función para cambiar cantidades
  const updateQuantity = (id, change) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item
    ));
  };

  // Función para eliminar productos
  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-3 px-8 text-[10px] uppercase tracking-widest text-gray-400">
        Inicio / <span className="text-red-700 font-bold">Carrito</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* TABLA DE PRODUCTOS */}
        <div className="lg:col-span-2 bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
          <h1 className="text-3xl font-black text-gray-900 mb-8">Tu Carrito</h1>
          
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div key={item.id} className="flex flex-col md:flex-row items-center gap-6 py-6 border-b border-gray-50 last:border-0">
                <span className="hidden md:block text-gray-300 font-bold">({index + 1})</span>
                <img src={item.img} alt={item.name} className="w-24 h-24 rounded-2xl object-cover shadow-sm" />
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-bold text-gray-900 text-lg">{item.name}</h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">SKU: {item.sku}</p>
                </div>

                <div className="text-center md:text-right">
                  <p className="text-xs text-gray-400 font-bold uppercase mb-1">Precio</p>
                  <p className="font-bold text-gray-900">${item.price.toLocaleString()} <span className="text-[10px]">COL</span></p>
                </div>

                {/* Controles de Cantidad */}
                <div className="flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
                  <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-red-700 transition-colors"><Minus size={16}/></button>
                  <span className="font-bold w-4 text-center">{item.qty}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-red-700 transition-colors"><Plus size={16}/></button>
                </div>

                <div className="text-center md:text-right min-w-[100px]">
                  <p className="text-xs text-gray-400 font-bold uppercase mb-1">Total</p>
                  <p className="font-black text-gray-900">${(item.price * item.qty).toLocaleString()} <span className="text-[10px]">COL</span></p>
                </div>

                <button onClick={() => removeItem(item.id)} className="text-gray-300 hover:text-red-600 transition-colors">
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <button className="text-gray-400 font-bold text-sm hover:text-gray-900 transition-colors underline underline-offset-4">
              Vaciar Carrito
            </button>
            <div className="flex gap-2 w-full md:w-auto">
              <input type="text" placeholder="Cupón de Descuento" className="flex-1 md:w-64 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-gray-900 outline-none" />
              <button className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-red-800 transition-colors">Aplicar</button>
            </div>
          </div>
        </div>

        {/* RESUMEN DEL PEDIDO */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-xl font-black text-gray-900 mb-6 text-center">Resumen del Pedido</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 font-medium">Subtotal</span>
                <span className="font-bold text-gray-900">${subtotal.toLocaleString()} COL</span>
              </div>
              <div className="flex justify-between text-sm items-center">
                <span className="text-gray-500 font-medium">Envío</span>
                <span className="text-[10px] font-bold text-red-700 uppercase bg-red-50 px-2 py-1 rounded">Calculado en checkout</span>
              </div>
              <div className="border-t border-gray-100 pt-4 flex justify-between items-end">
                <span className="font-bold text-gray-900">Total (con IVA)</span>
                <div className="text-right">
                  <p className="text-2xl font-black text-gray-900">${subtotal.toLocaleString()}</p>
                  <p className="text-[10px] text-gray-400 font-bold">PESOS COLOMBIANOS</p>
                </div>
              </div>
              
              <div className="pt-6">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Dirección de Entrega</label>
                <input type="text" className="w-full border border-gray-200 rounded-xl p-3 text-sm" placeholder="Ciudad, Barrio, Dirección" />
              </div>

              <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-black text-lg mt-4 hover:bg-red-800 hover:shadow-lg hover:shadow-red-900/20 transition-all active:scale-95">
                Continuar al Pago
              </button>
            </div>
          </div>

          {/* Bloques de Confianza */}
          <div className="px-4 space-y-4">
            <div className="flex items-center gap-3 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors group">
              <HelpCircle size={18} className="group-hover:text-red-700" />
              <span className="text-xs font-bold uppercase tracking-wider">Preguntas Frecuentes</span>
            </div>
            <div className="p-4 bg-green-50 rounded-2xl border border-green-100 flex gap-4">
              <div className="bg-white p-2 rounded-lg shadow-sm h-fit">
                <Truck className="text-green-600" size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-green-900 leading-tight">Logística de Confianza</p>
                <p className="text-[10px] text-green-700 mt-1">Envíos refrigerados garantizados por ADITECC SAS.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;