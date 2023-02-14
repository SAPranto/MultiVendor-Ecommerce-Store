import React from 'react'
import Category from './short/Category'
import ProductCard from './short/ProductCard'


const ManBanner = () => {
  return (
    <div className=''>
      <div className='container mx-auto flex my-2'>
        <Category />
        <div className='flex gap-2 w-full justify-between'>
      <ProductCard src="/product.webp" title="Blue t-shirt" discountPrice="520" price="450"/>
      <ProductCard src="/product.webp" title="Blue t-shirt" discountPrice="520" price="450"/>
      <ProductCard src="/product.webp" title="Blue t-shirt" discountPrice="520" price="450"/>
      <ProductCard src="/product.webp" title="Blue t-shirt" discountPrice="520" price="450"/>
        </div>
      </div> 
    </div>
  )
}

export default ManBanner