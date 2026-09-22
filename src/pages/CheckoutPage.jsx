import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import CheckoutForm from '../components/checkout/CheckoutForm';

function CheckoutPage({ cart, cartTotal, onClearCart }) {
  const navigate = useNavigate();

  const handleFormSubmit = (formData) => {
    onClearCart();
    navigate('/order-confirmation');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>

      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold text-gray-900">
              Order Summary
            </h2>
            <span className="text-xs text-gray-500 font-medium">
              {cart.reduce((sum, item) => sum + item.quantity, 0)} {cart.reduce((sum, item) => sum + item.quantity, 0) === 1 ? 'item' : 'items'}
            </span>
          </div>

          {cart.length === 0 ? (
            <p className="text-gray-500 text-sm">Your cart is empty.</p>
          ) : (
            <>
              <div className="divide-y divide-gray-100 max-h-56 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div
                    key={item.productId}
                    className="flex justify-between items-center py-2.5 text-sm"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 rounded-lg border border-gray-100 object-cover flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="text-gray-900 truncate font-medium text-sm">{item.name}</p>
                        <p className="text-gray-400 text-xs">
                          Qty: {item.quantity} × ₱{item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <span className="text-gray-900 font-semibold ml-4 text-sm">
                      ₱{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 mt-3 pt-3 flex justify-between items-center">
                <span className="text-gray-700 font-medium text-sm">Total</span>
                <span className="text-xl font-bold text-gray-900">
                  ₱{cartTotal.toLocaleString()}
                </span>
              </div>
            </>
          )}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <h2 className="text-base font-semibold text-gray-900 mb-4">
            Delivery Information
          </h2>
          <CheckoutForm
            onSubmit={handleFormSubmit}
            isDisabled={cart.length === 0}
          />
        </div>
      </div>
    </div>
  );
}

CheckoutPage.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  cartTotal: PropTypes.number.isRequired,
  onClearCart: PropTypes.func.isRequired,
};

export default CheckoutPage;
