import React from 'react'

const GroupButtons = () => {
  return (
    <div className='flex'>
    <button className='border px-2 pl-4 py-1 bg-green-700 shadow border-green-700 -mt-1 rounded-l-lg pr-6 importer -mr-8'>Importer</button>
    <button className='border px-6 py-[5px] bg-red-700 shadow border-green-700 -mt-1 border-b-9 vendor'>Vendor</button> 
    <button className='border px-2 pr-4 py-1 bg-green-700 shadow border-green-700 -mt-1 rounded-r-lg pl-6 merchant -ml-7'>Merchant</button>
  </div>
  )
}

export default GroupButtons