import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CartSummary({ cartTotal, itemCount }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mt-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-gray-500 text-sm">
            {itemCount} {itemCount === 1 ? 'item' : 'items'} in cart
          </p>
          <p className="text-2xl font-bold text-gray-900">
            Total: <span className="text-gray-900">₱{cartTotal.toLocaleString()}</span>
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            to="/"
            className="px-5 py-2.5 rounded-lg border border-gray-200 text-gray-700 text-sm font-medium hover:border-black hover:text-black transition-all duration-200"
          >
            Continue Shopping
          </Link>
          <Link
            to="/checkout"
            className="px-5 py-2.5 rounded-lg bg-black hover:bg-gray-800 text-white text-sm font-medium transition-colors duration-200 shadow-sm"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

CartSummary.propTypes = {
  cartTotal: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
};

export default CartSummary;
