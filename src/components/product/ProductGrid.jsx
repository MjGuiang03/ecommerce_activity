import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

function ProductGrid({ products, onAddToCart }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 mt-4 text-lg">No products found.</p>
        <p className="text-gray-400 text-sm mt-1">
          Try adjusting your search or filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductGrid;
