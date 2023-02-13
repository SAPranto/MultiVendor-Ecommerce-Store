import React from 'react'
import ImageCard from './short/ImageCard'

const ImageSlider = () => {
  return (
    <div className='container mx-auto sm:flex gap-3 my-4 grid grid-cols-3'>
    <ImageCard src='/Bata.png'/>
    <ImageCard src='/toyota.png'/>
    <ImageCard src='/Bata.png'/>
    <ImageCard src='/toyota.png'/>
    <ImageCard src='/Bata.png'/>
    <ImageCard src='/toyota.png'/>
    </div>
  )
}

export default ImageSlider