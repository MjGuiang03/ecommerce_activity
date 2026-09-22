import PropTypes from 'prop-types';
import { getPetTypes } from '../../data/products';

function CategoryFilter({
  searchQuery,
  onSearchChange,
  selectedPetType,
  onPetTypeChange,
}) {
  const petTypes = getPetTypes();

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all duration-200"
        />
      </div>

      <div className="flex gap-2">
        {petTypes.map((type) => (
          <button
            key={type}
            onClick={() => onPetTypeChange(type)}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedPetType === type
                ? 'bg-black text-white shadow-sm'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-400 hover:text-black'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}

CategoryFilter.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  selectedPetType: PropTypes.string.isRequired,
  onPetTypeChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
