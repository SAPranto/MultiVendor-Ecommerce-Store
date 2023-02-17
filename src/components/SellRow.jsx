import React from 'react';
import SellCard from './short/SellCard';

const SellRow = () => {
  const sellCards = Array.from({ length: 1 }).flatMap(() =>
    [
      { src: '/headphone.webp', title: 'Headphone', price: '6700', rating: '4.9' },
      { src: '/mouse2.webp', title: 'Mouse', price: '10500', rating: '4.3' },
      { src: '/camera.webp', title: 'Camera', price: '51000', rating: '4.7' },
      { src: '/laptop.webp', title: 'Laptop', price: '67500', rating: '4.5' },

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
