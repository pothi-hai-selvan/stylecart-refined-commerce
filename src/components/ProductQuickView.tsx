
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, X, Star } from 'lucide-react';
import { useWishlist } from '@/contexts/WishlistContext';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
}

interface ProductQuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductQuickView = ({ product, isOpen, onClose }: ProductQuickViewProps) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (!isOpen || !product) return null;

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
          >
            <X className="h-4 w-4" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image */}
            <div className="relative">
              <img
                src={`https://images.unsplash.com/${product.image}?w=600&h=600&fit=crop`}
                alt={product.name}
                className="w-full h-80 md:h-96 object-cover"
              />
              {product.originalPrice && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h2>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">({product.reviews} reviews)</span>
              </div>

              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through ml-3">${product.originalPrice}</span>
                )}
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-3">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleWishlistToggle}
                >
                  <Heart className={`h-5 w-5 mr-2 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  {isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </Button>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-gray-600 text-sm">
                    Premium quality product crafted with attention to detail. Perfect for modern lifestyle needs.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Features</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• High-quality materials</li>
                    <li>• Modern design</li>
                    <li>• Satisfaction guaranteed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;
