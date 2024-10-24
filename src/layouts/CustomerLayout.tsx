import React from 'react';
import { Outlet } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

function CustomerLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-800">Restaurant Name</h1>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default CustomerLayout;