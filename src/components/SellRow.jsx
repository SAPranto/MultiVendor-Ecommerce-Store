import React from 'react'
import SellCard from './short/SellCard'

const SellRow = () => {
  return (
    <div className="container mx-auto flex flex-wrap">
      <SellCard src='/product.webp' title='Product 1' price='1000' rating='4.5' />
      <SellCard src='/product.webp' title='Product 2' price='1500' rating='4.0' />
      <SellCard src='/product.webp' title='Product 3' price='2000' rating='3.5' />
      <SellCard src='/product.webp' title='Product 4' price='3000' rating='5.0' />
    </div>
  )
}

export default SellRow