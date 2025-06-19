
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, CreditCard, Truck, Shield, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const BillingModal = () => {
  const { cartItems, showBilling, setShowBilling, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'card'
  });

  const subtotal = getTotalPrice();
  const shipping = subtotal > 2000 ? 0 : 150; // Free shipping above ₹2000
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + shipping + tax;

  const handleInputChange = (field: string, value: string) => {
    setBillingInfo(prev => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = () => {
    if (!billingInfo.name || !billingInfo.email || !billingInfo.phone || !billingInfo.address) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Order Placed Successfully! 🎉",
      description: `Your order of ₹${total.toLocaleString('en-IN')} has been confirmed.`,
    });
    
    clearCart();
    setShowBilling(false);
  };

  return (
    <Dialog open={showBilling} onOpenChange={setShowBilling}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Complete Your Order ✨
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cart Items */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Your Items</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <img
                      src={`https://images.unsplash.com/${item.image}?w=60&h=60&fit=crop`}
                      alt={item.name}
                      className="w-15 h-15 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>
                      <p className="text-sm text-purple-600 font-semibold">₹{item.price.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-purple-100 rounded-full transition-colors"
                      >
                        <Minus className="h-4 w-4 text-purple-600" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-purple-100 rounded-full transition-colors"
                      >
                        <Plus className="h-4 w-4 text-purple-600" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 hover:bg-red-100 rounded-full transition-colors ml-2"
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-purple-600" />
                Order Summary
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 flex items-center">
                    <Truck className="h-4 w-4 mr-1" />
                    Shipping
                  </span>
                  <span className={`font-medium ${shipping === 0 ? 'text-green-600' : ''}`}>
                    {shipping === 0 ? 'FREE' : `₹${shipping.toLocaleString('en-IN')}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST (18%)</span>
                  <span className="font-medium">₹{tax.toLocaleString('en-IN')}</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg font-bold">
                  <span className="text-gray-900">Total</span>
                  <span className="text-purple-600">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>
              {subtotal < 2000 && (
                <div className="mt-3 text-xs text-amber-600 bg-amber-50 p-2 rounded-lg">
                  💡 Add ₹{(2000 - subtotal).toLocaleString('en-IN')} more for FREE shipping!
                </div>
              )}
            </div>
          </div>

          {/* Billing Form */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Billing Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name*</Label>
                <Input
                  id="name"
                  value={billingInfo.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email*</Label>
                <Input
                  id="email"
                  type="email"
                  value={billingInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone*</Label>
                <Input
                  id="phone"
                  value={billingInfo.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <Label htmlFor="pincode" className="text-sm font-medium text-gray-700">Pincode</Label>
                <Input
                  id="pincode"
                  value={billingInfo.pincode}
                  onChange={(e) => handleInputChange('pincode', e.target.value)}
                  className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="400001"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="address" className="text-sm font-medium text-gray-700">Address*</Label>
              <Input
                id="address"
                value={billingInfo.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                placeholder="Enter your complete address"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city" className="text-sm font-medium text-gray-700">City</Label>
                <Input
                  id="city"
                  value={billingInfo.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Mumbai"
                />
              </div>
              <div>
                <Label htmlFor="state" className="text-sm font-medium text-gray-700">State</Label>
                <Input
                  id="state"
                  value={billingInfo.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Maharashtra"
                />
              </div>
            </div>

            {/* Secure Payment Badge */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
              <Shield className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm font-medium text-green-800">Secure Payment</p>
                <p className="text-xs text-green-600">Your payment information is encrypted and secure</p>
              </div>
            </div>

            <Button
              onClick={handlePlaceOrder}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              Place Order - ₹{total.toLocaleString('en-IN')} 🚀
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BillingModal;
