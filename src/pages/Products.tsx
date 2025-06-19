
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">All Products</h1>
            <p className="text-lg text-gray-600 text-center">Browse our complete collection</p>
          </div>
        </div>
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
