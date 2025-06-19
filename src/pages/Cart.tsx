
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 14999,
      quantity: 1,
      image: "photo-1505740420928-5e560c06d30e"
    },
    {
      id: 2,
      name: "Designer Leather Jacket",
      price: 33799,
      quantity: 1,
      image: "photo-1551028719-00167b16eac5"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 1199;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white border rounded-lg p-6 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <img
                      src={`https://images.unsplash.com/${item.image}?w=100&h=100&fit=crop`}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-gray-600">₹{item.price.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button className="p-2 text-red-500 hover:bg-red-50 rounded">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping.toLocaleString('en-IN')}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
