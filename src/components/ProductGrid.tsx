
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';
import ProductQuickView from './ProductQuickView';

const sampleProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199,
    originalPrice: 299,
    image: "photo-1505740420928-5e560c06d30e",
    rating: 4.8,
    reviews: 324,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Designer Leather Jacket",
    price: 449,
    originalPrice: 599,
    image: "photo-1551028719-00167b16eac5",
    rating: 4.6,
    reviews: 156,
    category: "Fashion"
  },
  {
    id: 3,
    name: "Smartwatch Pro",
    price: 329,
    image: "photo-1523275335684-37898b6baf30",
    rating: 4.7,
    reviews: 892,
    category: "Electronics"
  },
  {
    id: 4,
    name: "Vintage Denim Jeans",
    price: 89,
    originalPrice: 120,
    image: "photo-1542272604-787c3835535d",
    rating: 4.5,
    reviews: 234,
    category: "Fashion"
  },
  {
    id: 5,
    name: "Luxury Sunglasses",
    price: 259,
    image: "photo-1572635196237-14b3f281503f",
    rating: 4.9,
    reviews: 167,
    category: "Accessories"
  },
  {
    id: 6,
    name: "Athletic Running Shoes",
    price: 149,
    originalPrice: 199,
    image: "photo-1549298916-b41d501d3772",
    rating: 4.4,
    reviews: 445,
    category: "Sports"
  },
  {
    id: 7,
    name: "Wireless Bluetooth Speaker",
    price: 79,
    originalPrice: 99,
    image: "photo-1608043152269-423dbba4e7e1",
    rating: 4.3,
    reviews: 278,
    category: "Electronics"
  },
  {
    id: 8,
    name: "Classic Wool Coat",
    price: 299,
    originalPrice: 399,
    image: "photo-1539109136881-3be0616acf4b",
    rating: 4.7,
    reviews: 189,
    category: "Fashion"
  }
];

interface ProductGridProps {
  showFilters?: boolean;
  title?: string;
  description?: string;
}

const ProductGrid = ({ showFilters = true, title = "Featured Products", description = "Discover our handpicked selection of premium items" }: ProductGridProps) => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [quickViewProduct, setQuickViewProduct] = useState<typeof sampleProducts[0] | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredProducts(sampleProducts);
      return;
    }
    
    const filtered = sampleProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleCategoryFilter = (category: string) => {
    if (category === 'All' || !category) {
      setFilteredProducts(sampleProducts);
      return;
    }
    
    const filtered = sampleProducts.filter(product => product.category === category);
    setFilteredProducts(filtered);
  };

  const handlePriceFilter = (range: [number, number]) => {
    const filtered = sampleProducts.filter(product => 
      product.price >= range[0] && product.price <= range[1]
    );
    setFilteredProducts(filtered);
  };

  const handleClearFilters = () => {
    setFilteredProducts(sampleProducts);
  };

  const handleQuickView = (product: typeof sampleProducts[0]) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
    setQuickViewProduct(null);
  };

  return (
    <>
      {showFilters && (
        <ProductFilters
          onSearch={handleSearch}
          onCategoryFilter={handleCategoryFilter}
          onPriceFilter={handlePriceFilter}
          onClearFilters={handleClearFilters}
        />
      )}
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-lg text-gray-600">{description}</p>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  onQuickView={handleQuickView}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <ProductQuickView
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={closeQuickView}
      />
    </>
  );
};

export default ProductGrid;
