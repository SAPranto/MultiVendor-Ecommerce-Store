import React from 'react'
import SellCard from './short/SellCard'

const SellRow = () => {
  const products = Array(4).fill({
    src: '/baby.jpg',
    title: 'Product1',
    price: '5350',
    rating: '3',
  })

  return (
    <div className='container mx-auto flex flex-wrap'>
      {products.map((product, index) => (
        <SellCard key={index} src={product.src} title={product.title} price={product.price} rating={product.rating} />
      ))}
    </div>
  )
}

export default SellRow
