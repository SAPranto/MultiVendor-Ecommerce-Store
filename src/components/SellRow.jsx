import React from 'react';
import SellCard from './short/SellCard';

const SellRow = () => {
  const sellCards = Array.from({ length: 4 }).flatMap(() =>
    [
      { src: '/product.webp', title: 'Product 1', price: '1000', rating: '4.5' },

    ].map((card, index) => (
      <SellCard
        key={index}
        src={card.src}
        title={card.title}
        price={card.price}
        rating={card.rating}
      />
    ))
  );

  return (
    <div className="container mx-auto flex flex-wrap">
      {sellCards}
    </div>
  );
};

export default SellRow;
