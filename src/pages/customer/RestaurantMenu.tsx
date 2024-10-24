import React from 'react';
import { ShoppingCart } from 'lucide-react';

function RestaurantMenu() {
  const categories = [
    {
      name: 'Popular Items',
      items: [
        {
          id: 1,
          name: 'Classic Burger',
          description: 'Beef patty with cheese, lettuce, and special sauce',
          price: 12.99,
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'
        },
        {
          id: 2,
          name: 'Margherita Pizza',
          description: 'Fresh tomatoes, mozzarella, and basil',
          price: 14.99,
          image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500'
        }
      ]
    },
    {
      name: 'Main Courses',
      items: [
        {
          id: 3,
          name: 'Grilled Salmon',
          description: 'Fresh salmon with seasonal vegetables',
          price: 24.99,
          image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500'
        }
      ]
    }
  ];

  return (
    <div>
      {/* Categories */}
      <div className="flex overflow-x-auto space-x-4 mb-8 pb-2">
        {categories.map((category) => (
          <button
            key={category.name}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-full shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      {categories.map((category) => (
        <div key={category.name} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <span className="text-lg font-semibold text-gray-900">${item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RestaurantMenu;