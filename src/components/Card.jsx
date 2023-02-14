import React from 'react'
import CommonCard from './short/CommonCard'

const Card = () => {
  return (
    <div className='sm:flex grid grid-cols-2 mx-auto container gap-2'>
      <CommonCard imgSrc="/product.webp" productName="Product 1" price="520"/>
      <CommonCard imgSrc="/product.webp" productName="Product 1" price="520"/>
      <CommonCard imgSrc="/product.webp" productName="Product 1" price="520"/>
      <CommonCard imgSrc="/product.webp" productName="Product 1" price="520"/>
      <CommonCard imgSrc="/product.webp" productName="Product 1" price="520"/>
      <CommonCard imgSrc="/product.webp" productName="Product 1" price="520"/>
    </div>
  )
}

export default Card