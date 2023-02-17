import React from 'react'
import Category from './short/Category'
import ProductCard from './short/ProductCard'


const ManBanner = () => {
  return (
    <div className=''>
      <div className='container mx-auto flex my-2'>
        <Category />
        <div className='sm:flex grid grid-cols-2 gap-2 w-full justify-between'>
      <ProductCard src="/headphone3.webp" title="Headphones" discountPrice="520" price="450"/>
      <ProductCard src="/headphone2.webp" title="Dareu Headphone" discountPrice="520" price="450"/>
      <ProductCard src="/mouse.webp" title="Mouse" discountPrice="520" price="450"/>
      <ProductCard src="/camera.webp" title="DSLR CANON" discountPrice="520" price="450"/>
        </div>
      </div> 
    </div>
  )
}

export default ManBanner