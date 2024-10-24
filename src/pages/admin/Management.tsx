import React from 'react';
import { Settings, Users, CreditCard, Shield } from 'lucide-react';

function Management() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">System Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* General Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Settings className="w-6 h-6 text-gray-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">General Settings</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                System Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                defaultValue="QR Menu System"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Default Language
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time Zone
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option>UTC</option>
                <option>EST</option>
                <option>PST</option>
              </select>
            </div>
          </div>
        </div>

        {/* User Management */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Users className="w-6 h-6 text-gray-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">User Management</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Default User Role
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option>Customer</option>
                <option>Restaurant Owner</option>
                <option>Admin</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Session Timeout (minutes)
              </label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded-lg"
                defaultValue="30"
              />
            </div>
          </div>
        </div>

        {/* Payment Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <CreditCard className="w-6 h-6 text-gray-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Payment Settings</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Currency
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Payment Gateway
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option>Stripe</option>
                <option>PayPal</option>
                <option>Square</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-gray-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Security Settings</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <input type="checkbox" id="2fa" className="mr-2" />
              <label htmlFor="2fa" className="text-sm font-medium text-gray-700">
                Enable Two-Factor Authentication
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="force-ssl" className="mr-2" />
              <label htmlFor="force-ssl" className="text-sm font-medium text-gray-700">
                Force SSL
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password Policy
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option>Strong</option>
                <option>Medium</option>
                <option>Basic</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Management;