import { useState } from 'react';
import PropTypes from 'prop-types';


function CheckoutForm({ onSubmit, isDisabled }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'Cash on Delivery',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address (e.g., name@example.com).';
    }

    const phoneRegex = /^09\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid PH phone number (09XXXXXXXXX, 11 digits).';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Delivery address is required.';
    } else if (formData.address.trim().length < 10) {
      newErrors.address = 'Address must be at least 10 characters long.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      <div>
        <label htmlFor="fullName" className="block text-xs font-medium text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          minLength={2}
          placeholder="Juan Dela Cruz"
          className={`w-full px-3 py-2 rounded-lg border ${
            errors.fullName
              ? 'border-red-500 focus:ring-red-500/20'
              : 'border-gray-200 focus:border-black focus:ring-black/10'
          } bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 transition-all duration-200`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="juan@example.com"
          className={`w-full px-3 py-2 rounded-lg border ${
            errors.email
              ? 'border-red-500 focus:ring-red-500/20'
              : 'border-gray-200 focus:border-black focus:ring-black/10'
          } bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 transition-all duration-200`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="09[0-9]{9}"
          placeholder="09171234567"
          className={`w-full px-3 py-2 rounded-lg border ${
            errors.phone
              ? 'border-red-500 focus:ring-red-500/20'
              : 'border-gray-200 focus:border-black focus:ring-black/10'
          } bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 transition-all duration-200`}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="address" className="block text-xs font-medium text-gray-700 mb-1">
          Delivery Address <span className="text-red-500">*</span>
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          minLength={10}
          rows={2}
          placeholder="123 Main Street, Barangay, City, Province"
          className={`w-full px-3 py-2 rounded-lg border ${
            errors.address
              ? 'border-red-500 focus:ring-red-500/20'
              : 'border-gray-200 focus:border-black focus:ring-black/10'
          } bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 transition-all duration-200 resize-none`}
        />
        {errors.address && (
          <p className="text-red-500 text-xs mt-1">{errors.address}</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Payment Method
        </label>
        <div className="flex items-center justify-between px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm">
          <span className="text-gray-900 font-medium text-xs sm:text-sm">Cash on Delivery</span>
          <span className="text-[11px] text-gray-400">(Only available option)</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={isDisabled}
        className={`w-full py-2.5 rounded-lg font-semibold text-white text-sm transition-all duration-200 ${
          isDisabled
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-black hover:bg-gray-800 shadow-sm'
        }`}
      >
        {isDisabled ? 'Cart is Empty' : 'Place Order'}
      </button>
    </form>
  );
}

CheckoutForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

CheckoutForm.defaultProps = {
  isDisabled: false,
};

export default CheckoutForm;
