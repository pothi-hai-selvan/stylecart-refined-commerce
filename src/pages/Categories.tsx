
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Electronics',
    image: 'photo-1498050108023-c5249f4df085',
    description: 'Latest gadgets and tech accessories',
    productCount: 45
  },
  {
    name: 'Fashion',
    image: 'photo-1551028719-00167b16eac5',
    description: 'Trendy clothing and apparel',
    productCount: 78
  },
  {
    name: 'Accessories',
    image: 'photo-1572635196237-14b3f281503f',
    description: 'Stylish accessories for every occasion',
    productCount: 32
  },
  {
    name: 'Sports',
    image: 'photo-1549298916-b41d501d3772',
    description: 'Athletic wear and sports equipment',
    productCount: 56
  },
  {
    name: 'Home & Living',
    image: 'photo-1721322800607-8c38375eef04',
    description: 'Beautiful items for your home',
    productCount: 29
  },
  {
    name: 'Beauty',
    image: 'photo-1618160702438-9b02ab6515c9',
    description: 'Premium beauty and skincare products',
    productCount: 41
  }
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">Shop by Category</h1>
            <p className="text-lg text-gray-600 text-center">Explore our diverse range of product categories</p>
          </div>
        </div>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to="/products"
                  className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={`https://images.unsplash.com/${category.image}?w=400&h=300&fit=crop`}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.productCount} products</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
