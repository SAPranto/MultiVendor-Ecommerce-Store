import React from 'react'
import ProductNav from './short/ProductNav'
import Carousel from "./short/Carousel"
import Grid from './short/Grid'


const Banner = () => {
  return (
    <div className='container mx-auto flex my-1'>
        <ProductNav />
        <div className='flex flex-col mt-2'>
        <Carousel />
        <Grid/>
        </div>

    </div>
  )
}

export default Banner