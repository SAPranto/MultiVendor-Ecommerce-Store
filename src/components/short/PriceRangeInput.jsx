import React, { useState } from 'react';

const PriceRangeInput = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  return (
    <div className="flex justify-between max-[767.98px]:flex-col max-[767.98px]:gap-4">
      <input
        type="number"
        className="border border-gray-400 rounded p-2 w-32 max-[767.98px]:w-28"
        placeholder="Min"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        className="border border-gray-400 rounded p-2 w-32 max-[767.98px]:w-28"
        placeholder="Max"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
    </div>
  );
};

export default PriceRangeInput;
