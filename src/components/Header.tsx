
import React from 'react';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">StyleCart</h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Products
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Categories
            </Link>
            <Link to="/brands" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Brands
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <User className="h-5 w-5" />
            </button>
            <Link to="/cart" className="text-gray-700 hover:text-gray-900 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <button className="md:hidden text-gray-700 hover:text-gray-900">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
