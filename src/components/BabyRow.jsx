import React from 'react'
import SellCard from './short/SellCard'

const SellRow = () => {
  return (
    <div className='container mx-auto flex flex-wrap'>
      <SellCard src="/baby.jpg" title="Product1" price="5350" rating="3" />
      <SellCard src="/baby.jpg" title="Product1" price="5350" rating="3" />
      <SellCard src="/baby.jpg" title="Product1" price="5350" rating="3" />
      <SellCard src="/baby.jpg" title="Product1" price="5350" rating="3" />
    </div>
  )
}

export default SellRow