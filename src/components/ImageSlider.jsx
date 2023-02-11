import React from 'react'
import ImageCard from './short/ImageCard'

const ImageSlider = () => {
  return (
    <div className='container mx-auto flex gap-3 my-4'>
    <ImageCard src='/Bata.png'/>
    <ImageCard src='/toyota.png'/>
    <ImageCard src='/Bata.png'/>
    <ImageCard src='/toyota.png'/>
    <ImageCard src='/Bata.png'/>
    <ImageCard src='/toyota.png'/>
    <ImageCard src='/Bata.png'/>
    </div>
  )
}

export default ImageSlider