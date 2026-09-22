import { Link } from 'react-router-dom';

function OrderConfirmation() {
  return (
    <div className="text-center py-16">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 mb-6">
        <svg className="h-10 w-10 text-emerald-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-gray-900">
        Order Placed Successfully!
      </h1>

      <p className="text-gray-500 mt-4 max-w-md mx-auto">
        Thank you for your order! Your furry friend&apos;s goodies are on the way.
        Payment will be collected upon delivery (Cash on Delivery).
      </p>

      <div className="mt-2 text-sm text-gray-400">
        <p>Estimated delivery: 3–5 business days</p>
      </div>

      <Link
        to="/"
        className="inline-block mt-8 px-8 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-sm"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

export default OrderConfirmation;
