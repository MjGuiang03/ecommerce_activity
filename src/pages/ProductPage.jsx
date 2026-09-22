import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProductPage({ products, onAddToCart }) {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState(false);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-900 mt-4">Product Not Found</h2>
        <p className="text-gray-500 mt-2">The product you are looking for does not exist.</p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-black hover:bg-gray-800 text-white font-medium rounded-lg transition-colors duration-200"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2000);
  };

  return (
    <div>
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-gray-500 hover:text-black transition-colors duration-200 mb-6 text-sm"
      >
        ← Back to Shop
      </Link>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-slate-50">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 md:h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-8 flex flex-col">
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md w-fit mb-3">
              {product.category}
            </span>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {product.name}
            </h1>

            <p className="text-3xl font-bold text-gray-900 mt-4">
              ₱{product.price.toLocaleString()}
            </p>

            <div className="flex items-center gap-2 mt-3">
              <span
                className={`w-2 h-2 rounded-full ${
                  product.stock > 0 ? 'bg-emerald-500' : 'bg-red-500'
                }`}
              />
              <span className="text-sm text-gray-500">
                {product.stock > 0
                  ? `${product.stock} in stock`
                  : 'Out of stock'}
              </span>
            </div>

            <p className="text-gray-600 mt-6 leading-relaxed flex-1 text-sm sm:text-base">
              {product.fullDescription}
            </p>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-200 rounded-lg bg-white">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3.5 py-2 text-gray-600 hover:text-black transition-colors"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 font-semibold text-gray-900 border-x border-gray-200 text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3.5 py-2 text-gray-600 hover:text-black transition-colors"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className={`flex-1 py-3 rounded-lg font-semibold text-white text-sm transition-all duration-200 ${
                    product.stock === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-black hover:bg-gray-800 shadow-sm'
                  }`}
                >
                  {addedMessage ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      fullDescription: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductPage;
