import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProductCard({ product, onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart(product, 1);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 overflow-hidden flex flex-col">
      <Link to={`/product/${product.id}`} className="bg-slate-50 border-b border-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <Link
          to={`/product/${product.id}`}
          className="text-base font-semibold text-gray-900 hover:text-black transition-colors duration-200 line-clamp-1"
        >
          {product.name}
        </Link>

        <p className="text-sm text-gray-500 mt-1.5 flex-1 line-clamp-2">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
          <span className="text-lg font-bold text-gray-900">
            ₱{product.price.toLocaleString()}
          </span>

          <button
            onClick={handleAddToCart}
            className="bg-black hover:bg-gray-800 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;
