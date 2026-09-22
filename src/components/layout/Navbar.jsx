import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ cartCount }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold tracking-tight text-gray-900 hover:opacity-90 transition-opacity">
            PawShop
          </Link>

          <div className="flex items-center gap-7">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/')
                  ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Home
            </Link>

            <Link
              to="/cart"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/cart')
                  ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Cart
            </Link>

            <Link
              to="/checkout"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/checkout')
                  ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Checkout
            </Link>

            <Link
              to="/cart"
              className="relative flex items-center text-gray-900 hover:text-black transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                />
              </svg>
              
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold rounded-full h-4.5 w-4.5 min-w-[18px] flex items-center justify-center px-1">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

Navbar.defaultProps = {
  cartCount: 0,
};

export default Navbar;
