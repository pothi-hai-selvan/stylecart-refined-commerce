
import React from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199,
    originalPrice: 299,
    image: "photo-1505740420928-5e560c06d30e",
    rating: 4.8,
    reviews: 324
  },
  {
    id: 2,
    name: "Designer Leather Jacket",
    price: 449,
    originalPrice: 599,
    image: "photo-1551028719-00167b16eac5",
    rating: 4.6,
    reviews: 156
  },
  {
    id: 3,
    name: "Smartwatch Pro",
    price: 329,
    image: "photo-1523275335684-37898b6baf30",
    rating: 4.7,
    reviews: 892
  },
  {
    id: 4,
    name: "Vintage Denim Jeans",
    price: 89,
    originalPrice: 120,
    image: "photo-1542272604-787c3835535d",
    rating: 4.5,
    reviews: 234
  },
  {
    id: 5,
    name: "Luxury Sunglasses",
    price: 259,
    image: "photo-1572635196237-14b3f281503f",
    rating: 4.9,
    reviews: 167
  },
  {
    id: 6,
    name: "Athletic Running Shoes",
    price: 149,
    originalPrice: 199,
    image: "photo-1549298916-b41d501d3772",
    rating: 4.4,
    reviews: 445
  }
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600">Discover our handpicked selection of premium items</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
