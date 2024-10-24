import React from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

function OrderTracking() {
  const orders = [
    { id: 1, status: 'pending', items: ['2x Burger', '1x Fries'], total: 25.99 },
    { id: 2, status: 'preparing', items: ['1x Pizza', '2x Coke'], total: 18.50 },
    { id: 3, status: 'ready', items: ['3x Tacos', '1x Nachos'], total: 22.99 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'preparing':
        return 'bg-blue-100 text-blue-800';
      case 'ready':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5" />;
      case 'preparing':
        return <Clock className="w-5 h-5" />;
      case 'ready':
        return <CheckCircle className="w-5 h-5" />;
      default:
        return <XCircle className="w-5 h-5" />;
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Order Tracking</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">Order #{order.id}</h3>
                <p className="text-sm text-gray-500">March 15, 2024 - 14:30</p>
              </div>
              <span className={`px-3 py-1 rounded-full flex items-center ${getStatusColor(order.status)}`}>
                {getStatusIcon(order.status)}
                <span className="ml-2 capitalize">{order.status}</span>
              </span>
            </div>

            <div className="border-t border-b py-4 mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Order Items:</h4>
              <ul className="space-y-2">
                {order.items.map((item, index) => (
                  <li key={index} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total:</span>
              <span className="text-lg font-semibold">${order.total}</span>
            </div>

            <div className="mt-4 flex space-x-2">
              <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Update Status
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderTracking;