import React, { useState } from 'react';
import { Edit2, Trash2, Plus } from 'lucide-react';

function RestaurantDetail() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showEditItemModal, setShowEditItemModal] = useState(false);
  const [showDeleteItemModal, setShowDeleteItemModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Örnek restaurant bilgileri - gerçek uygulamada API'den gelecek
  const [restaurantInfo, setRestaurantInfo] = useState({
    name: "Sample Restaurant",
    address: "123 Restaurant Street, City",
    contact: "+1 234 567 8900",
    email: "contact@restaurant.com"
  });

  const handleEditItem = (item) => {
    setSelectedItem(item);
    setShowEditItemModal(true);
  };

  const handleDeleteItem = (item) => {
    setSelectedItem(item);
    setShowDeleteItemModal(true);
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Restaurant Details</h1>
          <div className="space-x-4">
            <button 
              onClick={() => setShowEditModal(true)}
              className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50"
            >
              Edit Restaurant
            </button>
            <button 
              onClick={() => setShowDeleteModal(true)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Delete Restaurant
            </button>
          </div>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Menu Items</h2>
            
            {/* Menu Categories */}
            <div className="space-y-6">
              {['Starters', 'Main Courses', 'Desserts'].map((category) => (
                <div key={category}>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">{category}</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <img
                            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200"
                            alt="Food item"
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div>
                            <h4 className="font-medium">Menu Item {item}</h4>
                            <p className="text-gray-600 text-sm">Description of the menu item</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="font-semibold">$12.99</span>
                          <button 
                            onClick={() => handleEditItem({ id: item, name: `Menu Item ${item}`, price: 12.99 })}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                          >
                            <Edit2 className="w-5 h-5" />
                          </button>
                          <button 
                            onClick={() => handleDeleteItem({ id: item, name: `Menu Item ${item}` })}
                            className="p-2 text-red-600 hover:bg-red-50 rounded"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Add Item Button */}
            <button className="mt-6 w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500 flex items-center justify-center">
              <Plus className="w-5 h-5 mr-2" />
              Add New Menu Item
            </button>
          </div>
        </div>

        {/* Sidebar aynı kalacak */}
        <div className="space-y-6">
          {/* Restaurant Info Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Restaurant Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600">Restaurant Name</label>
                <p className="font-medium">{restaurantInfo.name}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Address</label>
                <p className="font-medium">{restaurantInfo.address}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Contact</label>
                <p className="font-medium">{restaurantInfo.contact}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Email</label>
                <p className="font-medium">{restaurantInfo.email}</p>
              </div>
            </div>
          </div>

          {/* QR Code Card aynı kalacak */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">QR Code</h3>
            <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
              <div className="w-48 h-48 bg-gray-200 rounded flex items-center justify-center">
                QR Code
              </div>
            </div>
            <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Download QR Code
            </button>
          </div>
        </div>
      </div>

      {/* Edit Restaurant Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6">Edit Restaurant</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  defaultValue={restaurantInfo.name}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  defaultValue={restaurantInfo.address}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact
                </label>
                <input
                  type="text"
                  defaultValue={restaurantInfo.contact}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue={restaurantInfo.email}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Menu Item Modal */}
      {showEditItemModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6">Edit Menu Item</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Item Name
                </label>
                <input
                  type="text"
                  defaultValue={selectedItem?.name}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price
                </label>
                <input
                  type="number"
                  step="0.01"
                  defaultValue={selectedItem?.price}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  rows={3}
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowEditItemModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Menu Item Modal */}
      {showDeleteItemModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Delete Menu Item</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete "{selectedItem?.name}"? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteItemModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle delete item
                  setShowDeleteItemModal(false);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Restaurant Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Delete Restaurant</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this restaurant? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle delete
                  setShowDeleteModal(false);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RestaurantDetail;