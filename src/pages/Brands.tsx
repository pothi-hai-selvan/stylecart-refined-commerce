
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const brands = [
  { name: 'TechPro', logo: '🔥', description: 'Premium electronics and gadgets' },
  { name: 'StyleCo', logo: '✨', description: 'Fashion-forward clothing brand' },
  { name: 'ActiveLife', logo: '💪', description: 'Sports and fitness equipment' },
  { name: 'LuxeAccess', logo: '💎', description: 'Luxury accessories and jewelry' },
  { name: 'HomeBliss', logo: '🏠', description: 'Beautiful home decor items' },
  { name: 'BeautyGlow', logo: '🌟', description: 'Premium beauty products' },
  { name: 'UrbanStyle', logo: '🌆', description: 'Modern urban fashion' },
  { name: 'EcoLiving', logo: '🌿', description: 'Sustainable lifestyle products' }
];

const Brands = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">Our Brands</h1>
            <p className="text-lg text-gray-600 text-center">Discover premium brands we partner with</p>
          </div>
        </div>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {brands.map((brand) => (
                <Link
                  key={brand.name}
                  to="/products"
                  className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center border hover:border-purple-200"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {brand.logo}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-gray-600">{brand.description}</p>
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

export default Brands;
