import React from 'react';
import { CheckCircle, Clock, ChefHat, Truck } from 'lucide-react';

function OrderStatus() {
  const orderStatus = 'preparing'; // Can be: received, preparing, ready, delivered

  const steps = [
    { id: 'received', label: 'Order Received', icon: CheckCircle },
    { id: 'preparing', label: 'Preparing', icon: ChefHat },
    { id: 'ready', label: 'Ready for Pickup', icon: Clock },
    { id: 'delivered', label: 'Delivered', icon: Truck },
  ];

  const getCurrentStepIndex = () => {
    return steps.findIndex(step => step.id === orderStatus);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Order Status</h1>

      {/* Order Info */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Order #12345</h2>
            <p className="text-gray-600">Placed on March 15, 2024 at 14:30</p>
          </div>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
            In Progress
          </span>
        </div>

        {/* Progress Steps */}
        <div className="relative">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: `${(getCurrentStepIndex() + 1) * 25}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
            ></div>
          </div>
          <div className="flex justify-between">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isCurrent = step.id === orderStatus;
              const isCompleted = getCurrentStepIndex() >= index;

              return (
                <div key={step.id} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      isCompleted
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    <StepIcon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-sm ${
                      isCurrent ? 'text-blue-600 font-medium' : 'text-gray-500'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Order Details */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Details</h2>
        <div className="space-y-4">
          {/* Order Items */}
          <div className="border-b pb-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>2x Classic Burger</span>
                <span>$25.98</span>
              </div>
              <div className="flex justify-between">
                <span>1x French Fries</span>
                <span>$4.99</span>
              </div>
              <div className="flex justify-between">
                <span>2x Cola</span>
                <span>$5.98</span>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>$36.95</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax</span>
              <span>$3.70</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-800 pt-2 border-t">
              <span>Total</span>
              <span>$40.65</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderStatus;