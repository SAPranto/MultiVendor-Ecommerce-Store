import React from 'react'
import Category from './short/Category'
import ProductCard from './short/ProductCard'

const ManBanner = () => {
  return (
    <>
      <div className='container mx-auto flex justify-between my-2'>
      <Category />
      <ProductCard/>
      </div>
      
    </>
  )
}

export default ManBanner