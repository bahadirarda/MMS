import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import RestaurantLayout from './layouts/RestaurantLayout';
import CustomerLayout from './layouts/CustomerLayout';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import Restaurants from './pages/admin/Restaurants';
import RestaurantDetail from './pages/admin/RestaurantDetail';
import Management from './pages/admin/Management';

// Restaurant Pages
import RestaurantDashboard from './pages/restaurant/Dashboard';
import MenuManagement from './pages/restaurant/MenuManagement';
import OrderTracking from './pages/restaurant/OrderTracking';
import Settings from './pages/restaurant/Settings';

// Customer Pages
import RestaurantMenu from './pages/customer/RestaurantMenu';
import Cart from './pages/customer/Cart';
import OrderStatus from './pages/customer/OrderStatus';

// Auth Pages
import Login from './pages/auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="restaurants/:id" element={<RestaurantDetail />} />
          <Route path="management" element={<Management />} />
        </Route>

        {/* Restaurant Routes */}
        <Route path="/restaurant" element={<RestaurantLayout />}>
          <Route index element={<RestaurantDashboard />} />
          <Route path="menu" element={<MenuManagement />} />
          <Route path="orders" element={<OrderTracking />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Customer Routes */}
        <Route path="/menu/:restaurantId" element={<CustomerLayout />}>
          <Route index element={<RestaurantMenu />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order-status" element={<OrderStatus />} />
        </Route>

        {/* Redirect root to admin dashboard */}
        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;