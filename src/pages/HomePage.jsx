import { useState } from 'react';
import PropTypes from 'prop-types';
import CategoryFilter from '../components/product/CategoryFilter';
import ProductGrid from '../components/product/ProductGrid';

const PRODUCTS_PER_PAGE = 4;

function HomePage({ products, onAddToCart }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPetType, setSelectedPetType] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesPetType =
      selectedPetType === 'All' ||
      product.pet === selectedPetType.toLowerCase();

    return matchesSearch && matchesPetType;
  });

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePetTypeChange = (type) => {
    setSelectedPetType(type);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to PawShop
        </h1>
        <p className="text-gray-500 mt-2">
          Everything your furry friend needs, all in one place.
        </p>
      </div>

      <CategoryFilter
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        selectedPetType={selectedPetType}
        onPetTypeChange={handlePetTypeChange}
      />

      <ProductGrid products={paginatedProducts} onAddToCart={onAddToCart} />

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              currentPage === 1
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            ← Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-9 h-9 rounded-lg text-sm font-medium transition-all duration-200 ${
                currentPage === page
                  ? 'bg-black text-white shadow-sm'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              currentPage === totalPages
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Next →
          </button>
        </div>
      )}

      <p className="text-center text-sm text-gray-500 mt-4">
        Showing {paginatedProducts.length} of {filteredProducts.length} products
      </p>
    </div>
  );
}

HomePage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      pet: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default HomePage;
