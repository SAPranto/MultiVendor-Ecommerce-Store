import React from 'react'
import ImageCard from './short/ImageCard'

const images = [
  { src: '/Bata.png' },
  { src: '/toyota.png' },
];

const ImageSlider = () => {
  const imageCards = Array.from({ length: 3 }).flatMap(() =>
    images.map((image, index) => (
      <ImageCard key={index} src={image.src} />
    ))
  );

  return (
    <div className='container mx-auto gap-3 my-4 sm:flex grid grid-cols-3'>
      {imageCards}
    </div>
  )
}

export default ImageSlider
