import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

function Cart() {
  const cartItems = [
    { id: 1, name: 'Classic Burger', price: 12.99, quantity: 2 },
    { id: 2, name: 'French Fries', price: 4.99, quantity: 1 },
    { id: 3, name: 'Cola', price: 2.99, quantity: 2 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>

      {/* Cart Items */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-4 border-b last:border-0">
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=150"
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <Minus className="w-4 h-4 text-gray-600" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Tax (10%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between font-semibold text-gray-800">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Cart;