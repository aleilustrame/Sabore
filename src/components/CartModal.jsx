import React from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';

const CartModal = ({ isOpen, onClose, cart, removeFromCart, updateQuantity, totalPrice }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-end bg-black/40 backdrop-blur-sm">
      <div className="h-full w-[90%] sm:w-full max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-6 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-red-700" size={24} />
            <h2 className="text-xl font-black italic tracking-tighter">Tu Pedido</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Lista de Productos */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">El carrito está vacío</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 bg-gray-50 p-4 rounded-3xl border border-gray-100">
                <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-2xl shadow-sm" />
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-black text-sm text-gray-900 leading-tight uppercase">{item.name}</h4>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-300 hover:text-red-700 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-red-700 font-bold text-sm mt-1">${item.price.toLocaleString()}</p>
                  </div>

                  {/* CONTROLES DE CANTIDAD */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center bg-white rounded-xl border border-gray-200 p-1">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:bg-gray-100 rounded-lg transition-colors text-gray-500"
                      >
                        <Minus size={14} strokeWidth={3} />
                      </button>
                      
                      <span className="px-3 font-black text-sm text-gray-900">{item.qty}</span>
                      
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:bg-gray-100 rounded-lg transition-colors text-gray-500"
                      >
                        <Plus size={14} strokeWidth={3} />
                      </button>
                    </div>
                    
                    <p className="font-black text-gray-900 text-sm">
                      ${(item.price * item.qty).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t bg-white">
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Total a pagar</p>
                <p className="text-3xl font-black text-gray-900 tracking-tighter italic">
                  ${totalPrice.toLocaleString()}
                </p>
              </div>
            </div>
            <button className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black hover:bg-red-700 transition-all active:scale-[0.98] shadow-xl shadow-red-900/10 uppercase tracking-widest text-xs">
              Finalizar Pedido
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;