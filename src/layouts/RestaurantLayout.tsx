import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, Menu, ClipboardList, Settings } from 'lucide-react';

function RestaurantLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">Restaurant Panel</h1>
        </div>
        <nav className="mt-6">
          <NavLink
            to="/restaurant"
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-gray-100 border-r-4 border-blue-500' : ''
              }`
            }
          >
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Dashboard
          </NavLink>
          <NavLink
            to="/restaurant/menu"
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-gray-100 border-r-4 border-blue-500' : ''
              }`
            }
          >
            <Menu className="w-5 h-5 mr-3" />
            Menu Management
          </NavLink>
          <NavLink
            to="/restaurant/orders"
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-gray-100 border-r-4 border-blue-500' : ''
              }`
            }
          >
            <ClipboardList className="w-5 h-5 mr-3" />
            Orders
          </NavLink>
          <NavLink
            to="/restaurant/settings"
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-gray-100 border-r-4 border-blue-500' : ''
              }`
            }
          >
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default RestaurantLayout;